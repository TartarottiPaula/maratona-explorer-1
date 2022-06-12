const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
 "Com certeza!", 
 "Não tenho tanta certeza...", 
 "Não conte com isso.", 
 "Sim, definitivamente!", 
 "Minha resposta é não.", 
 "Você pode contar com isso.", 
 "Melhor não te dizer agora.", 
 "A meu ver, sim.", 
 "Minhas fontes dizem não.", 
 "Provavelmente...não.", 
 "Não é possivel prever agora.", 
 "Sinto boas vibrações a respeito.", 
 "As perspectivas não são tão boas.", 
 "Sim", 
 "Concentre-se e pergunte novamente.", 
 "Sinais apontam que sim.",
 "Não tenha medo das mudanças.",
 "Tem certeza que quer saber a resposta?",
 "Preciso recarregar minha bola de cristal, volte mais tarde!" 
]

//clicar em fazer pergunta
function fazerPergunta() {

if (inputPergunta.value =="") {
alert("Digite sua Pergunta!")
return
}

buttonPerguntar.setAttribute ("disabled" ,true)

const pergunta = "<div>" + inputPergunta.value + "</div>"

  //gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() *totalRespostas)

console.log(respostas[numeroAleatorio])
elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

elementoResposta.style.opacity = 1;

//sumir a resposta depois de 3 segundos
setTimeout(function() {
  elementoResposta.style.opacity = 0;
  buttonPerguntar.removeAttribute ("disabled")

},3000)

}