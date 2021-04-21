const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // 打包入口文件
  entry: './src/index.ts',

  output: {

    // 输入目录
    path: path.resolve(__dirname, 'dist'),

    // 输出文件名
    filename: 'bundle.js',

    // 不使用箭头函数
    environment: {
      arrowFunction: false
    }
  },

  module: {
    rules: [
      {
        test: /\.ts$/,

        // 使用的loader, 从后往前执行
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      "chrome": '58',
                      "ie": '11'
                    },
                    "corejs": '3',
                    "useBuiltIns": 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],

        // 要排除的文件夹
        exclude: '/node_modules/'
      }
    ]
  },

  plugins: [
    // 每次打包清空dist
    new CleanWebpackPlugin(),

    // 自动生成html文件
    new HTMLWebpackPlugin({
      // title: 'ts demo'
      // 生成的html文件使用的模板
      template: './src/index.html'
    })
  ],

  resolve: {
    // 当做模块处理的文件类型
    extensions: ['.ts', '.js']
  }
}