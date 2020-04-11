
module.exports = (sequelize, Sequelize) =>{
    return sequelize.define('crime',{
        'crime_id': {type: Sequelize.INTEGER,autoIncrement: true, primaryKey: true},
        'cidade': {type: Sequelize.STRING},
        'data_ocorrencia': {type: Sequelize.DATE},
        'idade': {type: Sequelize.INTEGER},
        'nome': {type: Sequelize.STRING},
        'objeto_utulizado': {type: Sequelize.STRING},
        'qtd_vitimas': {type: Sequelize.STRING},
        'sexo': {type: Sequelize.STRING},
        'tipo_crime': {type: Sequelize.STRING}
    },{
        timestamps: false
    });
}