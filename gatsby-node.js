const path = require('path');
exports.createPages = async ({ actions, graphql, reporter }) => 
{
  const { createPage } = actions

const result = await graphql(`
 {
    allContentfulAccessory {
        edges {
          node {
            slug
            itemName
            id
          }
        }
      }
  
      allContentfulMobilePhone 
   {
      edges 
      {
      node 
      {
        deviceName
        id
        slug
      }
    }
  }

  allContentfulArticle 
  {
    edges
    {
      node 
      {
        id
        slug
        title
      }
    }
  }

  allContentfulFaq 
  {
    edges
    {
      node 
      {
        id
        slug
        question
      }
    }
  }


  allContentfulWarranty {
    edges {
      node {
        title
        id
        slug
      }
    }
  }
}
 `);
 
 if (result.errors) {
  reporter.panic("failed to create posts", result.errors);
}


//------------------------------------------------------------------
const accessories = result.data.allContentfulAccessory.edges;
const mobiles = result.data.allContentfulMobilePhone.edges;
const articles = result.data.allContentfulArticle.edges;
const faqs = result.data.allContentfulFaq.edges;
const warrenties = result.data.allContentfulWarranty.edges;
//------------------------------------------------------------------

accessories.forEach(accessoryData => 
{
  createPage({
    path: "accessories/" +accessoryData.node.slug,
    component: path.resolve(`./src/templates/accessory.js`),
    context: { AccessoryId: accessoryData.node.id,},
  })
})


mobiles.forEach(mobileData =>
  {
  createPage({
      path: "phones/" + mobileData.node.slug,
      component: path.resolve(`./src/templates/mobile.js`),
      context: { MobileId: mobileData.node.id,},
    })
  })

articles.forEach(articleData =>
    {
    createPage({
        path: "articals/" + articleData.node.slug,
        component: path.resolve(`./src/templates/article.js`),
        context: { ArticleId: articleData.node.id,},
      })
    })


faqs.forEach(faqData =>
      {
      createPage({
          path: "faqs/" +faqData.node.slug,
          component: path.resolve(`./src/templates/faq.js`),
          context: { FAQId: faqData.node.id,},
        })
      })  

warrenties.forEach(warrentyData =>
        {
        createPage({
            path: "warranties/" +warrentyData.node.slug,
            component: path.resolve(`./src/templates/warrenty.js`),
            context: { WarrentyId: warrentyData.node.id,           
            },
          })
        })   
}