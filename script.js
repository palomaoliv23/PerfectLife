let jogador;
let pessoa = ["Joãozinho", "Mariazinha", "Carlinhos", "Aninha", "Pedro", "Sofia", "Lucas", "Isabela", "Gabriel", "Laura", "Matheus", "Manuela", "Rafael", "Alice", "Bruno", "Helena", "Daniel", "Valentina", "Thiago", "Lívia", "Fernando", "Camila", "Gustavo", "Beatriz", "Eduardo", "Juliana", "Marcelo", "Larissa", "Ricardo", "Amanda", "Vitória", "Felipe", "Carolina", "Diego", "Patrícia", "André", "Mônica", "Paulo", "Vanessa"]; // Mais nomes para novas paixões/amigos

function randomMath(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'F5') {
        e.preventDefault();
        return false;
    }

    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault();
        return false;
    }

    if (e.ctrlKey && e.key === 'F5') {
        e.preventDefault();
        return false;
    }

    if (e.shiftKey && e.key === 'F5') {
        e.preventDefault();
        return false;
    }

    if (e.ctrlKey && e.key === 'w') {
        e.preventDefault();
        return false;
    }
});


const paises = {
    // América Latina e Caribe
    "🇦🇬": { nome: "Antígua e Barbuda", expectativaVida: 77.6, dinheiroInicial: 500, felicidade: 55 },
    "🇧🇴": { nome: "Bolívia", expectativaVida: 71.26, dinheiroInicial: 300, felicidade: 40 },    
    "🇦🇷": { nome: "Argentina", expectativaVida: 78.22, dinheiroInicial: 600, felicidade: 55 },
    "🇧🇷": { nome: "Brasil", expectativaVida: 76.96, dinheiroInicial: 500, felicidade: 55 },
    "🇨🇦": { nome: "Canadá", expectativaVida: 84, dinheiroInicial: 1500, felicidade: 68 },
    "🇨🇱": { nome: "Chile", expectativaVida: 83, dinheiroInicial: 500, felicidade: 55 },
    "🇨🇴": { nome: "Colômbia", expectativaVida: 78.08, dinheiroInicial: 450, felicidade: 50 },
    "🇨🇷": { nome: "Costa Rica", expectativaVida: 80.26, dinheiroInicial: 700, felicidade: 65 },
    "🇨🇺": { nome: "Cuba", expectativaVida: 78.00, dinheiroInicial: 400, felicidade: 55 },
    "🇧🇸": { nome: "Bahamas", expectativaVida: 75.00, dinheiroInicial: 800, felicidade: 60 },
    "🇧🇧": { nome: "Barbados", expectativaVida: 75.00, dinheiroInicial: 700, felicidade: 60 },
    "🇧🇿": { nome: "Belize", expectativaVida: 74.00, dinheiroInicial: 350, felicidade: 50 },
    "🇩🇴": { nome: "República Dominicana", expectativaVida: 74.36, dinheiroInicial: 400, felicidade: 50 },
    "🇪🇨": { nome: "Equador", expectativaVida: 78.08, dinheiroInicial: 450, felicidade: 50 },
    "🇸🇻": { nome: "El Salvador", expectativaVida: 73.38, dinheiroInicial: 350, felicidade: 50 },
    "🇬🇹": { nome: "Guatemala", expectativaVida: 70.15, dinheiroInicial: 300, felicidade: 45 },
    "🇭🇳": { nome: "Honduras", expectativaVida: 73.47, dinheiroInicial: 300, felicidade: 45 },
    "🇯🇲": { nome: "Jamaica", expectativaVida: 71, dinheiroInicial: 500, felicidade: 60 },
    "🇲🇽": { nome: "México", expectativaVida: 75.04, dinheiroInicial: 500, felicidade: 60 },
    "🇳🇮": { nome: "Nicarágua", expectativaVida: 74.80, dinheiroInicial: 300, felicidade: 45 },
    "🇵🇦": { nome: "Panamá", expectativaVida: 78.56, dinheiroInicial: 600, felicidade: 55 },
    "🇵🇾": { nome: "Paraguai", expectativaVida: 74.10, dinheiroInicial: 400, felicidade: 50 },
    "🇵🇪": { nome: "Peru", expectativaVida: 76.96, dinheiroInicial: 450, felicidade: 50 },
    "🇺🇾": { nome: "Uruguai", expectativaVida: 78.16, dinheiroInicial: 800, felicidade: 60 },
    "🇻🇪": { nome: "Venezuela", expectativaVida: 72.89, dinheiroInicial: 200, felicidade: 45 },
    "🇬🇾": { nome: "Guiana", expectativaVida: 69.80, dinheiroInicial: 300, felicidade: 50 },
    "🇱🇨": { nome: "Santa Lúcia", expectativaVida: 74.12, dinheiroInicial: 400, felicidade: 55 },
    "🇸🇷": { nome: "Suriname", expectativaVida: 74, dinheiroInicial: 600, felicidade: 48 },
    "🇹🇹": { nome: "Trinidad e Tobago", expectativaVida: 76, dinheiroInicial: 700, felicidade: 60 },
    "🇲🇸": { nome: "Montserrat", expectativaVida: 76.01, dinheiroInicial: 400, felicidade: 55 },
    "🇳🇷": { nome: "Nauru", expectativaVida: 64.19, dinheiroInicial: 200, felicidade: 50 },
    "🇺🇸": { nome: "Estados Unidos", expectativaVida: 76.99, dinheiroInicial: 600, felicidade: 60 },
    // Europa
    "🇦🇱": { nome: "Albânia", expectativaVida: 78.57, dinheiroInicial: 600, felicidade: 55 },
    "🇦🇹": { nome: "Áustria", expectativaVida: 82.64, dinheiroInicial: 1500, felicidade: 60 },
    "🇧🇾": { nome: "Bielorrússia", expectativaVida: 72.17, dinheiroInicial: 500, felicidade: 50 },
    "🇧🇪": { nome: "Bélgica", expectativaVida: 81.88, dinheiroInicial: 1400, felicidade: 60 },
    "🇧🇦": { nome: "Bósnia Hezergóvina", expectativaVida: 77.5, dinheiroInicial: 1000, felicidade: 50},
    "🇧🇬": { nome: "Bulgária", expectativaVida: 72.12, dinheiroInicial: 700, felicidade: 50 },
    "🇭🇷": { nome: "Croácia", expectativaVida: 77.60, dinheiroInicial: 1000, felicidade: 55 },
    "🇨🇾": { nome: "Chipre", expectativaVida: 82.23, dinheiroInicial: 1300, felicidade: 60 },
    "🇨🇿": { nome: "Chequia", expectativaVida: 79.80, dinheiroInicial: 1200, felicidade: 58 },
    "🇩🇰": { nome: "Dinamarca", expectativaVida: 81.00, dinheiroInicial: 1600, felicidade: 68 },
    "🇪🇪": { nome: "Estônia", expectativaVida: 78.80, dinheiroInicial: 1100, felicidade: 58 },
    "🇫🇮": { nome: "Finlândia", expectativaVida: 82.10, dinheiroInicial: 1500, felicidade: 70 },
    "🇫🇷": { nome: "França", expectativaVida: 82.55, dinheiroInicial: 1400, felicidade: 62 },
    "🇩🇪": { nome: "Alemanha", expectativaVida: 81.45, dinheiroInicial: 1400, felicidade: 60 },
    "🇬🇷": { nome: "Grécia", expectativaVida: 81.75, dinheiroInicial: 1200, felicidade: 55 },
    "🇭🇺": { nome: "Hungria", expectativaVida: 76.15, dinheiroInicial: 1000, felicidade: 52 },
    "🇮🇸": { nome: "Islândia", expectativaVida: 82.65, dinheiroInicial: 1600, felicidade: 68 },
    "🇮🇪": { nome: "Irlanda", expectativaVida: 82.81, dinheiroInicial: 1500, felicidade: 66 },
    "🇮🇹": { nome: "Itália", expectativaVida: 83.10, dinheiroInicial: 1300, felicidade: 60 },
    "🇽🇰": { nome: "Kosovo", expectativaVida: 74.00, dinheiroInicial: 500, felicidade: 50 },
    "🇱🇻": { nome: "Letônia", expectativaVida: 75.69, dinheiroInicial: 900, felicidade: 53 },
    "🇱🇹": { nome: "Lituânia", expectativaVida: 76.75, dinheiroInicial: 950, felicidade: 55 },
    "🇱🇺": { nome: "Luxemburgo", expectativaVida: 82.62, dinheiroInicial: 1800, felicidade: 66 },
    "🇲🇹": { nome: "Malta", expectativaVida: 82.94, dinheiroInicial: 1300, felicidade: 58 },
    "🇲🇩": { nome: "Moldávia", expectativaVida: 72.23, dinheiroInicial: 500, felicidade: 48 },
    "🇲🇨": { nome: "Mônaco", expectativaVida: 87.01, dinheiroInicial: 2000, felicidade: 65 },
    "🇲🇪": { nome: "Montenegro", expectativaVida: 76.15, dinheiroInicial: 700, felicidade: 52 },
    "🇳🇱": { nome: "Holanda", expectativaVida: 82.80, dinheiroInicial: 1500, felicidade: 66 },
    "🇳🇴": { nome: "Noruega", expectativaVida: 83.00, dinheiroInicial: 1600, felicidade: 68 },
    "🇵🇱": { nome: "Polônia", expectativaVida: 77.40, dinheiroInicial: 1000, felicidade: 55 },
    "🇵🇹": { nome: "Portugal", expectativaVida: 81.70, dinheiroInicial: 1200, felicidade: 58 },
    "🇷🇴": { nome: "Romênia", expectativaVida: 75.90, dinheiroInicial: 900, felicidade: 53 },
    "🇷🇺": { nome: "Rússia", expectativaVida: 70.06, dinheiroInicial: 700, felicidade: 48 },
    "🇷🇸": { nome: "Sérvia", expectativaVida: 75.00, dinheiroInicial: 800, felicidade: 52 },
    "🇸🇰": { nome: "Eslováquia", expectativaVida: 77.70, dinheiroInicial: 1000, felicidade: 54 },
    "🇸🇮": { nome: "Eslovênia", expectativaVida: 81.10, dinheiroInicial: 1300, felicidade: 58 },
    "🇪🇸": { nome: "Espanha", expectativaVida: 83.05, dinheiroInicial: 1300, felicidade: 60 },
    "🇸🇪": { nome: "Suécia", expectativaVida: 82.20, dinheiroInicial: 1500, felicidade: 67 },
    "🇨🇭": { nome: "Suíça", expectativaVida: 84.25, dinheiroInicial: 1800, felicidade: 68 },
    "🇬🇧": { nome: "Reino Unido", expectativaVida: 81.77, dinheiroInicial: 1400, felicidade: 58 },
    "🇺🇦": { nome: "Ucrânia", expectativaVida: 71.35, dinheiroInicial: 400, felicidade: 45 },
    // Ásia
    "🇦🇫": { nome: "Afeganistão", expectativaVida: 64.24, dinheiroInicial: 200, felicidade: 40 },
    "🇦🇲": { nome: "Armênia", expectativaVida: 75.47, dinheiroInicial: 600, felicidade: 50 },
    "🇦🇿": { nome: "Azerbaijão", expectativaVida: 73.94, dinheiroInicial: 700, felicidade: 50 },
    "🇧🇭": { nome: "Bahrein", expectativaVida: 78.10, dinheiroInicial: 1200, felicidade: 52 },
    "🇧🇩": { nome: "Bangladesh", expectativaVida: 72.70, dinheiroInicial: 400, felicidade: 48 },
    "🇧🇹": { nome: "Butão", expectativaVida: 70.60, dinheiroInicial: 500, felicidade: 58 },
    "🇧🇳": { nome: "Brunei", expectativaVida: 76.30, dinheiroInicial: 1300, felicidade: 55 },
    "🇰🇭": { nome: "Camboja", expectativaVida: 70.00, dinheiroInicial: 400, felicidade: 50 },
    "🇨🇳": { nome: "China", expectativaVida: 78.21, dinheiroInicial: 800, felicidade: 52 },
    "🇮🇳": { nome: "Índia", expectativaVida: 70.48, dinheiroInicial: 500, felicidade: 50 },
    "🇮🇩": { nome: "Indonésia", expectativaVida: 72.30, dinheiroInicial: 600, felicidade: 52 },
    "🇮🇷": { nome: "Irã", expectativaVida: 76.14, dinheiroInicial: 800, felicidade: 48 },
    "🇮🇶": { nome: "Iraque", expectativaVida: 71.60, dinheiroInicial: 600, felicidade: 45 },
    "🇮🇱": { nome: "Israel", expectativaVida: 83.52, dinheiroInicial: 1500, felicidade: 65 },
    "🇯🇵": { nome: "Japão", expectativaVida: 84.95, dinheiroInicial: 1400, felicidade: 60 },
    "🇯🇴": { nome: "Jordânia", expectativaVida: 74.60, dinheiroInicial: 700, felicidade: 50 },
    "🇰🇿": { nome: "Cazaquistão", expectativaVida: 71.55, dinheiroInicial: 700, felicidade: 50 },
    "🇰🇼": { nome: "Kuwait", expectativaVida: 77.25, dinheiroInicial: 1400, felicidade: 53 },
    "🇰🇬": { nome: "Quirguistão", expectativaVida: 71.20, dinheiroInicial: 500, felicidade: 48 },
    "🇱🇦": { nome: "Laos", expectativaVida: 68.30, dinheiroInicial: 400, felicidade: 45 },
    "🇱🇧": { nome: "Líbano", expectativaVida: 77.30, dinheiroInicial: 800, felicidade: 45 },
    "🇲🇾": { nome: "Malásia", expectativaVida: 75.00, dinheiroInicial: 900, felicidade: 55 },
    "🇲🇻": { nome: "Maldivas", expectativaVida: 79.80, dinheiroInicial: 1000, felicidade: 58 },
    "🇲🇳": { nome: "Mongólia", expectativaVida: 70.10, dinheiroInicial: 500, felicidade: 48 },
    "🇲🇲": { nome: "Mianmar", expectativaVida: 67.30, dinheiroInicial: 300, felicidade: 40 },
    "🇳🇵": { nome: "Nepal", expectativaVida: 70.90, dinheiroInicial: 400, felicidade: 50 },
    "🇰🇵": { nome: "Coreia do Norte", expectativaVida: 72.40, dinheiroInicial: 300, felicidade: 40 },
    "🇰🇷": { nome: "Coreia do Sul", expectativaVida: 83.63, dinheiroInicial: 1400, felicidade: 58 },
    "🇴🇲": { nome: "Omã", expectativaVida: 77.10, dinheiroInicial: 1200, felicidade: 52 },
    "🇵🇰": { nome: "Paquistão", expectativaVida: 66.60, dinheiroInicial: 300, felicidade: 45 },
    "🇵🇸": { nome: "Palestina", expectativaVida: 73.40, dinheiroInicial: 400, felicidade: 42 },
    "🇵🇭": { nome: "Filipinas", expectativaVida: 71.00, dinheiroInicial: 600, felicidade: 50 },
    "🇶🇦": { nome: "Catar", expectativaVida: 80.65, dinheiroInicial: 1500, felicidade: 60 },
    "🇸🇦": { nome: "Arábia Saudita", expectativaVida: 75.80, dinheiroInicial: 1400, felicidade: 55 },
    "🇸🇬": { nome: "Singapura", expectativaVida: 85.66, dinheiroInicial: 2000, felicidade: 65 },
    "🇱🇰": { nome: "Sri Lanka", expectativaVida: 76.00, dinheiroInicial: 700, felicidade: 55 },
    "🇸🇾": { nome: "Síria", expectativaVida: 69.00, dinheiroInicial: 300, felicidade: 38 },
    "🇹🇯": { nome: "Tajiquistão", expectativaVida: 71.90, dinheiroInicial: 500, felicidade: 47 },
    "🇹🇭": { nome: "Tailândia", expectativaVida: 78.00, dinheiroInicial: 800, felicidade: 60 },
    "🇹🇷": { nome: "Turquia", expectativaVida: 77.74, dinheiroInicial: 900, felicidade: 55 },
    "🇹🇲": { nome: "Turcomenistão", expectativaVida: 68.00, dinheiroInicial: 400, felicidade: 45 },
    "🇦🇪": { nome: "Emirados Árabes Unidos", expectativaVida: 79.10, dinheiroInicial: 1500, felicidade: 60 },
    "🇺🇿": { nome: "Uzbequistão", expectativaVida: 71.10, dinheiroInicial: 500, felicidade: 50 },
    "🇻🇳": { nome: "Vietnã", expectativaVida: 75.70, dinheiroInicial: 600, felicidade: 52 },
    "🇾🇪": { nome: "Iêmen", expectativaVida: 66.10, dinheiroInicial: 200, felicidade: 35 },
    "🇻🇦": { nome: "Santa Sé", expectativaVida: 83.00, dinheiroInicial: 1000, felicidade: 70 },
  // África
    "🇩🇿": { nome: "Argélia", expectativaVida: 76.7, dinheiroInicial: 600, felicidade: 50 },
    "🇦🇴": { nome: "Angola", expectativaVida: 63.1, dinheiroInicial: 350, felicidade: 45 },
    "🇧🇯": { nome: "Benim", expectativaVida: 63.4, dinheiroInicial: 300, felicidade: 45 },
    "🇧🇼": { nome: "Botsuana", expectativaVida: 62.3, dinheiroInicial: 350, felicidade: 45 },
    "🇧🇫": { nome: "Burquina Faso", expectativaVida: 62.7, dinheiroInicial: 300, felicidade: 45 },
    "🇧🇮": { nome: "Burundi", expectativaVida: 63.8, dinheiroInicial: 250, felicidade: 45 },
    "🇨🇻": { nome: "Cabo Verde", expectativaVida: 74.0, dinheiroInicial: 500, felicidade: 50 },
    "🇨🇲": { nome: "Camarões", expectativaVida: 62.4, dinheiroInicial: 300, felicidade: 45 },
    "🇨🇩": { nome: "República Democrática do Congo", expectativaVida: 62.4, dinheiroInicial: 250, felicidade: 45 },
    "🇨🇮": { nome: "Costa do Marfim", expectativaVida: 62.9, dinheiroInicial: 300, felicidade: 45 },
    "🇪🇬": { nome: "Egito", expectativaVida: 68, dinheiroInicial: 250, felicidade: 54},
    "🇪🇷": { nome: "Eritreia", expectativaVida: 68.9, dinheiroInicial: 300, felicidade: 45 },
    "🇪🇹": { nome: "Etiópia", expectativaVida: 68.7, dinheiroInicial: 300, felicidade: 45 },
    "🇬🇦": { nome: "Gabão", expectativaVida: 66.5, dinheiroInicial: 400, felicidade: 45 },
    "🇬🇭": { nome: "Gana", expectativaVida: 66.3, dinheiroInicial: 350, felicidade: 45 },
    "🇬🇲": { nome: "Gâmbia", expectativaVida: 65, dinheiroInicial: 300, felicidade: 30 },
    "🇬🇳": { nome: "Guiné", expectativaVida: 61.0, dinheiroInicial: 250, felicidade: 40 },
    "🇬🇾": { nome: "Guiana", expectativaVida: 70.3, dinheiroInicial: 300, felicidade: 50 },
    "🇰🇪": { nome: "Quênia", expectativaVida: 66.1, dinheiroInicial: 300, felicidade: 45 },
    "🇱🇸": { nome: "Lesoto", expectativaVida: 50.8, dinheiroInicial: 200, felicidade: 40 },
    "🇲🇬": { nome: "Madagáscar", expectativaVida: 67.6, dinheiroInicial: 250, felicidade: 45 },
    "🇲🇼": { nome: "Malawi", expectativaVida: 65.6, dinheiroInicial: 250, felicidade: 45 },
    "🇲🇱": { nome: "Mali", expectativaVida: 62.8, dinheiroInicial: 300, felicidade: 45 },
    "🇲🇷": { nome: "Mauritânia", expectativaVida: 68.4, dinheiroInicial: 300, felicidade: 45 },
    "🇲🇺": { nome: "Maurício", expectativaVida: 75.3, dinheiroInicial: 600, felicidade: 55 },
    "🇲🇦": { nome: "Marrocos", expectativaVida: 76.9, dinheiroInicial: 500, felicidade: 50 },
    "🇲🇿": { nome: "Moçambique", expectativaVida: 55.7, dinheiroInicial: 250, felicidade: 40 },
    "🇳🇦": { nome: "Namíbia", expectativaVida: 64.6, dinheiroInicial: 350, felicidade: 45 },
    "🇳🇪": { nome: "Níger", expectativaVida: 63.3, dinheiroInicial: 250, felicidade: 45 },
    "🇳🇬": { nome: "Nigéria", expectativaVida: 62.6, dinheiroInicial: 250, felicidade: 45 },
    "🇷🇼": { nome: "Ruanda", expectativaVida: 69.1, dinheiroInicial: 300, felicidade: 50 },
    "🇸🇳": { nome: "Senegal", expectativaVida: 68.6, dinheiroInicial: 300, felicidade: 50 },
    "🇸🇱": { nome: "Serra Leoa", expectativaVida: 60.8, dinheiroInicial: 250, felicidade: 45 },
    "🇸🇴": { nome: "Somália", expectativaVida: 55.3, dinheiroInicial: 200, felicidade: 40 },
    "🇿🇦": { nome: "África do Sul", expectativaVida: 65.3, dinheiroInicial: 300, felicidade: 45 },
    "🇸🇸": { nome: "Sudão do Sul", expectativaVida: 62.8, dinheiroInicial: 200, felicidade: 40 },
    "🇸🇩": { nome: "Sudão", expectativaVida: 66.7, dinheiroInicial: 250, felicidade: 45 },
    "🇹🇿": { nome: "Tanzânia", expectativaVida: 67.3, dinheiroInicial: 300, felicidade: 45 },
    "🇹🇬": { nome: "Togo", expectativaVida: 64.3, dinheiroInicial: 250, felicidade: 45 },
    "🇺🇬": { nome: "Uganda", expectativaVida: 66.7, dinheiroInicial: 300, felicidade: 45 },
    "🇿🇲": { nome: "Zâmbia", expectativaVida: 62.5, dinheiroInicial: 250, felicidade: 45 },
    "🇿🇼": { nome: "Zimbábue", expectativaVida: 60.7, dinheiroInicial: 250, felicidade: 45 },
    // Oceania
    "🇦🇺": { nome: "Austrália", expectativaVida: 84.4, dinheiroInicial: 1500, felicidade: 55 },
    "🇳🇿": { nome: "Nova Zelândia", expectativaVida: 83.2, dinheiroInicial: 1400, felicidade: 55 },
    "🇫🇯": { nome: "Fiji", expectativaVida: 67.3, dinheiroInicial: 300, felicidade: 50 },
    "🇼🇸": { nome: "Samoa", expectativaVida: 73.2, dinheiroInicial: 350, felicidade: 50 },
    "🇸🇧": { nome: "Ilhas Salomão", expectativaVida: 72.3, dinheiroInicial: 300, felicidade: 50 },
    "🇵🇬": { nome: "Papua-Nova Guiné", expectativaVida: 65.8, dinheiroInicial: 300, felicidade: 45 },
    "🇲🇭": { nome: "Ilhas Marshall", expectativaVida: 71.0, dinheiroInicial: 350, felicidade: 50 },
    "🇫🇲": { nome: "Micronésia", expectativaVida: 66.5, dinheiroInicial: 300, felicidade: 45 },
    "🇰🇮": { nome: "Kiribati", expectativaVida: 68.2, dinheiroInicial: 250, felicidade: 45 },
    "🇹🇻": { nome: "Tuvalu", expectativaVida: 66.8, dinheiroInicial: 250, felicidade: 45 },
    "🇹🇴": { nome: "Tonga", expectativaVida: 72.9, dinheiroInicial: 300, felicidade: 50 },
    "🇻🇺": { nome: "Vanuatu", expectativaVida: 70.3, dinheiroInicial: 300, felicidade: 50 },
    "🇵🇼": { nome: "Palau", expectativaVida: 73.6, dinheiroInicial: 400, felicidade: 50 },
    "🇳🇷": { nome: "Nauru", expectativaVida: 61.3, dinheiroInicial: 250, felicidade: 45 },
    "🇲🇸": { nome: "Montserrat", expectativaVida: 76.0, dinheiroInicial: 400, felicidade: 50 }
};

