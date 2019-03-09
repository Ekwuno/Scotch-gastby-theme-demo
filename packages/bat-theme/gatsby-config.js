module.exports = {
    __experimentalThemes:['scotchy-theme'],
    plugins:[
        {
            resolve : 'gatsby-plugin-page-creator',
            options:{
                path: `${__dirname}/src/pages`,
            }
        },
        {
            resolve : 'gatsby-plugin-page-creator',
            options:{
                path: require.resolve(`./docs`),
            }
        }
      

    ]
};