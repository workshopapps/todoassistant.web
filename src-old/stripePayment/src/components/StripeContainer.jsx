import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Form from './Form';

const PUBLIC_KEY = "pk_test_51M5kvpKDAeJ9mJXeofNh1iUEp5KaL2Ygs058K71xGJUiwHW3PLXPguMATksv9taXIOxLPRUPHThVCzIAqaPbe5U200t6lrDuBD";

const stripePromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
	return (
		<Elements stripe={stripePromise}>
			<Form />
		</Elements>
	)
}

export default StripeContainer;