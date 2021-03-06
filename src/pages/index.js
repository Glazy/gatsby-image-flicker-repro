import * as React from "react"
import { graphql, Link } from "gatsby"
import { getImage, getSrc, GatsbyImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  const img = data.allFile.edges[0].node.childImageSharp
  return (
    <>
      <Link to="/about">Go to about</Link>
      <div>
        <p>Gatsby image</p>
        <GatsbyImage image={getImage(img)} loading="eager" />
      </div>
      <div>
        <p>Html <code>img</code> tag</p>
        <img src={getSrc(img)} />
      </div>
    </>
  )
}

export const query = graphql`
  query ImageIndexQuery {
    allFile(filter: {sourceInstanceName: { eq: "images" }}) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export default IndexPage
