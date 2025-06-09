const pg = require('pg')

const pool = new pg.Pool({
    connectionString: "postgres://onebitcode:onebitcode@localhost:5432/bd_exercicio1"
})

async function criarTabela() {
    const client = await pool.connect()
    const query = `
    CREATE TABLE IF NOT EXISTS "Eventos" (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        data_evento DATE NOT NULL,
        total_ingressos INT NOT NULL,
        ingressos_vendidos INT DEFAULT 0
    );
    `
    const result = await client.query(query)
    console.log(result)

    await client.release()
}

async function insertEvento(nome, data_evento, total_ingressos, ingressos_vendidos) {
    const client = await pool.connect()
    const result = await client.query(`INSERT INTO "Eventos"(nome, data_evento, total_ingressos, ingressos_vendidos) VALUES ($1, $2, $3, $4);`,
        [nome, data_evento, total_ingressos, ingressos_vendidos])
    
    console.log(result)
    await client.release()
}

async function selectAll() {
    const client = await pool.connect()
    const result = await client.query(`SELECT * FROM "Eventos";`)
    console.table(result.rows)
    await client.release()
}

async function selectByName(nome) {
    const client = await pool.connect()
    const result = await client.query(`SELECT * FROM "Eventos" WHERE nome = $1;`, [nome])
    console.table(result.rows)
    await client.release()
}

async function selectByDate(data) {
    const client = await pool.connect()
    const result = await client.query(`SELECT * FROM "Eventos" WHERE data_evento = $1;`, [data])
    console.table(result.rows)
    await client.release()
}

async function updateByName(nome) {
    const client = await pool.connect()
    const result = await client.query(`UPDATE "Eventos" SET ingressos_vendidos = ingressos_vendidos + 1 WHERE nome = $1 AND ingressos_vendidos < total_ingressos;`, [nome])
    console.table(result)
    await client.release()
}

// insertEvento('Teste1', '2025-06-10', 10)
// selectAll()
// selectByName('Teste1')
// selectByDate('2025-06-11')

updateByName('Teste1')