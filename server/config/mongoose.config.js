const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/mern_demo",{
    useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(()=> console.log("CONNECTED TO MERN_DEMO DB"))
.catch(err => console.log("ERROR: ", err))