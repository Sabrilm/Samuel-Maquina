const abrilMaquina = "Maquina de batidos"
const monedaSistema = "COP"
const cantidasProductos = "6"

const tamañoPequeñoOZ = "10"
const tamañoGrandeOZ = "16"

const tamañoPequeñoML = "300"
const tamañoGrandeML = "475"

const fresaBanano = "Batido01"
const nombreBatido01 = "Fresa y Banano"

const precioFresaBanano10OZ = 7000
const precioFresaBanano16OZ = 9000

const recetaFresaBanano10OZ = "100 g de fresa, 80 g de banano 150ml de leche y 10 g de azucar"
const recetaFresaBanano106OZ = "115 g de fresa, 90 g de banano 175ml de leche y 20 g de azucar"

const mangoTropical = "Batido02"
const nombreBatido02 = "Mango tropical"

const precioMangoTropical10OZ = 7000
const precioMangoTropical16OZ = 9000

const recetaMangoTropical10OZ = "150 g de mango 150ml de agua 10ml de zumo de limon 10 g de azucar"
const recetaMangoTropical160Z = "170 g de mango 170 ml de agua 30ml de zumo de limon 10g de azucar"

const frutosRojos = "Batido03"
const nombreBatido03 = "Frutos rojos"

const precioFrutosRojos10OZ = 8000
const precioFrutosRojos16OZ = 10000

const recetaFrutosRojos10OZ = "100 g de fresa, 50 g de mora, 150ml de yogur liquido y 10 g de azucar"
const recetaFrutosRojos16OZ = "120 g de fresa 70 g de mora, 170ml de yogur liquido y 10 g de azucar"

const verdeTropical = "Batido04"
const nombreBatido04 = "Verde Tropical"

const precioVerdeTropical10OZ = 8000
const precioVerdeTropical16OZ = 10000

const recetaVerdeTropical10OZ = "100 g de piña, 70 g de kiwi, 150ml de agua y 10ml de zumo de limon"
const recetaVerdeTropical16OZ = "120 g de piña, 90 g de kiwi, 170ml de agua y 30ml de zumo de limon"

const chocolateBanano = "Batido05"
const nombreBatido05 = "Chocolate y Banano"

const precioChocolateBanano10OZ = 8000
const precioChocolateBanano16OZ = 10000

const recetaChocolateBanano10OZ = "100g de banano 200ml de leche 15g de caco y 10g de azucar"
const recetaChocolateBanano16OZ = "120g de banano 220ml de leche 35g de caco y 30g de azucar"

const pinaCoco = "Batido06"
const nombreBatido06 = "Piña y Coco"

const precioPinaCoco10OZ = 8000
const precioPinaCoco16OZ = 10000

const recetaPinaCoco10OZ = "120 g de piña, 100ml de leche de coco, 50ml de agua y 10g de azucar"
const recetaPinaCoco16OZ = "140 g de piña, 120ml de leche de coco, 70ml de agua y 30g de azucar"

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
let inventarioBilletes2000 = 10;


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