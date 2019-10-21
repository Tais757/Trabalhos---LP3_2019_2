const FilmeModel = (sequelize, DataTypes) => {
    const Filmes = sequelize.define('Filmes', {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ano_lancamento: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        direcao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sinopse: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        nota_avaliacao: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        genero: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});

    return Filmes;
};

module.exports = FilmeModel;