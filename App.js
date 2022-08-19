const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const dotenv = require('dotenv');
dotenv.config();
const dbConnect = require('./models');
dbConnect();

// Apollo-GraphQL 서버 만들기
// Schema로 데이터 형식을 지정하고, resolvers로 실제 데이터를 처리함
const server = new ApolloServer({
   typeDefs,
   resolvers,
   playground: true
});

// 서버를 감시하고 있다가, 실행되면 콘솔창에 알림메시지를 보내줌
server.listen().then(({url}) => {
   console.log(`Server ready at ${url}`);
});

