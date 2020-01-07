import { GraphQLServer } from "graphql-yoga";
import connection from "./ormConfig";

//인자값과 리턴되는 값의 타입을 지정
const typeDefs = `
  type Query{
    sayHello: String!
  }
`;

//함수의 비지니스로직 실제로 들어가는 부분
const resolvers = {
  Query: {
    sayHello: () => "Hi there :0)"
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });

connection.then(() =>
  server.start(() =>
    console.log("My first GraphQL Server is running on localhost:4000")
  )
);
