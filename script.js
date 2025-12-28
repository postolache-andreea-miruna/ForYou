"use strict";
(function () {
  window.onload = () => {
    const obj = document.querySelector("#gallery");
    const obj2 = document.querySelector("#gallery2");
    const obj3 = document.querySelector("#gallery3");
    const time = 10000;
    function animStart() {
      if (obj.classList.contains("active") == false || obj2.classList.contains("active") == false || obj3.classList.contains("active") == false) {
        obj.classList.add("active");
         obj2.classList.add("active");
         obj3.classList.add("active");
        setTimeout(() => {
          animEnd();
        }, time);
      }
    }
    function animEnd() {
      obj.classList.remove("active");
      obj.offsetWidth;
      obj2.classList.remove("active");
      obj2.offsetWidth;
      obj3.classList.remove("active");
      obj3.offsetWidth;
    }

    
        
    function showHearts() {
      const heartSpan = document.createElement("span");
      heartSpan.classList.add("heart-span");
      heartSpan.innerHTML = "😘";

     
      heartSpan.style.left = `${Math.random() * 100}vw`;
      heartSpan.style.top = `${Math.random() * 100}vh`;

      document.body.appendChild(heartSpan);

  
      setTimeout(() => {
        heartSpan.remove();
      }, 2000); 
    }
  
    document.querySelectorAll('.image-item').forEach(item => {
      item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        window.location.href = url;
      });
    });

    document.querySelector(".button").addEventListener("click", () => {
      for (let i = 0; i < 10; i++) { 
        showHearts();
      }
    });
    document.addEventListener("scroll", function () {

      animStart();
    });
    window.addEventListener("resize", animStart);
        const yearSelect = document.getElementById("yearSelect");

    const sections = [
      "welcome",
      "music",
      "you-and-me",
      "you"
    ];

    const links = {
      welcome: document.getElementById("welcomeLink"),
      music: document.getElementById("musicLink"),
      youAndMe: document.getElementById("youAndMeLink"),
      you: document.getElementById("youLink")
    };

    function applyYear(year) {
      document.querySelectorAll(".section").forEach(sec => {
  sec.classList.remove("active");
});
      sections.forEach(id => {
        const el2024 = document.getElementById(id);
        const el2025 = document.getElementById(id + "2");

        if (!el2024 || !el2025) return;

        if (year === "2025") {
          el2025.classList.add("active");
          el2024.classList.remove("active");
        } else {
          el2024.classList.add("active");
          el2025.classList.remove("active");
        }
      });

      if (year === "2025") {
        links.welcome.href = "#welcome2";
        links.music.href = "#music2";
        links.youAndMe.href = "#you-and-me2";
        links.you.href = "#you2";
        location.hash = "#welcome2";
      } else {
        links.welcome.href = "#welcome";
        links.music.href = "#music";
        links.youAndMe.href = "#you-and-me";
        links.you.href = "#you";
        location.hash = "#welcome";
      }
    }

    // DEFAULT 2025
    yearSelect.value = "2025";
    applyYear("2025");

    yearSelect.addEventListener("change", e => {
      applyYear(e.target.value);
    });

    animStart();
  };
  
})();

