const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`));