import {Schema, model} from 'mongoose'

    const cardSchema = new Schema({
        title:{
            type:String,
            require:true
        },
        description:{
            type:String,
            require:true
        },
        img:{
            type:String,
            require:true
        },
        leftColor:{
            type:Schema.Types.Mixed,
            require:true
        },
        rightColor:{
            type:Schema.Types.Mixed,
            require:true
        }
    },{
        versionKey:false,
    })
export default model('Card', cardSchema)
