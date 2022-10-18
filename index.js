import express from "express";
import { config } from "dotenv";

config();

const app = express();

const port = process.env.PORT || 3000;
const host = "http://0.0.0.0";

app.listen(port, () => {
  console.log(`Runnning Fine in ${host}:${port}`)
})
