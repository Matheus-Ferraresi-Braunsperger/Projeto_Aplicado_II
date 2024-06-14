/* Cadastro Hóspedes JS */
function getById(id){
    return document.getElementById(id)
}


let showDataButton = getById("show-data-button")


showDataButton.addEventListener("click", function(event){
    event.preventDefault()
    getById("form-div-cad").classList.add("hidden")
    getById("show-data-main-div").classList.remove("hidden")
    getById("text-name-box1").classList.add("hidden")
    getById("text-name-box2").classList.add("hidden")
    getById("text-name-box3").classList.remove("hidden")
    getById("text-name-box4").classList.remove("hidden")
    
})

getById("save-data-button").addEventListener("click", function(event){
    event.preventDefault()
    const guestObject ={
        nome: "",
        cpf: "",
        rg: "",
        email: "",
        telefone: ""
    }

    guestObject.nome = getById("form-name").value
    guestObject.cpf = getById("form-cpf").value
    guestObject.rg = getById("form-rg").value
    guestObject.email = getById("form-email").value
    guestObject.telefone = getById("form-phone-number").value

    alert("Cadastro Salvo")

    console.log(guestObject)
})