// Definições de Carreira
const carreiras = {
    // criatividade
    "Programador": {
    salarioBase: 3000, reqInteligencia: 60, reqEscolaridade: 12, reqEscolaridadem: 0,
    niveis: [
    { nome: "Faculdade de programação", salario: 0, experiencia: 0 },
    { nome: "Dev Junior", salario: 1500, experienciaNecessaria: 3 },
    { nome: "Dev Pleno", salario: 2500, experienciaNecessaria: 5},
    { nome: "Dev Senior", salario: 11400, experienciaNecessaria: 7},
    { nome: "Supervisor", salario: 17000, experienciaNecessaria: 9},
    { nome: "Chefe de Departamento", salario: 20000, experienciaNecessaria: 10}
    ]
    },

    // comunicação
    "Médico": {
    salarioBase: 3000, reqInteligencia: 100, reqEscolaridade: 12, reqEscolaridadem: 0,
    niveis: [
    { nome: "Faculdade de medicina", salario: 0, experienciaNecessaria: 0},
    { nome: "Interno", salario: 600, experienciaNecessaria: 5},
    { nome: "Residente", salario: 4000, experienciaNecessaria: 8},
    { nome: "Clínico Geral", salario: 14000, experienciaNecessaria: 10},
    { nome: "Especialista", salario: 20000, experienciaNecessaria: 15},
    { nome: "Cirurgião", salario: 24000, experienciaNecessaria: 20}
    ]
    },

    // liderança
    "Advogado": {
    salarioBase: 2500, reqInteligencia: 75, reqEscolaridade: 12, reqEscolaridadem: 0,
    niveis: [
    { nome: "Faculdade de advocacia", salario: 0, experienciaNecessaria: 0},
    { nome: "Advogado Júnior", salario: 3700, experienciaNecessaria: 4},
    { nome: "Advogado Pleno", salario: 5700, experienciaNecessaria: 6},
    { nome: "Advogado Sênior", salario: 11000, experienciaNecessaria: 8},
    { nome: "Advogado Master", salario: 13000, experienciaNecessaria: 10},
    { nome: "Juiz", salario: 30000, experienciaNecessaria: 15}
    ]
    },

    // liderança
    "Engenheiro": {
    salarioBase: 2200, reqInteligencia: 70, reqEscolaridade: 12, reqEscolaridadem: 0,
    niveis: [
    {nome: "Faculdade de Engenharia", salario: 0, experienciaNecessaria: 0},
    { nome: "Engenheiro Júnior", salario: 8400, experienciaNecessaria: 4},
    { nome: "Engenheiro Pleno", salario: 10400, experienciaNecessaria: 7},
    { nome: "Engenheiro Sênior", salario: 14000, experienciaNecessaria: 8},
    { nome: "Gerente de Projeto", salario: 16400, experienciaNecessaria: 9},
    { nome: "Diretor de Engenharia", salario: 24400, experienciaNecessaria: 10}
    ]
    },

    // comunicação
    "Artista": {
    salarioBase: 1200, reqInteligencia: 50, reqEscolaridade: 12, reqEscolaridadem: 0,
    niveis: [
    { nome: "Artista em Ascensão", salario: 1500, experienciaNecessaria: 0},
    { nome: "Artista Reconhecido", salario: 3000, experienciaNecessaria: 4},
    { nome: "Artista Global", salario: 6000, experienciaNecessaria: 9}
    ]
    },

    // liderança e comunicação
    "Professor": {
    salarioBase: 1800, reqInteligencia: 65, reqEscolaridade: 12, reqEscolaridadem: 0,
    niveis: [
    {nome: "Faculdade de Pedagogia", salario: 0, experienciaNecessaria: 0},
    { nome: "Professor Júnior", salario: 2200, experienciaNecessaria: 4},
    { nome: "Professor Pleno", salario: 3000, experienciaNecessaria: 6},
    { nome: "Professor Sênior", salario: 3600, experienciaNecessaria: 8},
    { nome: "Coordenador", salario: 4000, experienciaNecessaria: 9},
    { nome: "Diretor Escolar", salario: 6600, experienciaNecessaria: 12}
    ]
    },

    // criatividade e comunicação
    "Empreendedor": {
    salarioBase: 1000, reqInteligencia: 60, reqEscolaridade: 12, reqEscolaridadem: 0,
    niveis: [
    { nome: "Pequeno Empresário", salario: 4600, experienciaNecessaria: 0},
    { nome: "Empresário de Sucesso", salario: 7000, experienciaNecessaria: 5},
    { nome: "Magnata", salario: 14000, experienciaNecessaria: 8}
    ]
    },

    // criatividade
    "Cientista": {
    salarioBase: 2800, reqInteligencia: 85, reqEscolaridade: 12, reqEscolaridadem: 0,
    niveis: [
    { nome: "Assistente de Pesquisa", salario: 3000, experienciaNecessaria: 0},
    { nome: "Pesquisador Pleno", salario: 4000, experienciaNecessaria: 3},
    { nome: "Pesquisador Sênior", salario: 8000, experienciaNecessaria: 6},
    { nome: "Líder de Laboratório", salario: 12000, experienciaNecessaria: 9},
    { nome: "Diretor de Pesquisa", salario: 20000, experienciaNecessaria: 10}
    ]
    },

    // liderança
    "Policial": {
    salarioBase: 1500, reqInteligencia: 55, reqEscolaridadem: 12, reqEscolaridade: 12,
    niveis: [
    { nome: "Soldado", salario: 4400, experienciaNecessaria: 0},
    { nome: "Cabo", salario: 6400, experienciaNecessaria: 2},
    { nome: "Sargento", salario: 7600, experienciaNecessaria: 4},
    { nome: "Tenente", salario: 14000, experienciaNecessaria: 6},
    { nome: "Capitão", salario: 16000, experienciaNecessaria: 8},
    { nome: "Coronel", salario: 30000, experienciaNecessaria: 18}
    ]
    },

    // criatividade
    "Chef de Cozinha": {
    salarioBase: 1400, reqInteligencia: 60, reqEscolaridade: 12, reqEscolaridadem: 0,
    niveis: [
    { nome: "Auxiliar de Cozinha", salario: 1200, experienciaNecessaria: 0},
    { nome: "Faculdade de Gastronomia", salario: 1200, experienciaNecessaria: 1},
    { nome: "Cozinheiro", salario: 2000, experienciaNecessaria: 5},
    { nome: "Sous Chef", salario: 3500, experienciaNecessaria: 7},
    { nome: "Chef Executivo", salario: 7000, experienciaNecessaria: 9},
    { nome: "Chef Famoso", salario: 12000, experienciaNecessaria: 10}
    ]
    },

    // liderança
    "Piloto": {
    salarioBase: 2500, reqInteligencia: 75, reqEscolaridade: 12, reqEscolaridadem: 0,
    niveis: [
    { nome: "Copiloto", salario: 2500, experienciaNecessaria: 3},
    { nome: "Piloto Comercial", salario: 6000, experienciaNecessaria: 4},
    { nome: "Piloto de Linha Aérea", salario: 12000, experienciaNecessaria: 8},
    { nome: "Instrutor de Voo", salario: 16000, experienciaNecessaria: 12},
    { nome: "Comandante Internacional", salario: 25000, experienciaNecessaria: 15}
    ]
    },

    // criatividade
    "Jogador de Futebol": {
    salarioBase: 1000, reqInteligencia: 45, reqEscolaridade: 0, reqEscolaridadem: 0,
    niveis: [
    { nome: "Jogador de Base", salario: 800, experienciaNecessaria: 0 },
    { nome: "Jogador Profissional", salario: 5000, experienciaNecessaria: 2},
    { nome: "Titular de Elite", salario: 15000, experienciaNecessaria: 4},
    { nome: "Craque Internacional", salario: 40000, experienciaNecessaria: 6}
    ]
    },

    // comunicação
    "Youtuber": {
    salarioBase: 800, reqInteligencia: 50, reqEscolaridade: 0, reqEscolaridadem: 0,
    niveis: [
    { nome: "Criador Iniciante", salario: 1000, experienciaNecessaria: 0 },
    { nome: "Criador Popular", salario: 3000, experienciaNecessaria: 2},
    { nome: "Influencer", salario: 7000, experienciaNecessaria: 3},
    { nome: "Celebridade Digital", salario: 15000, experienciaNecessaria: 6}
    ]
    },

    // comunicação e liderança
    "Político": {
    salarioBase: 2500, reqInteligencia: 70, reqEscolaridade: 12, reqEscolaridadem: 0,
    niveis: [
    { nome: "Vereador", salario: 3000, experienciaNecessaria: 0},
    { nome: "Deputado", salario: 10000, experienciaNecessaria: 10},
    { nome: "Senador", salario: 20000, experienciaNecessaria: 15},
    { nome: "Governador", salario: 35000, experienciaNecessaria: 25},
    { nome: "Presidente", salario: 50000, experienciaNecessaria: 30}
    ]
    },

    // liderança
    "Militar": {
    salarioBase: 1500, reqInteligencia: 60, reqEscolaridadem: 12, reqEscolaridade: 0,
    niveis: [
    { nome: "Recruta", salario: 1200, experienciaNecessaria: 0 },
    { nome: "Cabo", salario: 2000, experienciaNecessaria: 2},
    { nome: "Sargento", salario: 3200, experienciaNecessaria: 5},
    { nome: "Tenente", salario: 4500, experienciaNecessaria: 7},
    { nome: "General", salario: 10000, experienciaNecessaria: 13}
    ]
    },
    // criatividade
    "Cientista de Dados": {
    salarioBase: 3500, reqInteligencia: 85, reqEscolaridade: 12, reqEscolaridadem: 0,
    niveis: [
    {nome: "Faculdade de Ciências de Dados", salario: 0, experienciaNecessaria: 0},
    { nome: "Analista de Dados", salario: 3000, experienciaNecessaria: 4},
    { nome: "Cientista de Dados Júnior", salario: 6000, experienciaNecessaria: 6},
    { nome: "Cientista de Dados Pleno", salario: 10000, experienciaNecessaria: 7},
    { nome: "Cientista de Dados Sênior", salario: 18000, experienciaNecessaria: 10},
    { nome: "Head de Dados", salario: 30000, experienciaNecessaria: 13}
    ]
    },

    // criatividade
    "Farmaceutico":{
    salarioBase: 4600, reqInteligencia: 60, reqEscolaridade: 12, reqEscolaridadem: 0,
    niveis: [
    {nome: "Faculdade de Farmácia", salario: 0, experienciaNecessaria: 0},
    {nome: "Recém-formado", salario: 3000, experienciaNecessaria: 4},
    {nome: "Farmacêutico (Pleno/Sênior)", salario: 4500, experienciaNecessaria: 6},
    {nome: "Responsável Técnico (RT)", salario: 5000, experienciaNecessaria: 8},
    {nome: "Gerente de Farmácia / Gestão", salario: 6000, experienciaNecessaria: 10},

    ]
    },

    // liderança
    "Perito Criminal":{
    salarioBase: 11000, reqInteligencia: 70, reqEscolaridade: 12, reqEscolaridadem: 0,
    niveis: [
    {nome: "Auxiliar de Papiloscopista / Agente", salario: 4500, experienciaNecessaria: 2},
    {nome: "Investigador / Escrivão", salario: 5800, experienciaNecessaria: 4},
    {nome: "Perito Criminal / Médico Legista", salario: 12000, experienciaNecessaria: 6},
    {nome: "Delegado de Polícia", salario: 26000, experienciaNecessaria: 10},

    ]
    },

    // criatividade
    "Gamer":{
    salarioBase: 750, reqInteligencia: 25, reqEscolaridade: 0, reqEscolaridadem: 0,
    niveis: [
    {nome: "Gamer Iniciante", salario: 50, experienciaNecessaria:0},
    {nome: "Gamer intermediário", salario: 500, experienciaNecessaria:2},
    {nome: "Gamer avançado", salario: 1000, experienciaNecessaria:4},
    ]
    },

    // comunicação
    "Empacotador":{
    salarioBase: 2000, reqInteligencia: 50, reqEscolaridade: 6, reqEscolaridadem: 0,
    niveis: [
    {nome: "Nível I", salario: 1600, experienciaNecessaria: 0},
    {nome: "Nível II", salario: 2200, experienciaNecessaria: 2},
    {nome: "Nível III", salario: 2800, experienciaNecessaria: 4},
    ]
    },
};

