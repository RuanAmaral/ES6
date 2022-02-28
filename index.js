window.onload = () => {
    document.getElementById("texto").oninput = () => mudaTexto();
    document.getElementById("colorText").oninput = () => mudaCorTexto();
    document.getElementById("colorBackground").oninput = () => mudaCorBackground();
    document.getElementById("heigthTexto").oninput = () => mudaTamanhoHeigth();
    document.getElementById("widthTexto").oninput = () => mudaTamanhoWidth();
    document.getElementById("borderId").oninput = () => mudaTamanhoBorda();
    document.getElementById("borderRdiusId").oninput = () => mudaBorderRadius();
    document.getElementById("font").oninput = () => mudaFontFamily();
    document.getElementById("fontSizeid").oninput = () => mudaFontSize();

}

function mudaTexto() {
    document.getElementById("h1Id").innerHTML = document.getElementById("texto").value
}

function mudaCorTexto() {
    document.getElementById("h1Id").style.color = document.getElementById("colorText").value
}

function mudaCorBackground() {
    document.getElementById("divH1").style.backgroundColor = document.getElementById("colorBackground").value

}

function mudaTamanhoHeigth() {
    document.getElementById("divH1").style.height = `${document.getElementById("heigthTexto").value}%`
}

function mudaTamanhoWidth() {
    document.getElementById("divH1").style.width = `${document.getElementById("widthTexto").value}%`
}

function mudaTamanhoBorda() {
    document.getElementById("divH1").style.border = `${document.getElementById("borderId").value}px solid`

}

function mudaBorderRadius() {
    document.getElementById("divH1").style.borderRadius = `${document.getElementById("borderRdiusId").value}%`
}

function mudaFontFamily() {
    document.getElementById("h1Id").style.fontFamily = document.getElementById("font").value
    
}

function mudaFontSize() {
 document.getElementById("h1Id").style.fontSize = `${document.getElementById("fontSizeid").value}px` 
}