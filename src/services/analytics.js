import ReactGA from 'react-ga4';
import { supabase } from './supabase.js';

const analytics = {
  initialize() {
    ReactGA.initialize(import.meta.env.VITE_GA_ID);
  },

  trackPageView(path) {
    ReactGA.send({ hitType: "pageview", page: path });
  },

  trackSearch(data) {
    ReactGA.event({ category: "Search", action: "Analyze Repo", label: data.name });

    // Send to Supabase if available (fire and forget to not block UI)
    if (import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY) {
      // TODO: Implementar Retry Logic (v3.0) - Adicionar tentativa de reenvio em caso de falha temporária
      (async () => {
        try {
          const rpcPayload = {
            p_repo_name: data.name,
            p_owner_type: data.ownerType,
            p_language: data.language || null,
            p_stars: data.stars || 0,
            p_forks: data.forks || 0,
            p_issues: data.issues || 0,
            p_subscribers: data.subscribers || 0,
            p_health_score: data.healthScore || 0,
            p_last_push_at: data.lastPush || null
          };
          const { error } = await supabase.rpc('registrar_busca', rpcPayload);
          if (error) {
            throw error;
          }
        } catch (error) {
          console.warn('[Analytics] Failed to track search:', error.message);
        }
      })();
    }
  },

  trackExport() {
    ReactGA.event({ category: "Engagement", action: "Download PDF" });
  },
};

export default analytics;
