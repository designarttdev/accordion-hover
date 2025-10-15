// Dados dos cards
const cardsData = [
    {
        image: "images/taj-mahal.jpg",
        title: "Taj Mahal",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, officiis."
    },
    {
        image: "images/marina-bay.jpg",
        title: "Marina Bay",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, officiis."
    },
    {
        image: "images/great-wall.jpg",
        title: "Great Wall",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, officiis."
    },
    {
        image: "images/statue-liberty.jpg",
        title: "Statue Liberty",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, officiis."
    },
    {
        image: "images/fuji-mountain.jpg",
        title: "Fuji Mountain",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, officiis."
    },
    {
        image: "images/statue-liberty.jpg",
        title: "Divine Nature",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, officiis. Descrição  do card 6."
    },
];

// Função para criar um card
function createCard(cardData) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <img src="${cardData.image}" class="image" alt="${cardData.title}">
        <img src="${cardData.image}" class="background" alt="${cardData.title} background">
        <div class="layer">
            <div class="info">
                <h1>${cardData.title}</h1>
                <p>${cardData.description}</p>
            </div>
        </div>
    `;
    
    return card;
}

// Função para renderizar todos os cards
function renderCards() {
    const container = document.getElementById('accordion-container');
    
    // Limpar container antes de adicionar novos cards (prevenção contra duplicação)
    container.innerHTML = '';
    
    cardsData.forEach(cardData => {
        const card = createCard(cardData);
        container.appendChild(card);
    });
}

// Inicializar quando o DOM estiver carregadodocument.addEventListener('DOMContentLoaded', renderCards);