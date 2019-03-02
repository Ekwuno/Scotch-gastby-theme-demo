module.exports= {
    plugin : [
        {
            resolve : 'gatsby-mdx',
            options:{}
        },
        {
            resolve : 'gatsby-plugin-page-creator',
            options:{
                path: `${__dirname}/src/pages`,
            }
        }
    ]
}