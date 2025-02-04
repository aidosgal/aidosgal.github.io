export default function Layout(content) {
    return `
        <div class="md:w-[700px] w-full mx-auto p-5 ibm-regular text-white">
          <div class="flex gap-3">
              <a href="/" class="block hover:text-red-400 duration-150">[г] главная</a>
              <a href="/about" class="block hover:text-red-400 duration-150">[п] проекты</a>
              <a href="/about" class="block hover:text-red-400 duration-150">[б] блог</a>
          </div>
          <div>${content}</div>
        </div>
    `;
}

