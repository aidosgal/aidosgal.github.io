import Layout from "../layout/layout.js";

export default function () {
  const content = `
    <div class="mt-10">
      <div class="text-3xl">айдос галимжан</div>
      <div class="text-gray-400 mt-3">казахстан, астана</div>
      <div class="text-gray-400">backend разработчик</div>
      <p class="mt-2">
        меня зовут айдос. я являюсь backend разработчиком. 
        в основном пишу на Go, так же pet-проекты на C/C++. помимо backend разработки,
        увлекаюсь написанием IOT проектов. если я не пишу код, то скорее всего смотрю сериал или
        собираю пазлы.
      </p>
      

      <div class="mt-10 text-2xl"><span class="text-red-400">*</span> работа</div>
      <div class="mt-4">
        <a 
          href="https://kmg-kumkol.kz" 
          class="text-2xl block hover:text-red-400 duration-150"
          >
            кмг-кумколь
        </a>
        <div class="text-gray-400 mt-2">go/php разработчик (апрель 2023 - октябрь 2024)</div>
        <p class="mt-2">
          в кмг-кумколь я работал в команде разработчиков, создавая микросервисы на go. 
          основной задачей было разработать высоконагруженные приложения , 
          где требовалась настройка обратного прокси для обеспечения стабильной и 
          высокоскоростной связи между клиентами и сервером.
        </p>
        <div class="flex flex-wrap mt-4 gap-2">
          <div class="py-1 px-3 rounded bg-[#181d24] text-gray-400 inline-block">
              go
          </div>
          <div class="py-1 px-3 rounded bg-[#181d24] text-gray-400 inline-block">
              postgresql
          </div>
          <div class="py-1 px-3 rounded bg-[#181d24] text-gray-400 inline-block">
              php
          </div>
          <div class="py-1 px-3 rounded bg-[#181d24] text-gray-400 inline-block">
              linux
          </div>
          <div class="py-1 px-3 rounded bg-[#181d24] text-gray-400 inline-block">
              grpc
          </div>
          <div class="py-1 px-3 rounded bg-[#181d24] text-gray-400 inline-block">
              rest
          </div>
          <div class="py-1 px-3 rounded bg-[#181d24] text-gray-400 inline-block">
              kafka
          </div>
        </div>
      </div>
    </div>
  `;
  return Layout(content);
}

