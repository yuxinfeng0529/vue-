module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const kkku = app.model.define('kkku', {
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

    return kkku;
};