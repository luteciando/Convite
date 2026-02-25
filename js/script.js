// =============================
// Elementos
// =============================
const telaInicio = document.getElementById("tela-inicio");
const telaConvite = document.getElementById("tela-convite");
const telaAmizade = document.getElementById("tela-amizade");

const btnNovidade = document.getElementById("btn-novidade");
const btnAmizade = document.getElementById("btn-amizade");
const btnSim = document.getElementById("btn-sim");
const btnNao = document.getElementById("btn-nao");
const btnVoltar = document.getElementById("btn-voltar");

const areaData = document.getElementById("area-data");
const dataEncontro = document.getElementById("data-encontro");
const btnWhats = document.getElementById("btn-whats");

const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btn-musica");

const btnPiada = document.getElementById("btn-piada");

const tituloInicio = document.getElementById("titulo-inicio");
const tituloConvite = document.getElementById("titulo-convite");
const textoData = document.getElementById("texto-data");
const textoAmizade = document.getElementById("texto-amizade");

// Meu número
const Numero = "+5579996839664";

// =============================
// Função para trocar telas
// =============================
function mostrar(tela) {
    document.querySelectorAll(".tela").forEach(t => t.classList.remove("ativa"));
    tela.classList.add("ativa");
}

// =============================
// Nome via URL (?nome=Maria)
// =============================
function pegarNome() {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get("nome");
    return nome ? nome.charAt(0).toUpperCase() + nome.slice(1) : null;
}

const nomePessoa = pegarNome();

if (nomePessoa) {
    tituloInicio.innerHTML = `${nomePessoa}, você quer ver a novidade<br>ou prefere seguir como amigo?`;
    tituloConvite.innerText = `${nomePessoa}, aceita sair comigo?`;
    textoData.innerText = `Qual dia fica melhor para você, ${nomePessoa}?`;
    textoAmizade.innerText = `Tudo bem não me querer desse jeito, ${nomePessoa}. 💔`;
}

// =============================
// Navegação
// =============================
btnNovidade.addEventListener("click", () => mostrar(telaConvite));
btnAmizade.addEventListener("click", () => mostrar(telaAmizade));
btnVoltar.addEventListener("click", () => mostrar(telaInicio));

// =============================
// Lógica do SIM
// =============================
btnSim.addEventListener("click", () => {
    areaData.classList.remove("escondido");
});

btnWhats.addEventListener("click", () => {
    if (!dataEncontro.value) {
        alert("Escolha uma data primeiro!");
        return;
    }

    const data = new Date(dataEncontro.value).toLocaleDateString("pt-BR");

    const mensagem = nomePessoa
        ? `Eu aceito sair com você, ${nomePessoa}! ❤️ O dia que eu escolhi foi: ${data}.`
        : `Eu aceito sair com você! ❤️ O dia que eu escolhi foi: ${data}.`;

    const url = `https://wa.me/${Numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");

    mostrar(telaInicio);
});

// =============================
// Lógica do NÃO → envia piada
// =============================
const piadas = [
    "Eu não posso... tenho que lavar o cabelo do meu peixe hoje 🐠😂",
    "Hoje não dá... estou ocupada sendo perfeita 😎🔥",
    "Não posso, estou tentando dominar o mundo 🤖",
    "Eu recusaria até o Chris Hemsworth, imagina você 😭😂",
    "Desculpa… minha cama não deixa eu sair dela 😴💤"
];

btnNao.addEventListener("click", () => mostrar(telaAmizade));

btnPiada.addEventListener("click", () => {
    const piada = piadas[Math.floor(Math.random() * piadas.length)];

    const mensagem = nomePessoa
        ? `Enquanto ${nomePessoa} não te quero desse jeito 😔\nMas tome uma piadinha para te animar:\n\n${piada}`
        : `Então... não quero sair com você 😔\nMas tome uma piadinha para te animar:\n\n${piada}`;

    const url = `https://wa.me/${Numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
});

// =============================
// Botão da música
// =============================
btnMusica.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
        btnMusica.textContent = "⏸️";
    } else {
        musica.pause();
        btnMusica.textContent = "🎵 Música";
    }
});