const express = require("express");
const app = express();
const path = require("node:path");
const index = require("./routes/index");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));
//import styles
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use("/", index);

const port = 8000;
app.listen(port, () => {
    console.log(`Mini-Message-Board Listening on PORT:${port}`);
});