const services_List = [
    "استشارات وتحقيقات",
    "تصميم ورسم",
    "محاكاة ونمذجة",
    "تقييم المخاطر والسلامة",
    "تطوير المنتجات",
    "تطوير الأنظمة",
    "دراسات الجدوى والاقتصاد",
]

const servicesList = document.getElementById("servicesList");

servicesList.innerHTML = `
  ${services_List
    .map(
      (item) => `
             <div class="bg-[url('assets/images/services')] bg-center bg-cover h-96 w-full lg:w-72 group">
                    <div class="lg:bg-[#082b3f99] bg-[#082b3faa] duration-200 lg:group-hover:bg-[#082b3faa] text-[#d6e1e5] text-center h-full w-full flex flex-col justify-center items-center gap-4">
                        <p class="text-4xl lg:opacity-75 lg:group-hover:opacity-100 duration-300 lg:translate-y-12 lg:group-hover:translate-y-0">${item} </p>
                        <p class="lg:opacity-0 lg:group-hover:opacity-100 duration-500 lg:translate-y-12 lg:group-hover:translate-y-0"> خدماتنا  تشمل الكثير ...</p>
                        <div class="flex justify-center lg:opacity-0 lg:group-hover:opacity-100 duration-1000 lg:translate-y-12 lg:group-hover:translate-y-0"><a class="px-10 py-2 mt-2 border-2 border-[#08466f] text-[#d6e1e5] text-xl hover:bg-[#082b3f] hover:border-[#082b3f] duration-200" href="servicesItem.html">المزيد</a></div>
                        </div>
                    </div>
  `
    )
    .join("")}
`;