//====================================
//colocar habilidade em cada profissão
//==================================== 

function novaVida() {
    const nome = document.getElementById("nome").value || "Jogador";
    const codigoPais = document.getElementById("pais").value;
    const classe = document.getElementById("classe").value;

    const pais = paises[codigoPais];

    // Ajustes na inicialização para maior realismo
    let dinheiroInicialBase = pais.dinheiroInicial;
    let expectativaVidaBase = pais.expectativaVida;
    let felicidadeInicialBase = pais.felicidade;

    if (classe === "alta") {
        dinheiroInicialBase *= 3;
        expectativaVidaBase += randomMath(0, 5); // Mais acesso a saúde
        felicidadeInicialBase += randomMath(-5, 5); // Pode ter mais pressão
    } else if (classe === "media") {
        dinheiroInicialBase *= 2;
        expectativaVidaBase += randomMath(-2, 2);
        felicidadeInicialBase += randomMath(-3, 3);
    } else { // Baixa
        expectativaVidaBase += randomMath(-5, 0); // Menos acesso a saúde
        felicidadeInicialBase += randomMath(-5, 5);
    }
    jogador = {
        nome,
        idade: 0,
        classe,
        nacionalidade: pais.nome,
        escolaridade: 0,
        escolaridadem: 0,
        carreira: null,
        nivelCarreira: 0, // Nível atual na carreira
        salario: 0,
        experiencia: 0,
        saude: 100,
        felicidade: Math.max(0, Math.min(100, felicidadeInicialBase)),
        dinheiro: dinheiroInicialBase,
        patrimonio: 0,
        divida: 0, // Nova propriedade para dívidas
        vicios: [], // Nova propriedade para vícios
        filhos: 0,
        relacoes: [],
        vivo: true,
        expectativaVida: expectativaVidaBase + randomMath(-3, 3),
        inteligencia: randomMath(40, 80), // Atributo de inteligência
        aparencia: randomMath(40, 80),    // Atributo de aparência
        saudeMental: 100,                 // Atributo de saúde mental
        habilidades: { // Novas habilidades
            comunicacao: randomMath(20, 70),
            lideranca: randomMath(20, 70),
            criatividade: randomMath(20, 70)
        },
        melhorias: [],                    // Para itens comprados no cassino/loja
        parceiro: null,                   // Para relacionamento amoroso
        filhosLista: [],                  // Lista de filhos
        aposentado: false,
        fidelidadeJogador: randomMath(70, 100), // Fidelidade do jogador
        
    };

    // Inicializa relações familiares com idades realistas
    jogador.relacoes.push({ nome: "Mãe", tipo: "Família", nivel: 80, vivo: true, idade: randomMath(jogador.idade + 20, jogador.idade + 35), expectativaVida: randomMath(70, 90), riqueza: randomMath(1000, 10000) });
    jogador.relacoes.push({ nome: "Pai", tipo: "Família", nivel: 70, vivo: true, idade: randomMath(jogador.idade + 20, jogador.idade + 40), expectativaVida: randomMath(68, 88), riqueza: randomMath(1000, 10000) });
    // Irmão pode ser mais velho ou mais novo
    const idadeIrmao = randomMath(jogador.idade - 5, jogador.idade + 10);
    jogador.relacoes.push({ nome: "Irmão", tipo: "Família", nivel: 60, vivo: true, idade: Math.max(0, idadeIrmao), expectativaVida: randomMath(65, 85), riqueza: randomMath(500, 5000) });
    jogador.relacoes.push({ nome: "Amigo de Infância", tipo: "Amizade", nivel: 50, vivo: true, idade: randomMath(jogador.idade - 2, jogador.idade + 2), expectativaVida: randomMath(70, 90), riqueza: randomMath(200, 2000) });


    document.getElementById("menu").classList.add("hidden");
    document.getElementById("jogo").classList.remove("hidden");
    atualizarStatus();
    salvarAutomatico();
}

function atualizarStatus() {
    if (!jogador.vivo) {
        document.getElementById("status").innerText = `${jogador.nome} faleceu aos ${jogador.idade} anos.`;
        document.getElementById("estatisticas").innerText += "\nFim da vida.";
        return;
    }

    document.getElementById("status").innerText = `${jogador.nome} (${jogador.nacionalidade}), ${jogador.idade} anos`;

    document.getElementById("estatisticas").innerText =
        `Escolaridade: ${jogador.escolaridade}
Escolaridade militar: ${jogador.escolaridadem}
Carreira: ${jogador.carreira || "Nenhuma"} ${jogador.carreira ? `(${carreiras[jogador.carreira].niveis[jogador.nivelCarreira].nome})` : ''}
Salário: R$${jogador.salario}/mês
Dinheiro: R$${jogador.dinheiro}
Patrimonio: R$${jogador.patrimonio}
Experiência: ${jogador.experiencia}
Filhos: ${jogador.filhos}
Inteligência: ${jogador.inteligencia}
Aparência: ${jogador.aparencia}
Saúde Mental: ${jogador.saudeMental}
Habilidades: Comunicação(${jogador.habilidades.comunicacao}), Liderança(${jogador.habilidades.lideranca}), Criatividade(${jogador.habilidades.criatividade})
Parceiro: ${jogador.parceiro ? jogador.parceiro.nome : "Nenhum"}
Dívida: R$${jogador.divida.toFixed(2)}
Vícios: ${jogador.vicios.length > 0 ? jogador.vicios.join(', ') : 'Nenhum'}`;



    atualizarBarra("barra-saude", jogador.saude);
    atualizarBarra("barra-felicidade", jogador.felicidade);
    atualizarBarra("barra-saude-mental", jogador.saudeMental);
    
    // Atualiza o display de dinheiro no canto superior direito
    document.getElementById("aparecer").innerText = `R$ ${jogador.dinheiro.toFixed(2)}`;
    

}

function atualizarBarra(id, valor) {
    const barra = document.getElementById(id);
    barra.style.width = valor + "%";
}

