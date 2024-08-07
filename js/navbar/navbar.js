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

const navbarTop = document.getElementById("navbarListTop")
const navbar = document.getElementById("navbarList")
const mobileNavbar = document.getElementById("mobileNavbarList")

navbarTop.innerHTML = `
  ${navList.map((item) => `
    <li class="text-[#d6e1e5] hover:text-[#d6e1e5] duration-200">
      <a href="${item.url}">${item.name}</a>
    </li>
  `).join('')}
`;

navbar.innerHTML = `
  ${navList.map((item) => `
    <li class="text-[#d6e1e5] hover:text-[#222] duration-200">
      <a href="${item.url}">${item.name}</a>
    </li>
  `).join('')}
`;

mobileNavbar.innerHTML = `
  ${navList.map((item) => `
    <li class=" text-[#d6e1e5] hover:text-[#222] duration-200"><a href="${item.url}">${item.name}</a></li>
  `).join('')}
`;
