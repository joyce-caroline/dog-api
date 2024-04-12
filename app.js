const image = document.getElementById("image");
const nome = document.getElementById("nome");
const temperamento = document.getElementById("temperamento");
const peso = document.getElementById("peso");
const tempoDeVida = document.getElementById("tempo-de-vida");

const api = () => {
  fetch("https://api.thedogapi.com/v1/images/search", {
    headers: {
      "x-api-key":
        "live_YRYi7FIOssqLIjPwdtpmStxl9dGE2LEdasOPigdEgdVPL5n0qcJAuTKsY9E9cJGg",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.length > 0 && data[0].url) {
        image.src = data[0].url;
      }
      if (data.length > 0 && data[0].breeds && data[0].breeds.length > 0) {
        nome.innerHTML = data[0].breeds[0].name;
        temperamento.innerHTML = data[0].breeds[0].temperament;
        peso.innerHTML = data[0].breeds[0].weight.metric;
        tempoDeVida.innerHTML = data[0].breeds[0].life_span;
      } else {
        nome.innerHTML = "Raça não encontrada";
        temperamento.innerHTML = "Desconhecido";
        peso.innerHTML = "Desconhecido";
        tempoDeVida.innerHTML = "Desconhecido";
      }
    })
    .catch((error) => console.error("Erro ao buscar dados da API:", error));
};

api();
