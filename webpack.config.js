const HtmlWebpackPlugin= require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')
const WorkboxWebpacPlugin = require('workbox-webpack-plugin')
module.exports={
  output: {
    filename: "app.bundle.js",
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new WebpackPwaManifestPlugin({
      name:'PetGram -tu app de fotos de mascotas',
      short_name:'Petsam',
      description:'Con petSam puedes encontrar fotos de mascotas animales domesticos my fácilmente',
      background_color:'#fff',
      theme_color:'#b1a',
      icons:[
        {
          src:path.resolve('src/assets/icon.png'),
          sizes:[96,128,192,256,384,512]
        }
      ]

    }),
    new WorkboxWebpacPlugin.GenerateSW(
      {
        runtimeCaching:[
          {
            urlPattern:new RegExp('https://res.cloudinary.com|images.unsplash.com'),
            handler:'CacheFirst',
            options:{
              cacheName:'imagenes'
            }
          },
          {
            urlPattern:new RegExp('https://petgram-sam-server-6du83kpgn.vercel.app/graphql'),
            handler:'NetworkFirst',
            options:{
              cacheName:'api'
            }
          }
        ]
      }
    )
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude:/node_modules/,
      use:{
        loader: "babel-loader",
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }
    }]
  }
}
