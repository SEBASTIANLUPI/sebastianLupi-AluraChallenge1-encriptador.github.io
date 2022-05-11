function encriptar() { 
    var aCodificar = document.querySelector("#textarea").value;
    var encriptado = aCodificar.replace(/[e]/gi,'enter').replace(/[i]/gi,'imes').replace(/[o]/gi,'ober').replace(/[a]/gi,'ai').replace(/[u]/gi,'ufat');
    document.querySelector("#codificado").innerHTML=encriptado;
    document.querySelector("#ocultar").innerHTML="";
    document.querySelector("#textarea").value="";
    console.log(encriptado);
    if (aCodificar == "") { 
        alert("¡No has ingresado ningún mensaje!");
        return true;
    }
}

function desencriptar() {
    var aDesCodificar = document.querySelector("#textarea").value;
    var desencriptar = aDesCodificar.replace(/ai/gi,'a').replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    document.querySelector("#codificado").innerHTML=desencriptar;
    document.querySelector("#ocultar").innerHTML="";
    if (aDesCodificar == "") { 
        alert("¡No has ingresado ningún mensaje!");
        return true;
    }
}

function copiar() {
    var paraCopiar = document.getElementById("codificado");

    paraCopiar.select();
    document.execCommand('copy');
    alert("Copiado con éxito");
    
}



// otra alternativa: Esta la enseñaron Genesis y Ellen el 3/5. me gusto esta forma la tomare como recuerdo

/*
const inputTexto= document.querySelector(".textarea");
const mensaje= document.querySelector(".codificado");

function btnencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar(stringParaEncriptar) {
    let matrizCodigo =[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringParaEncriptar =stringParaEncriptar.toLowerCase();
    for (let i=0; i<matrizCodigo.length; i++){
        if (stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0])
        }
    }
    return stringParaEncriptar
}
*/