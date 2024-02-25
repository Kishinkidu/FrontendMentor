const botones  = document.querySelectorAll('.toggleButton');
const imagenes = document.querySelectorAll('.buttonImage');

botones.forEach(function(boton, index){
    boton.addEventListener('click', function(){
        const contenido = document.getElementById('content'+(index+1));
        contenido.classList.toggle('active');
        imagenes[index].src = contenido.classList.contains('active') ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg';

        botones.forEach(function(b, i) {
            if (i !== index) {
                const otroContenido = document.getElementById('content' + (i + 1));
                const otraImagen = imagenes[i];
                otroContenido.classList.remove('active');
                otraImagen.src = './assets/images/icon-plus.svg';
            }
        });
    });
});

