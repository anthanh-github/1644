// Nhớ cài MongoDB
//  npm      i       --S      mongodb
const mongo = require("mongodb");
const url = "mongodb+srv://dbadmin:Thanh200801@cluster0.zodjv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongo.connect(url, { useNewUrlParser: true },
    (err, db) => {
        if (err) {
            console.log("\n ERR: ", err);
            process.exit(0);
        }
        console.log("\n Connected !");
        /// --- Query
        var dbObj = db.db("ATM_SHOP");

        //... create
        dbObj.createCollection("Customers",
            (err, result) => {
                if (err) {
                    console.log("\n ERR create: ", err);
                    process.exit(0);
                }
                console.log("\n Result - create collection ", result);

                /// --- Close
                db.close();
            }
        );
    }
);