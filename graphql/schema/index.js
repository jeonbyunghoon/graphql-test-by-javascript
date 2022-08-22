// GQL Type 정의 : Query 타입과 Person 타입을 정의한다. 여기서는 Block이라는 타입을 정의하고 Block목록을 불러오는 blocks라는 함수를 쿼리 타입에 정의

const {gql} = require('apollo-server');

// type Query {} : 우리가 서버에서 데이터를 가져올때 사용할 명령어의 형식을 지정
//                 [Book] 데이터를 불러올때 사용할 명령어(Query)를 "blocks"로 지정
// type Book {} : Book 객체의 형식을 지정
const typeDefs = gql`
    type Query {
        blocks: [Block]
    }
    
    type Block{
        _id: ID
        serviceCode: String
        jsonrpc: String
        number: String
        committee: [String]
    }
`;
module.exports = typeDefs;