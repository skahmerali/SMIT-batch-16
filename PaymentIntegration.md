for Payment integration
https://docs.stripe.com/sdks/stripejs-react

Step 1:
npm install --save @stripe/react-stripe-js @stripe/stripe-js

Step 2: 

import {CheckoutElementsProvider} from '@stripe/react-stripe-js/checkout';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_46zswMCbz39W2KAqKj43vDRu');

export default function App() {
  const promise = useMemo(() => {
    return fetch('/create-checkout-session', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  return (

    <CheckoutElementsProvider stripe={stripePromise} options={{clientSecret: promise}}>
      <CheckoutForm />
    </CheckoutElementsProvider>
  );
}


Step 3:
import {PaymentElement} from '@stripe/react-stripe-js/checkout';

const CheckoutForm = () => {
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;

