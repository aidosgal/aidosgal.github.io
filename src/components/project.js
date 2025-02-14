export default function Project() {
  return `
    <div class="mt-5">
      <a href="#" class="block text-2xl hover:text-red-400 duration-150">luungs</a>
      <div class="text-gray-400 mt-2">срок разработки: 1 месяц</div>
      <img class="mt-4 w-full object-cover rounded-xl" src="/public/assets/luungs.png" alt="jumystap" />
      <div class="flex flex-wrap mt-4 gap-2">
        ${['go', 'postgresql', 'react-native', 'linux', 'websocket', 'ai', 'openai']
          .map(tech => `<div class="py-1 px-3 rounded bg-[#181d24] text-gray-400 inline-block">${tech}</div>`)
          .join('')}
      </div>
    </div>
    <div class="mt-5">
      <a href="https://jumystap.kz/" class="block text-2xl hover:text-red-400 duration-150">jumystap</a>
      <div class="text-gray-400 mt-2">срок разработки: 2 недели</div>
      <img class="mt-4 w-full object-cover rounded-xl" src="/public/assets/jumystap.png" alt="jumystap" />
      <div class="flex flex-wrap mt-4 gap-2">
        ${['laravel', 'postgresql', 'php', 'linux', 'websocket', 'rest', 'react', 'inertia']
          .map(tech => `<div class="py-1 px-3 rounded bg-[#181d24] text-gray-400 inline-block">${tech}</div>`)
          .join('')}
      </div>
    </div>
  `
}
