const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
  dialect: 'postgres',
  pool: { max: 5, min: 0, idle: 10000 }
});

const Queen = sequelize.define('queen', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

const JavaScript = sequelize.define('javascript', {
  word: {
    type: Sequelize.STRING
  }
});

module.exports = {
  generate: () => {
    const queenPromise = Queen.find({ order: [Sequelize.fn( 'RANDOM' )] });
    const jsPromise = JavaScript.find({ order: [ Sequelize.fn( 'RANDOM' )] });

    return Promise.all([queenPromise, jsPromise])
      .then(([randomQueen, randomJS]) => {
        const name = `${randomQueen.firstName} ${randomJS.word} ${randomQueen.lastName}`;
        return name;
      });
  }
}
