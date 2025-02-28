const mediaSimples = (...args) => args.reduce((acumulador, num) => acumulador + num, 0) / args.length

const mediaPonderada = (...args) => args.reduce((acumulador, num) => (num['n'] * num['p'] ?? 1) + acumulador, 0) / args.reduce((acumulador, num) => (num['p'] ?? 1) + acumulador,0)

const mediana = (...args) => args.length % 2 === 0 ? (args[(args.length / 2) - 1] + args[(args.length / 2)]) / 2 : args[Math.floor(args.length / 2)]

const moda = (...args) => {
    const contagem = {}

    args.forEach(num => contagem[num] = (contagem[num] || 0) + 1)

    let maisFrequente = null
    let maiorQuantidade = 0

    for (let num in contagem){
        if (contagem[num] > maiorQuantidade){
            maisFrequente = Number(num)
            maiorQuantidade = contagem[num]
        }
    }

    return maisFrequente
}