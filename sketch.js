let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de terror?");
  campoAventura = createCheckbox("Gosta de animaçÂo?");
}

function draw() {
  background("red");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(60);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Amor e Monstros";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Modo Avião";          
        } else{
         return "Enola Holmes";
        
        }
      } else {
        if (gostaDeFantasia) {
          return "Para Todos os Garotos que Já Amei ";
        } else {
          return "A Menina e o Velho";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Prazer da Solidão";
    } else {
      return "Reginaldo e as Minhocas";
    }
  }
}
