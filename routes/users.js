var express = require('express');
const async = require('hbs/lib/async');
const { Db } = require('mongodb');
var router = express.Router();
var productHelpers = require('../helpers/product-helpers')
var userHelpers = require('../helpers/user-helpers')
const verifyLogin = (req, res, next) => {
  if (req.session.loggedIn) {
    next()
  }
  else {
    res.redirect('/login')
  }
}
/* GET home page. */
router.get('/', async function (req, res, next) {
  productHelpers.getAllProducts().then((products) => {
  productHelpers.getAllBanners().then((banners) => {
    productHelpers.getAllSliders().then((sliders) => {
    productHelpers.getAllVideos().then((videos) => {
      productHelpers.getAllBrands().then((brands) => {
        productHelpers.getAllPackages().then((packages) => {


    res.render('user/view-products', {products,banners,sliders,videos,brands,packages,isBanners:true,isSliders:true,isVideos:true,isBrands:true,isPackages:true})
        })
    })
  })
  })
})
})
 
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/')
  } else {
    res.render('user/login', { "loginErr": req.session.loginErr })
    req.session.loginErr = false;

  }
});
router.get('/signup', (req, res) => {
  res.render('user/signup')
});
router.post('/signup', (req, res) => {
  userHelpers.doSignup(req.body).then((response) => {
    console.log(response);
    req.session.loggedIn = true;
    req.session.user = response
    res.redirect('/')
  })

})
router.post('/login', (req, res) => {
  userHelpers.doLogin(req.body).then((response) => {
    if (response.status) {
      req.session.loggedIn = true
      req.session.user = response.user
      res.redirect('/')
    } else {
      req.session.loginErr = "Invalid username or Password";
      res.redirect('/login')
    }
  })
})
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/')
})

module.exports = router;
