const express = require("express")
const cors = require('cors');
const app = express()
const fs = require("fs");
const { parse } = require("csv-parse");
app.use(cors());

// graves = []

// fs.createReadStream("./rabbis_dataframe_with_coor.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     graves.push({
//         "name": row[1],
//         "description": row[2],
//         "district": row[3],
//         "city": row[4],
//         "latitude" : row[6],
//         "longitude" : row[7]
//     })
//   })


// var data = require("fs").readFileSync("rabbis_dataframe_coor.CSV", "utf8")

// console.log(data["name"]);

app.get('/api', (req, res) => {
    res.send({"hiii":"hot"})
  });

app.listen(process.env.PORT  || 8000, () => {
    console.log('app listening on port 8000!')
  });  