/* =========================
   PASSAR 1 ANO
========================= */
function passarAno() {
    if (!jogador.vivo) return;
    jogador.idade+=1
    if (jogador.carreira !==null){
        if (jogador.inteligencia !==100){
            jogador.inteligencia+=5}
    } 
    if (jogador.idade >6) {
        if (jogador.inteligencia !==100){
            jogador.inteligencia--}
    }
    jogador.patrimonio = (jogador.patrimonio*0.1)+jogador.patrimonio
    eventoAleatorio()
    
    // Eventos de idade do jogador
    if (jogador.idade === 6) {
        alert("Você pode começar o ensino fundamental ou ensino militar!");
    } else if (jogador.idade === 18) {
        alert("Você completou 18 anos! Agora pode trabalhar e dirigir.");
    } else if (jogador.idade === 65 && !jogador.aposentado) {
        alert("Você atingiu a idade de aposentadoria! Considere se aposentar para mais felicidade.");
        // Opção de aposentadoria pode ser oferecida aqui ou em "Carreira"
    }
    atualizarStatus();


    // Envelhecer filhos e checar eventos de filhos
    jogador.filhosLista.forEach(filho => {
        filho.idade++;
        if (filho.idade === 18) {
            alert(`${filho.nome} completou 18 anos!`);
            jogador.felicidade += 5;
        } else if (filho.idade === 25 && Math.random() < 0.3) { // Chance de sair de casa
            alert(`${filho.nome} se mudou para morar sozinho(a)!`);
            jogador.felicidade += 3;
            jogador.saudeMental += 2;
        }
    });
    atualizarStatus();

    // Se tiver carreira e não aposentado, ganha salário
    if (jogador.carreira && !jogador.aposentado) {
        jogador.dinheiro += jogador.salario 
        jogador.experiencia += 1;

        // Tenta promoção
        const carreiraAtual = carreiras[jogador.carreira];
        const proximoNivel = carreiraAtual.niveis[jogador.nivelCarreira + 1];
        if (proximoNivel && jogador.experiencia >= proximoNivel.experienciaNecessaria) {
            if (Math.random() < 0.7) { // 70% de chance de promoção se atender requisitos
                jogador.nivelCarreira++;
                jogador.salario = proximoNivel.salario;
                jogador.felicidade += 15;
                alert(`Parabéns! Você foi promovido a ${proximoNivel.nome}! Seu novo salário é R$${jogador.salario}/mês.`);
            } else {
                alert(`Você atendeu aos requisitos para promoção, mas não foi promovido este ano. Tente novamente!`);
            }
        } else if (Math.random() < 0.02 && jogador.experiencia > 10) { // Pequena chance de demissão aleatória
            alert(`Você foi demitido(a) de ${jogador.carreira}!`);
            jogador.carreira = null;
            jogador.salario = 0;
            jogador.nivelCarreira = 0;
            jogador.experiencia = 0;
            jogador.felicidade -= 20;
            jogador.saudeMental -= 15;
        }
    } else if (jogador.aposentado) {
        jogador.dinheiro += jogador.salario * 12; // Recebe aposentadoria
    }
    atualizarStatus();


    // Gerenciar dívidas (apenas a partir dos 18 anos)
    if (jogador.idade >= 18) {
        if (jogador.divida > 0) {
            const juros = jogador.divida * 0.02; // 2% de juros anuais
            jogador.divida += juros;
            jogador.dinheiro -= juros; // Juros também afetam o dinheiro
            jogador.felicidade -= 3;
            jogador.saudeMental -= 3;
            alert(`Sua dívida aumentou devido aos juros! Dívida atual: R$${jogador.divida.toFixed(2)}`);
        }

        // Checar se o jogador está em dívida
        if (jogador.dinheiro < 0 && jogador.divida === 0) { // Se o dinheiro ficou negativo e não tinha dívida, cria uma
            jogador.divida = Math.abs(jogador.dinheiro);
            jogador.dinheiro = 0;
            jogador.felicidade -= 10;
            jogador.saudeMental -= 10;
            alert("Você está com dívidas! Isso afeta sua felicidade e saúde mental.");
        } else if (jogador.dinheiro < 0 && jogador.divida > 0) { // Se já tinha dívida e o dinheiro ficou negativo
            jogador.divida += Math.abs(jogador.dinheiro);
            jogador.dinheiro = 0;
            jogador.felicidade -= 5;
            jogador.saudeMental -= 5;
            alert("Suas dívidas aumentaram!");
        } else if (jogador.dinheiro > 0 && jogador.divida > 0) { // Paga parte da dívida se tiver dinheiro
            const pagamento = Math.min(jogador.dinheiro * 0.5, jogador.divida); // Paga até 50% do dinheiro ou o total da dívida
            jogador.dinheiro -= pagamento;
            jogador.divida -= pagamento;
            alert(`Você pagou R$${pagamento.toFixed(2)} da sua dívida. Dívida restante: R$${jogador.divida.toFixed(2)}`);
            if (jogador.divida <= 0) {
                jogador.divida = 0;
                jogador.felicidade += 15;
                jogador.saudeMental += 10;
                alert("Parabéns! Você quitou todas as suas dívidas!");
            }
        }
        
    }
    
    atualizarStatus();

    // Gerenciar vícios
    jogador.vicios.forEach(vicio => {
        let custoVicio = 0;
        let impactoSaude = 0;
        let impactoMental = 0;
        switch (vicio) {
            case "Jogos de Azar":
                custoVicio = randomMath(1000, 5000);
                impactoMental = -randomMath(3, 8);
                break;
            case "Drogas":
                custoVicio = randomMath(3000, 10000);
                impactoSaude = -randomMath(5, 15);
                impactoMental = -randomMath(10, 20);
                break;
            case "Álcool":
                custoVicio = randomMath(1500, 6000);
                impactoSaude = -randomMath(3, 10);
                impactoMental = -randomMath(5, 15);
                break;
        }
        jogador.dinheiro -= custoVicio;
        jogador.saude = Math.max(0, jogador.saude + impactoSaude);
        jogador.saudeMental = Math.max(0, jogador.saudeMental + impactoMental);
        jogador.felicidade -= 5; // Vício sempre tem um custo na felicidade a longo prazo
        alert(`Seu vício em ${vicio} custou R$${custoVicio} este ano e afetou sua saúde!`);
    });

    atualizarStatus();

    // Efeitos da idade na saúde e saúde mental
    if (jogador.idade > 40) {
        jogador.saude -= randomMath(1, 5);
        jogador.saudeMental -= randomMath(0, 2); // Pequena perda de saúde mental com a idade
    }
    if (jogador.idade > 60) {
        jogador.saude -= randomMath(3, 8);
        jogador.saudeMental -= randomMath(1, 3);
    }

    // Impacto da saúde mental na felicidade
    jogador.felicidade += (jogador.saudeMental - 50) / 10; // Se saúde mental > 50, felicidade aumenta, senão diminui

    // Eventos de relacionamento aleatórios
    if (jogador.parceiro) {
        if (Math.random() < 0.1) { // 10% de chance de um evento de relacionamento
            const eventosRelacionamento = [
                { texto: `Você e ${jogador.parceiro.nome} tiveram uma discussão boba.`, nivel: -5, felicidade: -3 },
                { texto: `Você e ${jogador.parceiro.nome} tiveram um encontro romântico surpresa!`, nivel: +10, felicidade: +8 },
                { texto: `Você e ${jogador.parceiro.nome} planejaram uma viagem juntos.`, nivel: +5, felicidade: +5 },
                { texto: `Você pegou ${jogador.parceiro.nome} flertando com outra pessoa!`, nivel: -20, felicidade: -15, saudeMental: -10, condicao: () => Math.random() < 0.3 }, // Chance de traição do parceiro
                { texto: `Você e ${jogador.parceiro.nome} se apoiaram em um momento difícil.`, nivel: +15, felicidade: +10, saudeMental: +5 }
            ];
            const evento = eventosRelacionamento[randomMath(0, eventosRelacionamento.length - 1)];
            if (!evento.condicao || evento.condicao()) {
                jogador.parceiro.nivel = Math.max(0, Math.min(100, jogador.parceiro.nivel + evento.nivel));
                jogador.felicidade = Math.max(0, Math.min(100, jogador.felicidade + evento.felicidade));
                if (evento.saudeMental) jogador.saudeMental = Math.max(0, Math.min(100, jogador.saudeMental + evento.saudeMental));
                alert(`📢 Relacionamento: ${evento.texto}`);
            }
        }
    }

    

    atualizarStatus();


    eventoAleatorio();

    // Checar morte de relações
    checarMorteRelacoes();

    atualizarStatus();

    verificarMorte();

    document.getElementById("relacoes").classList.add("hidden");

    document.getElementById("atividades").classList.add("hidden");

    document.getElementById("carreira").classList.add("hidden");
    
}

//==============
//=Checar morte=
//==============
function verificarMorte() {
    if (jogador.saude <= 0 || jogador.idade >= jogador.expectativaVida || jogador.saudeMental <= 0) {
        jogador.vivo = false;
        
        const reiniciar = confirm(`Sua vida chegou ao fim aos ${jogador.idade} anos.\n\n` +`Causa da morte: ${causaDaMorte()}\n\n` +`Deseja começar recomeçar sua vida?`);

        if (reiniciar) {
            novaVida();
        } else {
            mostrarMenuPrincipal();
        }
    }
}

function causaDaMorte() {
    if (jogador.saude <= 0) return "Sua saúde chegou a zero.";
    if (jogador.saudeMental <= 0) return "Você não aguentou a pressão mental.";
    if (jogador.idade >= jogador.expectativaVida) return "Velhice.";
    return "Destino incerto.";
}

function reiniciarJogo() {
    jogador = novaVida(); 
    jogador.vivo = true;
    
    mostrarOJogo();
    
    novaVida(); 
}

function mostrarMenuPrincipal() {
    document.getElementById("menu").classList.remove("hidden");
    
    document.getElementById("jogo").classList.add("hidden");

    document.getElementById("relacoes").classList.add("hidden");

    document.getElementById("atividades").classList.add("hidden");

    document.getElementById("carreira").classList.add("hidden");
}
function mostrarOJogo() {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("jogo").classList.remove("hidden");
}

