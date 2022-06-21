const express = require('express');
const cors = require('cors');
const { exec } = require("child_process");

const app = express();
app.use(cors())

app.get('/on', function (req, res) {
    exec("amixer set Capture cap", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
   });
   res.end(JSON.stringify({"action": "on"}))
})

app.get('/off', function (req, res) {
    exec("amixer set Capture nocap", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
   });
   res.end(JSON.stringify({"action": "off"}))
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})