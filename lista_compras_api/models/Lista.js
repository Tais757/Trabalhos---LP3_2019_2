const { Schema, model, ObjectId } = require('mongoose');

const esquema = new Schema({
    unidade: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    itens: [
        {
            type: ObjectId,
            ref: 'Item'
        }
    ]
});

const Lista = model('Lista', esquema);
module.exports = Lista;