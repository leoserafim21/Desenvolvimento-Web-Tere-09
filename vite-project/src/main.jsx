import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/*let site = "Bem vindo ao meu site";

let hoje = new Date();
site = hoje.toLocaleDateString();
hoje.setHours(0, 0, 0);
site = hoje.toLocaleString();*/

let hoje = new Date();
hoje.toDateString();
hoje.getDate();
hoje.getDay();
const semana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
let dia = hoje.getDay();
const diaSemana = semana[dia];
const texto = `Hoje é ${diaSemana}, certo`;
ReactDOM.render(texto, document.getElementById("root"));
