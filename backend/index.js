    //This is in 7000 series port
    const connecttoMongo = require("./db");
    const express = require('express');
    var cors = require('cors')

    const authRouter = require('./Routes/auth'); 
    const booksrouter = require('./Routes/books'); 


    connecttoMongo();
    const app = express();
    const port =7000 ;

    app.use(cors())
    app.use(express.json())

    app.get("/", (req, res) => {
        res.send("well and okay");
    });

    app.use('/auth', authRouter); // Use the imported router
    app.use('/books', booksrouter);


    app.listen(port, () => {
        console.log("listening on port", port);
    });
