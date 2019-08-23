const Joi = require('joi');

module.exports = async function (app){

    const searchSchema = Joi.object().keys({
        searchQuery: Joi.string().alphanum().min(1).max(30).required(),
        
        });
     


}
