import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from "../components/seo";
import Layout from '../components/layout';
import { Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const Mobile = ({ data }) => {
 const post = data.contentfulMobilePhone;


 return (
   <Layout>
     <SEO title = "mobile" />
     <br></br>
     <br></br>
     <br></br>
     <h3><Link to="/" className="link">Phons  </Link>\  {post.deviceName}
     <Link to="" ><StaticImage className="cart-icon" src  ="../images/cartIcon.png"  alt="cart icon"   layout="fixed"   placeholder="blurred" width={50} /> </Link>
      </h3>
<ul class="images-ul">
      {
        (post.productImage === null? "": post.productImage.map(phoneimage => (
          <li>
            <GatsbyImage
               image={phoneimage.gatsbyImageData}
            />
          </li>
        )))
      }
</ul>
<ul class="videos-ul">
      {
        (post.video === null? "":post.video.map(phonevideo => (
          <li>
           
               <video width="100%" height="100%" src={phonevideo.file.url} controls  >
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
      <th>price</th>
      <td>{post.price}</td>
    </tr>
    <tr>
      <th>Item Number</th>
      <td>{post.itemNumber}</td>
    </tr>    
    <tr>
      <th>Product Type</th>
      <td>{post.ProductType}</td>
    </tr>
    <tr>
      <th>Model Series</th>
      <td>{post.ModelSeries}</td>
    </tr>
    <tr>
      <th>Operating System</th>
      <td>{post.OperatingSystem}</td>
    </tr>
    <tr>
      <th>Capacity</th>
      <td>{post.capacity} GB</td>
    </tr>
    <tr>
      <th>RAM</th>
      <td>{post.ram} GB</td>
    </tr>
      
    <tr>
      <th> Processor speed</th>
      <td>{(post.processorSpeed === null ? "___": post.processorSpeed + " GHz" )}</td>
    </tr>
    <tr>
      <th>Camera Resolution</th>
      <td>{post.cameraResolution} MP</td>
    </tr>
    <tr>
      <th>Supported Network</th>
      <td>{post.supportedNetwork}</td>
    </tr>
    <tr>
      <th>Sim Type</th>
      <td>{post.simType.map(stype =><div>{stype}</div>)} </td>
    </tr>
    <tr>
      <th>Color</th>
      <td>{post.color}</td>
    </tr>
    <tr>
      <th>Display Size</th>
      <td>{post.displaySize} inches</td>
    </tr>
    <tr>
      <th>Display Resolution</th>
      <td>{post.displayResolution} Pixels</td>
    </tr>
    <tr>
      <th>GPS</th>
      <td>
        {(post.gps=== true ? "Yes" : "No") }
      </td>
    </tr>
    <tr>
      <th>Fingerprint</th>
      <td>{(post.fingerprint=== true ? "Yes" : "No")}</td>
    </tr>
    <tr>
      <th>Warranty</th>
      <td>{post.warranty === null ? "___" : post.warranty.map(warranty =><div><Link className="link" to={"/warranties/".concat(warranty.slug)}>{warranty.title}</Link></div>)}</td>
    </tr>
    <tr>
      <th>Available in the store</th>
      <td>{post.availableInTheStore}</td>
    </tr>
  </tbody>
</table>

   
   </Layout>
 );
};
 
Mobile.propTypes = {
 data: PropTypes.object.isRequired,
};
 
export const query = graphql`
 query($MobileId: String!) 
 {
    contentfulMobilePhone(id: { eq: $MobileId }) 
   {
    deviceName
    price
    itemNumber
    ProductType
    ModelSeries
    OperatingSystem
    capacity
    ram
    processorSpeed
    cameraResolution
    supportedNetwork
    simType
    color
    displaySize
    displayResolution
    gps
    fingerprint
    availableInTheStore
    warranty {
        title
        slug
      }
    productImage {
        gatsbyImageData(layout: CONSTRAINED, width: 200, placeholder: BLURRED)
      }
      video {
        file {
          url
        }
      }  
   }
 }`;
 
export default Mobile;