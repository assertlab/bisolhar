// Formatters - Utility functions for data formatting

export const formatters = {
    // Format large numbers with dynamic locale
    formatNumber(value, locale = 'pt-BR') {
        if (value === null || value === undefined || value === 'N/A') {
            return value;
        }

        const num = typeof value === 'string' ? parseFloat(value) : value;

        if (isNaN(num)) {
            return value;
        }

        return new Intl.NumberFormat(locale).format(num);
    }
};
