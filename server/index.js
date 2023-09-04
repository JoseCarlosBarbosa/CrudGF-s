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

app.post("/register", (req, res) =>{
    
    const { name } = req.body;
    const { codFunc } = req.body;
    const { valorVendido } = req.body;
    const { formaDePagamento } = req.body;
    let SQL = "INSERT INTO vendasbd (name, codFunc, valorVendido,formaDePagamento ) VALUES (?, ?, ?, ?)";
    db.query(SQL, [name, codFunc, valorVendido, formaDePagamento], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });

    console.log(req.doby);

});

app.put("/edit", (req,res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { codFunc } = req.body;
    const { valorVendido } = req.body;
    const { dataPagamentoVenda } = req.body;
    const { formaDePagamento } = req.body;
    

    let SQL = "UPDATE vendasbd SET name = ?, codFunc = ?, valorVendido = ?, dataPagamentoVenda = ?, formaDePagamento = ? WHERE id = ?";
    db.query(SQL, [name, codFunc ,valorVendido,dataPagamentoVenda,formaDePagamento, id], (err, result) => {
        if(err) console.log(err);
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

app.listen(3001, ()=> {
    console.log("Rodando Servidor");
});