// const express = require("express")
// const cors = require('cors');
// const app = express()
// const fs = require("fs");
// const { parse } = require("csv-parse");
// app.use(cors());

// graves = []

// fs.createReadStream("./rabbis_dataframe_with_coor.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     graves.push({
//         "name": row[1],
//         "description": row[2],
//         "district": row[3],
//         "city": row[4],
//         "direction":row[5],
//         "latitude" : row[6],
//         "longitude" : row[7]
//     })
//   })


// // var data = require("fs").readFileSync("rabbis_dataframe_coor.CSV", "utf8")

// // console.log(data["name"]);

// app.get('/api', (req, res) => {
//     res.send(graves)
//   });

var {Client} = require("pg");
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
        console.log(res.rows[0]["latitude"]);
        x = res.rows
    }else{
        console.log(err.message);
    }
    client.end
})

app.get('/api', (req, res) => {
    res.send(x)
  });


app.listen(process.env.PORT  || 8000, () => {
    console.log('app listening on port 8000!')
  });  