const Security = require('../security/verifyUser');
const axios = require('axios')
const ProductService = require('../services/firebaseProducts')

async function allProducts(req,res) {
        const test = (await axios.get('https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products')).data
        console.log(test)
        res.status(200).send(test)
}

module.exports = {
    allProducts
}