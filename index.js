import express from "express";
import { config } from "./config/index.js";
import { AddressDestructor } from "./services/index.js";

const { port, host } = config;

const app = express();

app.set("title", "My Site");

const payload = `Keeghi Renandy (6281322397535)
Komplek Istana Regency Sudirman, Jalan Tosca No 10 D Bandung Kulon, Kota Bandung, 40212 Jawa Barat`

const payload2 = `Xiuling (6285270191818)
Jln karya makmur, Fortunate suite blok A1
Payung Sekaki, Kota Pekanbaru, Riau 28281
`

const payload3 = `Rizal (628817796519)
Jl. Merkuri Timur II 20 Blok Z-47 RT.005/RW.004, Manjahlega, Kec. Rancasari, Kota Bandung Rancasari, Kota Bandung, 40286 Jawa Barat`

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Success",
    result: AddressDestructor(payload),
  });
});

app.listen(port, () => {
  console.log(`Runnning Fine in ${host}:${port}`);
});
