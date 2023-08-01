const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    port : 5432,
    user: "testing",
    password: "testing",
    database: "SP-Demo"
})

client.connect();

let query = `Select * from "t_accounts"`;

client.query(query, (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else{
        console.log(err.message)
    }
    client.end;
})