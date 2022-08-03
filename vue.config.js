const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  module: {
    rules: [
      // ... другие правила опущены
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              // включаем CSS модули
              modules: true,
              // настраиваем генерируемое имя класса
              localIdentName: '[local]_[hash:base64:8]'
            }
          }
        ]
      }
    ]
  },
  transpileDependencies: true
})
