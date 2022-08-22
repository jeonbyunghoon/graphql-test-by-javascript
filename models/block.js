// mongoose Schema 작성 : MongoDB blocks라는 document에 저장된 데이터를 다루기 위해 mongoose에서 block이라는 스키마를 정의.
// Block에는 여러가지 필드들이 있지만, Test를 위해 serviceCode, json, result(result 하위 전체 포함) 세가지 필드만 정의한다.

const mongoose = require('mongoose');
const { Schema } = mongoose;
const blockSchema = new Schema({
   serviceCode: {
       type: String,
       required: true // 필수 입력
   },
    jsonrpc: {
       type: String,
        required: false
    },
    result:{
       type: Schema.Types.Mixed, // 다양한 타입을 지정 가능
        required: false
    }



});
module.exports = mongoose.model('Block', blockSchema);