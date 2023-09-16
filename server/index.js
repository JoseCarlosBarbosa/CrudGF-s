const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "crudvendas",

});

app.use(cors())
app.use(express.json());

app.post("/registerConta", (req, res) => {
    const { name } = req.body;
    const { codFunc } = req.body;
    const { valorPago } = req.body;
    const { dataConta } = req.body;
    const { formaPagamento } = req.body;

    let SQL = "INSERT INTO contasbd (name,codFunc,valorPago,dataConta,formaPagamento) VALUES (?,?,?,?,?)"

    db.query(SQL, [name, codFunc, valorPago, dataConta, formaPagamento], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});


app.post("/register", (req, res) => {

    const { name } = req.body;
    const { codFunc } = req.body;
    const { valorVendido } = req.body;
    const { dataVenda } = req.body;
    const { formaPagamentoVenda } = req.body;

    let SQL = "INSERT INTO vendasbd (name,codFunc,valorVendido,dataVenda,formaPagamentoVenda) VALUES (?,?,?,?,?)";

    db.query(SQL, [name, codFunc, valorVendido, dataVenda, formaPagamentoVenda], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });

});

app.put("/edit", (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { codFunc } = req.body;
    const { valorVendido } = req.body;
    const { dataVenda } = req.body;
    const { formaPagamentoVenda } = req.body;

    let SQL = "UPDATE vendasbd SET name = ?, codFunc = ?, valorVendido = ?, dataVenda=?, formaPagamentoVenda= ?  WHERE id = ?";
    db.query(SQL, [name, codFunc, valorVendido, dataVenda, formaPagamentoVenda, id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });

});

app.put("/editContas", (req, res) => {
    const { idcontas } = req.body;
    const { name } = req.body;
    const { codFunc } = req.body;
    const { valorPago } = req.body;
    const { dataConta } = req.body;
    const { formaPagamento } = req.body;

    let SQL = "UPDATE contasbd SET name = ?, codFunc = ?, valorPago = ?, dataConta=?, formaPagamento= ?  WHERE idcontas = ?";
    db.query(SQL, [name, codFunc, valorPago, dataConta, formaPagamento, idcontas], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });

});

app.delete("/deleteContas/:idcontas", (req, res) => {
    const { idcontas } = req.params;
    let SQL = "DELETE FROM contasbd WHERE idcontas = ?";
    db.query(SQL, [idcontas], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});


app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let SQL = "DELETE FROM vendasbd WHERE id = ?";
    db.query(SQL, [id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.get("/getVendas", (req, res) => {
    let SQL = "SELECT * FROM vendasbd";
    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.get("/getContas", (req, res) => {
    let SQL = "SELECT * FROM contasbd";
    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.use(cors());
app.use(express.json());

app.get("/getValorTotalGeral", async (req, res) => {
    const { dataInicio, dataFim } = req.query;


    const SQL = `
      SELECT SUM(valorTotal) AS valorTotalGeral
      FROM (
        SELECT SUM(valorVendido) AS valorTotal FROM vendasbd WHERE dataVenda BETWEEN '${dataInicio}' AND '${dataFim}'
        UNION
        SELECT SUM(valorPago) AS valorTotal FROM contasbd WHERE dataConta BETWEEN '${dataInicio}' AND '${dataFim}'
      ) AS subquery
    `;
    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else
            res.send(result);
    });
});

app.get("/getValorID1", async (req, res) => {
    const { dataInicio, dataFim } = req.query;
    const SQL = `
    SELECT SUM(valorTotal) AS valorTotalGeral
    FROM (
      SELECT SUM(valorVendido) AS valorTotal FROM vendasbd WHERE dataVenda BETWEEN '${dataInicio}' AND '${dataFim}'and codFunc = '1'
      UNION
      SELECT SUM(valorPago) AS valorTotal FROM contasbd WHERE dataConta BETWEEN '${dataInicio}' AND '${dataFim}' and codFunc = '1'
    ) AS subquery
  `;
    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else
            res.send(result);
    });
});

app.get("/getValorID1", async (req, res) => {
    const { dataInicio, dataFim } = req.query;
    const SQL = `
    SELECT SUM(valorTotal) AS valorTotalGeral
    FROM (
      SELECT SUM(valorVendido) AS valorTotal FROM vendasbd WHERE dataVenda BETWEEN '${dataInicio}' AND '${dataFim}'and codFunc = '1'
    ) AS subquery
  `;
    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else
            res.send(result);
    });
});

app.get("/getValorID2", async (req, res) => {
    const { dataInicio, dataFim } = req.query;
    const SQL = `
    SELECT SUM(valorTotal) AS valorTotalGeral
    FROM (
      SELECT SUM(valorVendido) AS valorTotal FROM vendasbd WHERE dataVenda BETWEEN '${dataInicio}' AND '${dataFim}'and codFunc = '2'
    ) AS subquery
  `;
    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else
            res.send(result);
    });
});

app.get("/getValorID3", async (req, res) => {
    const { dataInicio, dataFim } = req.query;
    const SQL = `
    SELECT SUM(valorTotal) AS valorTotalGeral
    FROM (
      SELECT SUM(valorVendido) AS valorTotal FROM vendasbd WHERE dataVenda BETWEEN '${dataInicio}' AND '${dataFim}'and codFunc = '3'

    ) AS subquery
  `;
    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else
            res.send(result);
    });
});

