document.addEventListener("DOMContentLoaded", function () {
  // جلب اسم الصفحة الحالية
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".navbar .nav-item");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    // 1. تحديد الخيار النشط (active) بناءً على الصفحة الحالية
    if (currentPage === linkPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

    // 2. منع إعادة التحميل أو الخطأ عند الضغط على الزر الخاص بالصفحة الحالية
    link.addEventListener("click", function (event) {
      if (linkPage === currentPage) {
        event.preventDefault(); // منع المتصفح من إعادة تحميل الصفحة أو التوجيه
      }
    });
  });lucide.createIcons();
});



document.addEventListener("DOMContentLoaded", function () {
  // 1. تشغيل أيقونات Lucide فور تحميل الصفحة
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function (event) {
      event.stopPropagation();
      
      // تبديل ظهور القائمة
      const isOpen = navbar.classList.toggle("open");

      // تغيير الأيقونة
      const iconElement = menuToggle.querySelector("[data-lucide]");
      if (iconElement) {
        iconElement.setAttribute("data-lucide", isOpen ? "x" : "menu");
        lucide.createIcons(); // إعادة رسم الأيقونة الجديدة
      }
    });

    // إغلاق القائمة عند الضغط في أي مكان آخر بالصفحة
    document.addEventListener("click", function (event) {
      if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
        navbar.classList.remove("open");
        const iconElement = menuToggle.querySelector("[data-lucide]");
        if (iconElement) {
          iconElement.setAttribute("data-lucide", "menu");
          lucide.createIcons();
        }
      }
    });
  }
});