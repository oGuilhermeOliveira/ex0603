const express = require ("express")
const app = express()

app.get("/:nome", (req, res) => {
    const { nome } = req.params;
    res.status(200).json({
      mensagem: `Hello ${nome}!`
    });
});

app.get("/idade/:nome/:idade", (req, res) => {
    const { nome, idade } = req.params;
    res.status(200).json({
      mensagem: `Nome: ${nome}, idade: ${idade}!`
    });
  });
  
app.listen(3023, (res)=> {
    console.log('Guilherme o server está on');
});