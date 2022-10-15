var pedidos = []
var cake
var glazed
var subtotal
var total



function calcular() {
    cake = parseFloat(document.getElementById("cake").value)
    glazed = parseFloat(document.getElementById("glazed").value)
    var preco = 3
    console.log(cake + glazed)
    console.log(glazed)
    if (isNaN(cake) == true && isNaN(glazed) == false) {
        cake = 0
    }
    if (isNaN(glazed) == true && isNaN(cake) == false) {
        glazed = 0
    }
    if (parseInt(cake) == cake && parseInt(glazed) == glazed) {
        console.log(cake)
        console.log(glazed)
        console.log(nome)
        subtotal = (cake + glazed) * preco
        console.log(subtotal)
        var subtotalTela = document.getElementById("subtotal")
        subtotalTela.innerHTML = `<p class='resultados'> O valor do subtotal é de: R$ ${subtotal.toFixed(2)} </p>`
        var taxa = subtotal * 0.091666
        var taxaTela = document.getElementById("taxa")
        taxaTela.innerHTML = `<p class='resultados'> O valor da taxa é de: R$ ${taxa.toFixed(2)} </p>`
        total = subtotal + taxa
        var totalTela = document.getElementById("total")
        totalTela.innerHTML = `<p class='resultados'> O valor total é de: R$ ${total.toFixed(2)} </p>`
    } else {
        alert("Um dos valores digitados não é válido")
    }
}





function pedir() {

    var nome = document.getElementById("nome").value
    var tempo = document.getElementById("tempo").value
    console.log(nome)
    if (nome == "" && tempo == "") {
        alert("Digite um nome e um tempo")
    } else if (nome == "") {
        alert("Digite um nome")
    } else if (tempo == "") {
        alert("Digite um tempo")
    } else {
        calcular()
        pedidos.push({
            nome: nome,
            cake: cake,
            glazed: glazed,
            tempo: tempo,
            subtotal: subtotal,
            total: total
        })
        document.getElementById("nome").value = ""
        document.getElementById("cake").value = ""
        document.getElementById("glazed").value = ""
        document.getElementById("tempo").value = ""

        var subtotalTela = document.getElementById("subtotal")
        subtotalTela.innerHTML = ""
        var taxaTela = document.getElementById("taxa")
        taxaTela.innerHTML = ""
        var totalTela = document.getElementById("total")
        totalTela.innerHTML = ""

    }




}

function mostrarPedidos() {
    pedidosTela = document.getElementById("container4")
    for (var i = 0; pedidos.length > i; i++) {
        pedidosTela.innerHTML += `Nome: ${pedidos[i].nome}  Tempo: ${pedidos[i].tempo} Cake: ${pedidos[i].cake} Glazed: ${pedidos[i].glazed}  Total: R$${(pedidos[i].total).toFixed(2)}                <br> `

        console.log(pedidos)
    }
}