'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("equipamentos_ambiente_trabalhos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      id_ambiente_trabalho: {
        type: Sequelize.DataTypes.INTEGER,
        references: { model: "ambientes_trabalhos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
      },
      id_equipamentos: {
        type: Sequelize.DataTypes.INTEGER,
        references: { model: "equipamentos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
      },
      created_at: {
        type: Sequelize.DataTypes.DATE,
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("equipamentos_ambiente_trabalhos");
  }
};
