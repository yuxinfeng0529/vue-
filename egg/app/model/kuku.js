module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Kuku = app.model.define('kuku', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: STRING,
        address:STRING,
        remarks:STRING,
        rootname:STRING,
        rootphone:STRING
    });

    return Kuku;
};