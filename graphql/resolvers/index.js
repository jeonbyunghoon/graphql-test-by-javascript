// Resolver 작성 : blocks라는 함수와 Block 타입 정보를 처리하기 위한 로직 작성
//                쿼리에서 blocks를 요청하면, Block 객체의 find 메서드를 호출하여 MongoDB에 저장된 모든 collection을 반환한다.

const Block = require('../../models/block')

// 실제로 사용할 데이터 추가하기 (스키마에서 지정한 형식과 동일하게 작성되어야 한다!)
const resolvers = {
    Query: {
        async blocks(_, args) {
            try {
                const blocks = await Block.find();
                return blocks;
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    },
    // _(언더바)는 요청하기 이전의 객체를 의미하며, _값은 undefined가 되고, _id, serviceCode, jsonrpc ... 함수의 _값은 요소 값을 요청하는 Block이 됨
    // args는 쿼리의 인자인데 해당 예제에서는 전달하는 인자가 없다.
    Block: {
        _id(_, args) {
            return _._id;
        },
        serviceCode(_, args) {
            return _.serviceCode;
        },
        jsonrpc(_, args){
            return _.jsonrpc;
        },
        number(_, args) {
            return _.result.number;
        },
        committee(_, args) {
            return _.result.committee;
        }
    }

}

module.exports = resolvers;