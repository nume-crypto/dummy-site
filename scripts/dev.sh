#!/bin/sh
echo "change to dev";
cp ./node_modules/nume-pay/index.js ./node_modules/nume-pay/index.js.backup
echo "const API_URL = 'https://dev.api.numecrypto.com/api/';
const CHECKOUT_URL = 'https://dev.checkout.numecrypto.com/';" >./node_modules/nume-pay/index.js
cat ./node_modules/nume-pay/index.js.backup | tail -n+3 >>./node_modules/nume-pay/index.js
rm ./node_modules/nume-pay/index.js.backup
