import Ingreso from "./Ingreso.mjs";
import Egreso from "./Egreso.mjs";

// Ingresos y egresos

window.ingresos = [
    new Ingreso('Salario', 2000),
    new Ingreso('Venta de coche', 1500)
]

window.egresos = [ 
    new Egreso('Renta de departamento', 9000),
    new Egreso('Ropa', 400)
]

export const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgresos = totalEgresos() / totalEgresos();

    document.getElementById('ingresos').innerText = formatoMoneda(totalIngresos())
    document.getElementById('egresos').innerText = formatoMoneda(totalEgresos())
    document.getElementById('porcentaje').innerText = formatoMoneda(porcentajeEgresos)
    document.getElementById('presupuesto').innerText = formatoMoneda(presupuesto)
}
const totalIngresos = () => {
    let total_ingresos = 0;
    for (const ingreso of window.ingresos) {
        total_ingresos = parseInt(total_ingresos) + ingreso.getValor() 
    }
        
    return total_ingresos
}

const totalEgresos = () => {
    var total_egresos = 0;

    for (const egreso of window.egresos) {
        total_egresos = parseInt(total_egresos) + egreso.getValor()
    }

    return total_egresos
}

const formatoMoneda = (valor, moneda = 'MXN') => {
    return `$${valor.toLocaleString()} ${moneda}`
}

const formatoPorcentaje = (valor) => {
    return `${valor.toLocaleString()}%`
}

const getHtmlIngreso = ({ getDescripcion, getValor}) => 

`<div class="elemento limpiarEstilos">
<div class="elemeto_descripcion">${getDescripcion()}</div>
<div class="derecha limpiarEstilos">
    <div class="elemento_valor">${formatoMoneda(getValor())}</div>
    <div class="elemento_eliminar">
        <button class="elemento_eliminar_btn"> +
            <ion-icon name="close-circle-outline"></ion-icon>
        </button>
    </div>
</div>
</div>`


export const cargarIngresos = () => {
    let htmlIngresos = ""

    for (const ingreso of window.ingresos) {
        htmlIngresos += getHtmlIngreso(ingreso)
    }

    document.getElementById('lista-ingresos').innerHTML = htmlIngresos
}

const getHtmlEgreso = ({ getDescripcion, getValor}) => {
    let porcentaje = getValor() / totalIngresos() *100;

    return `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${getDescripcion()}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(getValor())}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(porcentaje)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar_btn">%
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
        </div>
    </div>
</div>`
}

export const cargarEgresos = () => {
    let htmlEgresos = ""

    for (const egreso of window.egresos) {
        htmlEgresos += getHtmlEgreso(egreso)
    }

    document.getElementById('lista-egresos').innerHTML = htmlEgresos
}