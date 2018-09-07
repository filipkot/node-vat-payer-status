var soap = require('soap');
var url = 'https://sprawdz-status-vat.mf.gov.pl/?wsdl';

module.exports = {
    SprawdzNip: async function(nip) {
        try {
            const data = await checkNIP(nip);
            return data;

        } catch (error) {
            return error;
        }
    }
};

var checkNIP = (nip) => {
    return new Promise((resolve, reject) => {
        if(!validateNip(nip))
            return reject('Błędny NIP');

        var args = { NIP: nip };
        soap.createClient(url, (err, client) => {
            client.SprawdzNIP(args, (err, result) => {        
                return resolve(result.Komunikat);
            });
        });

    });        
}

// zrodlo: http://blog.aleksander.kaweczynski.pl/walidacja-numerow-pesel-nip-regon-w-javascript-i-php/ 
var validateNip = (nip) => {
    var nipWithoutDashes = String(nip).replace(/-/g,'');
    var reg = /^[0-9]{10}$/;
    if(!reg.test(nipWithoutDashes)) {
        return false;
    }
    else{
        var digits = nipWithoutDashes.split('');
        var checksum = (6*parseInt(digits[0]) + 5*parseInt(digits[1]) + 7*parseInt(digits[2]) + 
            2*parseInt(digits[3]) + 3*parseInt(digits[4]) + 4*parseInt(digits[5]) + 
            5*parseInt(digits[6]) + 6*parseInt(digits[7]) + 7*parseInt(digits[8]))%11;
         
        return (parseInt(digits[9])==checksum);
    }
}