import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from "../components/seo"
import Layout from '../components/layout';
import { Link } from "gatsby"

const faq = ({ data }) => {
 const post = data.contentfulFaq;

 return (
   <Layout>
     <SEO title = "faq" />
     <br></br>
     <br></br>
     <br></br>
     <h3><Link to="/faqs/" className="link">FAQs</Link> \ {post.question}</h3>
 
     <p class="p-article">
     

  <strong>Answer: </strong>
    {post.answer.answer}
    <br></br>
    <br></br>
    

{(post.article === null ? "": post.article.map(article =><div><Link className="link" to={"/articals/".concat(article.slug)}>{article.title}</Link></div>))} 
{(post.warranty === null ? "": post.warranty.map(warranty =><div><Link className="link" to={"/warranties/".concat(warranty.slug)}>{warranty.title}</Link></div>))}
 

  </p>

   
   </Layout>
 );
};
 
faq.propTypes = {
 data: PropTypes.object.isRequired,
};
 
export const query = graphql`
 query($FAQId: String!) 
 {
    contentfulFaq(id: { eq: $FAQId }) 
   {
    id
    slug
    question
    answer {
      answer
    }
    article {
      title
      slug
    }
    warranty {
      title
      slug
    }
   }
 }`;
 
export default faq;