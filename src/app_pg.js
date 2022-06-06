var db_config = require ('./db_config_pg.json');
const { Client } = require('pg')
const client = new Client(db_config)
await client.connect()
const res = await client.query("Select * from empleado")
console.log(res.rows[0].message) // Hello world!
await client.end()


