// Nhớ cài Mongoose
//  npm      i       --S      mongoose
const mongoose = require("mongoose");

/// Thông tin Database Collection / Tables
const userName = "dbadmin";
const userPassword = "Thanh200801";


const dbName = "ATM_SHOP";
const dbTable = "Customers";

const url = "mongodb+srv://" +
    userName + ":" + userPassword +
    "@cluster0.zodjv.mongodb.net/" + dbName +
    "?retryWrites=true&w=majority";
// kết nối MongoDB bằng LIB Mongoose
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log("\n Error !", err);
    } else {
        console.log("\n DB connected !");
    }
});
