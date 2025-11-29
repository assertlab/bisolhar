export function createTooltip(text) {
  return `
    <span class="group inline-flex items-center ml-1">
      <svg class="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75a.75.75 0 1 0 0 1.5h.008v.75a.75.75 0 0 1-.75.75H9a.75.75 0 0 0 .75.75v.75h-.008a.75.75 0 0 0 0 1.5h.008v-.75a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v.75a.75.75 0 0 0 0 1.5h-.75v-.75a.75.75 0 0 1-.75-.75H9a.75.75 0 0 0-.75.75v.75h.75Z" />
      </svg>
      <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs p-2 rounded w-64 z-50">
        ${text}
      </div>
    </span>
  `;
}
