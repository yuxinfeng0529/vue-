module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Ku = app.model.define('ku', {
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

    return Ku;
};