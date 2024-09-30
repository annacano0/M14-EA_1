function compararNumeros(a, b) {
    if(a>b){
        console.log(a)
    } else{
        console.log(b)
    } 
}

function suma1a100(){
    let suma = 0;
    for (let i = 0; i < 100; i++) {
        suma+=i
    }
    console.log(suma)
}


function PedraPaper(){
    for (let i = 0; i <= 100; i++) {
            if(i%3==0)console.log("Pedra")
            else if(i%5==0)console.log("Paper")
            else if(i%5==0&&i%3==0)console.log("Tisores")
            else console.log(i)          
        }
    }


function esParell(num){
    if(num%2==0) console.log("es parell")
    else console.log("es senar")
}


function revertirCadena(cadena){
    let cadenaRevertida=cadena.split("").reverse().join("")
    console.log(cadenaRevertida)
}


function factorial(n){
    let factorial=1
    for(let i = 0; i<=n; i++){
        if(i!=0)factorial*=i
    }
    console.log(factorial)
}

function filtrarPositius(array){
    let arrayPositiu=[]
    for(let i = 0; i<=array.length-1; i++){
        if(array[i]>=0) arrayPositiu.push(array[i])   
    }
    console.log(arrayPositiu)
}

function addTask(){
    console.log("add the task");
}

function deleteTasks(){
    console.log("delete tasks")
}