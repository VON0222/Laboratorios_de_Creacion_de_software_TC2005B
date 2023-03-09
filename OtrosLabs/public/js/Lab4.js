// ejercicio 1

function generar_tabla(){
    let numero = prompt("Da un numero");
    console.log(numero);
    let num = Number(numero);
    let body = document.getElementsByTagName("section")[0];
    
    let tabla = document.createElement("table");
    
    let tblBody = document.createElement("tbody");

    for (let i = 1; i <= num; i++) {
        let hilera = document.createElement("tr");
        let numsqr = i*i;
        let numcube = i*i*i;

        let celda = document.createElement("td");
        let textoCelda = document.createTextNode(i);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        let celda2 = document.createElement("td");
        let textoCelda2 = document.createTextNode(numsqr);
        celda2.appendChild(textoCelda2);
        hilera.appendChild(celda2);

        let celda3 = document.createElement("td");
        let textoCelda3 = document.createTextNode(numcube);
        celda3.appendChild(textoCelda3);
        hilera.appendChild(celda3);

        tblBody.appendChild(hilera);
    }

    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
}
// ejercicio 2
function suma_aleatoria(){ 
    let before = Date.now();
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    let suma = num1 + num2;
    let ans = prompt(num1 + " + " + num2);
    console.log(ans);
    let after = Date.now();
    if(ans == suma){
        alert("Correcto!");
    }
    else{
        alert("Incorrecto...");
    }
    let time = (after - before)/1000;
    alert("Tardaste " + time + " segundos");
}

// ejercicio 3
const arreglo1 = [3, 6, 19, 46, 55, 78, 81, 95, 0, -10, -15, -42];

function contador(array){
    let pos = 0;
    let neg = 0;
    let cero = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            neg++;
        }
        if(array[i] > 0){
            pos++;
        }
        if(array[i] == 0){
            cero++;
        }
    }
    alert("positivos: " + pos + " negativos: " + neg + " ceros: " + cero);
    let respuesta = [pos, neg, cero];
    return respuesta;
}

// ejercicio 4
const matriz1 = [[3, 7, 8], [50, 1, 0], [20, 5, 11]];
function promedios(matrix){
    let arrayP = [];
    for(let i = 0; i < matrix.length; i++){
        let promedio = 0;
        let suma = 0;
        for(let j = 0; j < matrix[i].length; j++){
            suma = suma + matrix[i][j];
        }
        promedio = suma / (matrix[i].length);
        arrayP.push(promedio);
    }
    alert("Array de promedios: " + arrayP);
    return arrayP;
}

// ejercicio 5
let valor = 85392; 
function inverso(num){
    let numstr = String(num);
    let newstr = "";
    for(let cont = numstr.length - 1; cont >= 0; cont--){
        newstr = newstr + numstr[cont];
    }
    alert("El numbero inverso es: " + newstr);
}

// ejercicio 6
let presihatitator = new Object();
presihatitator.pres = "soleado";
presihatitator.temp = "baja";
presihatitator.hot = function(){presihatitator.temp = "alta";}
presihatitator.cold = function(){presihatitator.temp = "baja";}
presihatitator.rain = function(){presihatitator.pres = "lluvioso";}
presihatitator.sun = function(){presihatitator.pres = "soleado";}
presihatitator.show = function(){alert("La temperatura es " + presihatitator.temp + "\n" + "El clima es " + presihatitator.pres);}