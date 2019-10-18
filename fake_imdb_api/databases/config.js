const config = {
    'development': {
        db: 'filmes_dev',
        user: 'postgres',
        password: 'tais',
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
    },
    'test': {
        db: 'filme_test',
        user: 'postgres',
        password: 'tais',
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
    }
};

module.exports = config;