import Sequelize from 'sequelize';

// import de models
import User from '../app/models/User';
import Student from '../app/models/Student';
import Plan from '../app/models/Plan';

// import de config do banco de dados
import databaseConfig from '../config/database';

const models = [User, Student, Plan]; // models add no array

class Database {
  constructor() {
    this.init();
  }

  init() {
    // inicia conexao com o banco
    this.connection = new Sequelize(databaseConfig);

    // faz a conexao dos models com o banco
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
