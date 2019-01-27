const formPersona = require('../models/formPersona');
const formEmpresa = require('../models/formEmpresa');
const _ = require('underscore');

// controladores persona natural
exports.getFormPersona = ((req, res) => {
    let desde = Number(req.query.desde) || 0;
    let limite = Number(req.query.limite) || 6;
    formPersona.find({estado: true})
        .skip(desde)
        .limit(limite)
        .exec((err, formDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: "Algo ocurrio en la BD"
                });
            }
            formPersona.count({estado: true}, (err, cont) => {
                let pag = cont/limite;
                res.json({
                    ok: true,
                    formDB,
                    cont,
                    pag

                })
            })


        })
});

exports.getAll =((req, res) => {
    formPersona.find({estado: true})
        .exec((err, formDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: "Algo ocurrio en la BD"
                });
            }
            formPersona.count({estado: true}, (err, cont) => {
                res.json({
                    ok: true,
                    formDB,
                    cont
                })
            })


        })
})
exports.saveFormPersona = ((req, res) => {
    console.log(req.body)
    const form = new formPersona({
        nombreApellidos: req.body.nombreApellidos,
        dni: req.body.dni,
        celular: req.body.celular,
        email: req.body.email,
        direccion: req.body.direccion,
        departamento: req.body.departamento,
        provincia: req.body.provincia,
        distrito: req.body.distrito,
        comentario: req.body.comentario
    });
    form.save((err, user) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: err
                }
            });
        }
        res.json({
            ok: true,
            err: {message: "Usuario registrado"}
        })
    })
});

exports.updateFormPersona = ((req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body,["nombreApellidos","departamento","dni","celular","email","direccion","provincia","distrito","comentario"]);
   // console.log(body)
    formPersona.findByIdAndUpdate(id, body, (err, formDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: err
                }
            });
        }
        res.json({
            ok: true,
            message: {message: `Usuario ${body.nombreApellidos} actualizado con éxito`}
        })
    })
});

exports.destroyFormPersona = ((req, res) => {
    let id = req.params.id;
    //console.log(id);
    formPersona.findByIdAndUpdate(id, {estado:false}, (err, formDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: err
                }
            });
        }
        res.json({
            ok: true,
            message: {message: `Usuario ${formDB.nombreApellidos} eliminado con éxito`}
        })
    })
});


// controladores para empresa
exports.getFormEmpresa = ((req, res) => {
    formEmpresa.find({estado: true})
        .exec((err, formDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: "Algo ocurrio en la BD"
                });
            }
            formEmpresa.count({estado: true}, (err, cont) => {
                res.json({
                    ok: true,
                    formDB,
                    cont
                })
            })


        })
});

exports.saveFormEmpresa = ((req, res) => {
    const form = new formEmpresa({
        nombreContacto: req.body.nombreApellidos,
        celular: req.body.celular,
        email: req.body.email,
        direccion: req.body.direccion,
        departamento: req.body.departamento,
        provincia: req.body.provincia,
        distrito: req.body.distrito,
        RUC: req.body.RUC,
        razonSocial: req.body.razonSocial,
        comentario: req.body.comentario
    });
    form.save((err, user) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: err
                }
            });
        }
        res.json({
            ok: true,
            err: {message: "Empresa registrada"}
        })
    })
});

exports.updateFormEmpresa = ((req, res) => {
    let id = req.params.id;
    //console.log(req.body);
    //let body = _.pick(req.body,["nombreContacto","dni","celular","email","direccion","provincia","distrito","comentario","RUC","razonSocial"]);
    const form = {
        nombreContacto: req.body.nombreApellidos,
        celular: req.body.celular,
        email: req.body.email,
        direccion: req.body.direccion,
        departamento: req.body.departamento,
        provincia: req.body.provincia,
        distrito: req.body.distrito,
        RUC: req.body.RUC,
        razonSocial: req.body.razonSocial,
        comentario: req.body.comentario
    };
    formEmpresa.findByIdAndUpdate(id, form, (err, formDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: err
                }
            });
        }
        res.json({
            ok: true,
            message: {message: `Empresa ${form.nombreContacto} actualizado con éxito`}
        })
    })
});

exports.destroyFormEmpresa = ((req, res) => {
    let id = req.params.id;
    formEmpresa.findByIdAndUpdate(id, {estado:false}, (err, formDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: err
                }
            });
        }
        res.json({
            ok: true,
            message: {message: `Empresa ${formDB.nombreApellidos} eliminado con éxito`}
        })
    })
});