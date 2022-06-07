const express = require('express')
const app = express()
const port = 3000

app.set("view engine","ejs")

app.use(express.static('onmovies'))
app.use('/imagens', express.static("imagens"))
app.use('/css', express.static("css"))
app.use('/js', express.static("js"))
app.use('/adm', express.static("adm"))

app.get("/", (req, res) => {
    res.render(`home`,{teste:"Funciona"})
})
app.post("/", (req, res) => {
    res.render(`home`,{teste:"Funciona"})
})
app.get("/produtos", (req, res) => {
    res.render(`produtos`)
})
app.get("/contato", (req, res) => {
    res.render(`contato`)
})
app.get("/promocoes", (req, res) => {
    res.render(`promocoes`)
})
app.get("/singleDeProduto", (req, res) => {
    res.render(`singleDeProduto`)
})
app.get("/singlePreferencia", (req, res) => {
    res.render(`singlePreferencia`)
})
app.get("/perfilUsuario", (req, res) => {
    res.render(`perfil-usuario`)
})
app.get("/login", (req, res) => {
    res.render(`login`)
})
app.get("/cadastro", (req, res) => {
    res.render(`cadastro`)
})
app.get("/carrinho", (req, res) => {
    res.render(`carrinho`)
})
app.get("/adm", (req, res) => {
    res.render(`index`)
})
app.post("/adm", (req, res) => {
    res.render(`index`)
})
app.get("/adm/relatorioChamadas", (req, res) => {
    res.render(`relatorio-chamadas`)
})
app.get("/adm/dashboard", (req, res) => {
    res.render(`dashboard`)
})
app.get("/adm/cadastro", (req, res) => {
    res.render(`cadastroAdm`)
})
app.get("/adm/cadastroProdutos", (req, res) => {
    res.render(`cadastroProd`)
})
app.get("/adm/login", (req, res) => {
    res.render(`loginAdm`)
})
app.listen(port, () => {
    console.log("servidor rodando")
})