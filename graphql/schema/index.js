// GQL 스키마 만들기
const {gql} = require('apollo-server');

// type Book {} : Book 객체의 형식을 지정
// type Query {} : 우리가 서버에서 데이터를 가져올때 사용할 명령어의 형식을 지정
//                 [Book] 데이터를 불러올때 사용할 명령어(Query)를 "books"로 지정
// const typeDefs = gql`
//     type Book{
//         title:String
//         author:String
//     }
//
//     type Query {
//         books: [Book]
//     }
// `;
const typeDefs = gql`
    type Query {
        blockInfo: [blocks]
    }
    
    type blocks{
        _id: ID
        serviceCode: String
        jsonrpc: String
        number: String
        committee: [String]
    }
`;
module.exports = typeDefs;