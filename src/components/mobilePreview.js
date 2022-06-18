import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage ,StaticImage} from "gatsby-plugin-image"


const MobilePreview = ({ title, price, path,  phoneimage }) => (

         
<div class="box-Preview" >

     
     <Link className="link" to={`phones/`+path} >
     <GatsbyImage  image={phoneimage} alt={title} />
     <h4 >{title}</h4>
     {price} SR 
     
     <StaticImage className="cart-icon" src  ="../images/cartIcon.png"  alt="cart icon"   placeholder="blurred" width={50} />    
     </Link>

    
     
 </div>
);
 
MobilePreview.propTypes = {
 title: PropTypes.string.isRequired,
 price: PropTypes.number.isRequired, 
};
 
export default MobilePreview;