const eventos = [
    // 💰 Dinheiro
    { texto: "Você achou R$50 na rua!", dinheiro: +50, felicidade: +2 },
    { texto: "Você foi assaltado e perdeu R$200.", dinheiro: -200, felicidade: -15, saudeMental: -20 , condicao: () => jogador.idade >= 13},
    { texto: "Herança surpresa! Você ganhou R$5500.", dinheiro: +5500, felicidade: +15 },
    { texto: "Você perdeu sua carteira com R$100 dentro.", dinheiro: -100, felicidade: -8 },
    { texto: "Ganhou R$1000 na loteria local!", dinheiro: +1000, felicidade: +8, condicao: () => jogador.idade >= 18 },
    { texto: "Você pagou uma multa de trânsito de R$150.", dinheiro: -150, felicidade: -5, condicao: () => jogador.idade >= 18 },
    { texto: "Seu chefe te deu um bônus de R$500!", dinheiro: +500, felicidade: +5, condicao: () => jogador.carreira !== null},
    { texto: "Você investiu errado e perdeu R$1000.", dinheiro: -1000, felicidade: -10, saudeMental: -5, condicao: () => jogador.idade >= 18 },
    { texto: "Se envolveu em golpe financeiro e perdeu R$1000.", dinheiro: -1000, felicidade: -8, saudeMental: -10, condicao: () => jogador.idade >= 18 },
    { texto: "Você encontrou um tesouro escondido! R$10.000!", dinheiro: +10000, felicidade: +20, saudeMental: +10, condicao: () => jogador.idade >= 7 }, 
    { texto: "Seu carro quebrou e o conserto custou R$700.", dinheiro: -700, felicidade: -5, condicao: () => jogador.idade >= 18 },
    { texto: "Você recebeu um reembolso inesperado de R$300.", dinheiro: +300, condicao: () => jogador.idade >= 18 },
    { texte: "Você se foi atropelado sofeu danos mas ganhou um seguro de R$2500.", dinheiro: +2500, saude:-25, saudeMental: -10, felicidade: -15},

    // 🤒 Saúde
    { texto: "Você ficou gripado.", saude: -8 },
    { texto: "Um resfriado forte te deixou de cama.", saude: -15, felicidade: -3 },
    { texto: "Você começou a praticar corrida e ficou mais saudável!", saude: +8, felicidade: +5 },
    { texto: "Você quebrou a perna num acidente.", saude: -20, felicidade: -10, saudeMental: -8 },
    { texto: "Você começou a comer mais saudável.", saude: +5 },
    { texto: "Você ficou desidratado em um dia muito quente.", saude: -10 },
    { texto: "Você dormiu bem e acordou renovado!", saude: +4, felicidade: +2 },
    { texto: "Você pegou dengue e precisou repousar.", saude: -15, felicidade: -5 },
    { texto: "Você se exercitou bastante este ano.", saude: +10 },
    { texto: "Você sofreu um pequeno acidente de carro.", saude: -12, felicidade: -3, saudeMental: -20 },
    { texto: "Você foi diagnosticado com uma doença crônica. Sua saúde diminui mais rápido.", saude: -10, saudeMental: -15, condicao: () => !jogador.doencaCronica, efeito: () => jogador.doencaCronica = true }, // Evento raro
    { texto: "Você se recuperou de uma doença!", saude: +15, felicidade: +10, condicao: () => jogador.saude < 80 },

    // 😀 Felicidade
    { texto: "Você viu um cachorrinho fofo na rua!", felicidade: +5 },
    { texto: "Você saiu com amigos e se divertiu.", felicidade: +10 },
    { texto: "Você brigou com um amigo muito próximo.", felicidade: -15, saudeMental: -10 },
    { texto: "Você descobriu um novo hobby que adora!", felicidade: +15 },
    { texto: "Você terminou um relacionamento.", felicidade: -25, saudeMental: -20, condicao: () => jogador.parceiro !== null }, // Só se tiver parceiro
    { texto: "Você recebeu um elogio inesperado.", felicidade: +5 },
    { texto: "Você ganhou um presente de alguém querido.", felicidade: +10 },
    { texto: "Você perdeu um objeto de estimação.", felicidade: -10, saudeMental: -5 },
    { texto: "Você assistiu a um filme incrível!", felicidade: +10 },
    { texto: "Você teve um pesadelo recorrente.", felicidade: -5, saudeMental: -3 },
    { texto: "Você realizou um sonho de infância!", felicidade: +25, saudeMental: +20,}, 

    // 👨‍👩‍👦 Família & Relações
    { texto: "Você brigou com seu irmão.", felicidade: -5, saudeMental: -3 },
    { texto: "Você passou um tempo com sua mãe.", felicidade: +8 },
    { texto: "Você foi em um churrasco de família divertido.", felicidade: +10 },
    { texto: "Você ajudou seu pai e ele ficou orgulhoso.", felicidade: +5 },
    { texto: "Você se reconciliou com um amigo antigo.", felicidade: +15 },
    { texto: "Você terminou uma amizade de longa data.", felicidade: -25, saudeMental: -20 },
    { texto: "Você recebeu uma ligação inesperada de alguém especial.", felicidade: +10 },
    { texto: "Você foi padrinho de casamento de um amigo.", felicidade: +15 },
    { texto: "Você foi traído em um relacionamento.", felicidade: -25, saudeMental: -20, condicao: () => jogador.parceiro !== null },
    { texto: "Você conheceu uma pessoa incrível em uma festa!", felicidade: +15, condicao: () => jogador.idade >= 16 && jogador.parceiro === null },
    { texto: "Um parente distante te visitou.", felicidade: +7 },
    { texto: "Você teve uma discussão séria com um familiar.", felicidade: -10, saudeMental: -5 },

    // 📈 Carreira
    { texto: "Você recebeu uma promoção!", salario: +500, felicidade: +10, experiencia: +5, condicao: () => jogador.carreira !== null },
    { texto: "Seu chefe brigou com você.", felicidade: -10, saudeMental: -5, salario: -100, condicao: () => jogador.carreira !== null },
    { texto: "Você ganhou reconhecimento no trabalho.", felicidade: +8, condicao: () => jogador.carreira !== null },
    { texto: "Você conseguiu um novo emprego melhor!", salario: +500, felicidade: +15,  condicao: () => jogador.carreira !== null, },
    { texto: "Um colega roubou sua ideia no trabalho.", felicidade: -8, saudeMental: -5, condicao: () => jogador.carreira !== null },
    { texto: "Você participou de um curso e aprendeu muito!", experiencia: +5, felicidade: +7, inteligencia: +3 },
    { texto: "Seu salário aumentou em R$200.", salario: +200, condicao: () => jogador.carreira !== null },
    { texto: "Você se desentendeu com um colega.", felicidade: -5, saudeMental: -3, condicao: () => jogador.carreira !== null },
    { texto: "Você recebeu um prêmio no trabalho!", felicidade: +12, condicao: () => jogador.carreira !== null },
    { texto: "Você foi acusado de má conduta no trabalho.", felicidade: -15, saudeMental: -10, condicao: () => jogador.carreira !== null },
    { texto: "Você iniciou um negócio próprio e está prosperando!", dinheiro: +2000, felicidade: +20, condicao: () => jogador.idade >= 25 && jogador.dinheiro > 5000 },

    // 🌍 Eventos sociais/aleatórios
    { texto: "Um famoso te seguiu no Instagram!", felicidade: +25 },
    { texto: "Você viralizou com um vídeo engraçado e ganhou R$:500,00", felicidade: +20, dinheiro: + 500 },
    { texto: "Você foi cancelado nas redes sociais.", felicidade: -15, saudeMental: -10 },
    { texto: "Você ganhou ingressos grátis para um show!", felicidade: +12 },
    { texto: "Você perdeu seu celular.", dinheiro: -1500, felicidade: -5 },
    { texto: "Um vizinho fez fofoca sobre você.", felicidade: -8, saudeMental: -5 },
    { texto: "Você ajudou uma pessoa idosa e se sentiu bem.", felicidade: +10 },
    { texto: "Você adotou um gatinho!", felicidade: +20 },
    { texto: "Você bateu o carro do vizinho sem querer.", dinheiro: -500, felicidade: -10, saudeMental: -5 },
    { texto: "Você foi voluntário em um abrigo e se sentiu realizado.", felicidade: +15 },

    // 🎲 Surpresas raras
    { texto: "Você ganhou na mega-sena! R$100.000!", dinheiro: +100000, felicidade: +50, saudeMental: +20 },
    { texto: "Um parente distante deixou R$20.000 de herança.", dinheiro: +20000, felicidade: +20 },
    { texto: "Você foi sequestrado, mas escapou!", saude: -30, felicidade: -30, saudeMental: -30 },
    { texto: "Você salvou uma criança de um acidente!", felicidade: +30, saudeMental: +15 },
    { texto: "Você encontrou uma mala com R$5000.", dinheiro: +5000 },
    { texto: "Você foi atropelado levemente.", saude: -25, felicidade: -10, saudeMental: -10 },
    { texto: "Você foi confundido com um famoso na rua.", felicidade: +15 },
    { texto: "Você caiu em um golpe online e perdeu R$2000.", dinheiro: -2000, felicidade: -15, saudeMental: -15 },
    { texto: "Você foi reconhecido como herói local!", felicidade: +30 },
    { texto: "Você sofreu uma tentativa de assalto, mas escapou.", felicidade: -5, saudeMental: -15 },
    { texto: "Você sofreu um assalto e quando reagiu, foi baleado. Sera que pessoas vão se lembrar de você?", saude: -100},
    

    

    // extras
    { texto: "Você ganhou um videogame novo.", felicidade: +12 },
    { texto: "Você ganhou uma viagem internacional.", felicidade: +25 },
    { texto: "Você se acidentou andando de bicicleta.", saude: -10, felicidade: -3 },
    { texto: "Você entrou em depressão temporária.", felicidade: -20, saudeMental: -25 },
    { texto: "Você escreveu um livro e vendeu bem!", dinheiro: +3000, felicidade: +15, inteligencia: +5, condicao: () => jogador.inteligencia >= 70, chance: 0.003 },
    { texto: "Você aprendeu uma nova língua!", experiencia: +10, felicidade: +5, inteligencia: +3 },
    { texto: "Você foi multado em R$400 por estacionar errado.", dinheiro: -400, felicidade: -3, condicao: () => jogador.idade >= 18 },
    { texto: "Você descobriu um talento escondido!", felicidade: +15 },
    { texto: "Você teve um encontro romântico inesquecível.", felicidade: +20, condicao: () => jogador.idade >= 16 && jogador.parceiro === null },
    { texto: "Você ganhou um lego novo e se lembrou da sua infância", felicidade: + 15, condicao: () => jogador.idade>=16},
    { texto: "Você ganhou bonecas da Monster High e se lembrou da sua infância", felicidade: + 15, condicao: () => jogador.idade>=16},
    { texto: "Você ganhou bonecos de Pokémon e se lembrou da sua infância", felicidade: + 15, condicao: () => jogador.idade>=16},
    // Eventos com Escolha
    {
        tipo: "escolha",
        texto: "Você encontrou uma carteira cheia de dinheiro na rua. O que você faz?",
        opcoes: [
            {
                acao: "Devolver ao dono",
                efeitos: { dinheiro: 0, felicidade: +15, saudeMental: +10, textoResultado: "Você devolveu a carteira e se sentiu muito bem com sua honestidade." }
            },
            {
                acao: "Ficar com o dinheiro",
                efeitos: { dinheiro: +500, felicidade: -5, saudeMental: -10, textoResultado: "Você ficou com o dinheiro. Ganhou um extra, mas a culpa te incomoda um pouco." }
            }
        ]
    },
    {
        tipo: "escolha",
        texto: "Um amigo te convida para uma festa que você sabe que será muito agitada. Você vai?",
        opcoes: [
            {
                acao: "Sim, vamos nos divertir!",
                efeitos: { felicidade: +15, saude: -5, dinheiro: -50, textoResultado: "Você se divertiu muito na festa, mas acordou um pouco cansado e gastou um pouco." }
            },
            {
                acao: "Não, prefiro ficar em casa e descansar.",
                efeitos: { felicidade: +5, saude: +5, textoResultado: "Você teve uma noite tranquila em casa e se sentiu revigorado." }
            }
        ]
    },
    {
        tipo: "escolha",
        texto: "Seu chefe te oferece uma oportunidade de promoção, mas exigirá muito mais horas de trabalho. Você aceita?",
        condicao: () => jogador.carreira !== null && jogador.idade >= 25 && jogador.salario > 0,
        opcoes: [
            {
                acao: "Aceitar a promoção",
                efeitos: { salario: +500, experiencia: +10, saudeMental: -15, textoResultado: "Você aceitou a promoção! Seu salário aumentou, mas o estresse também." }
            },
            {
                acao: "Recusar a promoção",
                efeitos: { felicidade: +2, saudeMental: +2, textoResultado: "Você recusou a promoção. Manteve sua paz de espírito, mas perdeu uma oportunidade de crescimento." }
            }
        ]
    },,
    {
        tipo: "escolha",
        texto: "Você recebeu uma proposta para investir em um negócio arriscado. O que você faz?",
        condicao: () => jogador.dinheiro > 1000,
        opcoes: [
            {
                acao: "Investir R$1000",
                efeitos: {
                    dinheiro: -1000,
                    textoResultado: "Você investiu no negócio. ",
                    resultadoAleatorio: [
                        { chance: 0.3, efeitos: { dinheiro: +2000, felicidade: +10, texto: "O negócio prosperou e você dobrou seu investimento!" } },
                        { chance: 0.4, efeitos: { dinheiro: +500, felicidade: +5, texto: "O negócio deu um pequeno lucro." } },
                        { chance: 0.3, efeitos: { dinheiro: -1000, felicidade: -10, texto: "O negócio faliu e você perdeu tudo!" } }
                    ]
                }
            },
            {
                acao: "Não investir",
                efeitos: { dinheiro: 0, felicidade: +2, textoResultado: "Você decidiu não arriscar. Melhor prevenir do que remediar." }
            }
        ]
    },
    {
        tipo: "escolha",
        texto: "Você está se sentindo muito estressado. O que você faz para relaxar?",
        opcoes: [
            {
                acao: "Tirar férias (R$500)",
                efeitos: { dinheiro: -500, felicidade: +20, saudeMental: +15, textoResultado: "Você tirou férias e voltou renovado!" }
            },
            {
                acao: "Começar a beber (Pode virar vício)",
                efeitos: {
                    felicidade: +10, saude: -5, saudeMental: +5, textoResultado: "Você começou a beber para relaxar. ",
                    resultadoAleatorio: [
                        { chance: 0.7, efeitos: { texto: "Ajudou a relaxar, por enquanto." } },
                        { chance: 0.3, efeitos: { vicio: "Álcool", texto: "Você desenvolveu um vício em álcool!" } }
                    ]
                }
            },
            {
                acao: "Procurar terapia (R$200)",
                efeitos: { dinheiro: -200, saudeMental: +20, felicidade: +10, textoResultado: "Você procurou ajuda profissional e se sentiu muito melhor." }
            }
        ]
    }
];

/* =========================
   SORTEAR EVENTO
========================= */
function aplicarEfeitos(efeitos) {
    if (!efeitos) return;

    const atributosLimitados = ["saude", "felicidade", "saudeMental", "inteligencia"];

    for (const chave in efeitos) {
        if (chave === "textoResultado" || chave === "texto") continue;

        const valor = efeitos[chave];

        if (chave === "vicio" && valor && !jogador.vicios.includes(valor)) {
            jogador.vicios.push(valor);
        } else if (chave === "escolaridade") {
            jogador.escolaridade += valor;
        } else if (chave in jogador) {
            if (atributosLimitados.includes(chave)) {
                jogador[chave] = Math.max(0, Math.min(100, jogador[chave] + valor));
            } else {
                jogador[chave] += valor;
            }
        }
    }
}

function eventoAleatorio() {


    if (Math.random() > 0.01 )
    {
        return};
    // Filtra eventos que podem acontecer com base nas condições
    const eventosDisponiveis = eventos.filter(e => !e.condicao || e.condicao());
    if (eventosDisponiveis.length === 0) return;

    // Prioriza eventos com 'chance' definida
    let eventoEscolhido = null;
    const eventosComChance = eventosDisponiveis.filter(e => e.chance !== undefined);

    if (eventosComChance.length > 0) {
        for (const evento of eventosComChance) {
            if (Math.random() < evento.chance) {
                eventoEscolhido = evento;
                break;
            }
        }
    }

    // Se nenhum evento com chance foi escolhido, escolhe um aleatório dos restantes
    if (!eventoEscolhido) {
        const idx = randomMath(0, eventosDisponiveis.length - 1);
        eventoEscolhido = eventosDisponiveis[idx];
    }

    const e = eventoEscolhido;

    // Evento com escolhas
    if (e.tipo === "escolha") {
        let mensagem = e.texto + "\n\n";
        e.opcoes.forEach((opcao, index) => {
            mensagem += `${index + 1}. ${opcao.acao}\n`;
        });

        const escolha = parseInt(prompt(mensagem));
        const opcaoEscolhida = e.opcoes[escolha - 1];

        if (!opcaoEscolhida) {
            alert("Escolha inválida. Nada aconteceu.");
            return;
        }

        aplicarEfeitos(opcaoEscolhida.efeitos);

        let resultadoFinalTexto = opcaoEscolhida.efeitos.textoResultado || "";

        // Efeitos aleatórios da escolha
        if (opcaoEscolhida.efeitos.resultadoAleatorio) {
            const sorteio = Math.random();
            let acumulado = 0;

            for (const res of opcaoEscolhida.efeitos.resultadoAleatorio) {
                acumulado += res.chance;
                if (sorteio < acumulado) {
                    aplicarEfeitos(res.efeitos);
                    if (res.efeitos.texto) resultadoFinalTexto += res.efeitos.texto;
                    break;
                }
            }
        }

        alert("📢 Evento: " + resultadoFinalTexto);

    } else {
        // Evento direto (sem escolha)
        alert("📢 Evento: " + e.texto);
        aplicarEfeitos(e);
        if (e.efeito) e.efeito(); // Executa efeito adicional, se houver
    }
}


/* =========================
   CHECA MORTE DE RELAÇÕES
========================= */
function checarMorteRelacoes() {
    jogador.relacoes.forEach(r => {
        if (r.vivo) {
            r.idade++; // Envelhece a relação

            let chanceMorte = 0;
            if (r.idade >= r.expectativaVida) {
                chanceMorte = 0.15; // 15% de chance de morrer ao atingir ou passar a expectativa de vida
            } else if (r.idade > r.expectativaVida * 0.8) { // Aumenta a chance de morte em idades avançadas
                chanceMorte = 0.05;
            } else if (r.idade < 10) { // Pequena chance de morte infantil
                chanceMorte = 0.005;
            } else { // Chance de morte aleatória (acidentes, doenças inesperadas)
                chanceMorte = 0.001;
            }

            if (Math.random() < chanceMorte) {
                r.vivo = false;
                let impactoFelicidade = 0;
                let impactoSaudeMental = 0;
                let heranca = 0;

                if (r.tipo === "Família") {
                    impactoFelicidade = -randomMath(15, 30);
                    impactoSaudeMental = -randomMath(10, 25);
                    heranca = r.riqueza ? r.riqueza * randomMath(0.1, 0.5) : 0; // Herda 10-50% da riqueza
                    alert(`Seu(sua) ${r.tipo}, ${r.nome}, faleceu aos ${r.idade} anos. Isso te abalou profundamente. Você herdou R$${heranca.toFixed(2)}.`);
                } else if (r.tipo === "Cônjuge" || r.tipo === "Namoro") {
                    impactoFelicidade = -randomMath(30, 50);
                    impactoSaudeMental = -randomMath(25, 40);
                    heranca = r.riqueza ? r.riqueza * randomMath(0.3, 0.8) : 0; // Herda 30-80% da riqueza
                    jogador.parceiro = null; // Remove o parceiro
                    alert(`Seu(sua) ${r.tipo}, ${r.nome}, faleceu aos ${r.idade} anos. Você está de luto. Você herdou R$${heranca.toFixed(2)}.`);
                } else if (r.tipo === "Amizade") {
                    impactoFelicidade = -randomMath(5, 15);
                    impactoSaudeMental = -randomMath(3, 10);
                    heranca = r.riqueza ? r.riqueza * randomMath(0.01, 0.1) : 0; // Pequena herança
                    alert(`Seu(sua) amigo(a), ${r.nome}, faleceu aos ${r.idade} anos. Você herdou R$${heranca.toFixed(2)}.`);
                } else if (r.tipo === "Filho") { // Morte de filho
                    impactoFelicidade = -randomMath(40, 60);
                    impactoSaudeMental = -randomMath(35, 50);
                    jogador.filhosLista = jogador.filhosLista.filter(f => f.nome !== r.nome); // Remove da lista de filhos
                    jogador.filhos--;
                    alert(`Seu(sua) filho(a), ${r.nome}, faleceu aos ${r.idade} anos. Uma dor imensa.`);
                }

                jogador.felicidade = Math.max(0, jogador.felicidade + impactoFelicidade);
                jogador.saudeMental = Math.max(0, jogador.saudeMental + impactoSaudeMental);
                jogador.dinheiro += heranca;
            }
        }
    });

    // Remove relações não vivas da lista principal para não serem exibidas
    jogador.relacoes = jogador.relacoes.filter(r => r.vivo);
}


