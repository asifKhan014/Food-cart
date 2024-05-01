const { gql, default: request } = require("graphql-request");

const MASTER_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;


// Used to make GET APi request  to the GraphQL API server
const GetCategory = async() => {
    const query = gql`
      query Categories {
        categories(first: 50) {
          id
          slug
          name
          icon {
            url
          }
        }
      }
    `;

    const result = await request(MASTER_URL, query);
    return result;
}

// Used to make GET APi request  to the GraphQL API server
const GetBusiness = async(category) => {
    const query = gql`
      query GetBusiness {
        restaurants(where: { categories_some: { slug: "`+category+`" } }) {
          aboutUs
          address
          banner {
            url
          }
          categories {
            name
          }
          id
          name
          restroType
          slug
          workingHours
        }
      }
    `;

    const result = await request(MASTER_URL, query);
    return result;
}


module.exports = {
  GetCategory,
  GetBusiness,
};