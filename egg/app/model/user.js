module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const User = app.model.define('user', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: DATE,
            defaultValue: app.Sequelize.NOW,
        },
        name: STRING,
        gender: STRING,
        age:STRING,
        phone:STRING,
        address:STRING,
    });

    return User;
};