const Joi = require("joi");
const joi=require("joi");
const review = require("./models/review");

module.exports.listingSchema=joi.object({
listing:Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    location:Joi.string().required(),
    country:Joi.string().required(),
    price:Joi.number().required().min(0),
    image:Joi.string().allow("",null)
}).required()

});


module.exports.reviewSchema=joi.object({
    review: Joi.object({
    rating: joi.number().required().min(1).max(5),
    comment:joi.string().required(),
    }).required()
})