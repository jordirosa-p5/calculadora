//Definim una variable on anirem acumulant cada valor que l'usuari 
//premi un dels botons de números, punt decimal o operador matemàtic
let cadena = "0";

function afegeix( valor ) {
    //Funció on afegim un nou valor al final de la cadena
    if ( cadena == "0" ) {
        // Quan cadena té el valor 0, li assignem el valor entrat directament.
        //  així, el '0' que tenia, desapareix
        cadena = valor;
    }else{
        cadena = cadena + valor ; 
    }
    
    //Un cop hem modificat la cadena, la mostrem per pantalla
    document.getElementById("pantalla").value = cadena;
}


function neteja() {
    //Funció per netejar la pantalla i la cadena on anem acumulant els valors premuts
    cadena = "0";
    document.getElementById("pantalla").value = "0";
}


