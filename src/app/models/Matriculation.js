import Sequelize, { Model } from 'sequelize';

class Matriculation extends Model {
  static init(sequelize) {
    super.init(
      {
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        price: Sequelize.INTEGER,
      },
      { sequelize }
    );

    return this;
  }

  // associa a chave estrangeira as tabelas de Student e Plan
  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
    this.belongsTo(models.Plan, { foreignKey: 'plan_id', as: 'plan' });
  }
}

export default Matriculation;
