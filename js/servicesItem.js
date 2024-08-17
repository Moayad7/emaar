const services = [
    {
      title: "دراسة الجدوى الهندسية",
      description: "دراسة تحليلية لمدى جدوى المشروع أو الفكرة من الناحية الفنية والمالية والتشغيلية لتحديد ما إذا كان المشروع قابلاً للتطبيق أم لا."
    },
    {
      title: "التصاميم الداخلية",
      description: "فن وعلم تحسين داخل المبنى لتحقيق بيئة صحية وأكثر جمالا ووظيفية من خلال التخطيط والتصميم والتنفيذ."
    },
    {
      title: "التصاميم المعمارية",
      description: "عملية إنشاء تصميم لمبنى أو هيكل، مع مراعاة العوامل الجمالية والوظيفية والسلامة والاستدامة من خلال إنشاء خطط ونماذج ومواصفات للبناء."
    },
    {
      title: "تصميم الواجهات",
      description: "تصميم خارج المبنى، بما في ذلك الجدران والنوافذ والأبواب والمميزات الخارجية الأخرى لتحقيق جمال ووظيفية."
    },
    {
      title: "تصميم الموقع العام والاند سكيب",
      description: "تخطيط وتصميم وإدارة المساحات الخارجية، مثل الحدائق والحدائق والمساحات الخارجية الأخرى لتحقيق بيئة وظيفية وأكثر جمالا ومتانة."
    },
    {
      title: "اعمال الرفعات المساحية",
      description: "قياس وخرائط الأرض والمباني لتحديد حدودها وأبعادها ومميزاتها لجمع البيانات للاستخدام في البناء والتنمية الحضرية وغيرها."
    },
    {
      title: "إدارة المشاريع والإشراف عليها",
      description: "تخطيط وتنسيق ومراقبة المشاريع من البداية إلى النهاية، بما في ذلك تحديد الأهداف وتخصيص الموارد والجدولة ومراقبة التقدم لضمان إكمال المشاريع في الوقت المحدد وبالموارد المخصصة والجودة المطلوبة."
    }
  ];


  const servicesId = localStorage.getItem("servicesID");
  const servicesList = document.getElementById("servicesItem");
  const serviceTitle = document.getElementById("serviceTitle");

    serviceTitle.textContent = services[servicesId].title;

servicesList.innerHTML = `
             <div class="grid lg:grid-cols-2 gap-8 place-items-center text-center ">
        <div style="background-image: url('assets/images/services/${servicesId}.jpg');" class=" bg-cover bg-center w-full h-80" data-aos="fade-up"
          data-aos-duration="1000">

        </div>
        <p class="text-xl" data-aos="fade-up" data-aos-duration="1000">
        ${services[servicesId].description}  
        </p>
      </div>
`;
