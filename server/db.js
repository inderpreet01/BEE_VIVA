const mongoose = require("mongoose");
module.exports = () => {
    const mongo = "mongodb+srv://inderpreet0639be21:JbqW3K50WilKyOva@firstproject.eq75xu2.mongodb.net/?retryWrites=true&w=majority";
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(mongo, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};