/* =========================
   RELACIONAMENTOS AVANÇADOS
========================= */
function relacoesAvancadas() {
    const div = document.getElementById("relacoes");
    div.classList.remove("hidden");
    div.innerHTML = "<h3>Relacionamentos Avançados</h3>";

    // Adiciona potencial interesse amoroso se não tiver parceiro e for maior de 16
    if (!jogador.parceiro && jogador.idade >= 16 && !jogador.relacoes.some(r => r.tipo === "Paixão")) {
        const nomePaixao = pessoa[randomMath(0, pessoa.length - 1)];
        jogador.relacoes.push({
            nome: nomePaixao,
            tipo: "Paixão",
            nivel: 40,
            vivo: true,
            idade: randomMath(jogador.idade - 5, jogador.idade + 5),
            expectativaVida: randomMath(70, 95),
            riqueza: randomMath(500, 5000),
            fidelidade: randomMath(50, 100) // Fidelidade do parceiro em potencial
        });
    }

    // Exibe relacionamentosAtividades
    jogador.relacoes.forEach((r, index) => {
        if (!r.vivo) return; // Não exibe se a pessoa morreu

        const bloco = document.createElement("div");
        bloco.className = "relacao";
        bloco.innerHTML = `Atividades
            <p><b>${r.nome}</b> (${r.tipo}) - Nível: ${r.nivel} ${r.idade !== undefined ? `(${r.idade} anos)` : ''}</p>
            <button onclick="interagirAvancado(${index}, 'conversar')">Conversar</button>
            <button onclick="interagirAvancado(${index}, 'sair')">Sair Juntos</button>
            <button onclick="interagirAvancado(${index}, 'presente')">Dar Presente</button>
            ${r.tipo === "Amizade" && jogador.idade >= 16 ? `<button onclick="tornarPaixao(${index})">Tornar Paixão</button>` : ""}
            ${r.tipo === "Paixão" ? `<button onclick="interagirAvancado(${index}, 'flertar')">Flertar</button>` : ""}
            ${r.tipo === "Paixão" && r.nivel >= 70 && !jogador.parceiro ? `<button onclick="pedirEmNamoro(${index})">Pedir em Namoro</button>` : ""}
            ${r.tipo === "Namoro" && r.nivel >= 80 ? `<button onclick="casar(${index})">Casar</button>` : ""}
            ${r.tipo === "Cônjuge" && r.nivel >= 60 && jogador.idade >= 18 ? `<button onclick="terFilho(${index})">Ter Filho</button>` : ""}
            ${r.tipo === "Cônjuge" && r.nivel < 30 ? `<button onclick="divorciar(${index})">Divorciar</button>` : ""}
            ${r.tipo === "Cônjuge" || r.tipo === "Namoro" ? `<button onclick="trairParceiro(${index})">Trair Parceiro</button>` : ''}
        `;
        div.appendChild(bloco);
    });

    // Exibe filhos
    if (jogador.filhosLista.length > 0) {
        const filhosDiv = document.createElement("div");
        filhosDiv.innerHTML = "<h4>Seus Filhos:</h4>";
        jogador.filhosLista.forEach(filho => {
            filhosDiv.innerHTML += `<p>${filho.nome}, ${filho.idade} anos</p>`;
        });
        div.appendChild(filhosDiv);
    }
}

function tornarPaixao(index) {
    let r = jogador.relacoes[index];
    if (r.tipo !== "Amizade") {
        alert("Essa relação não é uma amizade.");
        return;
    }
    // Verificar se já há uma paixão ou parceiro
    if (jogador.relacoes.some(rel => rel.tipo === "Namoro" || rel.tipo === "Cônjuge")) {
        alert("Você já tem uma paixão ou parceiro. Termine essa relação primeiro.");
        return;
    }
    // Converter para paixão
    r.tipo = "Paixão";
    r.fidelidade = randomMath(50, 100); // Define fidelidade aleatória, como nas paixões automáticas
    alert(`${r.nome} agora é sua paixão!`);
    atualizarStatus();
    relacoesAvancadas(); // Recarrega a tela de relações para refletir a mudança
}


function interagirAvancado(index, acao) {
    let r = jogador.relacoes[index];

    switch (acao) {
        case "conversar":
            r.nivel = Math.min(100, r.nivel + randomMath(5, 10));
            jogador.felicidade += 2;
            jogador.saudeMental += 1;
            alert(`Você conversou com ${r.nome}. Nível de relacionamento: ${r.nivel}`);
            break;
        case "sair":
            if (jogador.dinheiro >= 50) {
                jogador.dinheiro -= 50;
                if (Math.random() > 0.3) { // 70% de chance de ser bom
                    r.nivel = Math.min(100, r.nivel + randomMath(10, 15));
                    jogador.felicidade += 5;
                    jogador.saudeMental += 3;
                    alert(`Você saiu com ${r.nome} e se divertiram! Nível de relacionamento: ${r.nivel}`);
                } else {
                    r.nivel = Math.max(0, r.nivel - randomMath(5, 10));
                    jogador.felicidade -= 5;
                    jogador.saudeMental -= 3;
                    alert(`O encontro com ${r.nome} não foi muito bom. Nível de relacionamento: ${r.nivel}`);
                }
            } else {
                alert("Dinheiro insuficiente para sair.");
            }
            break;
        case "presente":
            if (jogador.dinheiro >= 200) {
                jogador.dinheiro -= 200;
                r.nivel = Math.min(100, r.nivel + randomMath(15, 25));
                jogador.felicidade += 8;
                jogador.saudeMental += 5;
                alert(`Você deu um presente para ${r.nome}! Nível de relacionamento: ${r.nivel}`);
            } else {
                alert("Dinheiro insuficiente para dar um presente.");
            }
            break;
        case "flertar":
            if (Math.random() > 0.5) {
                r.nivel = Math.min(100, r.nivel + randomMath(10, 20));
                jogador.felicidade += 10;
                alert(`Flerte bem-sucedido com ${r.nome}! Nível de relacionamento: ${r.nivel}`);
            } else {
                r.nivel = Math.max(0, r.nivel - randomMath(5, 15));
                jogador.felicidade -= 5;
                alert(`Flerte falhou com ${r.nome}. Nível de relacionamento: ${r.nivel}`);
            }
            break;
    }

    atualizarStatus();
    relacoesAvancadas(); // Recarrega a tela de relações
}
// ☠︎
function pedirEmNamoro(index) {
    let r = jogador.relacoes[index];
    if (r.nivel >= 70 && !jogador.parceiro) {
        if (Math.random() * 100 < r.fidelidade) { // Chance de aceitar baseada na fidelidade do parceiro
            r.tipo = "Namoro";
            jogador.parceiro = r;
            jogador.felicidade += 25;
            jogador.saudeMental += 15;
            alert(`${r.nome} aceitou seu pedido de namoro! Vocês estão namorando!`);
        } else {
            r.nivel = Math.max(0, r.nivel - 20);
            jogador.felicidade -= 10;
            jogador.saudeMental -= 10;
            alert(`${r.nome} recusou seu pedido de namoro. Que pena!`);
        }
    } else {
        alert("Não é possível pedir em namoro agora.");
    }
    atualizarStatus();
    relacoesAvancadas();
}

function casar(index) {
    let r = jogador.relacoes[index];
    if (r.tipo === "Namoro" && r.nivel >= 80) {
        if (Math.random() * 100 < r.fidelidade) { // Chance de aceitar baseada na fidelidade do parceiro
            r.tipo = "Cônjuge";
            jogador.parceiro = r;
            jogador.felicidade += 30;
            jogador.saudeMental += 20;
            alert(`Parabéns! Você se casou com ${r.nome}!`);
        } else {
            r.nivel = Math.max(0, r.nivel - 30);
            jogador.felicidade -= 15;
            jogador.saudeMental -= 15;
            alert(`${r.nome} recusou seu pedido de casamento. Talvez não seja a hora certa.`);
        }
    } else {
        alert("Não é possível casar agora.");
    }
    atualizarStatus();
    relacoesAvancadas();
}

function terFilho(index) {
    let r = jogador.relacoes[index];
    if (r.tipo === "Cônjuge" && jogador.idade >= 18 && jogador.idade <= 45) { // Idade fértil
        if (Math.random() > 0.5) {
            const nomeFilho = pessoa[randomMath(0, pessoa.length - 1)];
            const novoFilho = {
                nome: nomeFilho,
                idade: 0,
                tipo: "Filho", // Adiciona tipo para checarMorteRelacoes
                vivo: true,
                expectativaVida: randomMath(70, 95), // Expectativa de vida para o filho
                riqueza: 0 // Filhos começam sem riqueza
            };
            jogador.filhosLista.push(novoFilho);
            jogador.relacoes.push(novoFilho); // Adiciona filho à lista de relações para checagem de morte
            jogador.filhos++;
            jogador.felicidade += 20;
            jogador.saudeMental += 10;
            alert(`Parabéns! Você teve um filho: ${nomeFilho}!`);
        } else {
            jogador.felicidade -= 5;
            jogador.saudeMental -= 5;
            alert("Não foi possível ter um filho este ano.");
        }
    } else {
        alert("Não é possível ter filhos agora (idade ou status de relacionamento).");
    }
    atualizarStatus();
    relacoesAvancadas();
}

function divorciar(index) {
    let r = jogador.relacoes[index];
    if (r.tipo === "Cônjuge") {
        const confirmacao = confirm(`Tem certeza que deseja se divorciar de ${r.nome}? Isso terá um grande impacto.`);
        if (confirmacao) {
            r.tipo = "Ex-Cônjuge";
            r.nivel = 0;
            jogador.parceiro = null;
            jogador.felicidade -= 30;
            jogador.saudeMental -= 25;
            jogador.dinheiro -= randomMath(500, 2000); // Custos de divórcio
            alert(`Você se divorciou de ${r.nome}.`);
        }
    }
    atualizarStatus();
    relacoesAvancadas();
}

function trairParceiro(index) {
    const parceiroAtual = jogador.relacoes[index];
    if (!parceiroAtual || (parceiroAtual.tipo !== "Namoro" && parceiroAtual.tipo !== "Cônjuge")) {
        alert("Você não tem um parceiro para trair.");
        return;
    }

    const confirmacao = confirm(`Você realmente quer trair ${parceiroAtual.nome}? Isso pode ter sérias consequências.`);
    if (!confirmacao) return;

    if (Math.random() * 100 < jogador.fidelidadeJogador) { // Chance de ser pego baseada na fidelidade do jogador
        alert("Você traiu seu parceiro, mas não foi pego. Por enquanto...");
        jogador.felicidade -= 5; 
        jogador.saudeMental -= 5; // Culpa
        jogador.fidelidadeJogador -= 20;
    } else {
        alert(`Seu parceiro, ${parceiroAtual.nome}, descobriu sua traição!`);
        parceiroAtual.nivel = Math.max(0, parceiroAtual.nivel - 50); // Grande queda no nível
        jogador.felicidade -= 30;
        jogador.saudeMental -= 25;
        if (parceiroAtual.tipo === "Cônjuge") {
            alert("Seu casamento acabou em divórcio!");
            divorciar(index); // Força o divórcio
        } else {
            alert("Seu namoro acabou!");
            jogador.parceiro = null;
            parceiroAtual.tipo = "Ex-Namorado(a)";
        }
    }
    atualizarStatus();
    relacoesAvancadas();
}


/* =========================
   VIDA NOTURNA
========================= */
function vidaNoturna() {
    if (jogador.idade >= 18) {
        const div = document.getElementById("atividades");
        div.classList.remove("hidden");
        div.innerHTML = "<h3>Vida Noturna</h3>";
        
        div.innerHTML += `
            <button onclick="atividadeBalada()">Ir à balada (R$150)</button>
            <button onclick="atividadeBar()">Ir ao bar (R$100)</button>
            <button onclick="atividadeFesta()">Ir à festa (R$200)</button>
            <button onclick="tentarVicio('Drogas')">Experimentar Drogas (Risco de Vício)</button>
            <button onclick="tentarVicio('Álcool')">Beber Pesado (Risco de Vício)</button>
            <button onclick="atividades()">Voltar</button>
        `;
    }else {
        alert('Você precisa ter pelo menos 18 anos para ter vida noturna.')
    }
}

function atividadeBalada() {
    if (jogador.dinheiro >= 150) {
        jogador.dinheiro -= 150;
        jogador.felicidade = Math.min(100, jogador.felicidade + 15);
        jogador.saude = Math.max(0, jogador.saude - 5);
        jogador.saudeMental = Math.min(100, jogador.saudeMental + 5);
        alert("Você foi à balada! Diversão garantida, mas um pouco cansativo.");
        chanceConhecerPessoa();
    } else alert("Dinheiro insuficiente para ir à balada.");
    atualizarStatus();
}

function atividadeBar() {
    if (jogador.dinheiro >= 100) {
        jogador.dinheiro -= 100;
        jogador.felicidade = Math.min(100, jogador.felicidade + 10);
        jogador.saude = Math.max(0, jogador.saude - 2);
        jogador.saudeMental = Math.min(100, jogador.saudeMental + 3);
        alert("Você foi ao bar e conheceu novas pessoas!");
        chanceConhecerPessoa();
    } else alert("Dinheiro insuficiente para ir ao bar.");
    atualizarStatus();
}

function atividadeFesta() {
    if (jogador.dinheiro >= 200) {
        jogador.dinheiro -= 200;
        jogador.felicidade = Math.min(100, jogador.felicidade + 20);
        jogador.saude = Math.max(0, jogador.saude - 7);
        jogador.saudeMental = Math.min(100, jogador.saudeMental + 7);
        alert("Você foi a uma festa incrível!");
        chanceConhecerPessoa();
    } else alert("Dinheiro insuficiente para ir à festa.");
    atualizarStatus();
}

function tentarVicio(tipoVicio) {
    let custo = 0;
    let chanceVicio = 0;
    let mensagem = "";

    if (tipoVicio === "Drogas") {
        custo = 300;
        chanceVicio = 0.6;
        mensagem = "Você experimentou drogas. ";
    } else if (tipoVicio === "Álcool") {
        custo = 150;
        chanceVicio = 0.5;
        mensagem = "Você bebeu pesado. ";
    } else if (tipoVicio === "Jogos de Azar") {
        custo = 100;
        chanceVicio = 0.6;
        mensagem = "Você apostou pesado. ";
    }

    if (jogador.dinheiro < custo) {
        alert("Dinheiro insuficiente para isso.");
        return;
    }

    jogador.dinheiro -= custo;
    jogador.felicidade -= 10; 
    jogador.saude -= 5; // Impacto negativo

    if (Math.random() < chanceVicio && !jogador.vicios.includes(tipoVicio)) {
        jogador.vicios.push(tipoVicio);
        jogador.saudeMental -= 15;
        jogador.felicidade -= 10;
        alert(mensagem + `Você desenvolveu um vício em ${tipoVicio}!`);
    } else {
        alert(mensagem + "Você não desenvolveu um vício desta vez.");
    }
    atualizarStatus();
}

function chanceConhecerPessoa() {
    if (Math.random() > 0.5 && jogador.idade >= 16) {
        const nomeNovo = pessoa[randomMath(0, pessoa.length - 1)];
        const novo = {
            nome: nomeNovo,
            tipo: "Paixão",
            nivel: randomMath(30, 60),
            vivo: true,
            idade: randomMath(jogador.idade - 5, jogador.idade + 5), // Idade para a nova pessoa
            expectativaVida: randomMath(70, 95), // Expectativa de vida para a nova pessoa
            riqueza: randomMath(500, 5000),
            fidelidade: randomMath(50, 100) // Fidelidade do parceiro em potencial
        };
        // Evita adicionar a mesma pessoa se já existe como paixão ou parceiro
        if (!jogador.relacoes.some(r => r.nome === nomeNovo && (r.tipo === "Paixão" || r.tipo === "Namoro" || r.tipo === "Cônjuge"))) {
            jogador.relacoes.push(novo);
            alert(`Você conheceu alguém interessante: ${novo.nome}!`);
        }
    }
}

/* =========================
   INTEGRAÇÃO
========================= */
function abrirExtras() {
    // Esconde outras telas antes de abrir as extras
    document.getElementById("carreira").classList.add("hidden");
    document.getElementById("atividades").classList.add("hidden");
    relacoesAvancadas();
}

