import React from "react"
import { graphql } from "gatsby"
import PropTypes from 'prop-types';
import Layout from "../components/layout"
import SEO from "../components/seo"
import AccessoryPreview from "../components/accessoryPreview";
import Image from "../components/image - accessories"
const AccessoriesPage= ({data}) => {
const accessories=data.allContentfulAccessory.edges;


  return (
    
  <Layout>
    
    <SEO title="Accessories Page" />
    <div style={{ maxWidth: `900px`, marginBottom: `1.45rem`, marginLeft: `auto`, marginRight: `auto`, }}>
      <Image />
    </div>
     

<div class="grid-container">
{accessories.map(accessory => (
            <AccessoryPreview
             key={accessory.id}
             path={accessory.node.slug}
             title ={accessory.node.itemName}
             type={accessory.node.accessoryType}
             price={accessory.node.price}
             accessoryimage={(accessory.node.productImage === null? "": accessory.node.productImage[0].gatsbyImageData)}
            
           
             />        
         ))}
</div>
         
       
  
  </Layout>
  );
};

AccessoriesPage.propTypes = {
  data: PropTypes.object.isRequired,
 };
export default AccessoriesPage


export const query  = graphql `query GetSomeAccessoriesData {
  allContentfulAccessory(sort: {fields: createdAt, order: DESC}) {
    edges {
      node {
        itemName
        id
        price
        itemNumber
        accessoryType
        slug
        productImage {
          gatsbyImageData(layout: FIXED, width: 150)
        } 
      }
    }
  }
}`
