import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

 
const FaqPreview = ({ title, path }) => (

        <tbody>
         
            <tr>
           <td><Link className="link" to={path}  >{title} </Link> </td>    
                                          
            </tr>
           
        </tbody>
 
);
 
FaqPreview.propTypes = {
 title: PropTypes.string.isRequired,
 price: PropTypes.number.isRequired,

};
 
export default FaqPreview;