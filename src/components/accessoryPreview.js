import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { GatsbyImage,  StaticImage} from "gatsby-plugin-image"


 
const AccessoryPreview = ({path, title, type, price, accessoryimage}) => (
<div class="box-Preview">
  
     <Link className="link" to= {path}>
     <GatsbyImage  image={accessoryimage} alt={title} />
     <h4>{title}</h4>
   
   
     {price} SR <br></br>
     {type}
     <StaticImage className="cart-icon" src  ="../images/cartIcon.png"  alt="cart icon"   layout="fixed"   placeholder="blurred" width={50} />    
     </Link>
    
 </div>
);
 
AccessoryPreview.propTypes = {
 title: PropTypes.string.isRequired,
 type: PropTypes.string.isRequired,
 path: PropTypes.string.isRequired,
 price: PropTypes.number.isRequired,

};
 
export default AccessoryPreview;