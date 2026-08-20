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

            document.getElementById("temp-min").textContent =
                dados.main.temp_min.toFixed(1);

                document.getElementById("temp-max").textContent =
                dados.main.temp_max.toFixed(1);

            document.getElementById("sensa-min").textContent =
                dados.main.feels_like.toFixed(1);

            document.getElementById("sensa-max").textContent =
                dados.main.feels_like.toFixed(1);

            document.getElementById("umida-min").textContent =
                dados.main.humidity;
            
            document.getElementById("umida-max").textContent =
                dados.main.humidity;

            const ventoKmH = dados.wind.speed * 3.6;

            const rajadaKmH = dados.wind.gust *3.6;

            document.getElementById("vento-valor").textContent =
                ventoKmH.toFixed(1);
            
            document.getElementById("rajada-valor").textContent =
                rajadaKmH.toFixed(1);

            function calcularSolPor(){
                const timezone = dados.timezone
                const sunrise = dados.sys.sunrise

                const timestampLocal = (sunrise + timezone) * 1000;
                const dataLocal = new Date(timestampLocal);

                const hora = dataLocal.getUTCHours().toString().padStart(2, '0');
                const minuto = dataLocal.getUTCMinutes().toString().padStart(2, '0');

                document.getElementById('solPor-hora').textContent = hora
                document.getElementById('solPor-minuto').textContent = minuto
            }

            calcularSolPor()

            function calcularSolNascer(){
                const timezone = dados.timezone
                const sunrise = dados.sys.sunset

                const timestampLocal = (sunrise + timezone) * 1000;
                const dataLocal = new Date(timestampLocal);

                const hora = dataLocal.getUTCHours().toString().padStart(2, '0');
                const minuto = dataLocal.getUTCMinutes().toString().padStart(2, '0');

                document.getElementById('solNascer-hora').textContent = hora
                document.getElementById('solNascer-minuto').textContent = minuto
            }

            calcularSolNascer()
        })

        .catch(function(erro) {

            console.log("Erro:", erro);

            alert("Não foi possível encontrar a cidade.");
        });
}