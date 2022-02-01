module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'   //任意
        : '/',
    outputDir: 'docs/', //これ
}