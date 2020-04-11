module.exports = function(app){
    const crimeRepository = require('../data/CrimeRepository');

    app.post('/crime/save',crimeRepository.create);

    app.get('/crime/list', crimeRepository.findAll);

    app.get('/crime/get/:id', crimeRepository.findById);

    app.get('/crime/delete/:id', crimeRepository.delete);
}