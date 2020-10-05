const express = require("express");
const path = require("path");

const setXClacksOverheadHeader = require("../src/index.js");

/* Configurations */
const app = express();
const port = process.env.PORT || 5000;

app.use(setXClacksOverheadHeader({ 
    names: [
        "Yukio Mishima", 
        "Hermann Hesse", 
        "John Conway"
        ] 
    })
);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
    });

app.listen(port, () => console.log(`[+] Listening on port ${port}...`));
