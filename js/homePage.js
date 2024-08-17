const services_List = [
    "دراسة الجدوى الهندسية ",
    " التصاميم الداخلية",
    "التصاميم المعماريه",
    "تصميم الواجهات",
    "تصميم الموقع العام والاند سكيب",
    "اعمال الرفعات المساحية",
    "إدارة المشاريع والإشراف عليها"
]

const servicesList = document.getElementById("services_list");
const services = document.getElementById("services");


servicesList.innerHTML = `
  ${services_List.map((item) => `
              <button class="lg:px-12 text-[#d6e1e5] text-sm">${item}</button>
          <div class="lg:h-full lg:min-h-[1em] w-[1px] self-stretch bg-[#ded0c5] "></div>
  `).join('')}
`;




services_List.forEach((item, index) => {
  const listItem = document.createElement("div");
  listItem.innerHTML = `<a href="servicesItem.html" class="swiper-slide bg-cover bg-center" data-aos="fade-up"
        data-aos-duration="1000" style="background-image: url('assets/images/services/${index}.jpg');">
          <div class="bg-[#082b3f88] hover:bg-[#082b3fcc] duration-500 h-[350px] flex justify-center items-center">
            <div class="text-center flex flex-col gap-2">
              <h2 class="text-xl lg:text-3xl font-semibold text-[#d6e1e5]">${item}</h2>

            </div>
          </div>
        </a>`;
  // const ListItem = document.getElementById("listItem");
  listItem.addEventListener("click", () => {
    localStorage.setItem("servicesID",index)
  });
  services.appendChild(listItem);
});
