navList = [
    {
        name:"الرئيسية",
        url:"index.html",
    },
    {
        name:"نبذة عنا",
        url:"about.html",
    },
    {
        name:"الخدمات",
        url:"services.html",
    },
    {
        name:"اتصل بنا",
        url:"contact.html",
    },
];

const phone = +966530035500;
const email = "info@emmarbod.com";


const navbarHeader = document.getElementById("header");

navbarHeader.innerHTML = `
<nav
      class="flex justify-center border-b border-[#08466f] bg-[#082b3f55] absolute w-full h-20 lg:h-auto top-0 z-[99999]">
      <span id="navbar-toggler"
        class="z-[9999] lg:hidden material-symbols-outlined text-[#d6e1e5] text-3xl lg:text-4xl absolute top-5 right-3">
        menu
      </span>
      <div class="z-[9] w-40 absolute flex justify-center my-4">
        <a href="index.html" class="w-12  lg:-translate-x-[10px]">
          <img width="100%" height="100%" src="assets/images/logo/emaar_logo-02.svg" alt="logo">
        </a>
      </div>
      <div class="flex justify-between items-center py-4 px-20 z-[999] w-full">

        <ul class="hidden lg:flex items-center gap-3 text-xl">

          <li><a href="mailto:${email}"
              class="border-2 border-[#d6e1e5] hover:bg-[#d6e1e5] duration-200 text-[#d6e1e5] hover:text-[#082b3f] p-3  items-end flex"><span
                class=" material-symbols-outlined">
                mail
              </span></a></li>
          <li><a href="tel:${phone}"
              class="border-2 border-[#d6e1e5] hover:bg-[#d6e1e5] duration-200 text-[#d6e1e5] hover:text-[#082b3f] p-3  items-end flex"><span
                class=" material-symbols-outlined">
                call
              </span></a></li>
        </ul>

        <ul id="navbarListTop" class="hidden lg:flex items-center gap-6">
          ${navList.map((item) => `
    <li class="text-[#d6e1e5] hover:text-[#d6e1e5] duration-200">
      <a href="${item.url}">${item.name}</a>
    </li>
  `).join('')}

        </ul>
      </div>
    </nav>


    <nav id="navbar"
      class=" -translate-y-[500px] flex justify-center fixed w-full top-0 duration-500 bg-[#08466f] shadow-lg z-[99999]">
      <span id="navbar-toggler1"
        class="z-[9999] lg:hidden material-symbols-outlined text-[#d6e1e5] text-3xl lg:text-4xl absolute top-5 right-3">
        menu
      </span>

      <div class="flex justify-between items-center py-3 px-20 z-[999] w-full">

        <ul class="hidden lg:flex items-center gap-3 text-xl">

          <li><a href="mailto:${email}"
              class="border-2 border-[#d6e1e5] hover:bg-[#d6e1e5] duration-200 text-[#d6e1e5] hover:text-[#082b3f] p-3  items-end flex"><span
                class=" material-symbols-outlined">
                mail
              </span></a></li>
          <li><a href="tel:${phone}"
              class="border-2 border-[#d6e1e5] hover:bg-[#d6e1e5] duration-200 text-[#d6e1e5] hover:text-[#082b3f] p-3  items-end flex"><span
                class=" material-symbols-outlined">
                call
              </span></a></li>
        </ul>
        <a href="index.html" class="w-12  -translate-x-[85px] lg:-translate-x-[90px]">
          <img width="100%" height="100%" src="assets/images/logo/emaar_logo-02.svg" alt="logo">
        </a>
        <ul id="navbarList" class="hidden lg:flex items-center gap-6">
           ${navList.map((item) => `
    <li class="text-[#d6e1e5] hover:text-[#222] duration-200">
      <a href="${item.url}">${item.name}</a>
    </li>
  `).join('')}
        </ul>

      </div>
    </nav>

    <nav id="navbar_list"
      class="-left-[2080px] duration-500 fixed  z-[99999]  grid w-full bg-gradient-to-b from-[#082b3f] to-[#08466f11] bg-[#082b3f] py-12 gap-6">
      <span id="navbar-toggler2" class="material-symbols-outlined text-[#d6e1e5] text-4xl absolute top-2 right-2">
        close
      </span>
      <a href="index.html" class="">
        <img class="px-24" width"100%" height="100%" src="assets/images/logo/emaar_logo-02.svg" alt="logo">
      </a>
      <ul id="mobileNavbarList" class="grid lg:hidden items-center gap-6 text-center">
        ${navList.map((item) => `
    <li class=" text-[#d6e1e5] hover:text-[#222] duration-200"><a href="${item.url}">${item.name}</a></li>
  `).join('')}
      </ul>

      <ul class="flex  justify-center gap-3 text-xl">
        <li><a href="mailto:${email}"
            class="border-2 border-[#d6e1e5] hover:bg-[#d6e1e5] duration-200 text-[#d6e1e5] hover:text-[#082b3f] p-3  items-end flex"><span
              class=" material-symbols-outlined">
              mail
            </span></a></li>
        <li><a href="tel:${phone}"
            class="border-2 border-[#d6e1e5] hover:bg-[#d6e1e5] duration-200 text-[#d6e1e5] hover:text-[#082b3f] p-3  items-end flex"><span
              class=" material-symbols-outlined">
              call
            </span></a></li>
      </ul>
    </nav>

`;



// const navbarTop = document.getElementById("navbarListTop")
// const navbar = document.getElementById("navbarList")
// const mobileNavbar = document.getElementById("mobileNavbarList")

// navbarTop.innerHTML = `
//   ${navList.map((item) => `
//     <li class="text-[#d6e1e5] hover:text-[#d6e1e5] duration-200">
//       <a href="${item.url}">${item.name}</a>
//     </li>
//   `).join('')}
// `;

// navbar.innerHTML = `
//   ${navList.map((item) => `
//     <li class="text-[#d6e1e5] hover:text-[#222] duration-200">
//       <a href="${item.url}">${item.name}</a>
//     </li>
//   `).join('')}
// `;

// mobileNavbar.innerHTML = `
//   ${navList.map((item) => `
//     <li class=" text-[#d6e1e5] hover:text-[#222] duration-200"><a href="${item.url}">${item.name}</a></li>
//   `).join('')}
// `;

