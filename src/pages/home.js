import Layout from "../layout/layout.js";
import AnimatedText from "../scripts/animated_text.js";

export default function() {
  const animatedText = AnimatedText();
  const content = `
      ${animatedText.initialHTML}
    `;

  const rendered = Layout(content);

  setTimeout(() => {
    const container = document.querySelector('.mt-10');
    if (container) {
      animatedText.startAnimation(container);
    }
  }, 0);

  return rendered;
}
