require('dotenv').config();
const express = require('express');
require ('express-async-errors');
const app = express();
const db = require('./models');

db.sequelize.authenticate().then(() => console.log("Connection successfull")).catch((err) => console.log(err));

if (process.env.NODE_ENV === "development") {
    db.sequelize.sync({ alter : { drop : false} });
    // db.sequelize.sync({ force : true })
}
app.use(express.json());

const router = require('./routes');
app.use('/api', router);


app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})


