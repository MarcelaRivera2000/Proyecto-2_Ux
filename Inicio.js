var EnlaceRegistro=document.getElementById('EnlaceRegistro'),
overlay= document.getElementById('Registro-overlay'),
popup= document.getElementById('Registro-popup'),
btnCerrar=document.getElementById('btn-cerrar-popup');

btnCerrar.addEventListener('click',function(){
  overlay.classList.remove('active');
});

EnlaceRegistro.addEventListener('click',function(){
  overlay.classList.add('active');
});