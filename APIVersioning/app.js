const express = require("express");

const app = express();

const port = 6000;

const v1 = require('./Routes/V1');
const v2 = require('./Routes/V2');

app.use("/api/v1/", v1);
app.use("/api/v2/", v2);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});