app.get("/getValorID4", async (req, res) => {
    const { dataInicio, dataFim } = req.query;
    const SQL = `
    SELECT SUM(valorTotal) AS valorTotalGeral
    FROM (
      SELECT SUM(valorVendido) AS valorTotal FROM vendasbd WHERE dataVenda BETWEEN '${dataInicio}' AND '${dataFim}'and codFunc = '4'

    ) AS subquery
  `;
    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else
            res.send(result);
    });
});

app.get("/valorTotalVendido", async (req, res) => {
    const { dataInicio, dataFim } = req.query;
    const SQL = `
    SELECT SUM(valorTotal) AS valorTotalGeral
    FROM (
      SELECT SUM(valorVendido) AS valorTotal FROM vendasbd WHERE dataVenda BETWEEN '${dataInicio}' AND '${dataFim}'
    ) AS subquery
  `;
    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else
            res.send(result);
    });
});

app.get("/valorTotalRecebido", async (req, res) => {
    const { dataInicio, dataFim } = req.query;
    const SQL = `
    SELECT SUM(valorTotal) AS valorTotalPG
    FROM (
      SELECT SUM(cb.valorPago) AS valorTotal
        FROM contasbd cb
        WHERE dataConta BETWEEN '${dataInicio}' AND '${dataFim}'
    ) AS subquery
  `;
    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else
            res.send(result);
    });
});

app.get("/valorTotalRecebidoCredito", async (req, res) => {
    const { dataInicio, dataFim } = req.query;
    const SQL = `
    SELECT SUM(valorTotal) AS valorTotalPG
    FROM (
      SELECT SUM(cb.valorPago) AS valorTotal
        FROM contasbd cb
        WHERE dataConta BETWEEN '${dataInicio}' AND '${dataFim}' AND formaPagamento = "Credito"
    ) AS subquery
  `;
    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else
            res.send(result);
    });
});

app.get("/valorTotalRecebidoDebito", async (req, res) => {
    const { dataInicio, dataFim } = req.query;
    const SQL = `
    SELECT SUM(valorTotal) AS valorTotalPG
    FROM (
      SELECT SUM(cb.valorPago) AS valorTotal
        FROM contasbd cb
        WHERE dataConta BETWEEN '${dataInicio}' AND '${dataFim}'AND formaPagamento = "Debito"
    ) AS subquery
  `;
    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else
            res.send(result);
    });
});

app.get("/valorTotalRecebidoPix", async (req, res) => {
    const { dataInicio, dataFim } = req.query;
    const SQL = `
    SELECT SUM(valorTotal) AS valorTotalPG
    FROM (
      SELECT SUM(cb.valorPago) AS valorTotal
        FROM contasbd cb
        WHERE dataConta BETWEEN '${dataInicio}' AND '${dataFim}'AND formaPagamento = "Pix"
    ) AS subquery
  `;
    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else
            res.send(result);
    });
});

app.get("/valorTotalRecebidoDinheiro", async (req, res) => {
    const { dataInicio, dataFim } = req.query;
    const SQL = `
    SELECT SUM(valorTotal) AS valorTotalPG
    FROM (
      SELECT SUM(cb.valorPago) AS valorTotal
        FROM contasbd cb
        WHERE dataConta BETWEEN '${dataInicio}' AND '${dataFim}'AND formaPagamento = "Dinheiro"
    ) AS subquery
  `;
    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else
            res.send(result);
    });
});

app.get("/valorTotalVendidoCredito", async (req, res) => {
    const { dataInicio, dataFim } = req.query;
    const SQL = `
    SELECT SUM(valorTotal) AS valorTotalPG
    FROM (
      SELECT SUM(vb.valorVendido) AS valorTotal
        FROM vendasbd vb
        WHERE dataVenda BETWEEN '${dataInicio}' AND '${dataFim}' AND formaPagamentoVenda = "Credito"
    ) AS subquery
  `;

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else
            res.send(result);
    });
});

app.get("/valorTotalVendidoDebito", async (req, res) => {
    const { dataInicio, dataFim } = req.query;
    const SQL = `
    SELECT SUM(valorTotal) AS valorTotalPG
    FROM (
      SELECT SUM(vb.valorVendido) AS valorTotal
        FROM vendasbd vb
        WHERE dataVenda BETWEEN '${dataInicio}' AND '${dataFim}' AND formaPagamentoVenda = "Debito"
    ) AS subquery
  `;

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else
            res.send(result);
    });
});

app.get("/valorTotalVendidoPix", async (req, res) => {
    const { dataInicio, dataFim } = req.query;
    const SQL = `
    SELECT SUM(valorTotal) AS valorTotalPG
    FROM (
      SELECT SUM(vb.valorVendido) AS valorTotal
        FROM vendasbd vb
        WHERE dataVenda BETWEEN '${dataInicio}' AND '${dataFim}' AND formaPagamentoVenda = "Pix"
    ) AS subquery
  `;

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else
            res.send(result);
    });
});

app.get("/valorTotalVendidoDinheiro", async (req, res) => {
    const { dataInicio, dataFim } = req.query;
    const SQL = `
    SELECT SUM(valorTotal) AS valorTotalPG
    FROM (
      SELECT SUM(vb.valorVendido) AS valorTotal
        FROM vendasbd vb
        WHERE dataVenda BETWEEN '${dataInicio}' AND '${dataFim}' AND formaPagamentoVenda = "Dinheiro"
    ) AS subquery
  `;

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else
            res.send(result);
    });
});

app.listen(3001, () => {
    console.log("Rodando Servidor");
});