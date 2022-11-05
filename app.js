// pin de entrada
let acceso = "0115";

function login() {
	let ingresar = false;
	for (let i = 2; i >= 0; i--) {
		let code = prompt("Ingresa tu Codigo de Cliente");
		if (code === acceso) {
			alert("Bienvenido!");
			ingresar = true;
			break;
		} else {
			alert("Error, vuelva a intentarlo");
		}
	}
	return ingresar;
}
let entrada = login();


//objects
const objects = [
	{
		id: 1,
		tipo: "remera",
		valor: 50,
		talle: "niño",
		nombre: "Fender"
	},
	{
		id: 2,
		tipo: "remera",
		valor: 50,
		talle: "adulto",
		nombre: "Pullfiction"
	},
	{
		id: 3,
		tipo: "remera",
		valor: 50,
		talle: "niño",
		nombre: "Gibson"
	}
]

let valorBuscado = "Gibson"
const busqueda = objects.find(objects => objects.nombre === valorBuscado)
console.log(busqueda)


