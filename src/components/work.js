export default function Work() {
  return `
    <div class="mt-4">
      <a href="https://kmg-kumkol.kz" class="text-2xl block hover:text-red-400 duration-150">
        кмг-кумколь
      </a>
      <div class="text-gray-400 mt-2">go/php разработчик (апрель 2023 - октябрь 2024)</div>
      <p class="mt-2">
        в кмг-кумколь я работал в команде разработчиков, создавая микросервисы на go. 
        основной задачей было разработать высоконагруженные приложения, 
        где требовалась настройка обратного прокси для обеспечения стабильной и 
        высокоскоростной связи между клиентами и сервером.
      </p>
      <div class="flex flex-wrap mt-4 gap-2">
        ${['go', 'postgresql', 'php', 'linux', 'grpc', 'rest', 'kafka']
          .map(tech => `<div class="py-1 px-3 rounded bg-[#181d24] text-gray-400 inline-block">${tech}</div>`)
          .join('')}
      </div>
    </div>
  `;     
}
