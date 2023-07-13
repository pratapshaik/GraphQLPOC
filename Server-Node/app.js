const { ApolloServer, gql } = require('apollo-server')


const productsList = [
    {name: "product1", description: "description1"},
    {name: "product2", description: "description2"},
    {name: "product3", description: "description3"}

]

const typeDefs = gql`
  type Product {
    name: String!
    description: String!
  }

  type Query {
    products: [Product] 
  }
  
`

const resolvers = {
    Query: {
        products: () => productsList
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then( ({url}) => {
  console.log(`server is running at ${url}`)
})