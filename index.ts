import Express from "express";
import cors from "cors";
const express = Express;
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("UWUWUWUWUWUWUWUWU!");
});

app.listen(3000, () => {
  console.log("Conectado");
});
