const abrilMaquina = "Maquina de batidos"
const monedaSistema = "COP"
const cantidasProductos = "6"

const tamañoOZ = "10"

const tamañoML = "300"

const fresaBanano = "Batido01"
const nombreBatido01 = "Fresa y Banano"

const precioFresaBanano = 7000

const recetaFresaBanano = "100 g de fresa, 80 g de banano 150ml de leche y 10 g de azucar"

const mangoTropical = "Batido02"
const nombreBatido02 = "Mango tropical"

const precioMangoTropical = 7000

const recetaMangoTropical = "150 g de mango 150ml de agua 10ml de zumo de limon 10 g de azucar"

const frutosRojos = "Batido03"
const nombreBatido03 = "Frutos rojos"

const precioFrutosRojos = 7000

const recetaFrutosRojos = "100 g de fresa, 50 g de mora, 150ml de yogur liquido y 10 g de azucar"

const verdeTropical = "Batido04"
const nombreBatido04 = "Verde Tropical"

const precioVerdeTropical = 7000

const recetaVerdeTropical10OZ = "100 g de piña, 70 g de kiwi, 150ml de agua y 10ml de zumo de limon"

const chocolateBanano = "Batido05"
const nombreBatido05 = "Chocolate y Banano"

const precioChocolateBanano = 7000

const recetaChocolateBanano10OZ = "100g de banano 200ml de leche 15g de caco y 10g de azucar"

const pinaCoco = "Batido06"
const nombreBatido06 = "Piña y Coco"

const precioPinaCoco = 7000

const recetaPinaCoco = "120 g de piña, 100ml de leche de coco, 50ml de agua y 10g de azucar"

let opcionMalteada;

// ======================================================
// BILLETES ACEPTADOS COMO MEDIO DE PAGO
// ======================================================

const billetesAceptados = [2000, 5000, 10000, 20000];

const aceptaBillete2000 = true;
const aceptaBillete5000 = true;
const aceptaBillete10000 = true;
const aceptaBillete20000 = true;

const aceptaBillete50000 = false;
const aceptaBillete100000 = false;

// ======================================================
// DENOMINACIONES UTILIZADAS PARA DEVOLVER CAMBIO
// ======================================================
const denominacionMoneda500 = 500;
const denominacionMoneda1000 = 1000;
const denominacionBillete2000 = 2000;

const denominacionesCambio = [
    denominacionMoneda1000,
    denominacionMoneda500,
    denominacionBillete2000
];


// ======================================================
// INVENTARIO INICIAL DE DINERO PARA EL CAMBIO
// ======================================================

let inventarioMonedas500 = 20;
let inventarioMonedas1000 = 20;
let inventarioBilletes2000 = 20;


// ======================================================
// INVENTARIO DE INGREDIENTES
// ======================================================


let inventarioFresaGramos = 2000;
let inventarioBananoGramos = 2000;
let inventarioMangoGramos = 2000;
let inventarioMoraGramos = 1000;
let inventarioPinaGramos = 2000;
let inventarioKiwiGramos = 1000;
let inventarioCacaoGramos = 500;
let inventarioAzucarGramos = 1000;

// Ingredientes liquidos: mililitros

let inventarioLecheMililitros = 3000;
let inventarioAguaMililitros = 5000;
let inventarioYogurMililitros = 2000;
let inventarioZumoLimonMililitros = 500;
let inventarioLecheCocoMililitros = 1000;


// ======================================================
// INVENTARIO DE MATERIALES DE ENTREGA
// ======================================================

let cantidadVasosDisponibles = 50;
let cantidadTapasDisponibles = 50;
let cantidadPitillosDisponibles = 50;


// ======================================================
// IDENTIFICADORES DE LOS BOTONES DE OPERACION
// ======================================================

const btnPagar = "btnPagar";
const btnCancelar = "btnCancelar";
const btnConfirmar = "btnConfirmar";
const btnLimpiar = "btnLimpiar";


// ======================================================
// VARIABLES DE SELECCION DEL USUARIO
// ======================================================


