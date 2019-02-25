const boton = document.getElementById('boton');
const menu = document.getElementById('navbar');
boton.addEventListener('click', mostrar)
function mostrar(){
	menu.classList.toggle('active');

}