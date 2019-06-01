const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/Blog.js")
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}





/* without cms, directly from project

        const path = require("path")

Concerning extradiction of name of the blog so we have react etc etc. 
   This is when working directly form proejct with grapql
      module.exports.onCreateNode = ({ node, actions }) => {
        const { createNodeField } = actions

        if (node.internal.type === "MarkdownRemark") {
          const slug = path.basename(node.fileAbsolutePath, ".md")

          console.log(JSON.stringify(node, undefined, 4))
          console.log("############", slug)

          createNodeField({
            node,
            name: "slug",
            value: slug,
          })
        }
      }

          module.exports.createPages = async ({ graphql, actions }) => {
            const { createPage } = actions
            const blogTemplate = path.resolve("./src/templates/Blog.js")
            const res = await graphql(`
              query {
                allMarkdownRemark {
                  edges {
                    node {
                      fields {
                        slug
                      }
                    }
                  }
                }
              }
            `)

            res.data.allMarkdownRemark.edges.forEach(edge => {
              createPage({
                component: blogTemplate,
                path: `/blog/${edge.node.fields.slug}`,
                context: {
                  slug: edge.node.fields.slug,
                },
              })
            })
          } */
