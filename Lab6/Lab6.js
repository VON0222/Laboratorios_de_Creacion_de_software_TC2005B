function comprobar(){
    let pw1 = document.getElementById("pswd1").value;
    let pw2 = document.getElementById("pswd2").value;
    if (pw1 === "" || pw2 === "") {
        alert("No puede haber campos vacios")
    }
    else {
        let espacio = /\s/;
        let comillas = /\"/;
        if (espacio.test(pw1) || espacio.test(pw2) || comillas.test(pw1) || comillas.test(pw2)) {
            alert("La contraseña contiene caracteres invalidos");
        } 
        
        else {
            if (pw1.length > 15 || pw1.length < 4) {
                alert("La contraseña tiene un tamaño incorrecto");
            } 
            else {
                if (pw1 === pw2){
                    document.getElementById("validación").style.visibility = "visible";
                }
                else {
                    alert("Las contraseñas ingresadas son distintas");
                }
            }
        }
    }
}

document.getElementById("pswd1").onkeydown = () => {
    let input = document.getElementById("pswd1").value;
    const regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g
    let mayus = /[A-Z]/g;
    if (input.length < 6){
        document.getElementById("fuerza").innerHTML = "Contraseña debil";
    }
    else {
        if (input.length < 8 && (regex.test(input) || mayus.test(input))) {
            document.getElementById("fuerza").innerHTML = "Contraseña media";
        }
        else {
            if (input.length > 8 && regex.test(input) && mayus.test(input)) {
                document.getElementById("fuerza").innerHTML = "Contraseña fuerte";
            }
        }
    }
}