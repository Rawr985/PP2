document.addEventListener("DOMContentLoaded", function () {
    // 1. Smooth scrolling for navigation links
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });

    // 2. Modal for "Conocenos" images
    const imagenesConocenos = document.querySelectorAll("#Conocenos img");
    imagenesConocenos.forEach((imagen) => {
        imagen.addEventListener("click", function () {
            abrirImagen(imagen);
        });
    });

    function abrirImagen(imagen) {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        const imagenModal = document.createElement("img");
        imagenModal.src = imagen.src;
        imagenModal.alt = imagen.alt;
        modal.appendChild(imagenModal);
        document.body.appendChild(modal);
        modal.addEventListener("click", function () {
            document.body.removeChild(modal);
        });
    }

    // 3. Scroll to Top Button
    const btnScrollToTop = document.getElementById("btnScrollToTop");
    
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnScrollToTop.style.display = "block";
        } else {
            btnScrollToTop.style.display = "none";
        }
    }

    window.onscroll = function () {
        scrollFunction();
    };

    if (btnScrollToTop) {
        btnScrollToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }

    // 4. Accordion Functionality
    
    function toggleAccordion(element) {
        const isOpening = !element.style.maxHeight;
        const heightChange = element.scrollHeight;

        if (isOpening) {
            element.style.maxHeight = heightChange + "px";
            updateAncestors(element, heightChange);
        } else {
            element.style.maxHeight = null;
            updateAncestors(element, -heightChange);
        }
    }

    function updateAncestors(element, change) {
        let ancestor = element.parentElement.closest('.producto-lista, .submenu');
        while (ancestor) {
            if (ancestor.style.maxHeight) {
                const currentHeight = parseFloat(ancestor.style.maxHeight);
                const newHeight = currentHeight + change;
                ancestor.style.maxHeight = (newHeight > 0 ? newHeight : 0) + "px";
            }
            ancestor = ancestor.parentElement.closest('.producto-lista, .submenu');
        }
    }

    // For Categories
    const categoriaTitulos = document.querySelectorAll(".categoria-titulo");
    categoriaTitulos.forEach(titulo => {
        titulo.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling; // .producto-lista
            if (content && content.classList.contains('producto-lista')) {
                toggleAccordion(content);
            }
        });
    });

    // For Subcategories
    const subcategoriaTitulos = document.querySelectorAll(".subcategoria > h4");
    subcategoriaTitulos.forEach(subTitle => {
        subTitle.addEventListener("click", function(e) {
            e.stopPropagation(); // Prevent bubbling
            const content = this.nextElementSibling; // .submenu
            if (content && (content.classList.contains('submenu') || content.tagName === 'UL')) {
                toggleAccordion(content);
            }
        });
    });
});
