("use strict");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;

    
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          return {
            price_data: {
              currency: "inr",
              product_data: {
                name: item.title,
                // Uncomment if you have product images in Strapi
                // images: [item.img.data[0].attributes.url],
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.attributes.quantity,
          };
        })
      );

   const session = await stripe.checkout.sessions.create({
  payment_method_types: ["card"],
  mode: "payment",
  success_url: `${process.env.CLIENT_URL}/success`,
  cancel_url: `${process.env.CLIENT_URL}/cancel`,
  line_items: lineItems.filter(item => item !== null), // Avoid undefined items
});


      // Save order in Strapi
      await strapi.service("api::order.order").create({
        data: { products, stripeId: session.id },
      });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error: error.message };
    }
  },
}));
