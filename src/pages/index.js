import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MobilePreview from "../components/MobilePreview";


const IndexPage = ({data}) => {
const mobiles=data.allContentfulMobilePhone.edges;  

return (
  <Layout>
    <SEO title="Home" />
    <div style={{ margin: `0 auto`, padding: `0 1.0875rem 1.45rem`, maxWidth: `100%`,  display: `block` }}>
        <Image />
      </div>
<div class="grid-container">
{mobiles.map(mobile => (
            <MobilePreview
             key={mobile.node.id}
             title ={mobile.node.deviceName}
             price={mobile.node.price}
             path={mobile.node.slug}
             phoneimage={(mobile.node.productImage === null ? "": mobile.node.productImage[0].gatsbyImageData)}            
             />        
           ))}
  </div>
  
      
    </Layout>
    );
  };
 
export default IndexPage

export const query = graphql `query GetSomeDevicesData {
  allContentfulMobilePhone {
    edges {
      node {
        deviceName
        id
        price
        itemNumber
        slug
        productImage {
          gatsbyImageData(layout: FIXED, width: 150, placeholder: BLURRED)
        } 
      }
    }
  }
}
`