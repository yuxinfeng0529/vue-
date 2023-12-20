module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Root = app.model.define('root', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:STRING,
        password:STRING
    });

    return Root;
};