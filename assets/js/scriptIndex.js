function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")
    console.log(eNombre)
    console.log(vNombre)
    if(vNombre.length >=3){
        console.log("Si cumple")
        eErrorNombre.innerText = ""
        eNombre.style.backgroundColor = "green"
        eNombre.style.color = "white"
    }else{
        console.log("No cumple")
        alert("Debes ingresar mas de 3 caracteres")
        eErrorNombre.innerText = "Debes ingresar mas de 3 caracteres!"
        eNombre.style.backgroundColor = "red"
        eNombre.style.color = "white"
    }
}