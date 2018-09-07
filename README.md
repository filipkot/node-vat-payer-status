# node-vat-payer-status

yarn add https://github.com/filipkot/node-vat-payer-status.git

var client = require('node-vat-payer-status');

client.SprawdzNip(<your nip>)
    .then((value) => { console.log(value)});
