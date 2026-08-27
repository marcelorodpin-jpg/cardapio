/* =====================================================================
   CONFIGURAÇÃO DO RESTAURANTE
   Edite os valores abaixo para atualizar o cabeçalho e o rodapé do site.
   Não é necessário mexer em nenhum outro arquivo.
   ===================================================================== */

const RESTAURANTE = {
  nome: "Verde & Brasa",
  subtitulo: "Cozinha contemporânea, fogo de chão e temporada",

  // Caminho do logotipo (aparece no canto superior esquerdo).
  // Recomendado: imagem quadrada ou horizontal, fundo transparente (PNG ou SVG).
  logo: "images/logo.svg",

  // Endereço mostrado no rodapé
  endereco: "Rua das Oliveiras, 245 — Jardim Paulista, São Paulo, SP",
  horario: "Terça a domingo, das 18h à 00h",

  // Link "Ver no Maps" (abre o Google Maps em nova aba)
  mapsLinkUrl: "https://maps.google.com/?q=Rua+das+Oliveiras+245+São+Paulo",

  // URL de incorporação do Google Maps (Google Maps > Compartilhar > Incorporar mapa > copiar o link do "src")
  mapsEmbedUrl: "https://www.google.com/maps?q=Rua+das+Oliveiras+245+São+Paulo&output=embed",

  // Redes sociais — deixe em branco ("") para ocultar o ícone
  redesSociais: {
    facebook: "https://facebook.com/verdeebrasa",
    instagram: "https://instagram.com/verdeebrasa",
    whatsapp: "https://wa.me/5511999999999"
  }
};

/* =====================================================================
   CARDÁPIO
   Cada seção é um bloco de comidas/bebidas (Entradas, Saladas, etc).
   Para ADICIONAR um item: copie um bloco { ... } dentro de "itens" e
   preencha os campos.
   Para REMOVER um item: apague o bloco { ... } correspondente.
   Para REMOVER uma seção inteira: apague o bloco de seção inteiro
   (de "{ id: ..." até o "}," que fecha a seção) e o nome some do menu
   e do menu de navegação automaticamente.

   Campos de cada item:
     nome           -> nome do prato/bebida (obrigatório)
     imagem         -> caminho da foto (opcional; se vazio, mostra um
                        ícone ilustrativo da categoria)
     preco          -> apenas números, ex: "48,00" (opcional)
     descricao      -> breve descrição do prato (opcional)
     modoPreparo    -> como é preparado (opcional)
     rendimento     -> porção/serve quantas pessoas (opcional)
     acompanhamento -> o que acompanha o prato (opcional)
   ===================================================================== */

