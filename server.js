const express = require("express"),
    /* cors = require('cors'), */
    path = require("path"),
    PORT = process.env.PORT || 8008,
    app = express();
/* app.use(cors); */
app.use(express.static(__dirname));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(PORT);
console.log("server started");
