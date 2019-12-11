const home = require('./home-controller');
const parking = require('./parking-controller');
const user = require('./user-controller');
const admin = require('./admin-controller');
const carDetails = require('./carDetails-controller')

module.exports = {
    home,
    parking,
    user,
    admin,
    carDetails
};
