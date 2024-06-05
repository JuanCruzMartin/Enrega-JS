
const nombreUsuario = prompt("Hola, Bienvenido a tu nueva biblioteca , ¿Cual es su nombre? :");
if (nombreUsuario === null){
    mensajeDespedida();
}
console.log (nombreUsuario)
alert ( "Bienvenido a tu biblioteca " + nombreUsuario);   
const mailUsuario = prompt(" Por favor, ingrese su mail y podra recibir todas las noticias de los nuevos libros . ");
if (mailUsuario === null){
    mensajeDespedida();
  
}
 console.log (mailUsuario)


class librosCargados{
    static id = 0
    constructor ( titulo, autor, editorial){
    this.id = ++librosCargados.id
    this.titulo = titulo;
    this.autor = autor;
    this.editorial = editorial;}
}
const Libros = []
cargarLibro = () => {
    let cargarTitulo = prompt("Ingrese titulo de su  libro preferido ")
    let cargarAutor = prompt (" Ingrese el Autor de su libro")
    let cargarEditorial = prompt ("Ingrese el nombre de la editorial del libro")
    const libro = new librosCargados(cargarTitulo,cargarAutor,cargarEditorial)
    
    Libros.push(libro)
    console.log (libro)
    console.log(Libros)
}
/* cargarLibro() */

let menu = parseInt (prompt("Elija 1 para cargar un libro que le guste! o 2 para seguir adelante!"))
while (menu !==2){
    switch(menu){
        case 1:
            cargarLibro()
            break
        default:
            alert("opcion incorrecta")
            break
    }
    menu = parseInt (prompt ("Elija 1 para cargar un libro que le guste! o 2 para seguir adelante!"))
}

let pregunta1 = prompt("¿que tipo de lectura te gusta: filosofia , novelas, historicas, fantasia , otras")
switch (pregunta1){
    case "filosofia":
        alert ("Hermosa eleccion , te recomiendo El manual tibetano de la vida y la muerte ")
        break;
        case "novelas":
            alert ("Hermosa eleccion , te recomiendo Cometas en el Cielo ")
            break;    
            case "historicas":
                alert ("Hermosa eleccion , te recomiendo La biografia de Nelson Mandela ")
                break;
                case "fantasia":
                    alert ("Hermosa eleccion , te recomiendo Harry Potter ")
                    break;
                    case "otras":
                        alert ("que curioso  ")
                        break;
        default:
            alert ("Introdujiste una palabra no valida")
            break;
}
let biblioteca = prompt ("Por ultimo , bienvenido a una cita a ciegas con la lectura , ingrese un numero del 1 al 5")
if (biblioteca == "1"){
    alert("Tu cita a ciegas de lectura es con El mundo de Sofia");
}
if (biblioteca == "2"){
    alert("Tu cita a ciegas de lectura es con Comer,Rezar y Amar");
}
if (biblioteca == "3"){
    alert("Tu cita a ciegas de lectura es con Rayuela");
}
if (biblioteca == "4"){
    alert("Tu cita a ciegas de lectura es con El Principito");
}
if (biblioteca == "5"){
    alert("Tu cita a ciegas de lectura es con El Secreto");
}
alert ("Muchas gracias por empezar con tu biblioteca virtual, tu proxima historia esta por ser escrita.")