const MENU_SECOES = [
  {
    id: "entradas",
    titulo: "Entradas",
    icone: "prato",
    itens: [
      {
        nome: "Pão de fermentação natural e manteiga de ervas",
        imagem: "images/pao.png",
        preco: "28,00",
        descricao: "Pão da casa, crosta crocante e miolo macio, servido quente.",
        modoPreparo: "Fermentação natural de 24h, assado em forno a lenha.",
        rendimento: "Serve 2 pessoas",
        acompanhamento: "Manteiga de ervas frescas e flor de sal"
      },
      {
        nome: "Carpaccio de abóbora assada",
        imagem: "images/abobora.png",
        preco: "34,00",
        descricao: "Fatias finas de abóbora assada em brasa lenta, com toque cítrico.",
        modoPreparo: "Assada inteira na brasa por 3h, fatiada na hora",
        rendimento: "Serve 2 pessoas",
        acompanhamento: "Castanhas tostadas, rúcula e vinagrete de laranja"
      }
    ]
  },

  {
    id: "saladas",
    titulo: "Saladas",
    icone: "folha",
    itens: [
      {
        nome: "Salada de folhas verdes e queijo de cabra",
        imagem: "images/saladadefolhas.png",
        preco: "38,00",
        descricao: "Mix de folhas orgânicas com queijo de cabra levemente grelhado.",
        modoPreparo: "Queijo grelhado na chapa por 1 minuto de cada lado",
        rendimento: "Serve 1-2 pessoas",
        acompanhamento: "Nozes caramelizadas e mel de flor silvestre"
      },
      {
        nome: "Salada morna de grãos e legumes da estação",
        imagem: "images/saladadegraos.png",
        preco: "36,00",
        descricao: "Grão-de-bico, quinoa e legumes da estação levemente assados.",
        modoPreparo: "Legumes assados no forno a 200°C por 20 minutos",
        rendimento: "Serve 1-2 pessoas",
        acompanhamento: "Molho tahine e ervas frescas"
      }
    ]
  },

  {
    id: "peixes",
    titulo: "Peixes",
    icone: "peixe",
    itens: [
      {
        nome: "Namorado grelhado na brasa",
        imagem: "images/peixe.png",
        preco: "89,00",
        descricao: "Filé de namorado grelhado na brasa, pele crocante.",
        modoPreparo: "Grelhado na brasa de carvão, 4 minutos de cada lado",
        rendimento: "Serve 1 pessoa",
        acompanhamento: "Purê de mandioquinha e legumes salteados"
      },
      {
        nome: "Camarões ao alho e limão siciliano",
        imagem: "images/camarao.png",
        preco: "94,00",
        descricao: "Camarões grandes salteados com alho e limão siciliano.",
        modoPreparo: "Selados em fogo alto por 3 minutos",
        rendimento: "Serve 1-2 pessoas",
        acompanhamento: "Arroz de ervas e farofa de castanhas"
      }
    ]
  },

  {
    id: "carnes",
    titulo: "Carnes",
    icone: "carne",
    itens: [
      {
        nome: "Picanha na brasa",
        imagem: "images/picanha.png",
        preco: "112,00",
        descricao: "Corte nobre grelhado inteiro na brasa e fatiado à mesa.",
        modoPreparo: "Grelhada na brasa de carvão por cerca de 40 minutos",
        rendimento: "Serve 2 pessoas",
        acompanhamento: "Farofa da casa, vinagrete e mandioca frita"
      },
      {
        nome: "Costela assada 12 horas",
        imagem: "images/costela.png",
        preco: "98,00",
        descricao: "Costela bovina de cocção lenta, desmancha no garfo.",
        modoPreparo: "Assada lentamente por 12 horas em baixa temperatura",
        rendimento: "Serve 1-2 pessoas",
        acompanhamento: "Polenta cremosa e couve refogada"
      }
    ]
  },

  {
    id: "porcoes",
    titulo: "Porções",
    icone: "prato",
    itens: [
      {
        nome: "Batata rústica com alecrim",
        imagem: "images/batatarustica.png",
        preco: "32,00",
        descricao: "Batatas assadas com casca, alecrim fresco e alho.",
        modoPreparo: "Assadas no forno a lenha por 25 minutos",
        rendimento: "Serve 2-3 pessoas",
        acompanhamento: "Molho aioli da casa"
      },
      {
        nome: "Anéis de cebola empanados",
        imagem: "images/aneisdecebola.png",
        preco: "29,00",
        descricao: "Cebola roxa empanada e frita na hora, crocante por fora.",
        modoPreparo: "Empanados e fritos a 180°C",
        rendimento: "Serve 2 pessoas",
        acompanhamento: "Molho barbecue defumado"
      }
    ]
  },

  {
    id: "veg",
    titulo: "Vegano e vegetariano",
    icone: "folha",
    itens: [
      {
        nome: "Risoto de cogumelos selvagens (vegano)",
        imagem: "images/risotococumelos.png",
        preco: "62,00",
        descricao: "Risoto cremoso à base de caldo de legumes, sem derivados animais.",
        modoPreparo: "Cocção lenta com adição gradual de caldo, 18 minutos",
        rendimento: "Serve 1 pessoa",
        acompanhamento: "Farofa de castanha-do-pará e ervas"
      },
      {
        nome: "Berinjela recheada (vegetariano)",
        imagem: "images/berinjelarecheada.png",
        preco: "48,00",
        descricao: "Berinjela assada recheada com legumes e queijo coalho grelhado.",
        modoPreparo: "Assada inteira e gratinada por 10 minutos",
        rendimento: "Serve 1 pessoa",
        acompanhamento: "Molho de tomate rústico"
      }
    ]
  },

  {
    id: "bebidas",
    titulo: "Bebidas não alcoólicas",
    icone: "copo",
    itens: [
      {
        nome: "Limonada de laranja e hortelã",
        imagem: "images/limonadadelaranja.png",
        preco: "18,00",
        descricao: "Limonada fresca com toque cítrico de laranja e hortelã.",
        rendimento: "500 ml"
      },
      {
        nome: "Suco de frutas da estação",
        imagem: "images/sucodefrutasdaestacao.png",
        preco: "16,00",
        descricao: "Suco natural, sabor conforme a fruta do dia.",
        rendimento: "400 ml"
      }
    ]
  },

  {
    id: "cervejas",
    titulo: "Cervejas",
    icone: "cerveja",
    itens: [
      {
        nome: "Pilsen artesanal",
        imagem: "images/cerveja.png",
        preco: "17,00",
        descricao: "Leve, refrescante e de fácil consumo.",
        rendimento: "Garrafa 355 ml"
      },
      {
        nome: "IPA lupulada",
        imagem: "images/cerveja.png",
        preco: "22,00",
        descricao: "Amargor acentuado e aroma cítrico de lúpulo.",
        rendimento: "Garrafa 355 ml"
      }
    ]
  },

  {
    id: "chopps",
    titulo: "Chopps",
    icone: "cerveja",
    itens: [
      {
        nome: "Chopp Pilsen",
        imagem: "images/choppilsen.png",
        preco: "14,00",
        descricao: "Servido bem gelado, direto do barril.",
        rendimento: "300 ml"
      },
      {
        nome: "Chopp escuro",
        imagem: "images/choppilsen.png",
        preco: "16,00",
        descricao: "Encorpado, com notas de malte torrado.",
        rendimento: "300 ml"
      }
    ]
  },

  {
    id: "drinks",
    titulo: "Drinks",
    icone: "coquetel",
    itens: [
      {
        nome: "Negroni de brasa",
        imagem: "images/negroni.png",
        preco: "36,00",
        descricao: "Releitura do clássico italiano com um toque defumado.",
        modoPreparo: "Gin, Campari e vermute rosso, defumado antes de servir",
        rendimento: "Dose única"
      },
      {
        nome: "Caipirinha de frutas da estação",
        imagem: "images/caipirinha.png",
        preco: "28,00",
        descricao: "Cachaça artesanal com a fruta da estação escolhida pelo chef.",
        rendimento: "Dose única"
      }
    ]
  },

  {
    id: "cafe",
    titulo: "Café",
    icone: "xicara",
    itens: [
      {
        nome: "Espresso",
        imagem: "images/cafeexpresso.png",
        preco: "9,00",
        descricao: "Café 100% arábica, torra média.",
        rendimento: "Dose única"
      },
      {
        nome: "Café coado na hora",
        imagem: "images/cafecoado.png",
        preco: "12,00",
        descricao: "Método filtrado, extraído na hora do pedido.",
        rendimento: "Xícara 200 ml"
      }
    ]
  },

  {
    id: "sobremesas",
    titulo: "Sobremesas",
    icone: "sobremesa",
    itens: [
      {
        nome: "Petit gâteau de doce de leite",
        imagem: "images/petitgateo.png",
        preco: "34,00",
        descricao: "Bolo quente com recheio cremoso de doce de leite.",
        modoPreparo: "Assado por 8 minutos, servido imediatamente",
        rendimento: "Serve 1 pessoa",
        acompanhamento: "Sorvete de creme"
      },
      {
        nome: "Cheesecake de frutas vermelhas",
        imagem: "images/cheesecake.png",
        preco: "30,00",
        descricao: "Base amanteigada com creme de queijo e calda de frutas vermelhas.",
        rendimento: "Serve 1 pessoa"
      }
    ]
  }
];
