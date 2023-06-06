const jogos = [
    {
        id: 'overwatch',
        nome: 'Overwatch',
        categoria: 'FPS',
        nota: '8.5/10',
        descricao: 'Overwatch 2 é um jogo de ação em equipe grátis para jogar que se passa em um futuro otimista, no qual cada partida é um campo de batalha 5v5 definitivo. Jogue como uma lutadora da liberdade viajante do tempo, um DJ do campo batalha ou outro dos mais de 30 heróis únicos em suas lutas ao redor do mundo.',
        imagem: './imagens/overwatch-bg.jpg'
    },
    {
        id: 'genshin',
        nome: 'Genshin Impact',
        categoria: 'Otaku',
        nota: '0/10',
        descricao: 'Genshin Impact é um jogo eletrônico de ação e aventura de mundo aberto, desenvolvido pela miHoYo. Ambientado em um mundo chamado Teyvat, o jogo oferece uma experiência cativante, repleta de paisagens deslumbrantes e uma história envolvente. No jogo, os jogadores assumem o papel de um Viajante que chega a Teyvat, um mundo repleto de maravilhas e mistérios. À medida que exploram as vastas terras de Teyvat, os jogadores encontrarão diversos personagens, cada um com suas próprias personalidades, histórias e habilidades únicas.',
        imagem: './imagens/genshin-bg.jpeg'
    },
    {
        id: 'diablo',
        nome: 'Diablo IV',
        categoria: 'Hack and Slash',
        nota: '9.5/10',
        descricao: 'A batalha interminável entre o Paraíso Celestial e o Inferno Ardente continua, e o caos ameaça consumir Santuário. Com inúmeros demônios para matar, muitas habilidades para dominar, masmorras horripilantes e tesouros lendários, este vasto mundo aberto traz a promessa de aventura e devastação. Sobreviva e vença a escuridão. Ou sucumba às sombras.',
        imagem: './imagens/diablo-bg.jpeg'
    },
    {
        id: 'wow',
        nome: 'World of Warcraft',
        categoria: 'RPG',
        nota: '8/10',
        descricao: 'World of Warcraft (também conhecido pelo acrônimo WoW) é um jogo on-line do gênero MMORPG, desenvolvido e distribuído pela produtora Blizzard Entertainment e lançado em 2004. O jogo se passa no mundo fantástico de Azeroth, introduzido no primeiro jogo da série, Warcraft: Orcs & Humans, lançado em 1994. É considerado o mais popular MMORPG de todo o mundo, tendo chegado a ter 11 milhões de jogadores ativos no ano de 2010. Em 2016, contava com 5 milhões de jogadores regulares',
        imagem: './imagens/wow-bg.jpg'
    }

];

const mudar = (idJogo) => {
    const temp = document.querySelector('#dados')
    const tempJogo = jogos.filter(jogo => jogo.id === idJogo)[0]
    temp.querySelector('.titulo').innerHTML = tempJogo.nome;
    temp.querySelector('.genero').innerHTML = tempJogo.categoria;
    temp.querySelector('.nota').innerHTML = tempJogo.nota;
    temp.querySelector('.jogo-descricao__texto').innerHTML = tempJogo.descricao;
    temp.querySelector('.jogo-img').src = tempJogo.imagem;
}

// const overwatch = document.querySelector('.overwatch');
// const genshin = document.querySelector('.genshin');
// const diablo = document.querySelector('.diablo');
// const wow = document.querySelector('.wow');


// overwatch.addEventListener('click', () => {
    // jogoTitulo.innerHTML = jogos[0].nome;
    // jogoGenero.innerHTML = jogos[0].categoria;
    // jogoNota.innerHTML = jogos[0].nota;
    // jogoDescricao.innerHTML = jogos[0].descricao;
    // jogoImagem.src = jogos[0].imagem;

// })

// genshin.addEventListener('click', () => {
//     jogoTitulo.innerHTML = jogos[1].nome;
//     jogoGenero.innerHTML = jogos[1].categoria;
//     jogoNota.innerHTML = jogos[1].nota;
//     jogoDescricao.innerHTML = jogos[1].descricao;
//     jogoImagem.src = jogos[1].imagem;
// })

// diablo.addEventListener('click', () => {
//     jogoTitulo.innerHTML = jogos[2].nome;
//     jogoGenero.innerHTML = jogos[2].categoria;
//     jogoNota.innerHTML = jogos[2].nota;
//     jogoDescricao.innerHTML = jogos[2].descricao;
//     jogoImagem.src = jogos[2].imagem;
// })

// wow.addEventListener('click', () => {
//     jogoTitulo.innerHTML = jogos[3].nome;
//     jogoGenero.innerHTML = jogos[3].categoria;
//     jogoNota.innerHTML = jogos[3].nota;
//     jogoDescricao.innerHTML = jogos[3].descricao;
//     jogoImagem.src = jogos[3].imagem;
// });


// const jogoTitulo = temp.querySelector('.titulo');
// const jogoGenero = temp.querySelector('.genero');
// const jogoNota = temp.querySelector('.nota');
// const jogoDescricao = temp.querySelector('.jogo-descricao__texto');
// const jogoImagem = temp.querySelector('.jogo-img');