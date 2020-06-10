var Mes; 
var Year;
var diasdelmes;
var bisiesto = false;

Mes = prompt('Ingrese el mes: ', '');
Year = prompt('Ingrese el año: ', '');


switch(Mes){

case "Enero":
case "enero":
case "Marzo":
case "marzo":
case "Mayo":
case "mayo":
case "Julio":
case "julio":
case "Agosto":
case "agosto":
case "Octubre":
case "octubre":
case "Diciembre":
case "diciembre":
	diasdelmes = 31;
	break;

case "Abril":
case "abril":
case "Junio":
case "junio":
case "Septiembre":
case "septiembre":
case "Noviembre":
case "noviembre":
	diasdelmes = 30;
	break;

case "Febrero":
case "febrero":

	if(!bisiesto)
		diasdelmes = 28;
	else
		diasdelmes = 29;
	break;

default:
alert("El mes " + Mes + " no existe");
Mes = "No existe";
diasdelmes = 0;

}

if( Year % 4 == 0 && (Year % 100 != 0 || Year % 400 == 0))
	{
		bisiesto = true;
	}


if(bisiesto == true){
var msg = "El año " + Year + " es bisiesto. El mes de " + Mes + " tiene " +
diasdelmes + " días.";
}
else{
var msg = "El mes de " + Mes + " tiene " + diasdelmes + " días.";
}
alert(msg);
