const services_List = [
    "استشارات وتحقيقات",
    "تصميم ورسم",
    "محاكاة ونمذجة",
    "تقييم المخاطر والسلامة",
    "تطوير المنتجات",
    "تطوير الأنظمة",
    "دراسات الجدوى والاقتصاد",
]

const servicesList = document.getElementById("services_list");
const services = document.getElementById("services");


servicesList.innerHTML = `
  ${services_List.map((item) => `
              <button class="lg:px-12 text-[#d6e1e5]">${item}</button>
          <div class="lg:h-full lg:min-h-[1em] w-[1px] self-stretch bg-[#ded0c5] "></div>
  `).join('')}
`;

services.innerHTML = `
  ${services_List.map((item) => `
             <a href="servicesItem.html" class="swiper-slide bg-[url('assets/images/services/${item}')] bg-cover bg-center" data-aos="fade-up"
        data-aos-duration="1000">
          <div class="bg-[#082b3f88] hover:bg-[#082b3fcc] duration-500 h-[350px] flex justify-center items-center">
            <div class="text-center flex flex-col gap-2">
              <h2 class="text-xl lg:text-3xl font-semibold text-[#d6e1e5]">${item}</h2>

            </div>
          </div>
        </a>
  `).join('')}
`;