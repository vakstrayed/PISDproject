var db = require('./conn');


exports.create = (req, res) =>{
    db.crimes.create({
        'crime_id': req.body.crime_id,
        'cidade': req.body.cidade,
        'data_ocorrencia': req.body.data_ocorrencia,
        'idade': req.body.idade,
        'nome': req.body.nome,
        'objeto_utulizado': req.body.objeto_utulizado,
        'qtd_vitimas': req.body.qtd_vitimas,
        'sexo': req.body.sexo,
        'tipo_crime': req.body.tipo_crime
    })
}


exports.findAll = (req, res) =>{
    db.crimes.findAll().then( crimes =>{
      res.send(crimes)
    })
}

exports.findById = (req, res) => {
    db.crimes.findById(req.params.id).then(crime =>{
        res.send(crime);
    })
}

exports.delete = (req, res) => {
    db.crimes.destroy({
        where: {id: req.params.id}
    }).then(() =>{
        res.status(200).send('Crime  ' + id + ' deletado com sucesso');
    })
}

