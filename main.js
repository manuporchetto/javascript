function comprarProductos() {

    let producto = " ";
    let precio = 0;
    let cantidad = 0;
    let cuotas = 0;
    let precioPorCuota = 0;
    let totalCompra = 0;
let seguirComprando = false;


    do {
        producto = prompt("Elige el producto que quieras comprar: remera, pantalon o buzo");
        cantidad = parseInt(prompt("Ingrese cantidad"));
        cuotas = parseInt(prompt("En cuantas cuotas le gustaria pagar"));

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
        return totalCompra ;
        precioPorCuota += totalCompra / cuotas;
        return precioPorCuota
    seguirComprando = confirm ("Queres seguir comprando?");

    }
    while (seguirComprando);
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

