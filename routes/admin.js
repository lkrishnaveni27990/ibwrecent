var express = require('express');
var router = express.Router();
var productHelpers=require('../helpers/product-helpers')


36/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProducts().then((products)=>{
  console.log(products)
    res.render('admin/view-products',{admin:true,products});

  })
})
 
router.get('/add-product',function(req,res)
{
  res.render('admin/add-product')

})
router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files.image);

  productHelpers.addProduct(req.body,(id)=>{
    let Image=req.files.image
    Image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err)
      {
    res.render("admin/add-product")
      }
    })
  })
  
})
router.get('/delete-product/:id',(req,res)=>{
  let proId= req.params.id
  console.log(proId);
  productHelpers.deleteProduct(proId).then((response)=>{
    res.redirect('/admin/')
  }
  )
})


router.get('/edit-product/:id',async (req,res)=>{
  let product= await productHelpers.getProductDetails(req.params.id)
 // console.log(product);
  res.render('admin/edit-product',{product})
})






router.post('/edit-product/:id',(req,res)=>{
  let proId= req.params.id
  productHelpers.updateProduct(req.params.id,req.body).then(()=>{
    res.redirect('/admin/')
    if(req.files.image){
      let Image =req.files.image;
      Image.mv('./public/product-images/'+proId+'.jpg')
    }
  })
})
module.exports = router;
