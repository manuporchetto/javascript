function comprarProductos() {

    let producto = " ";
    let precio = 0;
    let cantidad = 0;
    let totalCompra = 0;
let seguirComprando = false;


    do {
        producto = prompt("Elige el producto que quieras comprar: remera, pantalon o buzo");
        cantidad = parseInt(prompt("Ingrese cantidad"));

        const cantidadValidada = validarCantidad(cantidad);

        switch (producto) {
            case 'remera':
                precio = 1000;
                break;
            case 'pantalon':
                precio = 2000;
                break;
            case 'buzo':
                precio = 5000;
                break;
            default:
                alert("Ingrese correctamente los datos");
                precio = 0;
                cantidad = 0;
        }
        totalCompra += precio * cantidadValidada;
    seguirComprando = confirm ("Queres seguir comprando?");

    }
    while (seguirComprando)

    return totalCompra; 
};


function validarCantidad(cantidad) {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert("Por favor indique la cantidad");
        }
        else {
            alert("Por favor indique un numero distinto de cero");
        }
        cantidad = parseInt(prompt("Indique cantidad"));
        return cantidad;
    }

};

function calcularCantidadCuotas(){
    let cuotas = 0;
    let elegirCuotas = false;

    elegirCuotas = confirm ("Podes pagar en cuotas sin interes!!")

    if (elegirCuotas){
        cuotas = parseInt (prompt("En cuantas cuotas queres pagar?"));
        if(cuotas===0){
            cuotas=1;
        } else if (Number.isNaN(cuotas)){
            calcularCantidadCuotas();
        }
    }
    else {
        cuotas = 1;
    }
    return cuotas;
}


function calcularTotalAPagar (totalCompra, cuotas){
let valorCuota = totalCompra / cuotas;
alert ("El total a pagar es $"+totalCompra+" en "+cuotas+" cuotas de $"+valorCuota )
}

alert ("Bienvenidos")
const totalCompra = comprarProductos ();
const cuotas = calcularCantidadCuotas ();
const valorCuota = 

calcularTotalAPagar (totalCompra, cuotas)
