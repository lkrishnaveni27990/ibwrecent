var express = require('express');
var router = express.Router();
var productHelpers=require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProducts().then((products)=>{
  console.log(products)
    res.render('admin/view-products',{admin:true,products});

  })
})
//routing to view the banners
 
router.get('/view-banner', function(req, res, next) {
  productHelpers.getAllBanners().then((banners)=>{
  console.log(banners)
    res.render('admin/view-banner',{admin:true,banners});

  })
})

//routing to view the videos

 
router.get('/view-video', function(req, res, next) {
  productHelpers.getAllVideos().then((videos)=>{
  console.log(videos)
    res.render('admin/view-video',{admin:true,videos});

  })
})

//routing to view the slider images

 
router.get('/view-slider', function(req, res, next) {
  productHelpers.getAllSliders().then((sliders)=>{
    res.render('admin/view-slider',{admin:true,sliders});

  })
})


//routing to view the brands

 
router.get('/view-brand', function(req, res, next) {
  productHelpers.getAllBrands().then((brands)=>{
    res.render('admin/view-brand',{admin:true,brands});

  })
})

//routing to view the category

 
router.get('/view-category', function(req, res, next) {
  productHelpers.getAllCategories().then((category)=>{
    res.render('admin/view-category',{admin:true,category});

  })
})



//routing to view the package

 
router.get('/view-package', function(req, res, next) {
  productHelpers.getAllPackages().then((packages)=>{
    res.render('admin/view-package',{admin:true,packages});

  })
})

//routing of products

router.get('/add-product',function(req,res)
{
  res.render('admin/add-product',{admin:true})

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
  res.render('admin/edit-product',{admin:true,product})
})
router.post('/edit-product/:id',(req,res)=>{
  let proId= req.params.id
  productHelpers.updateProduct(req.params.id,req.body).then(()=>{
    res.redirect('/admin/')
    if(req.files.image){
      let Image =req.files.image;
      Image.mv('./public/product-images/'+proId+'.  jpg')
    }
  })
})

//routing of Banner

router.get('/add-banner',function(req,res)
{
  res.render('admin/add-banner',{admin:true})

})
router.post('/add-banner',(req,res)=>{
  console.log(req.body);
  console.log(req.files.image);

  productHelpers.addBanner(req.body,(id)=>{
    let Image=req.files.image
    Image.mv('./public/banner-images/'+id+'.jpg',(err,done)=>{

      if(!err)
      {
    res.render("admin/add-banner")
      }
      console.log("image added");
    })
  })
  
})
router.get('/delete-banner/:id',(req,res)=>{
  let proId= req.params.id
  console.log(proId);
  productHelpers.deleteBanner(proId).then((response)=>{
    res.redirect('/admin/');
  })
  
})

router.get('/edit-banner/:id',async (req,res)=>{
  let product= await productHelpers.getProductDetails(req.params.id)
 // console.log(product);
  res.render('admin/edit-product',{admin:true,product})
})
router.post('/edit-banner/:id',(req,res)=>{
  let proId= req.params.id
  productHelpers.updateProduct(req.params.id,req.body).then(()=>{
    res.redirect('/admin/')
    if(req.files.image){
      let Image =req.files.image;
      Image.mv('./public/product-images/'+proId+'.  jpg')
    }
  })
})

//routing of videos

router.get('/add-video',function(req,res)
{
  res.render('admin/add-video',{admin:true})

})
router.post('/add-video',(req,res)=>{
  console.log(req.body);
  console.log(req.files.image);

  productHelpers.addVideo(req.body,(id)=>{
    let Video=req.files.video
    Video.mv('./public/slider-videos/'+id+'.mp4',(err,done)=>{

      if(!err)
      {
    res.render("admin/add-video")
      }
      console.log("video added");
    })
  })
  
})
router.get('/delete-video/:id',(req,res)=>{
  let proId= req.params.id
  console.log(proId);
  productHelpers.deleteVideo(proId).then((response)=>{
    res.redirect('/admin/');
  })
  
})

