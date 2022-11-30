require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const storeItems = new Map([
  [1, { price: 600, name: "Todo Basic" }],
  [2, { price: 1200, name: "Todo Standard" }],
  [3, { price: 2400, name: "Todo Premium" }]
]);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "USD",
            product_data: {
              name: storeItem.name
            },
            unit_amount: storeItem.price
          },
          quantity: item.quantity
        };
      }),
      success_url: process.env.DEV_SUCCESS_URL,
      cancel_url: process.env.DEV_CANCEL_URL
    });
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000);
