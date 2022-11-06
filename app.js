let nombreIngresado = prompt("Escriba su nombre.");
alert("Hola "+nombreIngresado+ ". Bienvenido a RyM Seguros.");

const productos = [
    { nombre: "auto", precio: 2500 },
    { nombre: "moto", precio: 1500 },
    { nombre: "casa", precio: 4000 },
    { nombre: "kiosco", precio: 6500 },
];
let carrito = [];


let entrada= (prompt("Desea comprar algún seguro, si o no?"));

while(entrada != "si" && entrada != "no"){
    alert("dato incorrecto, pruebe de nuevo");
    entrada = prompt("Desea comprar algún seguro, si o no?");
}

if(entrada == "si"){
    alert("Estos son nuestros productos");
    let todosLosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"); 
    alert (todosLosProductos.join(" - "));
} else if (entrada == "no"){
    alert("Gracias por visitarnos, vuelva pronto!!");
}


while(entrada != "no"){
    let producto = prompt("agrega un producto a tu carrito \n Elije entre: auto, moto, casa o kiosco")
    let precio = 0

    if(producto == "auto" || producto == "moto" || producto == "casa" || producto == "kiosco"){
        switch(producto) {
            case "auto":
                precio = 2500;
                break;
            case "moto":
                precio = 1500;
                break;
            case "casa":
                precio = 4000;
                break;
            case "kiosco":
                precio = 6500;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"));
    
    carrito.push({producto, unidades, precio})
    } else {
        alert("no tenemos ese producto");
    }
    
    entrada = prompt("desea seguir comprando?\n si o no?")

    while(entrada === "no"){
        alert("gracias por la compra!!");
        carrito.forEach ((carritoFinal) => {
            alert(`producto: ${carritoFinal.producto}\n unidades: ${carritoFinal.unidades}\n total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}$`);
        })
    break;
    }
}

const total = carrito.reduce( (acumulador, el) => acumulador + el.precio * el.unidades, 0);
alert(`El total a pagar es de ${total}$, MUCHAS GRACIAS POR SU COMPRA!`);