router.get('/edit-video/:id',async (req,res)=>{
  let video= await productHelpers.getVideoDetails(req.params.id)
 // console.log(product);
  res.render('admin/edit-video',{admin:true,video})
})
router.post('/edit-video/:id',(req,res)=>{
  let proId= req.params.id
  productHelpers.updateVideo(req.params.id,req.body).then(()=>{
    res.redirect('/admin/')
    if(req.files.video){
      let Video =req.files.video;
      Video.mv('./public/slider-videos/'+proId+'. mp4')
    }
  })
})

//routing of slider images


router.get('/add-slider',function(req,res)
{
  res.render('admin/add-slider',{admin:true})

})
router.post('/add-slider',(req,res)=>{
  console.log(req.body);
  console.log(req.files.image);

  productHelpers.addSlider(req.body,(id)=>{
    let Image=req.files.image
    Image.mv('./public/slider-images/'+id+'.jpg',(err,done)=>{

      if(!err)
      {
    res.render("admin/add-slider",{admin:true})
      }
      console.log("slider-image added");
    })
  })
  
})
router.get('/delete-Slider/:id',(req,res)=>{
  let proId= req.params.id
  console.log(proId);
  productHelpers.deleteSlider(proId).then((response)=>{
    res.redirect('/admin/');
  })
  
})

router.get('/edit-banner/:id',async (req,res)=>{
  let product= await productHelpers.getSliderDetails(req.params.id)
 // console.log(product);
  res.render('admin/edit-slider',{admin:true,product})
})
router.post('/edit-slider/:id',(req,res)=>{
  let proId= req.params.id
  productHelpers.updateSlider(req.params.id,req.body).then(()=>{
    res.redirect('/admin/')
    if(req.files.image){
      let Image =req.files.image;
      Image.mv('./public/slider-images/'+proId+'.  jpg')
    }
  })
})

//routing of brands

router.get('/add-brand',function(req,res)
{
  res.render('admin/add-brand',{admin:true})

})
router.post('/add-brand',(req,res)=>{
  console.log(req.body);
  console.log(req.files.image);

  productHelpers.addBrand(req.body,(id)=>{
    let Image=req.files.image
    Image.mv('./public/brand-images/'+id+'.jpg',(err,done)=>{
      if(!err)
      {
    res.render("admin/add-brand")
      }
    })
  })
  
})
router.get('/delete-brand/:id',(req,res)=>{
  let proId= req.params.id
  console.log(proId);
  productHelpers.deleteBrand(proId).then((response)=>{
    res.redirect('/admin/')
  }
  )
})


router.get('/edit-brand/:id',async (req,res)=>{
  let brand= await productHelpers.getBrandDetails(req.params.id)
 // console.log(product);
  res.render('admin/edit-brand',{admin:true,brand})
})
router.post('/edit-brand/:id',(req,res)=>{
  let proId= req.params.id
  productHelpers.updateBrand(req.params.id,req.body).then(()=>{
    res.redirect('/admin/')
    if(req.files.image){
      let Image =req.files.image;
      Image.mv('./public/brand-images/'+proId+'.  jpg')
    }
  })
})
//routing of package
router.get('/add-package',function(req,res)
{
  res.render('admin/add-package',{admin:true})

})
router.post('/add-package',(req,res)=>{
  console.log(req.body);
  console.log(req.files.image);

  productHelpers.addPackage(req.body,(id)=>{
    let Image=req.files.image
    Image.mv('./public/package-images/'+id+'.jpg',(err,done)=>{

      if(!err)
      {
    res.render("admin/add-package")
      }
      console.log("package-image added");
    })
  })
  
})
router.get('/delete-package/:id',(req,res)=>{
  let proId= req.params.id
  console.log(proId);
  productHelpers.deletePackage(proId).then((response)=>{
    res.redirect('/admin/');
  })
  
})

router.get('/edit-package/:id',async (req,res)=>{
  let package= await productHelpers.getPackageDetails(req.params.id)
 // console.log(product);
  res.render('admin/edit-package',{admin:true,package})
})
router.post('/edit-package/:id',(req,res)=>{
  let proId= req.params.id
  productHelpers.updatePackage(req.params.id,req.body).then(()=>{
    res.redirect('/admin/')
    if(req.files.image){
      let Image =req.files.image;
      Image.mv('./public/package-images/'+proId+'.  jpg')
    }
  })
})









module.exports = router;
