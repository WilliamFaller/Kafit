const groups = ['Costas', 'Biceps', 'Peito', 'Triceps', 'Ombro', 'Quadriceps', 'Gluteo', 'Posterior', 'Superiores', 'Descanso', 'Inferiores'];

export const training = {
  abc1m: {
    days: {
      'Domingo': groups[9],
      'Segunda-Feira': groups[2] + ' e ' + groups[3],
      'Terça-Feira': groups[0] + ' e ' + groups[1],
      'Quarta-Feira': groups[10] + ' e ' + groups[4],
      'Quinta-Feira': groups[2] + ' e ' + groups[3],
      'Sexta-Feira': groups[0] + ' e ' + groups[1],
      'Sabado': groups[10] + ' e ' + groups[4],
    },
    'exercises': {
      'Segunda-Feira': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto.gif',
          title: 'Supino Reto',
          groups: [groups[2]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/11/03081301-crucifixo-com-halteres.gif',
          title: 'Crucifixo',
          groups: [groups[2]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/voador-no-aparelho.gif',
          title: 'Peck Deck',
          groups: [groups[2]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley.gif',
          title: 'Máquina de Tríceps',
          groups: [groups[3]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley-com-corda.gif',
          title: 'Corda de Tríceps',
          groups: [groups[3]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-nuca-com-halter.gif',
          title: 'Tríceps Francês',
          groups: [groups[3]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal.gif',
          title: 'Abdominal Inferior',
          groups: [groups[9]],
          series: 4,
          repetitions: 12
        },
      ],
      'Terça-Feira': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-puxada-aberta-com-barra-no-pulley.gif',
          title: 'Pulley Frente',
          groups: [groups[0]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://cdn.discordapp.com/attachments/1150544090665074719/1200451982146670714/remada-articulada-como-fazer.gif',
          title: 'Remada Articulada',
          groups: [groups[0]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/remada-sentado-com-cabos-e-triangulo-para-costas.gif',
          title: 'Remada Baixa',
          groups: [groups[0]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2022/09/rosca-biceps-direta-com-halteres.gif',
          title: 'Bíceps Alternados',
          groups: [groups[1]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/05/cable-curl.gif',
          title: 'Biceps Cross-Over',
          groups: [groups[1]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/rosca-biceps-direta-na-barra-ez.gif',
          title: 'Rosca Direta',
          groups: [groups[1]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2023/02/47271301-abdominal-supra.gif',
          title: 'Abdominal Superior',
          groups: [groups[9]],
          series: 4,
          repetitions: 12
        },
      ],
      'Quarta-Feira': [
        {
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2021/12/leg-press-horizontal-para-que-serve-como-fazer.jpg',
          title: 'Leg Press Horizontal',
          groups: [groups[5]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-extensao-de-pernas-na-maquina.gif',
          title: 'Cadeira Extensora',
          groups: [groups[5]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-flexao-de-pernas-na-maquina.gif',
          title: 'Mesa Flexora',
          groups: [groups[7]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/agachamento-no-rack.gif',
          title: 'Agachamento Hack',
          groups: [groups[5]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-abducao-de-pernas-na-maquina.gif',
          title: 'Abdutora',
          groups: [groups[7]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2022/08/exercicios-panturrilhas-sentado-gemeos-burrinho.png',
          title: 'Banco Gêmeos',
          groups: [groups[7]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-elevacao-lateral-de-ombros-com-halteres.gif',
          title: 'Elevação Lateral',
          groups: [groups[4]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://grandeatleta.com.br/wp-content/uploads/2020/02/elevacao-frontal.jpg',
          title: 'Elevação Frontal',
          groups: [groups[4]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/abdominal-alternado-no-chao.gif',
          title: 'Abdominal Oblíquo',
          groups: [groups[9]],
          series: 4,
          repetitions: 12
        },
      ],
      'Quinta-Feira': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto.gif',
          title: 'Supino Reto',
          groups: [groups[2]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/11/03081301-crucifixo-com-halteres.gif',
          title: 'Crucifixo',
          groups: [groups[2]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/voador-no-aparelho.gif',
          title: 'Peck Deck',
          groups: [groups[2]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley.gif',
          title: 'Máquina de Tríceps',
          groups: [groups[3]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley-com-corda.gif',
          title: 'Corda de Tríceps',
          groups: [groups[3]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-nuca-com-halter.gif',
          title: 'Tríceps Francês',
          groups: [groups[3]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal.gif',
          title: 'Abdominal Inferior',
          groups: [groups[9]],
          series: 4,
          repetitions: 12
        },
      ],
      'Sexta-Feira': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-puxada-aberta-com-barra-no-pulley.gif',
          title: 'Pulley Frente',
          groups: [groups[0]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://cdn.discordapp.com/attachments/1150544090665074719/1200451982146670714/remada-articulada-como-fazer.gif',
          title: 'Remada Articulada',
          groups: [groups[0]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/remada-sentado-com-cabos-e-triangulo-para-costas.gif',
          title: 'Remada Baixa',
          groups: [groups[0]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2022/09/rosca-biceps-direta-com-halteres.gif',
          title: 'Bíceps Alternados',
          groups: [groups[1]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/05/cable-curl.gif',
          title: 'Biceps Cross-Over',
          groups: [groups[1]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/rosca-biceps-direta-na-barra-ez.gif',
          title: 'Rosca Direta',
          groups: [groups[1]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2023/02/47271301-abdominal-supra.gif',
          title: 'Abdominal Superior',
          groups: [groups[9]],
          series: 4,
          repetitions: 12
        },
      ],
      'Sábado': [
        {
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2021/12/leg-press-horizontal-para-que-serve-como-fazer.jpg',
          title: 'Leg Press Horizontal',
          groups: [groups[5]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-extensao-de-pernas-na-maquina.gif',
          title: 'Cadeira Extensora',
          groups: [groups[5]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-flexao-de-pernas-na-maquina.gif',
          title: 'Mesa Flexora',
          groups: [groups[7]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/agachamento-no-rack.gif',
          title: 'Agachamento Hack',
          groups: [groups[5]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-abducao-de-pernas-na-maquina.gif',
          title: 'Abdutora',
          groups: [groups[7]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2022/08/exercicios-panturrilhas-sentado-gemeos-burrinho.png',
          title: 'Banco Gêmeos',
          groups: [groups[7]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-elevacao-lateral-de-ombros-com-halteres.gif',
          title: 'Elevação Lateral',
          groups: [groups[4]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://grandeatleta.com.br/wp-content/uploads/2020/02/elevacao-frontal.jpg',
          title: 'Elevação Frontal',
          groups: [groups[4]],
          series: 3,
          repetitions: 12
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/abdominal-alternado-no-chao.gif',
          title: 'Abdominal Oblíquo',
          groups: [groups[9]],
          series: 4,
          repetitions: 12
        },
      ],
      'Domingo': [
        //  Descanso
      ],
    },

  },
  abc2m: {
    days: {
      'Domingo': groups[9],
      'Segunda-Feira': groups[2] + ' e ' + groups[3],
      'Terça-Feira': groups[0] + ' e ' + groups[1],
      'Quarta-Feira': groups[10] + ' e ' + groups[4],
      'Quinta-Feira': groups[2] + ' e ' + groups[3],
      'Sexta-Feira': groups[0] + ' e ' + groups[1],
      'Sabado': groups[10] + ' e ' + groups[4],
    },
    'exercises': {
      'Segunda-Feira': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto.gif',
          title: 'Supino Reto',
          groups: [groups[2]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-inclinado-com-barra.gif',
          title: 'Supino Inclinado',
          groups: [groups[2]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://static.vecteezy.com/ti/vetor-gratis/p3/15708466-homem-fazendo-crossover-de-cabo-em-pe-exercicio-de-moscas-de-cabo-ilustracaoial-plana-isolada-no-fundo-branco-personagem-de-treino-vetor.jpg',
          title: 'Cross Over',
          groups: [groups[2]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/voador-no-aparelho.gif',
          title: 'Peck Deck',
          groups: [groups[2]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley.gif',
          title: 'Máquina de Tríceps',
          groups: [groups[3]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley-com-corda.gif',
          title: 'Corda de Tríceps',
          groups: [groups[3]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-nuca-com-halter.gif',
          title: 'Tríceps Francês',
          groups: [groups[3]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal.gif',
          title: 'Abdominal Inferior',
          groups: [groups[9]],
          series: 4,
          repetitions: 10
        },
      ],
      'Terça-Feira': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-puxada-aberta-com-barra-no-pulley.gif',
          title: 'Pulley Frente',
          groups: [groups[0]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/remada-sentado-com-cabos-e-triangulo-para-costas.gif',
          title: 'Remada Baixa',
          groups: [groups[0]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://cdn.discordapp.com/attachments/1150544090665074719/1200451982146670714/remada-articulada-como-fazer.gif',
          title: 'Remada Articulada',
          groups: [groups[0]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-em-pe-com-barra-T.gif',
          title: 'Remada Cavalo',
          groups: [groups[0]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2022/09/rosca-biceps-direta-com-halteres.gif',
          title: 'Bíceps Alternados',
          groups: [groups[1]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/05/cable-curl.gif',
          title: 'Biceps Cross-Over',
          groups: [groups[1]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/biceps-rosca-biceps-no-banco-scott-com-barra-W.gif',
          title: 'Scot Livre',
          groups: [groups[1]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/rosca-biceps-direta-na-barra-ez.gif',
          title: 'Rosca na W',
          groups: [groups[1]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2023/02/47271301-abdominal-supra.gif',
          title: 'Abdominal Superior',
          groups: [groups[9]],
          series: 4,
          repetitions: 10
        },
      ],
      'Quarta-Feira': [
        {
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2021/12/leg-press-horizontal-para-que-serve-como-fazer.jpg',
          title: 'Leg Press Horizontal',
          groups: [groups[5]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-extensao-de-pernas-na-maquina.gif',
          title: 'Cadeira Extensora',
          groups: [groups[5]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-flexao-de-pernas-na-maquina.gif',
          title: 'Mesa Flexora',
          groups: [groups[7]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/agachamento-no-rack.gif',
          title: 'Agachamento Hack',
          groups: [groups[5]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-abducao-de-pernas-na-maquina.gif',
          title: 'Abdutora',
          groups: [groups[7]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2022/08/exercicios-panturrilhas-sentado-gemeos-burrinho.png',
          title: 'Banco Gêmeos',
          groups: [groups[7]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-elevacao-lateral-de-ombros-com-halteres.gif',
          title: 'Elevação Lateral',
          groups: [groups[4]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://grandeatleta.com.br/wp-content/uploads/2020/02/elevacao-frontal.jpg',
          title: 'Elevação Frontal',
          groups: [groups[4]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://i.makeagif.com/media/11-28-2015/r_hjpv.gif',
          title: 'Puxada Queixo',
          groups: [groups[4]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/abdominal-alternado-no-chao.gif',
          title: 'Abdominal Oblíquo',
          groups: [groups[9]],
          series: 4,
          repetitions: 10
        },
      ],
      'Quinta-Feira': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto.gif',
          title: 'Supino Reto',
          groups: [groups[2]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-inclinado-com-barra.gif',
          title: 'Supino Inclinado',
          groups: [groups[2]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://static.vecteezy.com/ti/vetor-gratis/p3/15708466-homem-fazendo-crossover-de-cabo-em-pe-exercicio-de-moscas-de-cabo-ilustracaoial-plana-isolada-no-fundo-branco-personagem-de-treino-vetor.jpg',
          title: 'Cross Over',
          groups: [groups[2]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/voador-no-aparelho.gif',
          title: 'Peck Deck',
          groups: [groups[2]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley.gif',
          title: 'Máquina de Tríceps',
          groups: [groups[3]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley-com-corda.gif',
          title: 'Corda de Tríceps',
          groups: [groups[3]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-nuca-com-halter.gif',
          title: 'Tríceps Francês',
          groups: [groups[3]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal.gif',
          title: 'Abdominal Inferior',
          groups: [groups[9]],
          series: 4,
          repetitions: 10
        },
      ],
      'Sexta-Feira': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-puxada-aberta-com-barra-no-pulley.gif',
          title: 'Pulley Frente',
          groups: [groups[0]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/remada-sentado-com-cabos-e-triangulo-para-costas.gif',
          title: 'Remada Baixa',
          groups: [groups[0]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://cdn.discordapp.com/attachments/1150544090665074719/1200451982146670714/remada-articulada-como-fazer.gif',
          title: 'Remada Articulada',
          groups: [groups[0]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-em-pe-com-barra-T.gif',
          title: 'Remada Cavalo',
          groups: [groups[0]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2022/09/rosca-biceps-direta-com-halteres.gif',
          title: 'Bíceps Alternados',
          groups: [groups[1]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/05/cable-curl.gif',
          title: 'Biceps Cross-Over',
          groups: [groups[1]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/biceps-rosca-biceps-no-banco-scott-com-barra-W.gif',
          title: 'Scot Livre',
          groups: [groups[1]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/rosca-biceps-direta-na-barra-ez.gif',
          title: 'Rosca na W',
          groups: [groups[1]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2023/02/47271301-abdominal-supra.gif',
          title: 'Abdominal Superior',
          groups: [groups[9]],
          series: 4,
          repetitions: 10
        },
      ],
      'Sabado': [
        {
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2021/12/leg-press-horizontal-para-que-serve-como-fazer.jpg',
          title: 'Leg Press Horizontal',
          groups: [groups[5]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-extensao-de-pernas-na-maquina.gif',
          title: 'Cadeira Extensora',
          groups: [groups[5]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-flexao-de-pernas-na-maquina.gif',
          title: 'Mesa Flexora',
          groups: [groups[7]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/agachamento-no-rack.gif',
          title: 'Agachamento Hack',
          groups: [groups[5]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-abducao-de-pernas-na-maquina.gif',
          title: 'Abdutora',
          groups: [groups[7]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2022/08/exercicios-panturrilhas-sentado-gemeos-burrinho.png',
          title: 'Banco Gêmeos',
          groups: [groups[7]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-elevacao-lateral-de-ombros-com-halteres.gif',
          title: 'Elevação Lateral',
          groups: [groups[4]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://grandeatleta.com.br/wp-content/uploads/2020/02/elevacao-frontal.jpg',
          title: 'Elevação Frontal',
          groups: [groups[4]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://i.makeagif.com/media/11-28-2015/r_hjpv.gif',
          title: 'Puxada Queixo',
          groups: [groups[4]],
          series: 4,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/abdominal-alternado-no-chao.gif',
          title: 'Abdominal Oblíquo',
          groups: [groups[9]],
          series: 4,
          repetitions: 10
        },
      ],
      'Domingo': [
        // Descanso
      ],
    },
  },
  abc1f: {
    days: {
      'Domingo': groups[9], // Descanso
      'Segunda-Feira': groups[10],
      'Terça-Feira': groups[8],
      'Quarta-Feira': groups[6],
      'Quinta-Feira': groups[10],
      'Sexta-Feira': groups[8],
      'Sábado': groups[6],
    },
    exercises: {
      'Segunda-Feira': [
        {
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2021/12/leg-press-horizontal-para-que-serve-como-fazer.jpg',
          title: 'Leg Press Horizontal',
          groups: [groups[5]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-extensao-de-pernas-na-maquina.gif',
          title: 'Cadeira Extensora',
          groups: [groups[5]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-flexao-de-pernas-na-maquina.gif',
          title: 'Mesa Flexora',
          groups: [groups[7]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2022/08/exercicios-panturrilhas-sentado-gemeos-burrinho.png',
          title: 'Banco Gêmeos',
          groups: [groups[7]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-abducao-de-pernas-na-maquina.gif',
          title: 'Abdutora',
          groups: [groups[7]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal.gif',
          title: 'Abdominal Inferior',
          groups: [groups[9]],
          series: 4,
          repetitions: 10,
        },
      ],
      'Terça-Feira': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/voador-no-aparelho.gif',
          title: 'Peck Deck',
          groups: [groups[2]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-puxada-aberta-com-barra-no-pulley.gif',
          title: 'Pulley Frente',
          groups: [groups[0]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/05/cable-curl.gif',
          title: 'Biceps Cross-Over',
          groups: [groups[1]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley.gif',
          title: 'Tríceps Máquina',
          groups: [groups[3]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-elevacao-lateral-de-ombros-com-halteres.gif',
          title: 'Elevação Lateral',
          groups: [groups[4]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2023/02/47271301-abdominal-supra.gif',
          title: 'Abdominal Superior',
          groups: [groups[9]],
          series: 4,
          repetitions: 10,
        },
      ],
      'Quarta-Feira': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/agachamento-no-rack.gif',
          title: 'Agachamento Hack',
          groups: [groups[5]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/coice-no-cabo.gif',
          title: 'Glúteo em Pé',
          groups: [groups[5]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://i.pinimg.com/originals/4e/17/b8/4e17b88b6b11c54155939c0a5b3c3381.gif',
          title: 'Adutora',
          groups: [groups[7]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/agachamento-sumo-com-halter.gif',
          title: 'Agachamento Sumo',
          groups: [groups[5]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/12/agachamento-afundo-com-halteres.gif',
          title: 'Afundo',
          groups: [groups[7]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/abdominal-alternado-no-chao.gif',
          title: 'Abdominal Oblíquo',
          groups: [groups[9]],
          series: 4,
          repetitions: 10,
        },
      ],
      'Quinta-Feira': [
        {
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2021/12/leg-press-horizontal-para-que-serve-como-fazer.jpg',
          title: 'Leg Press Horizontal',
          groups: [groups[5]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-extensao-de-pernas-na-maquina.gif',
          title: 'Cadeira Extensora',
          groups: [groups[5]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-flexao-de-pernas-na-maquina.gif',
          title: 'Mesa Flexora',
          groups: [groups[7]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2022/08/exercicios-panturrilhas-sentado-gemeos-burrinho.png',
          title: 'Banco Gêmeos',
          groups: [groups[7]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-abducao-de-pernas-na-maquina.gif',
          title: 'Abdutora',
          groups: [groups[7]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal.gif',
          title: 'Abdominal Inferior',
          groups: [groups[9]],
          series: 4,
          repetitions: 10,
        },
      ],
      'Sexta-Feira': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/voador-no-aparelho.gif',
          title: 'Peck Deck',
          groups: [groups[2]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-puxada-aberta-com-barra-no-pulley.gif',
          title: 'Pulley Frente',
          groups: [groups[0]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/05/cable-curl.gif',
          title: 'Biceps Cross-Over',
          groups: [groups[1]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley.gif',
          title: 'Tríceps Máquina',
          groups: [groups[3]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-elevacao-lateral-de-ombros-com-halteres.gif',
          title: 'Elevação Lateral',
          groups: [groups[4]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2023/02/47271301-abdominal-supra.gif',
          title: 'Abdominal Superior',
          groups: [groups[9]],
          series: 4,
          repetitions: 10,
        },
      ],
      'Sábado': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/agachamento-no-rack.gif',
          title: 'Agachamento Hack',
          groups: [groups[5]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/coice-no-cabo.gif',
          title: 'Glúteo em Pé',
          groups: [groups[5]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://i.pinimg.com/originals/4e/17/b8/4e17b88b6b11c54155939c0a5b3c3381.gif',
          title: 'Adutora',
          groups: [groups[7]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/agachamento-sumo-com-halter.gif',
          title: 'Agachamento Sumo',
          groups: [groups[5]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/12/agachamento-afundo-com-halteres.gif',
          title: 'Afundo',
          groups: [groups[7]],
          series: 3,
          repetitions: 12,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/abdominal-alternado-no-chao.gif',
          title: 'Abdominal Oblíquo',
          groups: [groups[9]],
          series: 4,
          repetitions: 10,
        },
      ],
      'Domingo': [
        // Descanso
      ],
    },
  },
  abc2f: {
    days: {
      'Domingo': groups[9], // Descanso
      'Segunda-Feira': groups[10],
      'Terça-Feira': groups[8],
      'Quarta-Feira': groups[6],
      'Quinta-Feira': groups[10],
      'Sexta-Feira': groups[8],
      'Sábado': groups[6],
    },
    exercises: {
      'Segunda-Feira': [
        {
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2021/12/leg-press-horizontal-para-que-serve-como-fazer.jpg',
          title: 'Leg Press Horizontal',
          groups: [groups[5]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-extensao-de-pernas-na-maquina.gif',
          title: 'Cadeira Extensora',
          groups: [groups[5]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-flexao-de-pernas-na-maquina.gif',
          title: 'Mesa Flexora',
          groups: [groups[7]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2022/08/exercicios-panturrilhas-sentado-gemeos-burrinho.png',
          title: 'Banco Gêmeos',
          groups: [groups[7]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-abducao-de-pernas-na-maquina.gif',
          title: 'Abdutora',
          groups: [groups[7]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/pernas-leg-press-45-com-pes-distantes.gif',
          title: 'Leg Articulado',
          groups: [groups[5]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal.gif',
          title: 'Abdominal Inferior',
          groups: [groups[9]],
          series: 4,
          repetitions: 10,
        },
      ],
      'Terça-Feira': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/voador-no-aparelho.gif',
          title: 'Peck Deck',
          groups: [groups[2]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto.gif',
          title: 'Supino Reto',
          groups: [groups[2]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-puxada-aberta-com-barra-no-pulley.gif',
          title: 'Pulley Frente',
          groups: [groups[0]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/remada-sentado-com-cabos-e-triangulo-para-costas.gif',
          title: 'Remada Baixa',
          groups: [groups[0]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/05/cable-curl.gif',
          title: 'Biceps Cross-Over',
          groups: [groups[1]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2022/09/rosca-biceps-direta-com-halteres.gif',
          title: 'Biceps Alternado',
          groups: [groups[1]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley.gif',
          title: 'Tríceps Máquina',
          groups: [groups[3]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley-com-corda.gif',
          title: 'Tríceps Corda',
          groups: [groups[3]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-elevacao-lateral-de-ombros-com-halteres.gif',
          title: 'Elevação Lateral',
          groups: [groups[4]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://grandeatleta.com.br/wp-content/uploads/2020/02/elevacao-frontal.jpg',
          title: 'Elevação Frontal',
          groups: [groups[4]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2023/02/47271301-abdominal-supra.gif',
          title: 'Abdominal Superior',
          groups: [groups[9]],
          series: 4,
          repetitions: 10,
        },
      ],
      'Quarta-Feira': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/agachamento-no-rack.gif',
          title: 'Agachamento Hack',
          groups: [groups[5]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/coice-no-cabo.gif',
          title: 'Glúteo em Pé',
          groups: [groups[5]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-aducao-de-pernas-na-maquina.gif',
          title: 'Adutora',
          groups: [groups[11]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/agachamento-sumo-com-halter.gif',
          title: 'Agachamento Sumo',
          groups: [groups[5]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/12/agachamento-afundo-com-halteres.gif',
          title: 'Afundo',
          groups: [groups[7]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/levantamento-terra-deadlift-stiff-com-halteres-1.gif',
          title: 'Stif',
          groups: [groups[8]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/agachamento-com-barra.gif',
          title: 'Agachamento',
          groups: [groups[7]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/abdominal-alternado-no-chao.gif',
          title: 'Abdominal Oblíquo',
          groups: [groups[9]],
          series: 4,
          repetitions: 10,
        },
      ],
      'Quinta-Feira': [
        {
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2021/12/leg-press-horizontal-para-que-serve-como-fazer.jpg',
          title: 'Leg Press Horizontal',
          groups: [groups[5]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-extensao-de-pernas-na-maquina.gif',
          title: 'Cadeira Extensora',
          groups: [groups[5]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-flexao-de-pernas-na-maquina.gif',
          title: 'Mesa Flexora',
          groups: [groups[7]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2022/08/exercicios-panturrilhas-sentado-gemeos-burrinho.png',
          title: 'Banco Gêmeos',
          groups: [groups[7]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-abducao-de-pernas-na-maquina.gif',
          title: 'Abdutora',
          groups: [groups[7]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/pernas-leg-press-45-com-pes-distantes.gif',
          title: 'Leg Articulado',
          groups: [groups[5]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal.gif',
          title: 'Abdominal Inferior',
          groups: [groups[9]],
          series: 4,
          repetitions: 10,
        },
      ],
      'Sexta-Feira': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/voador-no-aparelho.gif',
          title: 'Peck Deck',
          groups: [groups[2]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto.gif',
          title: 'Supino Reto',
          groups: [groups[2]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-puxada-aberta-com-barra-no-pulley.gif',
          title: 'Pulley Frente',
          groups: [groups[0]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/remada-sentado-com-cabos-e-triangulo-para-costas.gif',
          title: 'Remada Baixa',
          groups: [groups[0]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/05/cable-curl.gif',
          title: 'Biceps Cross-Over',
          groups: [groups[1]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2022/09/rosca-biceps-direta-com-halteres.gif',
          title: 'Biceps Alternado',
          groups: [groups[1]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley.gif',
          title: 'Tríceps Máquina',
          groups: [groups[3]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley-com-corda.gif',
          title: 'Tríceps Corda',
          groups: [groups[3]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-elevacao-lateral-de-ombros-com-halteres.gif',
          title: 'Elevação Lateral',
          groups: [groups[4]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://grandeatleta.com.br/wp-content/uploads/2020/02/elevacao-frontal.jpg',
          title: 'Elevação Frontal',
          groups: [groups[4]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2023/02/47271301-abdominal-supra.gif',
          title: 'Abdominal Superior',
          groups: [groups[9]],
          series: 4,
          repetitions: 10,
        },
      ],
      'Sábado': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/agachamento-no-rack.gif',
          title: 'Agachamento Hack',
          groups: [groups[5]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/coice-no-cabo.gif',
          title: 'Glúteo em Pé',
          groups: [groups[5]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-aducao-de-pernas-na-maquina.gif',
          title: 'Adutora',
          groups: [groups[11]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/agachamento-sumo-com-halter.gif',
          title: 'Agachamento Sumo',
          groups: [groups[5]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/12/agachamento-afundo-com-halteres.gif',
          title: 'Afundo',
          groups: [groups[7]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/levantamento-terra-deadlift-stiff-com-halteres-1.gif',
          title: 'Stif',
          groups: [groups[8]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/agachamento-com-barra.gif',
          title: 'Agachamento',
          groups: [groups[7]],
          series: 4,
          repetitions: 10,
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/abdominal-alternado-no-chao.gif',
          title: 'Abdominal Oblíquo',
          groups: [groups[9]],
          series: 4,
          repetitions: 10,
        },
      ],
      'Domingo': [
        // Descanso
      ],
    },
  },
};
