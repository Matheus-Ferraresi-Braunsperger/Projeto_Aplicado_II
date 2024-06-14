function getById(id){
    return document.getElementById(id)
}

getById("domo-id").addEventListener("click", function(event){
    event.preventDefault()
    console.log("domo apertado")
    getById("form-div1").classList.add("hidden")
    getById("domo-div-id").classList.remove("hidden")
})

getById("charrua-id").addEventListener("click", function(event){
    event.preventDefault()
    console.log("charrua apertado")
    getById("form-div1").classList.add("hidden")
    getById("charrua-div-id").classList.remove("hidden")
})

getById("suite-id").addEventListener("click", function(event){
    event.preventDefault()
    console.log("suite apertado")
    getById("form-div1").classList.add("hidden")
    getById("suite-div-id").classList.remove("hidden")
})

getById("chale-id").addEventListener("click", function(event){
    event.preventDefault()
    console.log("chale apertado")
    getById("form-div1").classList.add("hidden")
    getById("chale-div-id").classList.remove("hidden")
})

getById("cabana-id").addEventListener("click", function(event){
    event.preventDefault()
    console.log("cabana apertado")
    getById("form-div1").classList.add("hidden")
    getById("cabana-div-id").classList.remove("hidden")
})

getById("estacionamento-id").addEventListener("click", function(event){
    event.preventDefault()
    console.log("estacionamento apertado")
    getById("form-div1").classList.add("hidden")
    getById("estacionamento-div-id").classList.remove("hidden")
})


