const path = require('path')

module.exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions

    if(node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
       
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })

    }
}

module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blogTemplate.js')

    const res = await graphql(`
        query {
            allMarkdownRemark {
                nodes {
                    fields {
                    slug
                    }
            } 
            }
        }  
    `)

    res.data.allMarkdownRemark.nodes.forEach((node) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${node.fields.slug}`,
            context: {
                slug: node.fields.slug
            }
        })
    })
}