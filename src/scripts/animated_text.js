import Work from './../components/work.js';
import Project from './../components/project.js';

export default function AnimatedText() {
  const targetText = "айдос галимжан";
  const possibleChars = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  let currentText = "";
  let currentIndex = 0;
  let isRandomizing = false;

  var work_exp = Work();
  var projects = Project();

  const getTemplate = (text) => `
    <div class="mt-10">
      <div class="text-3xl">${text}</div>
      <div class="text-gray-400 mt-3">казахстан, астана</div>
      <div class="text-gray-400">backend разработчик</div>
      <p class="mt-2">
        меня зовут айдос. я являюсь backend разработчиком. 
        в основном пишу на Go, так же pet-проекты на C/C++. помимо backend разработки,
        увлекаюсь написанием IOT проектов. если я не пишу код, то скорее всего смотрю сериал или
        собираю пазлы.
      </p>
      <div class="mt-10 text-2xl"><span class="text-red-400">*</span> работа</div>
      ${work_exp}
      <div class="mt-10 text-2xl"><span class="text-red-400">*</span> проекты</div>
      ${projects}
      <div class="mt-10 text-2xl"><span class="text-red-400">*</span> ссылки</div>
      <div class="flex gap-10 mb-10 mt-5">
        <a href="https://www.instagram.com/bizzarchik/" class="text-gray-400 hover:text-red-400 duration-150">instagram</a>
        <a href="https://github.com/aidosgal" class="text-gray-400 hover:text-red-400 duration-150">github</a>
        <a href="https://wa.me/77053081659" class="text-gray-400 hover:text-red-400 duration-150">whatsapp</a>
        <a href="https://t.me/bizzarchik" class="text-gray-400 hover:text-red-400 duration-150">telegram</a>
      </div>
    </div>
  `;

  function animateText(element) {
    if (currentIndex >= targetText.length || !element || isRandomizing) return;

    isRandomizing = true;
    let randomizations = 0;
    const maxRandomizations = 5;

    const randomizeInterval = setInterval(() => {
      currentText = currentText.slice(0, currentIndex) + 
        possibleChars[Math.floor(Math.random() * possibleChars.length)];
      element.innerHTML = getTemplate(currentText);

      if (++randomizations >= maxRandomizations) {
        clearInterval(randomizeInterval);
        currentText = currentText.slice(0, currentIndex) + targetText[currentIndex];
        element.innerHTML = getTemplate(currentText);
        currentIndex++;
        isRandomizing = false;
        setTimeout(() => animateText(element), 10);
      }
    }, 50);
  }

  return {
    initialHTML: getTemplate(currentText),
    startAnimation: (element) => setTimeout(() => animateText(element), 200)
  };
}
