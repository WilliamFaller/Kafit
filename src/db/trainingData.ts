const groups = ['Costas', 'Biceps', 'Peito', 'Triceps', 'Ombro', 'Quadriceps', 'Gluteo', 'Posteriores', 'Superiores', 'Descanso']

export const training = {
  ab1: {
    days:{
      'Domingo': groups[9],
      'Segunda-Feira': groups[0] + ' e ' + groups[1],
      'Terça-Feira': groups[2] + ', ' + groups[3] + ' e ' + groups[4],
      'Quarta-Feira': groups[5] + ', ' + groups[6] + ' e ' + groups[7],
      'Quinta-Feira': groups[0] + ' e ' + groups[1],
      'Sexta-Feira': groups[2] + ', ' + groups[3] + ' e ' + groups[4],
      'Sabado': groups[5] + ', ' + groups[6] + ' e ' + groups[7],
    },
    exercises: {
      'Segunda-Feira': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-puxada-aberta-com-barra-no-pulley.gif',
          title: 'Pulley Frente',
          groups: [groups[0]],
          series: 3,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/remada-sentado-com-cabos-e-triangulo-para-costas.gif',
          title: 'Remada Baixa',
          groups: [groups[0]],
          series: 4,
          repetitions: 8
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/rosca-biceps-direta-na-barra-ez.gif',
          title: 'Biceps Rosca',
          groups: [groups[1]],
          series: 3,
          repetitions: 10
        },
      ],
      'Terça-Feira': [
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-puxada-aberta-com-barra-no-pulley.gif',
          title: 'Pulley Frente T',
          groups: [groups[2]],
          series: 3,
          repetitions: 10
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/remada-sentado-com-cabos-e-triangulo-para-costas.gif',
          title: 'Remada Baixa T',
          groups: [groups[3]],
          series: 4,
          repetitions: 8
        },
        {
          imgUrl: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/rosca-biceps-direta-na-barra-ez.gif',
          title: 'Biceps Rosca T',
          groups: [groups[4]],
          series: 3,
          repetitions: 10
        },
      ]
    }
  },
  abc1: {
    days:{
      'Domingo': groups[9],
      'Segunda-Feira': groups[0] + ' e ' + groups[1],
      'Terça-Feira': groups[2] + ', ' + groups[3] + ' e ' + groups[4],
      'Quarta-Feira': groups[5] + ', ' + groups[6] + ' e ' + groups[7],
      'Quinta-Feira': groups[0] + ' e ' + groups[1],
      'Sexta-Feira': groups[2] + ', ' + groups[3] + ' e ' + groups[4],
      'Sabado': groups[5] + ', ' + groups[6] + ' e ' + groups[7],
    },
    exercises: {
      [groups[1]]: 'Rosca Direta',
    }
  },
  abc2: {
    days:{
      'Domingo': groups[9],
      'Segunda-Feira': groups[8],
      'Terça-Feira': groups[5] + ' e ' + groups[7],
      'Quarta-Feira': groups[6],
      'Quinta-Feira':  groups[8],
      'Sexta-Feira': groups[5] + ' e ' + groups[7],
      'Sabado': groups[6],
    },
    exercises: {
      [groups[1]]: 'Rosca Direta',
    }
}
}
