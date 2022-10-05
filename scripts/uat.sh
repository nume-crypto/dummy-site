cp ./node_modules/nume-pay/index.js ./node_modules/nume-pay/index.js.backup
echo "change to uat";
echo "const API_URL = 'https://uat.api.numecrypto.com/api/';
const CHECKOUT_URL = 'https://uat.checkout.numecrypto.com/';" >./node_modules/nume-pay/index.js
cat ./node_modules/nume-pay/index.js.backup | tail -n+3 >>./node_modules/nume-pay/index.js
rm ./node_modules/nume-pay/index.js.backup
