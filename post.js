const {Client} = require("pg");
const express = require("express")
const cors = require('cors');
const app = express()
app.use(cors());
var x = ""

const client = new Client({
    host: "47.254.229.61",
    user: "postgres",
    port: 5432,
    password: "DoronKreiz123",
    database: "saintgraves"
})

client.connect();

client.query('SELECT * FROM table_name',(err, res)=>{
    if(!err){
        x = res.rows
    }else{
        console.log(err.message);
    }
    client.end
})

app.use(express.static(__dirname));

app.get('/api', (req, res) => {
    res.send(x)
  });

  app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
  });


app.listen(process.env.PORT  || 8000, () => {
    console.log('app listening on port 8000!')
  });  