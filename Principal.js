var btnAgregar=document.getElementById('btnAgregar'),
    overlay= document.getElementById('overlay'),
    popup= document.getElementById('popup'),
    btnCerrar=document.getElementById('btn-cerrar-popup');

    btnCerrar.addEventListener('click',function(){
      overlay.classList.remove('active');
    });

    btnAgregar.addEventListener('click',function(){
      overlay.classList.add('active');
    });
    

    var btnGuardar=document.getElementById('btnGuardar');
    
    btnGuardar.addEventListener('click',function(){
      var titulo=document.getElementById('Vtitulo'),
      descrip=document.getElementById('Vtext-area'),
      etiquetas=document.getElementById('Vetiquetas'),

      Titulo=document.getElementById('Titulo'),
      Descripcion=document.getElementById('Descripcion');
      
      Titulo.innerHTML=titulo.value;
      Descripcion.innerHTML=descrip.value;
      
    });