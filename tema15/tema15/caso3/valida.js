var mensaje=""
var rpta="S"
var i=0;
while(rpta.toUpperCase()=="S"){    
    carrera();
    ciclo();
    cursos();
    promedio();
    i++;
    rpta=prompt("Desea Ingresar otro registro [S/N]");         
}
alert(mensaje);
document.write("Cantidad de validaciones: "+i);
//------------------------------------------------------------//
function carrera(){
    let nombre;
    nombre=prompt("Ingrese la carrera [ARTE/BANCA]");
    while(nombre.toUpperCase()!="ARTE"  && nombre.toUpperCase()!="BANCA"){
        nombre=prompt("Dato errado. Ingrese la Carrera [ARTE/BANCA]");
    }
    mensaje+=(i+1)+"\n"+"Carrera: "+nombre.toUpperCase()+"\n";    
}
//------------------------------------------------------------//
function ciclo(){
    let nro;
    nro=parseInt(prompt("Ingrese el ciclo [1-6]"));
    while(nro<1 || nro>6){
        nro=parseInt(prompt("Dato errado. Ingrese el ciclo [1-6]"));
    }
    mensaje+="Ciclo: "+nro+"\n";
}
//------------------------------------------------------------//
function cursos(){
    let cc;
    cc=parseInt(prompt("Ingrese la cantidad de cursos [1-8]"));
    while(cc<1 || cc>8){
        cc=parseInt(prompt("Dato errado. Ingrese la cantidad de cursos [1-8]"));
    }
    mensaje+="Cantidad de cursos: "+cc+"\n";
}
//------------------------------------------------------------//
function promedio(){
    let prom;
    prom=parseFloat(prompt("Ingrese el promedio ponderado [0-20]"));
    while (prom<0 ||prom>20) {
        prom=parseFloat(prompt("Dato errado. Ingrese el promedio ponderado [0-20]"));
    }
    mensaje+="Promedio: "+prom+"\n\n";
}