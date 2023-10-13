let men= `
<div class="logo"> 
    <img src="./Imagenes/ecologiamental.png" alt="Logo de la Página">
</div>
<div class="pag">
    <h1>EcologicaMENTE</h1>
</div>
            
<nav class="nav">
    <a href="index.html">Inicio</a>
    <a href="actividades.html">Actividades</a>
    <a href="nosotros.html">Nosotros</a>
    <a href="contacto.html">Contacto</a>
</nav> `
document.querySelector("header").innerHTML= men

let fot =`<nav class="pie">
<p>Los4deCodo - Todos los derechos reservados &copy; 2023</p>
    <div class="redes-sociales">
            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="https://api.whatsapp.com/send?phone=1234567890" class="social-icon"><i class="fab fa-whatsapp"></i></a>
            <a href="https://twitter.com/tucuenta" class="social-icon"><i class="fab fa-twitter"></i></a>
    </div>
</nav>`

document.querySelector("footer").innerHTML= fot