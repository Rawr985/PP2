document.addEventListener("DOMContentLoaded", function () {
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

    // Función para abrir la imagen al hacer clic en ellas en la sección "Conócenos"
    const imagenesConocenos = document.querySelectorAll("#Conocenos img");

    imagenesConocenos.forEach((imagen) => {
        imagen.addEventListener("click", function () {
            abrirImagen(imagen);
        });
    });

    function abrirImagen(imagen) {
        // Crea el modal
        const modal = document.createElement("div");
        modal.classList.add("modal");

        // Crea la imagen en el modal
        const imagenModal = document.createElement("img");
        imagenModal.src = imagen.src;
        imagenModal.alt = imagen.alt;
        modal.appendChild(imagenModal);

        // Agrega el modal al cuerpo del documento
        document.body.appendChild(modal);

        // Cierra el modal al hacer clic fuera de la imagen
        modal.addEventListener("click", function () {
            document.body.removeChild(modal);
        });
    }

    // Mostrar u ocultar el botón según el desplazamiento
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        var btnScrollToTop = document.getElementById("btnScrollToTop");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnScrollToTop.style.display = "block";
        } else {
            btnScrollToTop.style.display = "none";
        }
    }

    // Desplazarse hacia arriba al hacer clic en el botón
    function scrollToTop() {
        document.body.scrollTop = 0; // Para Safari
        document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
    }

    // Mostrar o ocultar el botón según el desplazamiento
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        var btnScrollToTop = document.getElementById("btnScrollToTop");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnScrollToTop.style.display = "block";
        } else {
            btnScrollToTop.style.display = "none";
        }
    }

    // Desplazarse hacia arriba suavemente al hacer clic en el botón
    document.getElementById("btnScrollToTop").onclick = function () {
        smoothScrollToTop();
    };

    function smoothScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
});
