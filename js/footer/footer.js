social_media = [
  {
    icon: "instagram-01.svg",
    url: "https://www.instagram.com/emaarbod/",
  },
  {
    icon: "x.svg",
    url: "https://www.x.com/emaarbod",
  },
];

const footer = document.querySelector("footer");

footer.innerHTML = `
<div class="bg-[#082b3f] ">
      <div class="flex lg:grid-cols-12 bg-gradient-to-b from-[#082b3f] to-[#08466f22] py-8 lg:py-0 items-center gap-8">
        <div class=" h-40 overflow-hidden hidden lg:block relative flex justify-center items-start ">
          <img class=""
            src="https://images.unsplash.com/photo-1496851473196-e26508c21494?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="">
        </div>
        <div class="px-16 pt-4 w-full flex flex-col justify-center items-center gap-6">
          <div class=" gap-6 flex flex-col lg:flex-row justify-between w-full">

            <div class="grid lg:flex gap-16 items-between justify-center w-full lg:justify-between">
              <div class="flex flex-col justify-center items-center gap-4">
                <p class="text-xl text-[#d6e1e5] whitespace-nowrap ">التواصل الاجتماعي</p>
                <ul class="flex gap-2">
                ${social_media.map(
                  (item) => `
                <li class="text-[#d6e1e5]  hover:text-[#d6e1e5] duration-200"><a
                      href="${item.url}"><img class="w-6"
                        src="assets/images/socialMedia/${item.icon}" alt=""></a></li>
                        `
                )}
                 
                </ul>
              </div>

            </div>
            <div class="order-first lg:order-last ">
              <img class="md:w-20  py-4 lg:py-auto" src="assets/images/logo/emaar_logo-02.svg" alt="logo-footer">
            </div>
          </div>
          <div class="lg:flex justify-center items-center text-[#d6e1e5] gap-4 text-center pt-6 lg:pt-0">
            <p> جميع الحقوق محفوظة لشركة حدود الاعمار للاستشارات الهندسية</p> <span class="material-symbols-outlined">
              copyright
            </span>
          </div>
        </div>

      </div>
    </div>

`;

// <li class="text-[#d6e1e5]  hover:text-[#d6e1e5] duration-200"><a
// href="https://www.instagram.com/emaarbod/"><img class="w-6"
//   src="assets/images/socialMedia/instagram-01.svg" alt=""></a></li>
// <li class="text-[#d6e1e5]  hover:text-[#d6e1e5] duration-200"><a href="https://www.tiktok.com/"><img
//   class="w-6" src="assets/images/socialMedia/8547041_tiktok_icon.svg" alt=""></a></li>
// <li class="text-[#d6e1e5]  hover:text-[#d6e1e5] duration-200"><a href="https://www.snapchat.com/"><img
//   class="w-6" src="assets/images/socialMedia/Snapchat.svg" alt=""></a></li>
