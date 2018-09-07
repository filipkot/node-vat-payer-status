# node-vat-payer-status

checking the status of a VAT payer in the Polish Ministry of Finance

### Installing

```
yarn add https://github.com/filipkot/node-vat-payer-status.git
```

### Using

```
var client = require('node-vat-payer-status');

client.SprawdzNip(<your nip>)
    .then((value) => { console.log(value)});
```

## Author

* **Tomasz Filipkowski** - *Initial work* - [PurpleBooth](https://github.com/filipkot)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
