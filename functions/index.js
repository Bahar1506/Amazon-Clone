const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IMjqPEJ0k04Qkja1zy8uyERfF3ypkwR5EaYxxcilScjWO1qZrXuWG8Sw07xq1R2bxqESazq3eJqogxorchOLJcF00dR73dNoW"
);

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request,response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    //Ok Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app);

