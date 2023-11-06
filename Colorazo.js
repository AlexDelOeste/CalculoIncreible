// Escucha el evento de scroll de la ventana
window.addEventListener("scroll", function() {
    // Determina cuánto has desplazado verticalmente
    const scrollPosition = window.scrollY;
    
    // Puedes ajustar estos valores según tus preferencias
    if (scrollPosition > 3800) {
        // Cambia la imagen de fondo
        document.body.style.backgroundImage = "url('galaxy.jpg')";
        document.body.style.backgroundSize = "100% auto"; // Ajusta el tamaño de la imagen
        document.body.style.backgroundColor = "transparent"; // Fondo transparente
    } else if(scrollPosition > 3200){
        document.body.style.backgroundImage = "none"; // Quita la imagen de fondo
        document.body.style.backgroundColor = "#ffffff"; // Cambia el color de fondo a blanco
    } else if(scrollPosition > 2800){
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#fffea6"; // Cambia el color de fondo a amarillo nata
    } else if (scrollPosition > 1900){
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#fe15e4"; // Cambia el color de fondo a magenta
    } else if (scrollPosition > 1500){
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#44ffed"; // Cambia el color de fondo a azul brillante
    } else if(scrollPosition > 1100){
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#4074f5"; // Cambia el color de fondo a azul intenso
    } else if (scrollPosition > 700) {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#b1a981"; // Cambia el color de fondo a amarillo ocre
    } else if(scrollPosition > 300){
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#bee6f7"; // Cambia el color de fondo a azul ténue
    } else {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#969292"; // Cambia el color de fondo inicial
    }
});
