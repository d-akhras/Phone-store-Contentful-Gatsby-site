import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from "../components/seo"
import Layout from '../components/layout';
import { Link } from "gatsby"

const Warrenty = ({ data }) => {
 const post = data.contentfulWarranty;

 return (
   <Layout>
     <SEO title = "warrenty" />
 
 <h3><Link to="/warranties/" className="link">Warranties</Link> \ {post.title}</h3>
     
     <p class="p-article">
     Warranty duration: {post.duration}
     <br></br>
<br></br>
     Warranty provider: {post.warrantyProvider}
     <br></br>
     <br></br>
     Warranty policy: {post.WarrantyPolicy.WarrantyPolicy}

    </p>


   
   </Layout>
 );
};
 
Warrenty.propTypes = {
 data: PropTypes.object.isRequired,
};
 
export const query = graphql`
 query($WarrentyId: String!) 
 {
    contentfulWarranty(id: { eq: $WarrentyId }) 
   {
    id
    title
    WarrantyPolicy {
      WarrantyPolicy
    }
    duration
    warrantyProvider
    
   }
 }`;
 
export default Warrenty;