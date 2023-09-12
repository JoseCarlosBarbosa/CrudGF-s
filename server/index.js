const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");


const db =mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root123", 
    database: "crudvendas",

});

app.use(cors())
app.use(express.json()); 

app.post("/registerConta", (req,res) => {
    const { name } = req.body;
    const { codFunc } = req.body;
    const { valorPago } = req.body;
    const { dataConta } = req.body;
    const {formaPagamento} = req.body;

    let SQL = "INSERT INTO contasbd (name,codFunc,valorPago,dataConta,formaPagamento) VALUES (?,?,?,?,?)"

    db.query(SQL, [name,codFunc,valorPago,dataConta,formaPagamento ], (err, result) =>{
        if(err) console.log(err);
        else res.send(result);
    });
});


app.post("/register", (req, res) =>{

    const { name } = req.body;
    const { codFunc } = req.body;
    const { valorVendido } = req.body;
    const { dataVenda } = req.body;
    const {formaPagamentoVenda} = req.body;
   
    let SQL = "INSERT INTO vendasbd (name,codFunc,valorVendido,dataVenda,formaPagamentoVenda) VALUES (?,?,?,?,?)";
   
    db.query(SQL, [name,codFunc,valorVendido,dataVenda,formaPagamentoVenda ],(err,result)=> {
        if(err) console.log(err);
        else res.send(result);
    });
   
});

app.put("/edit", (req,res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { codFunc } = req.body;
    const { valorVendido } = req.body;
    const { dataVenda } = req.body;
    const {formaPagamentoVenda} = req.body;

    let SQL = "UPDATE vendasbd SET name = ?, codFunc = ?, valorVendido = ?, dataVenda=?, formaPagamentoVenda= ?  WHERE id = ?";
    db.query(SQL, [name,codFunc,valorVendido,dataVenda,formaPagamentoVenda, id], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });

});

app.put("/editContas", (req,res) => {
    const { idcontas } = req.body;
    const { name } = req.body;
    const { codFunc } = req.body;
    const { valorPago } = req.body;
    const { dataConta } = req.body;
    const {formaPagamento} = req.body;

    let SQL = "UPDATE contasbd SET name = ?, codFunc = ?, valorPago = ?, dataConta=?, formaPagamento= ?  WHERE idcontas = ?";
    db.query(SQL, [name,codFunc,valorPago,dataConta,formaPagamento, idcontas], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });

});

app.delete("/deleteContas/:idcontas" ,(req, res) => {
    const {idcontas} = req.params;
    let SQL = "DELETE FROM contasbd WHERE idcontas = ?";
    db.query(SQL, [idcontas], (err,result) => {
        if (err) console.log(err);
         else res.send(result);
    });
});


app.delete("/delete/:id" ,(req, res) => {
    const {id} = req.params;
    let SQL = "DELETE FROM vendasbd WHERE id = ?";
    db.query(SQL, [id], (err,result) => {
        if (err) console.log(err);
         else res.send(result);
    });
});  

app.get("/getVendas", (req,res)=>{
    let SQL ="SELECT * FROM vendasbd";
    db.query(SQL, (err,result)=>{
        if(err) console.log(err);
        else res.send(result);
    });
});

app.get("/getContas", (req,res)=>{
    let SQL ="SELECT * FROM contasbd";
    db.query(SQL, (err,result)=>{
        if(err) console.log(err);
        else res.send(result);
    });
});

app.use(cors());
app.use(express.json());

app.get("/getValorTotalGeral", async (req, res) => {
  const { dataInicio, dataFim } = req.query;

  // SQL para calcular a soma dos valores
  const SQL = `
    SELECT SUM(valorTotal) AS valorTotalGeral
    FROM (
      SELECT SUM(valorVendido) AS valorTotal FROM vendasbd WHERE dataVenda BETWEEN ? AND ?
      UNION
      SELECT SUM(valorPago) AS valorTotal FROM contasbd WHERE dataConta BETWEEN ? AND ?
    ) AS subquery
  `;

  try {
    const result = await db.query(SQL, [dataInicio, dataFim, dataInicio, dataFim]);
    if (result[0] && result[0].valorTotalGeral !== null) {
      const valorTotalGeral = result[0].valorTotalGeral;
      res.json({ valorTotalGeral });
    } else {
      res.json({ valorTotalGeral: 0 }); // Pode definir um valor padrão
    }
  } catch (error) {
    console.error("Erro ao executar a consulta SQL:", error);
    res.status(500).json({ error: "Erro ao calcular o valor total" });
  }
});
  
  


app.listen(3001, ()=> {
    console.log("Rodando Servidor");
});