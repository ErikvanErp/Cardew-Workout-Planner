const express = require("express");
const cors = require("cors");
require('./config/mongoose.config')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

require('./routes/client.routes')(app);

app.listen(8000, () => console.log("Express server is listening on port 8000"));