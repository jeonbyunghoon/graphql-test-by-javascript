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
module.exports = mongoose.model('blocks', blockSchema);