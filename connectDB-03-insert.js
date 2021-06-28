const mongo = require("mongodb");

const url = "mongodb+srv://dbadmin:Thanh200801@cluster0.zodjv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
    (err, db) => {
        if (err) {
            console.log("\n ERR: ", err);
            process.exit(0);
        }
        console.log("\n Connected !");
        /// --- Query
        var dbObj = db.db("ATM_SHOP");

        var data = { idCustomer: "200801", custName: "Đặng An Thành" };
        //... Insert
        dbObj.collection("Customers").insert(data,
            (err, result) => {
                if (err) {
                    console.log("\n ERR insert: ", err);
                    process.exit(0);
                }
                console.log("\n Result - record added ", result);

                /// --- Close
                db.close();
            }
        );
    }
);