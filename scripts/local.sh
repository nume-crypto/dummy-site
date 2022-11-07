#!/bin/sh
echo "change to local";
cp ./node_modules/nume-pay/index.js ./node_modules/nume-pay/index.js.backup
echo "const API_URL = 'http://localhost:3000/api/';
const CHECKOUT_URL = 'http://localhost:5002/';" >./node_modules/nume-pay/index.js
cat ./node_modules/nume-pay/index.js.backup | tail -n+3 >>./node_modules/nume-pay/index.js
rm ./node_modules/nume-pay/index.js.backup
