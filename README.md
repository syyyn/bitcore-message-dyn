# Bitcoin Message Verification and Signing for Bitcore


[![NPM Package](https://img.shields.io/npm/v/bitcore-message.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-message)

bitcore-message-dyn adds support for verifying and signing dyn messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main bitcore repo](https://github.com/bitpay/bitcore) for more information.

## Getting Started

```sh
git clone https://github.com/wkibbler/bitcore-message-dyn.git
cd bitcore-message-dyn
npm install --save
```

To sign a message:

```javascript
var bitcore = require('bitcore-lib-dyn');
var Message = require('bitcore-message-dyn');

var privateKey = bitcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```


## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
