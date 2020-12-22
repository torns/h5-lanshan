const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );   
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: config => {
        let miniCssExtractPlugin = new MiniCssExtractPlugin({
            filename: 'assets/[name].[hash:8].css',
            chunkFilename: 'assets/[name].[hash:8].css'
        })

        // 抽离 css 支持按需加载
        config.plugin('extract-css').use(miniCssExtractPlugin)

        // 别名配置
        config.resolve.alias
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'))
            .set('config', resolve('src/config'))

        // 定义全局scss变量
        const oneOfsMap = config.module.rule("scss").oneOfs.store;
        oneOfsMap.forEach(item => {
            item
                .use("sass-resources-loader")
                .loader("sass-resources-loader")
                .options({
                    // 公用scss
                    resources: "./src/styles/index.scss"
                })
                .end();
        });
    },
    css: {
        extract: false
      }
}