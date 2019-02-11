const express = require('express');
const router = express.Router();

const formController = require('../controllers/formController');


// rutas api form persona natural 
router.get('/persona',formController.getFormPersona);
//router.post('/persona', formController.saveFormPersona);
router.get('/woo', function(req,res){
    console.log(req.body)
    res.json([ 
        {
            ProductId:"1",
            ProductName:"asus",
            ProductUrl:"http://woo.prodequa.com/product/asus-vivobook-f510ua-fhd-laptop-intel-core-i5-8250u-8gb-ram-1tb-hdd-usb-c/",
            CategoryId:'1',
            CategoryName:"Laptops"
        },{
            ProductId:"2",
            ProductName:"Acer",
            ProductUrl:"http://woo.prodequa.com/product/acer-aspire-e-15-15-6-full-hd-8th-gen-intel-core-i3-8130u-6gb-memoria-ram-1tb-hdd-8x-dvd-e5-576-392h/",
            CategoryId:'1',
            CategoryName:"Laptops"
        },{
            ProductId:"3",
            ProductName:"Kodak",
            ProductUrl:"http://woo.prodequa.com/product/kodak-pixpro-astro-zoom-az652-bk-20mp-digital-camera-with-65x-optical-zoom-and-3-lcd-black/",
            CategoryId:'2',
            CategoryName:"Cameras"
        },{
            ProductId:"4",
            ProductName:"PANASONIC LUMIX",
            ProductUrl:"http://woo.prodequa.com/product/panasonic-lumix-gh5s-body-4k-digital-camera-10-2-megapixel-mirrorless-camera-with-high-sensitivity-mos-sensor-c4k-4k-uhd-422-10-bit-3-2-inch-lcd-dc-gh5s-black/",
            CategoryId:'2',
            CategoryName:"Cameras" 
        },{
            ProductId:"5",
            ProductName:"HP",
            ProductUrl:"http://woo.prodequa.com/product/2017-acer-flagship-cb3-532-15-6-hd-premium-chromebook-intel-celeron-dual-core-n3060-hasta-2-48-ghz-2-gb-de-ram-16-gb-ssd-wireless-ac-bluetooth-hdmi-usb-3-0-camara-web-cro/",
            CategoryId:'1',
            CategoryName:"Laptops" },
        ,{
                ProductId:"6",
                ProductName:"Asus",
                ProductUrl:"http://woo.prodequa.com/product/2017-acer-flagship-cb3-532-15-6-hd-premium-chromebook-intel-celeron-dual-core-n3060-hasta-2-48-ghz-2-gb-de-ram-16-gb-ssd-wireless-ac-bluetooth-hdmi-usb-3-0-camara-web-cro/",
                CategoryId:'1',
                CategoryName:"Laptops"}
               
    ])
    // res.json({
    //     ProductId:"4",
    //     ProductName:"dell",
    //     ProductUrl:"http://woo.prodequa.com/product/2017-acer-flagship-cb3-532-15-6-hd-premium-chromebook-intel-celeron-dual-core-n3060-hasta-2-48-ghz-2-gb-de-ram-16-gb-ssd-wireless-ac-bluetooth-hdmi-usb-3-0-camara-web-cro/",
    //     CategoryId:'1'
    // })
})
router.put('/persona/:id', formController.updateFormPersona);
router.delete('/persona/:id', formController.destroyFormPersona);

// rutas api form empresa
router.get('/empresa',formController.getFormEmpresa);
router.post('/empresa', formController.saveFormEmpresa);
router.put('/empresa/:id', formController.updateFormEmpresa);
router.delete('/empresa/:id', formController.destroyFormEmpresa);

module.exports = router;   


// console.log('start js .0');
// var doms = document.getElementsByClassName('woocommerce-LoopProduct-link');
// console.log(doms);
//     for (var i in doms) {
//         console.log(i);
//         doms[i].addEventListener('click', function () {
//          console.log("en el evento");
//             fetch('https://appeleseserver.herokuapp.com'
//                 {
//                     headers: {
//                         'Accept': 'application/json',
//                         'Content-Type': 'application/json',
//                         'Access-Control-Allow-Origin': ['*'],
//                         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'                   
//                     },
//                     method: "get",
//                     body: JSON.stringify({ a: 1, b: 2 })
//                 })
//             .then(res => { return res.json() })
//             .then(json => { console.log(data) })

//     }, false);
// }
   

  
    
// })




// doms.forEach(function(element){
//     console.log(element);
//     element.addEventListener('click', function () {
//      console.log("en el evento");
//         fetch('https://appeleseserver.com/woo')
//             .then(res => { return res.json() })
//             .then(json => { console.log(data) })
// }); 
           