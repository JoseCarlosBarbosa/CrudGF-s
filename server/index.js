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

    let SQL = "INSERT INTO vendasbd (name,codFunc,valorVendido) VALUES (?,?,?)";

    db.query(SQL, [name, codFunc ,valorVendido],(err,result)=> {
        if(err) console.log(err);
        else res.send(result);
    });


});

app.put("/edit", (req,res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { codFunc } = req.body;
    const { valorVendido } = req.body;

    let SQL = "UPDATE vendasbd SET name = ?, codFunc = ?, valorVendido = ? WHERE id = ?";
    db.query(SQL, [name, codFunc, valorVendido, id], (err, result) => {
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