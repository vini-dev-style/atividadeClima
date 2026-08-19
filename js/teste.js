// Objeto que simula a resposta de dados do servidor/API
const weatherData = {
  city: "Piracicaba (SP)",
  summaryTitle: "Hoje será parecido com ontem",
  summaryText: "Dia ensolarado, com nevoeiro ao amanhecer. As nuvens aumentam bastante à noite.",
  temp: { min: 15, max: 33 },
  sensation: { min: 15, max: 24 },
  rain: "0.0mm",
  humidity: { min: 32, max: 86 },
  wind: "ENE - 6km/h",
  gust: "ENE - 28km/h",
  sun: "06:33h às 17:55h",
  rainbow: "Sem probabilid."
};

// Função responsável por renderizar os dados nos elementos do HTML
function renderWeather(data) {
  document.getElementById('city').innerText = data.city;
  document.getElementById('summary-title').innerText = data.summaryTitle;
  document.getElementById('summary-text').innerText = data.summaryText;
  
  document.getElementById('temp-min').innerText = `${data.temp.min}°`;
  document.getElementById('temp-max').innerText = `${data.temp.max}°`;
  
  document.getElementById('sens-min').innerText = `${data.sensation.min}°`;
  document.getElementById('sens-max').innerText = `${data.sensation.max}°`;
  
  document.getElementById('rain-val').innerText = data.rain;
  
  document.getElementById('hum-min').innerText = `${data.humidity.min}%`;
  document.getElementById('hum-max').innerText = `${data.humidity.max}%`;
  
  // Mantém o ícone interno da seta concatenado com o texto de direção do vento
  document.getElementById('wind-val').innerHTML = `<i class="fa-solid fa-arrow-left arrow-rotate"></i> ${data.wind}`;
  document.getElementById('gust-val').innerHTML = `<i class="fa-solid fa-arrow-left arrow-rotate"></i> ${data.gust}`;
  
  document.getElementById('sun-hours').innerText = data.sun;
  document.getElementById('rainbow-val').innerText = data.rainbow;
}

// Inicializa a renderização quando o documento carregar
document.addEventListener('DOMContentLoaded', () => {
  renderWeather(weatherData);
});
