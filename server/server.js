// Import necessary packages
const express = require ('express');
const {ApolloServer} = require('apollo-server-express');
const {typeDefs, resolvers} = require('./schemas');
const db = require ('./config/connection');
//const path = require('path');  <- create this line later to connect front and back end

// Define Local host port
const PORT = process.env.PORT || 3001;
const app = express();

// Define server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Set up Middleware 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Start server
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start()
    server.applyMiddleware({app});
    db.once('open', ()=>{
        app.listen(PORT, ()=>{
            console.log(`Server is running ${PORT}`)
            console.log(`GraphQL server at http://localhost:${PORT}${server.graphqlPath}`)
        })
    })
    
};



// Call function to start the server
startApolloServer(typeDefs, resolvers);