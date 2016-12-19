/**
 * Activity.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

attributes: {
    date: {
        type: 'date',
        required: true,
        unique: true
    },
    amountOfActions: {
        type: 'integer',
        required: true
    },
    account: { model: 'Account' }
}
};
