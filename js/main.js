AOS.init();


var toggle = document.getElementById("navbar-toggler");
var toggle1 = document.getElementById("navbar-toggler1");
var toggle2 = document.getElementById("navbar-toggler2");

const whatsapp = document.getElementById("whatsapp");

whatsapp.innerHTML = `
<a class="z-[9999] shadow fixed bottom-6 right-6 lg:bottom-10 lg:right-10  bg-[#082b3f] w-12 h-12 rounded-full grid p-3 place-items-center text-[#ded0c5] "
        href="https://wa.me/+966530035500" target="_blank"><img src="assets/images/socialMedia/5305166_call_chat_mobile_whatsapp_whatsapp logo_icon.svg" alt=""></a>
`;


toggle.onclick = function () {
  Menu();
};

toggle1.onclick = function () {
  Menu();
};

toggle2.onclick = function () {
  Close();
};

function Menu() {
  let list = document.getElementById("navbar_list");
    list.classList.add("-left-[0px]");
    list.classList.remove("-left-[2080px]");
}

function Close() {
  let list = document.getElementById("navbar_list");
    list.classList.add("-left-[2080px]");
    list.classList.remove("-left-[0px]");
}


const header = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        header.classList.add('translate-y-[0px]');
        header.classList.remove('-translate-y-[500px]');

      } else {
        header.classList.remove('translate-y-[0px]');
        header.classList.add('-translate-y-[500px]');

      }
  });



  // var swiper = new Swiper(".mySwiper", {
  //   loop: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });

  var swiper = new Swiper(".progress-slide-carousel", {
    slidesPerView: 4.5,
    spaceBetween: 30,
    loop: true,
    fraction: true,
    autoplay: {
      
      delay: 2200,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".progress-slide-carousel .swiper-pagination",
      type: "progressbar",
    },
  });



  const swiper2 = new Swiper('.swiper-container1', {
    slidesPerView: 2.5,
    spaceBetween: 10,
    mousewheel: {
      forceToAxis: true,
    },
    // loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  const swiper3 = new Swiper('.swiper-container2', {
    slidesPerView: 1.5,
    spaceBetween: 10,
    mousewheel: {
      forceToAxis: true,
    },
    // loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });



  // script.js
document.addEventListener("DOMContentLoaded", () => {
  // Simulate an API request or any async operation
  setTimeout(() => {
      hideLoader();
  }, 3000); // Replace with your actual data loading logic and time

  function hideLoader() {
      const loader = document.getElementById("preloader");
      loader.classList.add("-translate-y-[2000px]");
  }
});


