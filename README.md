# PayRex Node.js

PayRex Node library provides Node applications an easy access to the PayRex API. Explore various classes that represents PayRex API resources on object instantiation.

## Requirements

Node 12 or higher.

## Gems

If you want to use the package, run the following command:

```sh
npm install payrex-node
# or
yarn add payrex-node
```

## Getting Started

Simple usage looks like:

```js
const payrex = require('payrex-node')('sk_test_...');

payrex.paymentIntents.retrieve('pi_...')
  .then(paymentIntent => console.log(paymentIntent.id))

payrex.paymentIntents.create({
  amount: 10000,
  currency: 'PHP',
  description: 'Dino Treat',
  payment_methods: ['gcash', 'card']
})
  .then(paymentIntent => console.log(paymentIntent.id))
```

Or using async/await:

```js
const payrex = require('payrex-node')('sk_test_...');

const paymentIntent = await payrex.paymentIntents.retrieve('pi_...');

console.log(paymentIntent.id);
```

## Handle errors

```js
const payrex = require('payrex-node')('sk_test_...');

payrex.paymentIntents.create({
  amount: 10000
})
  .then(paymentIntent => console.log(paymentIntent.id))
  .catch(error => {
    // Handle errors
    console.error(error.name);
    console.error(error.errors);
  });
```

## Verify webhook signature

```js
try {
  payload = '{"id":"evt_...","resource":"event","type":"payment_intent.succeeded","data":{...';
  signatureHeader = 't=1715236958,te=,li=...';
  webhookSecretKey = 'whsk_...';

  payrex.webhooks.parseEvent(payload, signatureHeader, webhookSecretKey);
} catch (error) {
  // Handle invalid signature
}
```
