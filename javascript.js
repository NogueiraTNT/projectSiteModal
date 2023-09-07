// Lista de carros e suas caracteristicas
let listaCarros = [
    {
        "nome": "Carro01",
        "img":"img/carro01.jpg",
        "descricao": "Carrão 01"
    },
    {
        "nome": "Carro02",
        "img":"img/carro02.jpg",
        "descricao": "Carrão 02"
    },
    {
        "nome": "Carro03",
        "img":"img/carro03.jpg",
        "descricao": "Carrão 03"
    },
    {
        "nome": "Carro04",
        "img":"img/carro04.jpg",
        "descricao": "Carrão 04"
    },
    {
        "nome": "Carro05",
        "img":"img/carro05.jpg",
        "descricao": "Carrão 05"
    }
]

// Mapeando Carros e criando divs dinamicas
listaCarros.map((carro, posicao)=>{
    // selecionando a ID mãe onde vou criar as demais divs
    let cardCarros = document.getElementById("cards");
    // Criação de html dianamico pelo JSs
    cardCarros.innerHTML += `
        <div class="col-md-4">
            <div class="card m-2">
                <img src="${carro.img}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${carro.nome}</h5>
                <a href="#" class="btn btn-secondary" onClick="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                </div>
            </div>
        </div>
    `
});

// função que adciona um modal com as caracteristicas do carro
function zoomImg(posicao){
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal(`#zoomImg`).show();
}

function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");

    if (tema === "dark") {
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon"></i>`
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-sun-fill"></i>`
    }
}