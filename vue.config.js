module.exports = {
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },
    pluginOptions: {
        electronBuilder: {
            outputDir: 'client'
        }
    },
    filenameHashing: false,
    css: {
        extract: false
    }
}
