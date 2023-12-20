module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const kku = app.model.define('kku', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: STRING,
        date: {
            type: DATE,
            defaultValue: app.Sequelize.NOW,
        },
        quantity:STRING,
        unit:STRING
    });

    return kku;
};