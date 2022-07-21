import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from "../components/seo"
import Layout from '../components/layout';
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

const Accessory = ({ data }) => {
 const post = data.contentfulAccessory;

 return (
   <Layout>
     <SEO title = "accessory" />
     <br></br>
     <br></br>
     <br></br>
     <h3><Link to="/accessories/" className="link">Accessories</Link> \ {post.itemName}
     <Link to="" ><StaticImage className="cart-icon" src  ="../images/cartIcon.png"  alt="cart icon"   layout="fixed"   placeholder="blurred" width={50} /> </Link>
     </h3>

<ul class="images-ul">
      {
        (post.productImage === null? "":post.productImage.map(accessoryimage => (
          <li>
            <GatsbyImage
               image={accessoryimage.gatsbyImageData}
            />
          </li>
        )))
      }
</ul>
<ul class="videos-ul">
      {
 (post.video === null? "":post.video.map(accessoryVideo => (
          <li>
           
               <video width="100%" height="100%" src={accessoryVideo.file.url} controls  >
               Your browser does not support the video tag.
               </video>
            
          </li>
        )))
      }
</ul>
<div style={{clear:"both"}}></div>
<h2>  Specifications </h2>
 <table class="spesc">
<tbody>
   
    <tr>
      <th>Price</th>
      <td>{post.price}</td>
    </tr>
    <tr>
      <th>Item number</th>
      <td>{post.itemNumber}</td>
    </tr>
    <tr>
      <th>Accessory Type</th>
      <td>{post.accessoryType}</td>
    </tr>
    <tr>
      <th>Color</th>
      <td>{post.color}</td>
    </tr>
    <tr>
      <th>Warranty</th>
      <td>{(post.warranty === null? "___" : post.warranty.map(warranty=> <div><Link className="link" to={"/warranties/".concat(warranty.slug)}>{warranty.title}</Link></div>))}</td>

    </tr>
    <tr>
      <th>Shipping weight</th>
      <td>{post.shippingWeight} kg </td>
    </tr>
    <tr>
      <th>Model compatibility</th>
      <td>{(post.model_Compatibility === null ? "___": post.model_Compatibility)}</td>
    </tr>
    <tr>
      <th>Compatible Devices</th>
     
      <td>{(post.compatibleDevices === null ? "___" : post.compatibleDevices.map(compatibleDevices =><div><Link className="link" to={"/phones/".concat(compatibleDevices.slug)}>{compatibleDevices.deviceName}</Link></div>))} </td>
    </tr>
    <tr>
      <th>Product Description/ Special Features</th>
      <td>{(post.productDescription === null ? "___" : post.productDescription.productDescription)} </td>
    </tr>
  </tbody>
</table>

   
   </Layout>
 );
};
 
Accessory.propTypes = {
 data: PropTypes.object.isRequired,
};
 
export const query = graphql`
 query($AccessoryId: String!) 
 {
    contentfulAccessory(id: { eq: $AccessoryId }) 
   {
    id
    itemName
    price
    itemNumber
    color
    model_Compatibility
    shippingWeight
    accessoryType
    productDescription {
      productDescription
    }
    compatibleDevices {
      deviceName
      slug
    }
    warranty {
      title
      slug
    }
    productImage {
      gatsbyImageData(layout: CONSTRAINED, width: 200 , placeholder: BLURRED)
    }
    video {
      file {
        url
      }
    }
    }
 }`;
 
export default Accessory;