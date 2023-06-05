const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
  	  proxy:{
  		  '/shu':{
  			  target:'https://api.zhuishushenqi.com',
  		      changOrigin:true,
  			  secure:true,
  			  pathRewrite:{
  				  '^/shu':'/'
  			  }
  		  },
  		  '/www':{
  		      target:'https://www.zhuishushenqi.com',
  		      changOrigin:true,
  		  	  pathRewrite:{
  		  	     '^/www':'/'
  		  	  }
  		  },
  		  '/http':{
  		      target:'http://111.229.37.167',
  		      changOrigin:true,
  			  pathRewrite:{
  			     '^/http':'/'
  			  }
  		  }
  	  }
  }
})
