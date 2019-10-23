const tarefas = require('../model/tarefas.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    if( id == 0 || id > 10){
        res.status(200).send("ID não encontrado, realize nova busca com um ID válido")
    }
    res.status(200).send(tarefas.find(tarefa => tarefa.id == id))
}
exports.getConcluido = (req, res) => {
    const tarefaConc = tarefas.filter(tarefa => tarefa.concluido == 'true')
    res.status(200).send(tarefaConc)
}

exports.getNome = (req, res) => {
    const nome = req.params.nome
    
    res.status(200).send(tarefas.filter(tarefa => tarefa.nomeColaborador == nome))
}