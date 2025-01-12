let languages = {
  english: {
    logo: "Translate",
    lang1: "English",
    lang2: "Arabic",
    lang3: "Spanish",
    title: "Welcome to My Website",
    Paragraph1:
      "This is a simple page with English, Arabic, and Spanish language options.",
    Paragraph2: "Feel free to explore and enjoy the content.",
  },
  arabic: {
    logo: "ترجمة",
    lang1: "الانجليزية",
    lang2: "العربية",
    lang3: "الإسبانية",
    title: "مرحبًا بك في موقعي",
    Paragraph1:
      "هذه صفحة بسيطة تحتوي على خيارات للغة الإنجليزية، العربية، والإسبانية.",
    Paragraph2: "لا تتردد في الاستكشاف والاستمتاع بالمحتوى.",
  },
  spanish: {
    logo: "Traducir",
    lang1: "Inglés",
    lang2: "Árabe",
    lang3: "Español",
    title: "Bienvenido a mi sitio web",
    Paragraph1:
      "Esta es una página simple con opciones de idioma en inglés, árabe y español.",
    Paragraph2: "No dudes en explorar y disfrutar del contenido.",
  },
};

function navContent(navTitle, navBtn1, navBtn2, navBtn3) {
  return `<h1>${navTitle}</h1>
      <div>
        <button class="arabicButton">${navBtn1}</button>
        <button class="englishButton">${navBtn2}</button>
        <button class="spanishButton">${navBtn3}</button>
      </div>`;
}

function heroContent(heroTitle, p1, p2) {
  return `<h1>${heroTitle}</h1>
  <p>${p1}</p>
  <p>${p2}</p>`;
}

function updateLanguage(language) {
  var nav = document.querySelector("nav");
  var content = document.querySelector(".content");

  nav.innerHTML = navContent(
    languages[language].logo,
    languages[language].lang2,
    languages[language].lang1,
    languages[language].lang3
  );
  content.innerHTML = heroContent(
    languages[language].title,
    languages[language].Paragraph1,
    languages[language].Paragraph2
  );

  document.querySelector(".arabicButton").addEventListener("click", () => {
    updateLanguage("arabic");
    content.style.textAlign = "end";
    nav.style.flexDirection = "row-reverse";
  });
  document.querySelector(".englishButton").addEventListener("click", () => {
    updateLanguage("english");
  });

  document.querySelector(".spanishButton").addEventListener("click", () => {
    updateLanguage("spanish");
  });

  if (language == "arabic") {
    content.style.textAlign = "end";
    nav.style.flexDirection = "row-reverse";
  } else {
    content.style.textAlign = "start";
    nav.style.flexDirection = "row";
  }

  localStorage.setItem("language", language);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "english";
  updateLanguage(savedLanguage);
});