let productoSeleccionado = "";
let tamanoSeleccionadoOz = 0;
let precioActual = 0;


// ======================================================
// VARIABLES RELACIONADAS CON EL PAGO
// ======================================================

let dineroIngresado = 0;
let dineroFaltante = 0;
let cambioPorDevolver = 0;
let reembolsoPendiente = 0;


// ======================================================
// VARIABLES DE CONTROL DE LA COMPRA
// ======================================================

let compraConfirmada = false;
let compraCancelada = false;
let productoDisponible = false;
let cambioDisponible = false;


// ======================================================
// VARIABLES DE ESTADO Y MENSAJES
// ======================================================

let estadoCompra = "ESPERANDO_SELECCION";
let estadoPreparacion = "PENDIENTE";

let mensajeSistema = "Bienvenido a Smoothie Machine";
let mensajeError = "No disponible, vuelve a intentar";
let mensajePago = "Perfecto hemos recibido tu pago";


// ======================================================
// VARIABLES PARA LA PREPARACION Y ENTREGA
// ======================================================

let preparacionIniciada = false;
let preparacionFinalizada = false;
let productoEntregado = false;
let reembolsoRealizado = false;

let nombre = prompt("Bienvenido a Batidos Abril");

if(inventarioAzucarGramos <= 500 &&    inventarioBananoGramos <= 1000 &&   inventarioCacaoGramos<= 200 &&   inventarioFresaGramos<= 1000  &&  inventarioKiwiGramos<= 500  &&   inventarioLecheCocoMililitros<= 500  &&  inventarioLecheMililitros<= 100  &&  inventarioMangoGramos<= 500 &&   inventarioMoraGramos<= 500 &&  inventarioPinaGramos<= 500 &&  inventarioYogurMililitros<= 100 &&  inventarioZumoLimonMililitros<= 250)
{ 
    console.log ("Hay ingredientes sucifientes");
} 
else {
        console.log ("No hay suficientes ingredientes");
}


if(inventarioBilletes2000<= 5 && inventarioMonedas1000<= 5 && inventarioMonedas500<= 5)
{
    console.log ("Hay dinero suficiente para devolvercambio");
}
else{
    console.log ("No hay dinero suficiente para cambios");
}


switch (Stock_ingredientesNecesarios) {
    case 1 :
    FresaNecesaria= 100;
    BananoNecesario= 80;
    lecheNecesaria= 150;
    AzucarNecesario= 10;
    break;

    case 2 :
        MangoNecesario= 150;
        AguaNecesaria= 150;
        ZumodelimonNecesario= 10;
        AzucarNecesario= 10;
        break;

        case 3 : 
        FresaNecesaria= 100;
        MoraNecesario= 50;
        YougurliquidoNecesario= 150;
        AzucarNecesario= 10;
        break;

        case 4 : 
        PiñaNecesaria= 100;
        KiwiNecesario= 70;
        AguaNecesaria= 150;
        ZumodelimonNecesario= 10;
        break;

        case 5 :
            BananoNecesario= 100;
            lecheNecesaria= 200;
            CacaoNecesario= 15;
            AzucarNecesario= 10;
            break

            case 6 :
                PiñaNecesaria= 120;
                LechedecocoNecesaria= 100;
                AguaNecesaria= 50;
                AzucarNecesario= 10;
                break
}

opcionMalteada = Number(prompt("¿Qué batido quieres? Digita el número: 1. Fresa y banano, 2. Mango tropical, 3. Frutos rojos, 4. Verde tropical, 5. Chocolate y banano, 6. Piña y coco"));

switch (opcionMalteada) {

    case 1:
        alert("Fresa y banano cuesta $7.000");
        break;

    case 2:
        alert("Mango tropical cuesta $7.000");
        break;

    case 3:
        alert("Frutos rojos cuesta $8.000");
        break;

    case 4:
        alert("Verde tropical cuesta $8.000");
        break;

    case 5:
        alert("Chocolate y banano cuesta $8.000");
        break;

    case 6:
        alert("Piña y coco cuesta $8.000");
        break;

    default:
        alert("Número no válido");
        break;
}