/* =========================
   CARREIRA
========================= */
function carreira() {
    const div = document.getElementById("carreira");
    div.classList.remove("hidden");
    div.innerHTML = "<h2>Carreira</h2>";

    // Esconde outras telas
    document.getElementById("relacoes").classList.add("hidden");
    document.getElementById("atividades").classList.add("hidden");

    atualizarStatus();

    if (!jogador.carreira && jogador.idade >= 18) {
        div.innerHTML += `
            <h3>Escolha sua carreira:</h3>
            ${Object.keys(carreiras).map(c => {
                const info = carreiras[c];
                return `<button onclick="escolherCarreira('${c}')" class="carreirabt">${c}<br> (Int.: ${info.reqInteligencia}, Esc.: ${info.reqEscolaridade}, Esc.M.: ${info.reqEscolaridadem})</button><br>`;
            }).join('')}
        `;
    } else if (!jogador.carreira) {
        div.innerHTML += `<p>Você precisa ter pelo menos 18 anos para escolher uma carreira.</p>`;
    } else {
        const carreiraInfo = carreiras[jogador.carreira];
        const nivelAtual = carreiraInfo.niveis[jogador.nivelCarreira];
        const proximoNivel = carreiraInfo.niveis[jogador.nivelCarreira + 1];
        atualizarStatus();
        div.innerHTML += `<p>Sua carreira atual: <b>${jogador.carreira}</b> (${nivelAtual.nome})</p>`;
        div.innerHTML += `<p>Salário: R$${jogador.salario}/mês</p>`;
        div.innerHTML += `<p>Experiência: ${jogador.experiencia}</p>`;
        atualizarStatus();
        if (proximoNivel) {
            div.innerHTML += `<p>Próximo Nível (${proximoNivel.nome}): ${proximoNivel.experienciaNecessaria - jogador.experiencia} de experiência para promoção.</p>`;
            atualizarStatus();
        } else {
            div.innerHTML += `<p>Você atingiu o nível máximo nesta carreira!</p>`;
            atualizarStatus();
        }
        atualizarStatus();
        div.innerHTML += `<button onclick="pedirAumento()">Pedir Aumento</button>`;
        div.innerHTML += `<button onclick="mudarCarreira()">Mudar de Carreira</button>`;
        atualizarStatus();
        if (jogador.carreira === "Empreendedor") {
            div.innerHTML += `<button onclick="gerenciarNegocio()">Gerenciar Negócio</button>`;
            atualizarStatus();
        }
        if (jogador.idade >= 60 && !jogador.aposentado) {
            div.innerHTML += `<button onclick="aposentar()">Aposentar</button>`;
            atualizarStatus();
        }
        atualizarStatus();
    }
        
    
    atualizarStatus();
}

function escolherCarreira(nomeCarreira) {
    const info = carreiras[nomeCarreira];
    if (jogador.inteligencia < info.reqInteligencia ) {
        alert(`Sua inteligência (${jogador.inteligencia}) é muito baixa para ser ${nomeCarreira} (requer ${info.reqInteligencia}).`);
        return;
    }
    if (jogador.escolaridade < info.reqEscolaridade) {
        alert(`Sua escolaridade (${jogador.escolaridade}) é muito baixa para ser ${nomeCarreira} (requer ${info.reqEscolaridade}).`);
        return;
    }

    if (jogador.escolaridadem < info.reqEscolaridadem) {
        alert(`Sua escolaridade Militar (${jogador.escolaridadem}) é muito baixa para ser ${nomeCarreira} (requer ${info.reqEscolaridadem}).`);
        return;
    }

    jogador.carreira = nomeCarreira;
    jogador.nivelCarreira = 0;
    jogador.salario = info.niveis[0].salario;
    jogador.experiencia = 0;
    alert(`Você começou sua carreira como ${info.niveis[0].nome}!`);
    atualizarStatus();
    carreira();
}

function pedirAumento() {
    if (!jogador.carreira) {
        alert("Você não tem uma carreira para pedir aumento.");
        return;
    }
    if (jogador.aposentado) {
        alert("Você está aposentado e não pode pedir aumento.");
        return;
    }

    const carreiraInfo = carreiras[jogador.carreira];
    const nivelAtual = carreiraInfo.niveis[jogador.nivelCarreira];

    if (jogador.experiencia >= nivelAtual.experienciaNecessaria + 10 && Math.random() > 0.4) { // Mais experiência e chance de sucesso
        const aumento = randomMath(100, 500);
        jogador.salario += aumento;
        jogador.experiencia = 0; // Reseta experiência para próximo aumento/aumento
        jogador.felicidade += 10;
        alert(`Seu chefe concedeu um aumento de R$${aumento}!`);
    } else {
        jogador.felicidade -= 5;
        jogador.saudeMental -= 5;
        alert("Seu chefe recusou o aumento. Tente novamente mais tarde ou ganhe mais experiência.");
    }
    atualizarStatus();
    carreira();
}

function mudarCarreira() {
    const confirmacao = confirm("Tem certeza que deseja mudar de carreira? Você perderá seu nível e experiência atuais.");
    if (confirmacao) {
        jogador.carreira = null;
        jogador.salario = 0;
        jogador.nivelCarreira = 0;
        jogador.experiencia = 0;
        alert("Você deixou sua carreira atual.");
    }
    atualizarStatus();
    carreira();
}

function gerenciarNegocio() {
    if (jogador.carreira !== "Empreendedor") {
        alert("Você não é um empreendedor para gerenciar um negócio.");
        return;
    }

    const acao = prompt("O que você quer fazer com seu negócio?\n1. Investir mais (R$500 - Aumenta lucro/risco)\n2. Cortar custos (R$0 - Diminui lucro/risco)\n3. Fazer marketing (R$200 - Aumenta lucro)");

    if (acao === "1") {
        if (jogador.dinheiro >= 500) {
            jogador.dinheiro -= 500;
            jogador.salario += randomMath(100, 300); // Aumenta o potencial de lucro
            jogador.felicidade += 5;
            alert("Você investiu mais no seu negócio. Esperamos bons retornos!");
        } else {
            alert("Dinheiro insuficiente para investir.");
        }
    } else if (acao === "2") {
        jogador.salario = Math.max(100, jogador.salario - randomMath(50, 150)); // Diminui o potencial de lucro
        jogador.felicidade -= 3;
        alert("Você cortou custos no seu negócio. Pode afetar a qualidade, mas economiza.");
    } else if (acao === "3") {
        if (jogador.dinheiro >= 200) {
            jogador.dinheiro -= 200;
            jogador.salario += randomMath(50, 200); // Aumenta o potencial de lucro
            jogador.felicidade += 3;
            alert("Você investiu em marketing. Mais clientes à vista!");
        } else {
            alert("Dinheiro insuficiente para marketing.");
        }
    } else {
        alert("Ação inválida.");
    }
    atualizarStatus();
    carreira();
}

function aposentar() {
    if (jogador.idade < 60) {
        alert("Você ainda é muito jovem para se aposentar.");
        return;
    }
    if (jogador.aposentado) {
        alert("Você já está aposentado.");
        return;
    }

    const confirmacao = confirm("Tem certeza que deseja se aposentar? Sua renda pode diminuir, mas sua felicidade pode aumentar.");
    if (confirmacao) {
        jogador.aposentado = true;
        jogador.salario = Math.floor(jogador.salario * 0.6); // Salário de aposentadoria (60% do último salário)
        jogador.felicidade += 20;
        jogador.saudeMental += 15;
        alert("Parabéns! Você se aposentou e agora pode desfrutar da vida!");
    }
    atualizarStatus();
    carreira();
}


function atividades() {
    if (jogador.idade >= 6) {
        const div = document.getElementById("atividades");
        div.classList.remove("hidden");
        div.innerHTML = "<h3>Atividades</h3>";

        // Esconde outras telas
        document.getElementById("relacoes").classList.add("hidden");
        document.getElementById("carreira").classList.add("hidden");

        div.innerHTML += `
            <button onclick="atividadeAcademia()">Ir à academia (Saúde +10, Felicidade +2)</button>
            <button onclick="atividadeViajar()">Viajar (R$1000, Felicidade +15)</button>
            <button onclick="atividadeHobby()">Praticar hobby (Felicidade +8)</button>
            <button onclick="atividadeMedico()">Ir ao medico (R$1000 se for maior de idade, saude +10)
            <button onclick="desenvolverHabilidade()">Desenvolver Habilidade</button>
            <button onclick="vidaNoturna()">Vida Noturna</button>
            <button onclick="abrirCassino()">Ir ao Cassino</button>
            <button onclick="comprarMelhoria()">Comprar melhorias</button>
            <button onclick="pilula()">Comprar uma pilula suspeita de uma Bruxa (R$100.000, 50% de chance de ser boa)</button>
            ${jogador.vicios.length > 0 ? `<button onclick="tentarLargarVicio()">Tentar Largar Vício</button>` : ''}
        `;
    }else {
        const div = document.getElementById("atividades");
        div.classList.remove("hidden");
        document.getElementById("carreira").classList.add("hidden");
        div.innerHTML = "<h3>Atividades</h3>";
        div.innerHTML += '<p>Você precisa ter pelo menos 6 anos para acessar a sessão "Atividades". </p>'
    }
}

// Função para salvar manualmente com identificador
function salvarComIdentificador() {
    const id = prompt("Digite um nome/ID para este save (ex.: 'Antes do Cassino'):");
    if (!id) return alert("Nome/ID obrigatório.");
    
    const chave = `save_${id.replace(/\s+/g, '_')}`; // Substitui espaços por underscores para chave válida
    localStorage.setItem(chave, JSON.stringify(jogador));
    alert(`Save '${id}' salvo com sucesso!`);
}

// Função para carregar um save por identificador
function carregarComIdentificador() {
    const saves = Object.keys(localStorage).filter(key => key.startsWith('save_'));
    if (saves.length === 0) return alert("Nenhum save encontrado.");
    
    const opcoes = saves.map(key => key.replace('save_', '').replace(/_/g, ' ')).join('\n');
    const escolha = prompt(`Saves disponíveis:\n${opcoes}\n\nDigite o nome/ID do save para carregar:`);
    if (!escolha) return;
    
    const chave = `save_${escolha.replace(/\s+/g, '_')}`;
    const salvo = localStorage.getItem(chave);
    if (!salvo) return alert("Save não encontrado.");
    
    const confirmacao = confirm(`Carregar save '${escolha}'? Isso sobrescreverá sua vida atual.`);
    if (confirmacao) {
        jogador = JSON.parse(salvo);
        atualizarStatus();
        alert(`Save '${escolha}' carregado!`);
    }
}

// Função para deletar um save
function deletarSave() {
    const saves = Object.keys(localStorage).filter(key => key.startsWith('save_'));
    if (saves.length === 0) return alert("Nenhum save encontrado.");
    
    const opcoes = saves.map(key => key.replace('save_', '').replace(/_/g, ' ')).join('\n');
    const escolha = prompt(`Saves disponíveis:\n${opcoes}\n\nDigite o nome/ID do save para deletar:`);
    if (!escolha) return;
    
    const chave = `save_${escolha.replace(/\s+/g, '_')}`;
    if (localStorage.getItem(chave)) {
        localStorage.removeItem(chave);
        alert(`Save '${escolha}' deletado!`);
    } else {
        alert("Save não encontrado.");
    }
}

function atividadeAcademia() {
    if (jogador.idade >= 14) {
        jogador.saude = Math.min(100, jogador.saude + 10);
        jogador.felicidade = Math.min(100, jogador.felicidade + 2);
        alert("Você foi à academia e melhorou sua saúde!");
    }else {
        alert("Você precisa ter 14 anos para ir à academia.")
    }
    atualizarStatus();
}

function atividadeEstudar() {
    if (jogador.idade >= 6){
        jogador.inteligencia = Math.min(100, jogador.inteligencia + 6);
        jogador.escolaridade ++
        jogador.felicidade = Math.min(100, jogador.felicidade + 5);
        alert(`Você estudou e sua inteligência aumentou para ${jogador.inteligencia}! Escolaridade: ${jogador.escolaridade}`);
        if (jogador.escolaridade === 12){
            alert('Você concluiu o ensino médio. Parabéns!')
        }
    } else {
        jogador.inteligencia = Math.min(100, jogador.inteligencia + 6);
        jogador.felicidade = Math.min(100, jogador.felicidade + 5);
        alert(`Você estudou e sua inteligência aumentou para ${jogador.inteligencia}!`);
    }
    passarAno()
    atualizarStatus();
}

function atividadeEstudarm() {
    if (jogador.escolaridadem === 12){
        alert('Você concluiu o ensino médio militar. Parabéns!')
    }
    if (jogador.idade >= 6){
        jogador.inteligencia = Math.min(100, jogador.inteligencia + 6);
        jogador.escolaridade ++
        jogador.escolaridadem ++
        jogador.felicidade = Math.min(100, jogador.felicidade + 5);
        alert(`Você estudou e sua inteligência aumentou para ${jogador.inteligencia}! Escolaridade Militar: ${jogador.escolaridadem} \nEscolaridade: ${jogador.escolaridade}`);
    } else {
        jogador.inteligencia = Math.min(100, jogador.inteligencia + 6);
        jogador.felicidade = Math.min(100, jogador.felicidade + 5);
        alert(`Você estudou e sua inteligência aumentou para ${jogador.inteligencia}!`);
    }
    passarAno()
    atualizarStatus();    
}

function atividadeViajar() {
    if (jogador.dinheiro >= 1000) {
        jogador.dinheiro -= 1000;
        jogador.felicidade = Math.min(100, jogador.felicidade + 15);
        jogador.saudeMental = Math.min(100, jogador.saudeMental + 10);
        alert("Você viajou e voltou mais feliz e relaxado!");
    } else alert("Você não tem dinheiro para viajar.");
    atualizarStatus();
}

function atividadeHobby() {
    jogador.felicidade = Math.min(100, jogador.felicidade + 8);
    jogador.saudeMental = Math.min(100, jogador.saudeMental + 5);
    alert("Você praticou seu hobby favorito e ficou mais feliz!");
    atualizarStatus();
}

function atividadeMedico() {
    const custo = 1000;
    const bonusSaude = 10;
    const bonusMental = 5;

    if (jogador.idade < 18) {
        jogador.saude = Math.min(100, jogador.saude + bonusSaude);
        jogador.saudeMental = Math.min(100, jogador.saudeMental + bonusMental);
        alert("Você foi ao médico (gratuito), sua saúde melhorou em 10 pontos.");
    } 
    else {
        if (jogador.dinheiro >= custo) {
            jogador.dinheiro -= custo;
            jogador.saude = Math.min(100, jogador.saude + bonusSaude);
            jogador.saudeMental = Math.min(100, jogador.saudeMental + bonusMental);
            alert("Você foi ao médico, sua saúde melhorou em 10 pontos.");
        } else {
            alert("Você não tem dinheiro para ir ao médico.");
            return; 
        }
    }
    atualizarStatus();
}


