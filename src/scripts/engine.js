// Lista de emojis duplicados para o jogo de memória
const emojis = [
    "🤡",
    "🤡",
    "👹",
    "👹",
    "👾",
    "👾",
    "🤖",
    "🤖",
    "👽",
    "👽",
    "🐲",
    "🐲",
    "🐙",
    "🐙",
    "🐈‍⬛",
    "🐈‍⬛",
];

// Array para armazenar as cartas abertas
let openCards = [];

// Embaralhar os emojis
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));

// Criar os elementos do jogo
for (let i = 0; i < emojis.length; i++) {
    // Criar um elemento div para cada emoji
    let box = document.createElement("div");
    box.className = "item";  // Adicionar classe "item" à div
    box.innerHTML = shuffleEmojis[i];  // Colocar o emoji dentro da div
    box.onclick = handleClick;  // Adicionar evento de clique
    document.querySelector(".game").appendChild(box);  // Adicionar a div à área do jogo
}

// Função chamada quando uma carta é clicada
function handleClick() {
    // Verificar se menos de duas cartas estão abertas
    if (openCards.length < 2) {
        this.classList.add('boxOpen');  // Adicionar classe "boxOpen" à carta clicada
        openCards.push(this);  // Adicionar carta clicada ao array de cartas abertas
    }

    // Se duas cartas estiverem abertas, verificar se há uma correspondência
    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);  // Verificar correspondência após 500ms
    }
}

// Função para verificar se as cartas abertas correspondem
function checkMatch() {
    // Se as cartas abertas têm o mesmo emoji
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add('boxMatch');  // Adicionar classe "boxMatch" à primeira carta
        openCards[1].classList.add('boxMatch');  // Adicionar classe "boxMatch" à segunda carta
    } else {
        openCards[0].classList.remove('boxOpen');  // Remover classe "boxOpen" da primeira carta
        openCards[1].classList.remove('boxOpen');  // Remover classe "boxOpen" da segunda carta
    }

    // Limpar array de cartas abertas
    openCards = [];

    // Verificar se todas as cartas foram correspondidas
    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
        alert('Você Venceu');  // Exibir mensagem de vitória
    }
}
