module.exports = {
    module:{
        rules:[
            {
                test:/\.scss$/,
                loaders:['style-loader','css-loader','sass-loader'],
            }
        ],
        pulgins:[
            [
               "import",
               {
                   libraryName:"antd",style:'css'
               }
            ]
        ]
    }
}