function desenvolverHabilidade() {
    const habilidade = prompt("Qual habilidade você quer desenvolver?\n1. Comunicação\n2. Liderança\n3. Criatividade");
    let custo = 150;
    if (jogador.dinheiro < custo) {
        alert("Dinheiro insuficiente para desenvolver habilidades.");
        return;
    }
    jogador.dinheiro -= custo;

    let habilidadeEscolhida = "";
    let aumento = randomMath(3, 8);

    if (habilidade === "1") {
        habilidadeEscolhida = "comunicacao";
        jogador.habilidades.comunicacao = Math.min(100, jogador.habilidades.comunicacao + aumento);
    } else if (habilidade === "2") {
        habilidadeEscolhida = "lideranca";
        jogador.habilidades.lideranca = Math.min(100, jogador.habilidades.lideranca + aumento);
    } else if (habilidade === "3") {
        habilidadeEscolhida = "criatividade";
        jogador.habilidades.criatividade = Math.min(100, jogador.habilidades.criatividade + aumento);
    } else {
        alert("Escolha inválida.");
        return;
    }
    jogador.felicidade += 5;
    alert(`Sua habilidade de ${habilidadeEscolhida} aumentou para ${jogador.habilidades[habilidadeEscolhida]}!`);
    atualizarStatus();
}

function tentarLargarVicio() {
    if (jogador.vicios.length === 0) {
        alert("Você não tem vícios para largar.");
        return;
    }

    const vicioParaLargar = prompt(`Qual vício você quer tentar largar? ${jogador.vicios.join(', ')}`);
    const indexVicio = jogador.vicios.indexOf(vicioParaLargar);

    if (indexVicio === -1) {
        alert("Vício não encontrado.");
        return;
    }

    const custoTerapia = 300;
    if (jogador.dinheiro < custoTerapia) {
        alert("Dinheiro insuficiente para terapia.");
        return;
    }

    jogador.dinheiro -= custoTerapia;
    jogador.saudeMental += 5; // Terapia ajuda a saúde mental

    if (Math.random() > 0.5) { // 50% de chance de sucesso
        jogador.vicios.splice(indexVicio, 1);
        jogador.felicidade += 20;
        jogador.saudeMental += 15;
        alert(`Parabéns! Você conseguiu largar o vício em ${vicioParaLargar}!`);
    } else {
        jogador.felicidade -= 10;
        jogador.saudeMental -= 10;
        alert(`Você falhou em largar o vício em ${vicioParaLargar} desta vez. Tente novamente!`);
    }
    atualizarStatus();
    atividades(); // Recarrega as atividades para atualizar o botão
}

function pilula() {
    let sorte = () => Math.random() < 0.5 ? 1 : 2;

    if (jogador.dinheiro > 99999) {
        if (sorte() === 1) {
            jogador.expectativaVida += 5;
            alert("Você comprou a pílula mágica, sua expectativa de vida melhorou em 5!");
            atualizarStatus();
        } else {
            jogador.saude -= 50;
            alert("Você comprou a pílula maligna, sua saúde diminuiu em 50 pontos!");
            atualizarStatus();
        }
    } else alert('Bruxa diz: Você ainda não atingiu o poder nescessario');
}




/* =========================
   CASSINO
========================= */
function abrirCassino() {
    if (jogador.idade >= 17) {
        const div = document.getElementById("atividades");
        div.classList.remove("hidden");
        div.innerHTML = "<h3>Cassino</h3>";

        div.innerHTML += `
            <button onclick="roleta()">Roleta</button>
            <button onclick="slots()">Slots</button>
            <button onclick="blackjack()">Blackjack</button>
            <button onclick="tentarVicio('Jogos de Azar')">Apostar Pesado (Risco de Vício)</button>
            <button onclick="atividades()">Voltar</button>
        `;
    }else {
        alert('Você precisa ter pelo menos 18 anos para ir ao cassino.')
    }
    
}

function roleta() {
    const aposta = parseInt(prompt("Quanto deseja apostar na roleta? (Mínimo R$50)"));
    if (isNaN(aposta) || aposta < 50) return alert("Aposta inválida ou muito baixa!");
    if (aposta > jogador.dinheiro) return alert("Dinheiro insuficiente!");

    jogador.dinheiro -= aposta; // Dedução da aposta inicial

    if (Math.random() < 0.02) { // 2% de chance de acertar o número exato (35x)
        const ganho = aposta * 35;
        jogador.dinheiro += ganho;
        jogador.felicidade = Math.min(100, jogador.felicidade + 20);
        alert(`Parabéns! Você acertou o número exato e ganhou R$${ganho}!`);
    } else if (Math.random() < 0.48) { // 48% de chance de ganhar em cor/par-ímpar (2x)
        const ganho = aposta * 2;
        jogador.dinheiro += ganho;
        jogador.felicidade = Math.min(100, jogador.felicidade + 5);
        alert(`Você ganhou na roleta! Ganhou R$${ganho}!`);
    } else {
        jogador.felicidade = Math.max(0, jogador.felicidade - 5);
        jogador.saudeMental = Math.max(0, jogador.saudeMental - 3);
        alert(`Você perdeu R$${aposta}.`);
    }
    atualizarStatus();
}

function slots() {
    const aposta = parseInt(prompt("Quanto deseja apostar nos slots? (Mínimo R$20)"));
    if (isNaN(aposta) || aposta < 20) return alert("Aposta inválida ou muito baixa!");
    if (aposta > jogador.dinheiro) return alert("Dinheiro insuficiente!");

    jogador.dinheiro -= aposta; // Dedução da aposta inicial

    const simbolos = ["🍒", "🍋", "🍊", "🍉", "⭐", "💎"]; // Mais símbolos
    let resultado = [simbolos[randomMath(0, simbolos.length - 1)], simbolos[randomMath(0, simbolos.length - 1)], simbolos[randomMath(0, simbolos.length - 1)]];
    alert(`Resultado: ${resultado.join(" | ")}`);

    if (resultado[0] === resultado[1] && resultado[1] === resultado[2]) {
        const ganho = aposta * 15; // Multiplicador maior
        jogador.dinheiro += ganho;
        jogador.felicidade = Math.min(100, jogador.felicidade + 10);
        alert(`Parabéns! Você ganhou R$${ganho}!`);
    } else if (resultado[0] === resultado[1] || resultado[1] === resultado[2] || resultado[0] === resultado[2]) {
        const ganho = aposta * 2; // Ganho menor para 2 símbolos iguais
        jogador.dinheiro += ganho;
        jogador.felicidade = Math.min(100, jogador.felicidade + 3);
        alert(`Quase! Você conseguiu 2 símbolos iguais e ganhou R$${ganho}!`);
    } else {
        jogador.felicidade = Math.max(0, jogador.felicidade - 3);
        jogador.saudeMental = Math.max(0, jogador.saudeMental - 2);
        alert(`Você perdeu R$${aposta}.`);
    }
    atualizarStatus();
}

function blackjack() {
    let aposta = parseInt(prompt("Quanto deseja apostar no Blackjack? (Mínimo R$100)"));
    if (isNaN(aposta) || aposta < 100) return alert("Aposta inválida ou muito baixa!");
    if (aposta > jogador.dinheiro) return alert("Dinheiro insuficiente!");

    jogador.dinheiro -= aposta; // Dedução da aposta inicial

    const jogadorScore = randomMath(15, 21); // Mais chance de pontuações altas
    const dealerScore = randomMath(15, 21);

    alert(`Você: ${jogadorScore} | Dealer: ${dealerScore}`);

    if (jogadorScore > 21) {
        alert("Você estourou! Você perdeu.");
    } else if (dealerScore > 21) {
        jogador.dinheiro += aposta * 2;
        jogador.felicidade = Math.min(100, jogador.felicidade + 10);
        alert("Dealer estourou! Você ganhou!");
    } else if (jogadorScore > dealerScore) {
        jogador.dinheiro += aposta * 2;
        jogador.felicidade = Math.min(100, jogador.felicidade + 8);
        alert("Você ganhou!");
    } else if (jogadorScore < dealerScore) {
        jogador.felicidade = Math.max(0, jogador.felicidade - 5);
        jogador.saudeMental = Math.max(0, jogador.saudeMental - 3);
        alert("Você perdeu!");
    } else {
        jogador.dinheiro += aposta; // Devolve a aposta em caso de empate
        alert("Empate!");
    }
    atualizarStatus();
}

function comprarMelhoria() {

    const itens = [
        { 
            nome: "Carro Esportivo", 
            preco: 200000, 
            efeitos: { felicidade: 20, aparencia: 10 } 
        },
        { 
            nome: "Casa Luxuosa", 
            preco: 5000000, 
            efeitos: { felicidade: 30, saudeMental: 15 } 
        },
        { 
            nome: "Computador Gamer", 
            preco: 5000, 
            efeitos: { felicidade: 10, inteligencia: 5 } 
        },
        { 
            nome: "Plástica Facial", 
            preco: 30000, 
            efeitos: { aparencia: 20, felicidade: 10 }, 
            condicao: () => jogador.aparencia < 80 
        },
        { 
            nome: "Livros de Estudo", 
            preco: 500, 
            efeitos: { inteligencia: 10, inteligencia: 3 },
            
        },
        { 
            nome: "Curso", 
            preco: 3000, 
            efeitos: { inteligencia: 7, inteligencia: 3},
            
        },
        { 
            nome: "Viagem Internacional", 
            preco: 20000, 
            efeitos: { felicidade: 25, inteligencia: 3 } 
        },
        { 
            nome: "Academia Premium", 
            preco: 8500, 
            efeitos: { saude: 10, aparencia: 5 } 
        },
        { 
            nome: "Smartphone Top de Linha", 
            preco: 12000, 
            efeitos: { felicidade: 8} 
        },
        { 
            nome: "Sessões de Terapia", 
            preco: 18000, 
            efeitos: { saudeMental: 20 } 
        },
        { 
            nome: "Investimento em Ações", 
            preco: 10000, 
            efeitos: { inteligencia: 5 }, 
            condicao: () => jogador.inteligencia >= 90 
        },
        { 
            nome: "Bicicleta Elétrica", 
            preco: 3500, 
            efeitos: { saude: 5, felicidade: 5 } 
        },
        { 
            nome: "Bobby Goods", 
            preco: 50, 
            efeitos: {felicidade: 5 } 
        },
        { 
            nome: "Faca de Amor reciproco", 
            preco: 50000, 
            efeitos: {felicidade: 15} 
        },
        { 
            nome: "Picole de pistache", 
            preco: 200, 
            efeitos: {felicidade: 5 } 
        },
        { 
            nome: "Morango do amor", 
            preco: 50000, 
            efeitos: {saude: 50} 
        },
        { 
            nome: "Assinatura de Streaming", 
            preco: 5000, 
            efeitos: { felicidade: 5 } 
        },
        { 
            nome: "Reforma da Casa", 
            preco: 30000, 
            efeitos: { felicidade: 15, saudeMental: 10 } 
        }

    ];

    let msg = "Itens disponíveis:\n";
    itens.forEach((i, index) => {
        msg += `${index + 1}. ${i.nome} - R$${i.preco}`;
        if (i.condicao && !i.condicao()) {
            msg += " (Requisitos não atendidos)";
        }
        msg += "\n";
    });
    msg += "Escolha o número do item para comprar:";

    const escolha = parseInt(prompt(msg));
    const item = itens[escolha - 1];

    if (!item) return alert("Escolha inválida!");
    if (item.condicao && !item.condicao()) return alert("Você não atende aos requisitos para comprar este item.");

    if (jogador.dinheiro >= item.preco) {
        jogador.dinheiro -= item.preco;
        jogador.melhorias.push(item.nome);

        // Aplica todos os efeitos
        for (let efeito in item.efeitos) {
            if (efeito === "felicidade") jogador.felicidade = Math.min(100, jogador.felicidade + item.efeitos[efeito]);
            if (efeito === "aparencia") jogador.aparencia = Math.min(100, jogador.aparencia + item.efeitos[efeito]);
            if (efeito === "inteligencia") jogador.inteligencia = Math.min(100, jogador.inteligencia + item.efeitos[efeito]);
            if (efeito === "saudeMental") jogador.saudeMental = Math.min(100, jogador.saudeMental + item.efeitos[efeito]);

            if (efeito === "experiencia") jogador.experiencia = Math.min(100, jogador.experiencia + item.efeitos[efeito]);
        }

        // Atualiza patrimônio
        jogador.patrimonio = (jogador.patrimonio || 0) + item.preco;

        alert(`Você comprou ${item.nome}!`);
        atualizarStatus();
    } else {
        alert("Dinheiro insuficiente!");
    }
}

function temaEscuro() {

    aplicarTemaEscuro();

    const expira = new Date();
    expira.setTime(expira.getTime() + (365 * 24 * 60 * 60 * 1000)); // 1 ano
    document.cookie = `tema=escuro; expires=${expira.toUTCString()}; path=/`;
}

function temaClaro() {
    aplicarTemaClaro();

    const expira = new Date();
    expira.setTime(expira.getTime() + (365 * 24 * 60 * 60 * 1000));
    document.cookie = `tema=claro; expires=${expira.toUTCString()}; path=/`;
}

function aplicarTemaEscuro() {
    document.body.style.background = 'linear-gradient(135deg, #0d2b2a, #1b1f2f)';

    document.querySelectorAll('.container').forEach(c => {
        c.style.background = '#1e1e2e';
    });

    document.querySelectorAll('p, h1, h2, h3, h4, h5, h6').forEach(t => {
        t.style.color = 'whitesmoke';
    });

    const estatisticas = document.querySelector('#estatisticas');
    if (estatisticas) {
        estatisticas.style.background = '#263238';
        estatisticas.style.border = '1px solid #37474f';
    }

    document.querySelectorAll('input, select, textarea').forEach(el => {
        el.style.border = '1px solid #4db6ac';
        el.style.backgroundColor = '#263238';        // corrigido o bug do #26323
        el.style.color = '#e0f7fa';
    });
}

function aplicarTemaClaro() {
    document.body.style.background = 'linear-gradient(135deg, #41ccc7ff, #7687ceff)';

    document.querySelectorAll('.container').forEach(c => {
        c.style.background = 'whitesmoke';
    });

    document.querySelectorAll('p, h1, h2, h3, h4, h5, h6').forEach(t => {
        t.style.color = '#1e1e2e';
    });

    document.body.style.color = '#1e1e2e';

    const estatisticas = document.querySelector('#estatisticas');
    if (estatisticas) {
        estatisticas.style.background = '#a0a3a5ff';
        estatisticas.style.border = '1px solid #616161ff';
    }

    document.querySelectorAll('input, select, textarea').forEach(el => {
        el.style.border = '1px solid #616161ff';
        el.style.backgroundColor = '#a0a3a5ff';
        el.style.color = '#1e1e2e';
    });
}

function pegarTemaSalvo() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [nome, valor] = cookie.trim().split('=');
        if (nome === 'tema') return valor;
    }
    return null;
}

window.addEventListener('DOMContentLoaded', () => {
    const tema = pegarTemaSalvo();

    if (tema === 'escuro') {
        aplicarTemaClaro();
    } else {
        aplicarTemaEscuro()
}})
