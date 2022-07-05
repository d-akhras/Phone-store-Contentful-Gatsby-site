import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FaqPreview from "../components/FaqPreview";

const FAQPage = ({data}) => {
  const faqs=data.allContentfulFaq.edges;
  
  return (
  <Layout>
    <SEO title="FAQ Page" />
    <h3>FAQs</h3>
     
      <table class="not-spesc">
        <thead>
          <tr>
            <th>Question</th>
                 
          </tr>
        </thead>
       
        {faqs.map(faq => (
            <FaqPreview
           
             title ={faq.node.question}
            path={faq.node.slug}       
          
        
             />        
         ))}

      </table>




  </Layout>
 );
};
export default FAQPage

export const query = graphql `query GetQuestions
{
allContentfulFaq {
  edges {
    node {
      question
      slug
    }
  }
}
}`

