module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Ding = app.model.define('dingid', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:STRING,
        warehouse:STRING,
        date: {
            type: DATE,
            defaultValue: app.Sequelize.NOW,
        },
        quantity:STRING,
        unit:STRING,
        state:STRING,
        dingid:INTEGER
    });

    return Ding;
};