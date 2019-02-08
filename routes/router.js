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
        ProductName:"asus",
        ProductUrl:"http://woo.prodequa.com/product/asus-vivobook-f510ua-fhd-laptop-intel-core-i5-8250u-8gb-ram-1tb-hdd-usb-c/"
    },{
        ProductId:"2",
        ProductName:"Acer",
        ProductUrl:"http://woo.prodequa.com/product/acer-aspire-e-15-15-6-full-hd-8th-gen-intel-core-i3-8130u-6gb-memoria-ram-1tb-hdd-8x-dvd-e5-576-392h/"
    },{
        ProductId:"3",
        ProductName:"HP",
        ProductUrl:"http://woo.prodequa.com/product/hp-15-6-business-laptop-hd-wled-backled-touchscreen-display-intel-i3-7100u-processor-12gb-ddr4-ram-1tb-hdd-dvd-rw-802-11ac-wifi-hdmi-windows-10-negro/"
    },{
        ProductId:"4",
        ProductName:"dell",
        ProductUrl:"http://woo.prodequa.com/product/2017-acer-flagship-cb3-532-15-6-hd-premium-chromebook-intel-celeron-dual-core-n3060-hasta-2-48-ghz-2-gb-de-ram-16-gb-ssd-wireless-ac-bluetooth-hdmi-usb-3-0-camara-web-cro/" 
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