document.addEventListener("DOMContentLoaded", function () {
    const categoriaTitulos = document.querySelectorAll(".categoria-titulo");
    const subcategoriaTitulos = document.querySelectorAll(".subcategoria h4");

    categoriaTitulos.forEach((titulo) => {
        titulo.addEventListener("click", function () {
            const productoLista = titulo.nextElementSibling;
            const openMenus = document.querySelectorAll(".categoria-titulo.open");

            // Cerrar otros menús abiertos
            openMenus.forEach((menu) => {
                if (menu !== titulo) {
                    const otherMenu = menu.nextElementSibling;
                    otherMenu.style.maxHeight = "0px";
                    menu.classList.remove("open");
                }
            });

            if (productoLista.style.maxHeight === "0px" || !productoLista.style.maxHeight) {
                productoLista.style.maxHeight = productoLista.scrollHeight + "px";
                titulo.classList.add("open"); // Agrega la clase "open" al título
            } else {
                productoLista.style.maxHeight = "0px";
                titulo.classList.remove("open"); // Quita la clase "open" al título
            }
        });
    });

    subcategoriaTitulos.forEach((titulo) => {
        titulo.addEventListener("click", function () {
            const submenu = titulo.nextElementSibling;
            if (submenu.style.maxHeight === "0px" || !submenu.style.maxHeight) {
                submenu.style.maxHeight = submenu.scrollHeight + "px";
                titulo.classList.add("open"); // Agrega la clase "open" al título
            } else {
                submenu.style.maxHeight = "0px";
                titulo.classList.remove("open"); // Quita la clase "open" al título
            }
        });
    });

    // Agregar desplazamiento suave al hacer clic en los enlaces de navegación
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
});
