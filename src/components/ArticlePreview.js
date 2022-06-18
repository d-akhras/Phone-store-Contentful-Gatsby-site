import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'


 
const ArticlePreview = ({ title, date, summary, path }) => (

<div class="box-Preview">
  
     <Link className="link"  to={path}>
     <h4 class="h4-article-preview"> {title}</h4>
     <p class="p-article-preview"> - <small><em>{date}</em></small></p>
     </Link>
   <br></br> <br></br>
      <p>{summary} ...</p>  
    
    
 </div>
 
);
 
ArticlePreview.propTypes = {
 title: PropTypes.string.isRequired,
 date: PropTypes.number.isRequired,

};

 
export default ArticlePreview;