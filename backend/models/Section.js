const mongoose = require('mongoose');

const sectionSchema= new mongoose.schema(
    {
        sectionName:{
            type :String
        },
        SubSection:[{
            type :mongoose.Schema.Types.ObjectId,
            ref:"SubSection",}

        ]
    }
)