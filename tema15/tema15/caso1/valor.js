//declaracion de variables
var n,d,u;
var rpta="S";

while (rpta.toUpperCase()=="S") {
    general();
    rpta=prompt("Desea ingresar otro numero [S/N]");    
}
alert("Fin del programa");

function general(){
    var xm;
    ingresar();    
    separar();
    xm=calcular(n,d,u);
    document.write(xm+"<br>");        
}
//===========================

function ingresar(){    
    n=parseInt(prompt("Ingrese un numero de 2 digitos"));
    while(n<10 || n>99){
        n=parseInt(prompt("Numero invalido. Vuelva a ingresar Numero de 2 digitos"));
    }
    console.log(n)
}
//===========================

function separar(){
    d=Math.floor(n/10);
    u=n%10;
    console.log("decena: "+d+" unidades: "+u);
}
//===========================

function calcular(v1,v2,v3){ //v1:num, v2:decenas y v3:unidades
var x,y,z,res;
    //V1 ES IMPAR VALOR1=V2^V3 VALOR2=MIN
    //V1 ES   PAR VALOR1=V3^V1 VALOR2=MAX
    if (v1%2!=0) {
        x=Math.pow(v2,v3);
        y=Math.min(v2,v3);
        z="menor";
    } else {
        x=Math.pow(v3,v2);
        y=Math.max(v2,v3);
        z="mayor";        
    }
    /* res="Numero: "+v1+"<br>"+
        "cifra unidades: "+v3+"<br>"+
        "cifra decenas : "+v2+"<br>"+
        v2+"<sup>"+v3+"</sup>"+" = "+x+"<br>"+
        "La Cifra "+z+" es "+y+"<br>"; */
    res=`Numero: ${v1}<br> 
        Cifra unidades: ${v3}<br>
        Cifra decenas: ${v2}<br>
        ${v2} <sup> ${v3} </sup> = ${x}<br>
        La Cifra ${z} es ${y}<br>     `
    return res;
}