const { Op } = require('sequelize');
const { Lista, Item } = require('../databases/db');

const controller = {
    recuperarTodos: async (req, res) => {
        const listas = await listas.findAll();
        return res.json(listas);
    },

    salvar: (req, res) => {
        const lista = req.body;

        if(!lista.nome){
            return res.status(400).json({ mensagem: 'Filme não informado'});
        }

        Lista.create(lista).then(listaSalva => res.status(201).json(listaSalva),
        erro => res.status(400).json(erro)).catch(erro => {
            console.log(erro);
            return res.status(500).json({ mensagem: 'Erro ao tentar salvar a lista' });
        });
    },

    recuperarItensPorDescricao: async (req, res) => {
        const { consulta } = req.body;
        let itens = await Item.findAll({
            where:{
                descricao: {
                    [Op.iLike]: `% ${ consulta } %`
                }
            }
        });

        return res.json(itens);
    }
};

module.exports = controller;