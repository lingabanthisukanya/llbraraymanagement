const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
{
    
    coverImage: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

   

    

  

   
},
{
    timestamps: true,
});

module.exports = mongoose.model("Books", bookSchema);