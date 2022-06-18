import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

 
const WarrentyPreview = ({ title, path, duration, warrantyProvider }) => (
     
        <tbody>
         
            <tr>
           <td><Link className="link" to={path}  >{title}</Link></td>    
           <td>{duration}</td> 
           <td>{warrantyProvider}</td> 
                                      
            </tr>
    
          
        </tbody>

);
 
WarrentyPreview.propTypes = {
 title: PropTypes.string.isRequired,
 price: PropTypes.number.isRequired,

};
 
export default WarrentyPreview;