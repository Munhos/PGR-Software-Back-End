'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ges", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      empresa_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: { model: "empresas", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
      },
      codigo: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      descricao_ges: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      observacao: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      caracterizacao_processos_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      caracterizacao_ambientes_trabalho_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      responsavel: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      cargo: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ges");
  }
};
