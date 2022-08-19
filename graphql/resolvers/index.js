const blocks = require('../../models/block')

// 실제로 사용할 데이터 추가하기 (스키마에서 지정한 형식과 동일하게 작성되어야 한다!)
// books 쿼리 입력시, books 데이터세트 불러오기
const resolvers = {
    // Query: {
    //     books: () => [
    //         {
    //             title: '남과 여',
    //             author: '시니/혀노'
    //         },
    //         {
    //             title: '죽음에 관하여',
    //             author: '시니/혀노'
    //         }
    //     ]
    // }
    Query: {
        async blockInfo(_, args) {
            try {
                const blockInfo = await blocks.find();
                return blockInfo;
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    },
    blocks: {
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