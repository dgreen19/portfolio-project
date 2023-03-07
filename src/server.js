const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send", (req, res) => {
	const { name, email, message } = req.body;

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_ADDRESS,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	const mailOptions = {
		from: email,
		to: process.env.EMAIL_ADDRESS,
		subject: `New message from ${name}`,
		text: message,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			res.status(500).send("Something went wrong.");
		} else {
			console.log(`Email sent: ${info.response}`);
			res.status(200).send("Email sent successfully.");
		}
	});
});

app.listen(5000, () => console.log("Server started..."));
