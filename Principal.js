var btnGuardar=document.getElementById('btnAgregar'),
    overlay= document.getElementById('overlay'),
    popup= document.getElementById('popup'),
    btnCerrar=document.getElementById('btn-cerrar-popup');

    btnGuardar.addEventListener('click',function(){
      overlay.classList.add('active');
    });
    
    btnCerrar.addEventListener('click',function(){
        overlay.classList.remove('active');
    });