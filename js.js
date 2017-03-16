
var pontuacao = 0;

function disp_prompt(){
alert ("Neste jogo vais ser um pinguim, o Sr. Pinguim. O objetivo é percorreres o mapa e escolher bem os locais por onde passas. Terás de responder a algumas adivinhas e se acertares, ganhas pontos! Para sair do jogo, basta levares o Sr. Pinguim à imagem da saída. Cuidado com as armadilhas! Boa sorte! 🙂");
}
 
function up(){
var myclass = new Array('back-right','back-stand','back-left');
var n= Math.round(Math.random()*2);
document.getElementById('character').setAttribute('class',myclass[n]);
var a = document.getElementById('character').style.top;
if (a==0) a="0";
b=parseInt(a)-5;
document.getElementById('character').style.top=b+"px";
verposicao();
}

function down(){
var myclass = new Array('front-right','front-stand','front-left');
var n= Math.round(Math.random()*2);
document.getElementById('character').setAttribute('class',myclass[n]);
var a = document.getElementById('character').style.top;
if (a==0) a="0";
b=parseInt(a)+5;
document.getElementById('character').style.top=b+"px";
verposicao();
}


function right(){
var myclass = new Array('right-right','right-stand','right-left');
var n= Math.round(Math.random()*2);
document.getElementById('character').setAttribute('class',myclass[n]);
var a = document.getElementById('character').style.left;
if (a==0) a="0";
b=parseInt(a)+5;
document.getElementById('character').style.left=b+"px";
verposicao();
}

function left(){
var myclass = new Array('left-right','left-stand','left-left');
var n= Math.round(Math.random()*2);
document.getElementById('character').setAttribute('class',myclass[n]);
var a = document.getElementById('character').style.left;
if (a==0) a="0";
b=parseInt(a)-5;
document.getElementById('character').style.left=b+"px";
verposicao();
}
function Key(e) {
if (e.keyCode===37) left();
if (e.keyCode===38) up();
if (e.keyCode===39) right();
if (e.keyCode===40) down();
}

function verposicao(){
var Y = parseInt(document.getElementById('character').style.top);
var X = parseInt(document.getElementById('character').style.left);
document.getElementById('mensagens').innerHTML = "Y = " + Y + "  X = " +X;


if ((X<161) && (X>151) && (Y<275) && (Y>260)){
	var a=prompt ("Tem orelhas de gato, e gato não é, tem focinho de gato, e gato não é, tem rabo de gato, e gato não é, quem é?");
	if (a=="gata"|| a=="a gata"){
	pontuacao++;
	document.getElementById('ganha').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;
	 alert("Resposta Certa");
	}
	else {alert("Ups....Resposta Errada, a resposta correta é a gata");
	document.getElementById('perde').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;}
}
if ((X<95) && (X>75) && (Y>200) && (Y<215)){
var a=prompt ("O que está no exército, na vassoura e no mapa?");
	if (a=="cabo" || a=="o cabo"){
	pontuacao++;
	document.getElementById('ganha').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;
	 alert("Resposta Certa");
	}
	else{ alert("Ups....Resposta Errada, a resposta correta é o cabo");
	document.getElementById('perde').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;}
}

if ((X<40) && (X>30) && (Y>85) && (Y<100)){
var a=prompt (" O que será, que será, que mesmo sendo nosso,é mais usado pelos outros?");
	if (a=="nome" || a=="o nome"){
	pontuacao++;
	document.getElementById('ganha').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;
	 alert("Resposta Certa");
	}
	else {alert("Ups....Resposta Errada, a resposta correta é o nome");
	document.getElementById('perde').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;}
}

if ((X<120) && (X>100) && (Y>105) && (Y<120)){
var a=prompt ("O que é que tem capa mas não é super-homem, tem folha mas não é árvore, tem orelha mas não é gente, e é surdo mas conta tudo?");
	if (a=="livro" || a=="o livro"){
	pontuacao++;
	document.getElementById('ganha').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;
	 alert("Resposta Certa");
	}
	else { alert("Ups....Resposta Errada, a resposta correta é o livro");
	document.getElementById('perde').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;}
}
if ((X<145) && (X>130) && (Y>150) && (Y<160)){
var a=prompt ("O que é, o que é, que se parece com qualquer pessoa e ela não é?");
	if (a== "fotografia" || a== "foto"	|| a== "retrato" || a=="sombra"){
	pontuacao++;
	document.getElementById('ganha').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;
	 alert("Resposta Certa");
	}
	else {alert("Ups....Resposta Errada, a resposta correta é fotografia");
document.getElementById('perde').play();	
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;}
}
if ((X<220) && (X>205) && (Y>240) && (Y<250)){
var a=prompt ("Lê que logo acharás, com toda a perfeição, que nas primeiras cinco letras, está a solução.");
	if (a== "leque"){
	pontuacao++;
	document.getElementById('ganha').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;
	 alert("Resposta Certa");
	}
	else {alert("Ups....Resposta Errada, a resposta correta é leque");
	document.getElementById('perde').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;}
}
if ((X<215) && (X>200) && (Y>100) && (Y<110)){
var a=prompt ("Qual é coisa, qual é ela, quanto maior, menos se vê?");
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;
	if (a== "escuridão" || a== "escuro" || a== "escuridao"|| a=="buraco"){
	pontuacao++;
	document.getElementById('ganha').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;
	 alert("Resposta Certa");
	}
	else {alert("Ups....Resposta Errada, a resposta correta é escuridão");
document.getElementById('perde').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;}
}
if ((X<160) && (X>145) && (Y>26) && (Y<36)){
var a=prompt ("Qual é coisa , qual é ela que se encontra uma vez num minuto, duas vezes num momento e nenhuma vez no ano?");
	if (a== "letra m" || a== "m" || a== "a letra m"){
	pontuacao++;
	document.getElementById('ganha').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;
	 alert("Resposta Certa");
	}
	else {alert("Ups....Resposta Errada, a resposta correta é a letra m");
	document.getElementById('perde').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;}
}
if ((X<41) && (X>35) && (Y>1) && (Y<10)){
  alert("Ups...O pinguim não gosta de montanhas...Perdeste um ponto :'( ");
	pontuacao--;
	document.getElementById('perde').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;
}
if ((X<76) && (X>66) && (Y>156) && (Y<166)){
  alert("Ups...O pinguim tropeçou nas pedras...Perdeste um ponto :'( ");
	pontuacao--;
	document.getElementById('perde').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;
}
if ((X<241) && (X>231) && (Y>156) && (Y<166)){
  alert("Ups...O pinguim caiu no pântano...Perdeste um ponto :'( ");
	pontuacao--;
	document.getElementById('perde').play();
	document.getElementById('resp').innerHTML = "PONTOS=" + pontuacao;
}
if ((Y>300)){
alert("Ups... estás a sair do mapa");
document.getElementById('perde').play();
}
if ((X>300)){
alert("Ups... estás a sair do mapa");
document.getElementById('perde').play();
}
if ( X<(-10)){
alert("Ups... estás a sair do mapa");
document.getElementById('perde').play();
}
if ( Y <(-15)){
alert("Ups... estás a sair do mapa");
document.getElementById('perde').play();
}
if ((X<235) && (X>220) && (Y>0) && (Y<15)){
alert("Parabéns!!! Chegaste ao fim do jogo, o teu resultado foi "+ pontuacao+ "pontos");
document.getElementById('final').play();
}
}
