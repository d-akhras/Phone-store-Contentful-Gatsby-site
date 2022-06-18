import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from "../components/seo";
import Layout from '../components/layout';
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from 'gatsby-source-contentful/rich-text'
 


const Article = ({ data }) => 
{
const post = data.contentfulArticle;
const output =renderRichText(post.body)
 return (
   <Layout>
     <SEO title = "article" />
     <br></br>
     <br></br>
     <br></br>
<p class="p-article">
<h3><Link to="/articals/" className="link">Articles</Link> \ {post.title}</h3>



<ul class="images-ul">
      {
        (post.image === null? "": post.image.map(articleImage => (
          <li>
            <GatsbyImage
               image={articleImage.gatsbyImageData}
            />
          </li>
        )))
      }
</ul>
<div style={{clear:"both"}}></div>
<small><em>{post.createdAt}</em></small>
<br></br>

{output} 

<br></br>
   
{(post.mobile_Phone === null ? "":post.mobile_Phone.map(phone =><div><Link className="link" to={"/phones/".concat(phone.slug)}>{phone.deviceName}</Link></div>))}
<br></br>

{(post.accessory === null ? "": post.accessory.map(acc =><div><Link  className="link" to={"/accessories/".concat(acc.slug)}>{acc.itemName}</Link></div>))}

    

</p>

   
</Layout>
 );
};
 
Article.propTypes = {
 data: PropTypes.object.isRequired,
};
 
export const query = graphql`
 query($ArticleId: String!) 
 {
    contentfulArticle(id: { eq: $ArticleId }) 
   {
    id
    title
    body 
    {
      raw
           
    }
    createdAt(formatString: "MMMM Do, YYYY")
    accessory {
      itemName
      slug
    }
    mobile_Phone {
      deviceName
      slug
    }
    image {
      gatsbyImageData(width: 400, layout: CONSTRAINED ,placeholder: BLURRED)
    }
   }
 }`;
 
export default Article;