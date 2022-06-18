import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WarrentyPreview from "../components/WarrentyPreview";

const WarrantyPage = ({data}) => {
  const warranties=data.allContentfulWarranty.edges;
  
  return (

  <Layout>
    <SEO title="Warranties Page" />
    <h3>Warranties</h3>
    
         
    <table class="not-spesc">
        <thead>
          <tr>
            <th>Warrenty</th>
            <th>Duration</th>
            <th>Warrenty provider</th>
                 
          </tr>
        </thead>

{warranties.map(warrenty => (
            <WarrentyPreview
           
             title ={warrenty.node.title}
         
             duration={warrenty.node.duration}
             path={warrenty.node.slug}       
          
             warrantyProvider={warrenty.node.warrantyProvider}
             />        
         ))}


</table>

  </Layout>
 );
};
export default WarrantyPage

export const query = graphql `query GetSomeWarrantiesData {
  allContentfulWarranty {
    edges {
      node {
        title
        warrantyProvider
        duration
       slug
      }
    }
  }
}
`