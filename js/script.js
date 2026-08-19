const botaoBuscar = document.getElementById("buscar");

botaoBuscar.addEventListener("click", buscarClima);

function buscarClima() {

    const cidade = document.getElementById("cidade").value.trim();

    if (cidade === "") {
        alert("Digite o nome de uma cidade.");
        return;
    }

    const chaveApi = "df7622edbc8c4800b6f1a2f870860829";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveApi}&units=metric&lang=pt_br`;

    fetch(url)

        .then(function(resposta) {

            if (!resposta.ok) {
                throw new Error("Cidade não encontrada.");
            }

            return resposta.json();
        })

        .then(function(dados) {

            console.log(dados);

            document.getElementById("nomeCidade").textContent =
                dados.name;

            document.getElementById("temperatura").textContent =
                dados.main.temp.toFixed(1);

            document.getElementById("descricao").textContent =
                dados.weather[0].description;

            document.getElementById("sensacao").textContent =
                dados.main.feels_like.toFixed(1);

            document.getElementById("umidade").textContent =
                dados.main.humidity;

            const ventoKmH = dados.wind.speed * 3.6;

            document.getElementById("vento").textContent =
                ventoKmH.toFixed(1);
        })

        .catch(function(erro) {

            console.log("Erro:", erro);

            alert("Não foi possível encontrar a cidade.");
        });
}