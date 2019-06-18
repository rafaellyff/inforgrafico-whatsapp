/*INTRODUÇÃO*/

var fala_1 = [
    { texto: "Oi", tempo: 500 },
    { texto: "Tudo bem?", tempo: 1500 },
    { texto: " Estou levantando informações sobre a Universidade Federal do Ceará para uma série de reportagens.", tempo: 5000 },
    { texto: " Já consegui encontrar bastante coisa bacana, mas preciso checar se as informações que consegui são verdadeiras", tempo: 9000 },
    { texto: "E minhas fontes me disseram (coisa de jornalista rsrs) que você está em vários grupos da UFC", tempo: 11500 },
    { texto: "Topa me ajudar?", tempo: 13000 }
];

var pergunta_1 = { 
    falas: fala_1,
    resposta: "Sim, topo!",
    numero: 1,
    tipo: "Emoji",
    msg_certo: " Ótimo! Então eu vou mandando umas dúvidas que surgiram e você vai checando. <i class='em em-wink'></i>",
    msg_errado: "Poxa, nenhuma ajuda <i class='em em-cry'></i> , se mudar de ideia é só me avisar!"
}

/* PERGUNTA 1*/

var fala_2 = [
    { texto: "Tava vendo umas coisas sobre o Natchup, o molho de acerola que se assemelha ao catchup e encontrei muita coisa bacana <i class='em em-heart_eyes'></i>", tempo: 5000 },
    { texto: "Vi até que já estão exportando o molho para vários países e sendo reconhecidos internacionalmente!", tempo: 10000 },
    { texto: "Vi também que o Natchup recebeu um Selo importante no Salão Internacional de Alimentação (SIAL)", tempo: 15000 },
    { texto: "A primeira é: Qual foi o Selo que o Natchup recebeu no Salão Internacional de Alimentação (SIAL) ?", tempo: 20000 }
];

var pergunta_2 = { 
    falas: fala_2,
    resposta: "Inovação",
    numero: 2,
    tipo: "Sticker",
    msg_certo: "Foi isso mesmo que eu tinha encontrado, confere!",
    sticker_certo: "feliz2.jpg",
    msg_errado: "Você tem certeza? Quando pesquisei encontrei outra coisa. ",
    sticker_errado: "triste2.jpg"
}

/* PERGUNTA 2 */

var fala_3 = [
    { texto: "Os curativos com pele de tilápia estão ganhando o mundo, né?", tempo: 1000 },
    { texto: "Já encontrei muita coisa sobre o projeto e vi que eles agora vão ter amostras testadas pela NASA, isso é incrível!", tempo: 2000 },
    { texto: "Gostaria de entrar em contato diretamente com eles para saber mais de perto do projeto. <i class='em em-thinking_face'></i>", tempo: 5000 },
    { texto: "Outra coisa que preciso saber é: qual órgão da UFC é responsável pela produção de pele de tilápia na UFC?", tempo: 8000 }
];

var pergunta_3 = { 
    falas: fala_3,
    resposta: "NPDM",
    numero: 3,
    msg_certo: "É esse mesmo, obrigado!",
    msg_errado: "Que estranho, acho que não é bem esse o nome. Você se importa de pesquisar de novo?",
    tipo: "Emoji"
}

/* PERGUNTA 3*/

var fala_4 = [
    { texto: "Nossa, olha só o que eu achei <i class='em em-scream'></i>", tempo: 1000 },
    { texto: "A UFC vem desenvolvendo um tratamento para Hanseníase que consegue cicatrizar ferimentos abertos há mais de 15 anos pela doença!", tempo: 3500 },
    { texto: "Será se isso é verdade mesmo?", tempo: 4500 },
    { texto: "Vi também que ele é mais barato que os tratamentos disponíveis no mercado", tempo: 5500 },
    { texto: "Checa pra mim a percentual de economia com o tratamento da UFC?", tempo: 7000 }
];

var pergunta_4 = { 
    falas: fala_4,
    resposta: "50% a 70%",
    numero: 4,
    msg_certo: "É isso mesmo! Além de eficiente pra caramba ainda é econômico. Muito bacana, né?",
    msg_errado: "Olokinho meu, tem certeza de que está certo?",
    tipo: "Sticker",
    sticker_certo: "feliz4.png",
    sticker_errado: "triste4.png"
}

/* PERGUNTA 4*/

var fala_5 = [
    { texto: "Essa aqui me deu fome rsrs", tempo: 800 },
    { texto: "Não sei se você sabe, mas a UFC desenvolveu um macarrão que além de gostoso dá um show de nutrientes", tempo: 1500 },
    { texto: "Deu até vontade de comer um Spaguetti com o Natchup rsrs <i class='em em-yum'></i>", tempo: 2500 },
    { texto: " Eu vi aqui do que ele é feito, mas não tenho certeza dos ingredientes", tempo: 4000 },
    { texto: "Vê se você consegue descobrir pra mim: <i class='em em-wink'></i>", tempo: 5500 }
];

var pergunta_5 = { 
    falas: fala_5,
    resposta: "Farinha de linhaça e faseolamina",
    numero: 5,
    msg_certo: "É isso aí, nem imaginava que desse pra fazer macarrão com esses ingredientes rsrs",
    msg_errado: "Tem algo errado aí, não? Dá só mais uma conferida, por favor!<i class='em em-anguished'></i>",
    tipo: "Emoji"
}

/* PERGUNTA 5*/

var fala_6 = [
    { texto: "Caramba! Me disseram que a UFC em 2017 teve mais de 2.435 artigos publicados em periódicos, isso é muita coisa!  <i class='em em-eyes'></i>", tempo: 1500 },
    { texto: "E tem muita pesquisa diferente rolando ao mesmo tempo, né?", tempo: 3000 },
    { texto: "Quantos grupos de pesquisa certificados e não certificados/em andamento estão ativos na UFC?", tempo: 5600 },
];

var pergunta_6 = { 
    falas: fala_6,
    resposta: "273 certificados e 165 não certificados",
    numero: 6,
    msg_certo: "Arrasou! As informações bateram <i class='em em-smiley'></i> Obrigado por ter me ajudado com mais essa!",
    msg_errado: "Que estranho, me disseram outra coisa. Tem certeza de que é essa a resposta?",
    tipo: "Sticker",
    sticker_certo: "feliz6.png",
    sticker_errado: "triste6.png"
}

/* FINALIZAR*/

var fala_7 = [
    { texto: "Sei que aluguei bastante agora, mas você ajudou bastante! Obrigado !", tempo: 1500 },
    { texto: "Pelo menos dessa vez os grupos do whatsapp foram uma fonte confiável rsrs", tempo: 3500 },
    { texto: "Esse projeto me  ajudou a perceber o tanto de coisa bacana que a UFC, sabia?", tempo: 5500 },
    { texto: "Agora vou organizar minhas pautas e preparar o material das reportagens.   ", tempo: 7500 },
    { texto: "Tchau. Abraço!  <i class='em em-heartpulse'></i>", tempo: 8500 },
];

var pergunta_7 = { 
    falas: fala_7,
    resposta: "Tchau",
    numero: 7,
    tipo: "Emoji",
    msg_certo: "",
    msg_errado: ""
}