const mongoose = require('mongoose');

const connectDatabase = () =>{
    mongoose.connect(process.env.DB_LOCAL_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(con=>{
        console.log(`mongodb is connected to the host: ${con.Connection.host}`)
    }).catch((err)=>{
        console.log(err);
    })
}

    module.exports = connectDatabase;