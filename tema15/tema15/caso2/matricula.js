window.onload=limpiar;

function calcular(){
    var cc, ciclo,pc,impCurso,impMatr,impTotal;
         
        ingreso();
        cursos();
        matricula();
        total();
}

function cursos(){
    
    switch (ciclo) {
        case 1:
        case 2: pc=300;   
            break;
        case 3:
        case 4: pc=350;
            break;    
        default: pc=400;
            break;
    }
    impCurso=cc*pc;
    console.log(impCurso);
    document.getElementById('boxCursos').value=impCurso;
}

function matricula(){

    if (ciclo==6 && cc==5) {
        impMatr=200;
    } else {
        impMatr=0;
    }
    document.getElementById("boxMatr").value=impMatr;
}

function total(){
  impTotal=impCurso+impMatr;
  document.getElementById('boxTotal').value=impTotal;

}

function ingreso(){   
    cc=parseInt(document.getElementById("cc").value);
    ciclo=parseInt(document.getElementById("ciclo").value);

    if (isNaN(cc) || isNaN(ciclo)) {
        alert("Complete los valores Ciclo y Cantidad de cursos");        
    } 
    

    console.log(ciclo)
}

function limpiar(){
    document.getElementById("cc").value="";
    document.getElementById("ciclo").value="";
    document.getElementById('boxCursos').value="";
    document.getElementById("boxMatr").value="";
    document.getElementById('boxTotal').value="";

}

