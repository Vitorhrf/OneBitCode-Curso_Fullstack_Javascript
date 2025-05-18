const listModel = require('../models/listModel')

const listController = {
    index: (req, res) => {
        res.render('index')
    },

    listas: (req, res) => {
        const lists = listModel.getAllLists()
        res.render('listas', { lists })
    },

    show: (req, res) => {
        const id = req.params.id.toString()
        const list = listModel.getListById(id)
        if (!list) {
            // Você pode redirecionar ou enviar uma mensagem de erro
            return res.status(404).send('Lista não encontrada')
        }
        res.render('lista', { list })
    },

    create: (req, res) => {
        res.render('newListForm')
    },

    save: (req, res) => {
        const { listName } = req.body

        const newList = listModel.createList(listName)
        listModel.saveList(newList)

        res.redirect('/listas')
    },

    delete: (req, res) => {
        const id = req.params.id

        listModel.deleteList(id)

        res.redirect('/listas')
    },

    createTask: (req, res) => {
        const { listID, taskName } = req.body

        const list = listModel.createTask(listID, taskName)
        res.redirect(`/listas/${list.id}`)
    },

    completeTask: (req, res) => {
        const { listID, taskID } = req.body
        
        listModel.completeTask(listID, taskID)
        res.redirect(`/listas/${listID}`)
    }
}

module.exports = listController