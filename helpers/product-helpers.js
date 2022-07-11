var db=require('../config/connection')
var collection=require('../config/collections')
var objectId=require('mongodb').ObjectId
var PDFDocument = require('pdfkit');
var fs = require('fs');

module.exports={
    addProduct:(product,callback)=>{
        console.log(product)
        db.get().collection('product').insertOne(product).then((data)=>{
        callback(data.insertedId)
        })
    },
    getAllProducts:(callback)=>{
        return new Promise(async(resolve,reject)=>{
            let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    },
    deleteProduct:(prodId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).deleteOne({_id:objectId(prodId)}).then((response)=>{
                console.log(response);
                resolve(response)
            })
        })
    },
    getProductDetails:(proId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).findOne({_id:objectId(proId)}).then((product)=>{
                resolve(product)
            })
        })
    },
    updateProduct:(proId,proDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).updateOne({_id:objectId(proId)},{
                $set:{
                    Name :proDetails.Name,
                    Description:proDetails.Description,
                    Category:proDetails.Category,
                    Price:proDetails.Price
                    }}).then((response)=>{
                        resolve()
   
                    })
   
                })
   
    },

   
    //function for adding banner
 
    addBanner:(banner,callback)=>{
        console.log(banner)
        db.get().collection('banner').insertOne(banner).then((data)=>{
        callback(data.insertedId)
        })
    },
    getAllBanners:(callback)=>{
        return new Promise(async(resolve,reject)=>{
            let banners=await db.get().collection(collection.BANNER_COLLECTION).find().toArray()
            resolve(banners)
        })
    },
    deleteBanner:(prodId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.BANNER_COLLECTION).deleteOne({_id:objectId(prodId)}).then((response)=>{
                console.log(response);
                resolve(response)
            })
        })
    },
    getBannerDetails:(proId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.BANNER_COLLECTION).findOne({_id:objectId(proId)}).then((banner)=>{
                resolve(banner)
            })
        })
    },
    updateBanner:(proId,proDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.BANNER_COLLECTION).updateOne({_id:objectId(proId)},{
                $set:{
                    Image:proDetails.Image,
                    Description1:proDetails.Description1,
                    Description2:proDetails.Description2
                    }}).then((response)=>{
                        resolve()
   
                    })
   
                })
   
    },


     //function for adding Videos
 
     addVideo:(video,callback)=>{
        console.log(video)
        db.get().collection('video').insertOne(video).then((data)=>{
        callback(data.insertedId)
        })
    },
    getAllVideos:(callback)=>{
        return new Promise(async(resolve,reject)=>{
            let videos=await db.get().collection(collection.VIDEO_COLLECTION).find().toArray()
            resolve(videos)
        })
    },
    deleteVideo:(prodId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.VIDEO_COLLECTION).deleteOne({_id:objectId(prodId)}).then((response)=>{
                console.log(response);
                resolve(response)
            })
        })
    },
    getVideoDetails:(proId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.VIDEO_COLLECTION).findOne({_id:objectId(proId)}).then((video)=>{
                resolve(video)
            })
        })
    },
    updateVideo:(proId,proDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.VIDEO_COLLECTION).updateOne({_id:objectId(proId)},{
                $set:{
                    Video:proDetails.Video,
                    }}).then((response)=>{
                        resolve()
   
                    })
   
                })
   
    },

     //function for adding Slider-images
 
     addSlider:(slider,callback)=>{
        console.log(slider)
        db.get().collection('slider').insertOne(slider).then((data)=>{
        callback(data.insertedId)
        })
    },
    getAllSliders:(callback)=>{
        return new Promise(async(resolve,reject)=>{
            let sliders=await db.get().collection(collection.SLIDER_COLLECTION).find().toArray()
            resolve(sliders)
        })
    },
    deleteSlider:(prodId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.SLIDER_COLLECTION).deleteOne({_id:objectId(prodId)}).then((response)=>{
                console.log(response);
                resolve(response)
            })
        })
    },
    getSliderDetails:(proId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.SLIDER_COLLECTION).findOne({_id:objectId(proId)}).then((slider)=>{
                resolve(slider)
            })
        })
    },
    updateSlider:(proId,proDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.SLIDER_COLLECTION).updateOne({_id:objectId(proId)},{
                $set:{
                    Slider:proDetails.Slider,
                    Description1:proDetails.Description1,
                    Description2:proDetails.Description2,
                    }}).then((response)=>{
                        resolve()
   
                    })
   
                })
   
    },
    // functions for adding,deleting,Updating and editing the brands

    addBrand:(brand,callback)=>{
        db.get().collection('brand').insertOne(brand).then((data)=>{
        callback(data.insertedId)
        })
    },
    getAllBrands:(callback)=>{
        return new Promise(async(resolve,reject)=>{
            let brands=await db.get().collection(collection.BRAND_COLLECTION).find().toArray()
            resolve(brands)
        })
    },
    deleteBrand:(prodId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.BRAND_COLLECTION).deleteOne({_id:objectId(prodId)}).then((response)=>{
                console.log(response);
                resolve(response)
            })
        })
    },
    getBrandDetails:(proId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.BRAND_COLLECTION).findOne({_id:objectId(proId)}).then((brand)=>{
                resolve(brand)
            })
        })
    },
    updateBrand:(proId,proDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.BRAND_COLLECTION).updateOne({_id:objectId(proId)},{
                $set:{
                    Name :proDetails.Name,
                    Description:proDetails.Description,
                    }}).then((response)=>{
                        resolve()
   
                    })
   
                })
   
    },

    // functions for adding,deleting,Updating and editing the categories

    addCategory:(category,callback)=>{
        db.get().collection('category').insertOne(category).then((data)=>{
        callback(data.insertedId)
        })
    },
    getAllCategories:(callback)=>{
        return new Promise(async(resolve,reject)=>{
            let categories=await db.get().collection(collection.CATEGORY_COLLECTION).find().toArray()
            resolve(categories)
        })
    },
    deleteCategory:(prodId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.CATEGORY_COLLECTION).deleteOne({_id:objectId(prodId)}).then((response)=>{
                console.log(response);
                resolve(response)
            })
        })
    },
    getCategoryDetails:(proId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.CATEGORY_COLLECTION).findOne({_id:objectId(proId)}).then((category)=>{
                resolve(category)
            })
        })
    },
    updateCategory:(proId,proDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.CATERGORY_COLLECTION).updateOne({_id:objectId(proId)},{
                $set:{
                    Name :proDetails.Name,
                    }}).then((response)=>{
                        resolve()
   
                    })
   
                })
   
    },
    

    // functions for adding,deleting,Updating and editing the package

    addPackage:(package,callback)=>{
        db.get().collection('package').insertOne(package).then((data)=>{
        callback(data.insertedId)
        })
    },
    getAllPackages:(callback)=>{
        return new Promise(async(resolve,reject)=>{
            let packages=await db.get().collection(collection.PACKAGE_COLLECTION).find().toArray()
            resolve(packages)
        })
    },
    deletePackage:(prodId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PACKAGE_COLLECTION).deleteOne({_id:objectId(prodId)}).then((response)=>{
                console.log(response);
                resolve(response)
            })
        })
    },
    getPackageDetails:(proId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PACKAGE_COLLECTION).findOne({_id:objectId(proId)}).then((package)=>{
                resolve(package)
            })
        })
    },
    updatePackage:(proId,proDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PACKAGE_COLLECTION).updateOne({_id:objectId(proId)},{
                $set:{
                    Image:proDetails.Image,
                        }}).then((response)=>{
                        resolve()
   
                    })
   
                })
   
    },
   
   
}