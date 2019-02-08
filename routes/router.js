const express = require('express');
const router = express.Router();

const formController = require('../controllers/formController');


// rutas api form persona natural 
router.get('/persona',formController.getFormPersona);
//router.post('/persona', formController.saveFormPersona);
router.get('/woo', function(req,res){
    console.log(req.body)
    res.json({
        ProductId:"1",
        productName:"coca",
        ProductUrl:"http://woo.prodequa.com/product/asus-vivobook-f510ua-fhd-laptop-intel-core-i5-8250u-8gb-ram-1tb-hdd-usb-c/"
    })
})
router.put('/persona/:id', formController.updateFormPersona);
router.delete('/persona/:id', formController.destroyFormPersona);

// rutas api form empresa
router.get('/empresa',formController.getFormEmpresa);
router.post('/empresa', formController.saveFormEmpresa);
router.put('/empresa/:id', formController.updateFormEmpresa);
router.delete('/empresa/:id', formController.destroyFormEmpresa);

module.exports = router;