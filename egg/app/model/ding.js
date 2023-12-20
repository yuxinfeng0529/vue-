module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Ding = app.model.define('ding', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: DATE,
            defaultValue: app.Sequelize.NOW,
        },
        rootName: STRING,
        state: STRING,
        payment: STRING,
        name: STRING,
        phone: STRING,
        address: STRING,
        vehicle: STRING,
        expand:STRING
    });

    return Ding;
};