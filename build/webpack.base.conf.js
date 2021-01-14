/*
 * @Descripttion: 
 * @Author: 李征
 * @Date: 2020-10-22 10:54:37
 * @LastEditors: 李征
 * @LastEditTime: 2020-10-23 09:27:51
 * @FilePath: /react-project/build/webpack.base.conf.js
 */
'use strict'
const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //  压缩css
const TerserPlugin = require('terser-webpack-plugin'); // 压缩js
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css插件
const webpack = require('webpack');
const HappyPack = require('happypack');  // 开启多进程 提高效率  优化webpack
const os = require('os'); // 配合happupack使用
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length }); // 获取cpu数量
const CopyWebpackPlugin = require('copy-webpack-plugin'); //复制粘贴

module.exports = {
  entry: {
    main: path.join(__dirname, '../src/index.js')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/chunk.[name].[hash:8].js'
  },
  module: { // 模块配置
    rules: [
      {
        test: /\.(js|jsx)$/,
        //把对.js 的文件处理交给id为happyBabel 的HappyPack 的实例执行
        loader: 'happypack/loader?id=happyBabel',
        //排除node_modules 目录下的文件
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg|jpg)(\?\S*)?$/,
        // exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 2048, //s 2048以内的文件我们打包到js里面去
            name: 'images/[hash:8].[hash:16].[ext]'  // 2048之外到图拍呢我们放到目录下不打包
          },
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, // 字体加载器
        // exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
          limit: 10,
        }
      },
      {
        test: /\.(mp3|mp4)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: 'audios/[name].[ext]',
          limit: 10
        }
      },
      {
        test: /\.css?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'postcss-loader'
        ]
      },
      // 处理less
      {
        test: /\.less?$/,
        // include: [
        //   path.resolve(__dirname, '../node_modules/antd'),
        //   path.resolve(__dirname, '../src')
        // ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
    ]
  },
  resolve: { // 解析模块请求
    extensions: ['.js', 'jsx', '.json',],
    alias: {
      '@assets': path.resolve(__dirname, '..', 'src/assets'),
      '@com': path.resolve(__dirname, '..', 'src/components'),
      '@config': path.resolve(__dirname, '..', 'src/config'),
      '@utils': path.resolve(__dirname, '..', 'src/utils'),
      '@styles': path.resolve(__dirname, '..', 'src/styles'),
      '@apps': path.resolve(__dirname, '..', 'src/apps')
    }
  },
  optimization: { // 优化项
    splitChunks: {
      chunks: 'all', // 插件作用的范围 all全部，async按需加载， initial入口文件
      minSize: 30000, // 最小打包的尺寸 超过30kb才会打包
      minChunks: 1, // 最小引入第三方库
      maxAsyncRequests: 5, // 最大异步请求chunks
      maxInitialRequests: 3, // 最大初始化chunks
      automaticNameDelimiter: '.', // 如果不指定name，自动生成name的分割符（’runtime.[name]）
      name: true, // split 的 chunks name
      cacheGroups: { // 缓存组
        vendors: {
          chunks: 'initial', // 左右时入口文件
          test: /[\\/]node_modules/,
          name: 'vender',
          minChunks: 1, // 最小引入数 1
          priority: -10, //优先级
          enforce: true
        }
      }
    }
  },
  plugins: [ // 配置插件
    new OptimizeCSSAssetsPlugin(),
    new TerserPlugin(),
    new HappyPack({
      //用id来标识 happypack处理那里类文件
      id: 'happyBabel',
      //如何处理  用法和loader 的配置一样
      loaders: [{
        loader: 'babel-loader',
        options: { babelrc: true, cacheDirectory: true }
      }],
      //共享进程池
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true,
    }),
    new MiniCssExtractPlugin({ // 抽离css文件插件
      filename: 'css/[name].css', // 文件命名
      chunkFilename: 'css/[name].css' //打包存放地址
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: path.join(__dirname, '../dist', '/vendor-manifest.json')
    }),
    new CopyWebpackPlugin({
      patterns: [ // 拷贝文件到打包文件目录下
        {
          from: path.resolve(__dirname, '../static'),
          to: path.resolve(__dirname, '../dist/static')
        }
      ]
    })
  ]
}