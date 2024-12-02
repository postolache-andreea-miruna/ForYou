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
    animStart();
  };
  
})();

