import React from "react"
import { graphql } from "gatsby"
import PropTypes from 'prop-types';
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticlePreview from "../components/ArticlePreview";
// import { renderRichText } from 'gatsby-source-contentful/rich-text'

const ArticalsPage= ({data}) => {
  const articals=data.allContentfulArticle.edges;
 

  
  return (
<Layout>
  <SEO title="Articals Page" />
  
<h3>Articals</h3>

<div class="grid-container-articles">
{articals.map(article => (
          <ArticlePreview
         
           title ={article.node.title}
       
           date={article.node.createdAt}
         
          summary={article.node.summary.summary}
           path={article.node.slug}
           />        
       ))}
</div>

</Layout>
);
};

ArticalsPage.propTypes = {
data: PropTypes.object.isRequired,
};


export default ArticalsPage

export const query = graphql `query GetSomeArticlesData {
  allContentfulArticle {
    edges {
      node {
        title
        body 
       {
        raw
           
        }
        summary
        {
          summary
        }
        createdAt(formatString: "MMMM Do, YYYY")
        slug
      }
    }
  }
}`
