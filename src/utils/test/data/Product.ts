import { P } from "src/interfaces"
const productData: P.Product = {
    data: {
      markdownRemark: {
        frontmatter: {
          title: "Haori Coat in Washed Denim",
          price: 420,
          id: "haori-coat-in-washed-denim",
          date: "2022-05-07T18:46:18.390Z",
          thumbnail: {
            childImageSharp: {
              gatsbyImageData: {
                layout: "constrained",
                backgroundColor: "#e8e8e8",
                images: {
                  fallback: {
                    src: "/static/5e566884fdc0f35caf38e43e3d3b3faa/87640/image-1.webp",
                    srcSet:
                      "/static/5e566884fdc0f35caf38e43e3d3b3faa/dc55b/image-1.webp 249w,\n/static/5e566884fdc0f35caf38e43e3d3b3faa/525ed/image-1.webp 498w,\n/static/5e566884fdc0f35caf38e43e3d3b3faa/87640/image-1.webp 995w",
                    sizes: "(min-width: 995px) 995px, 100vw",
                  },
                  sources: [],
                },
                width: 995,
                height: 995,
              },
            },
          },
          galleryImages: [
            {
              childImageSharp: {
                gatsbyImageData: {
                  layout: "constrained",
                  backgroundColor: "#e8e8e8",
                  images: {
                    fallback: {
                      src: "/static/1fcdbf9d7092a17c5ca5bb9a43f6327b/b86b5/image-2.webp",
                      srcSet:
                        "/static/1fcdbf9d7092a17c5ca5bb9a43f6327b/a9873/image-2.webp 200w,\n/static/1fcdbf9d7092a17c5ca5bb9a43f6327b/04c63/image-2.webp 400w,\n/static/1fcdbf9d7092a17c5ca5bb9a43f6327b/b86b5/image-2.webp 800w",
                      sizes: "(min-width: 800px) 800px, 100vw",
                    },
                    sources: [],
                  },
                  width: 800,
                  height: 1024,
                },
              },
            },
          ],
          productOptions: [
            {
              customField: "Size",
              options: [
                {
                  option: "Extra Small",
                  priceChange: 0,
                },
                {
                  option: "Small",
                  priceChange: 0,
                },
                {
                  option: "Medium",
                  priceChange: 0,
                },
                {
                  option: "Large",
                  priceChange: 0,
                },
              ],
            },
          ],
        },
        html: "<p>Atelier Delphine's classic Haori Coat in 5-layer gauze</p>\n<ul>\n<li>Relaxed, exaggerated oversized, and unisex, one size fits all</li>\n<li>2 hip pockets</li>\n<li>Hem sits below the hip</li>\n</ul>\n<p>100% Cotton</p>\n<p>Machine wash with gentle cycle or hand wash, low tumble dry</p>\n<p>Made in the US</p>",
        fields: {
          slug: "/haori-coat-in-washed-denim/",
        },
        parent: {
          sourceInstanceName: "women",
        },
      },
      site: {
        siteMetadata: {
          url: "upful.shop",
        },
      },
    },
    uri: "",
  }

const getProductData:()=>P.Product = ()=>({
...productData
})

export {getProductData}
