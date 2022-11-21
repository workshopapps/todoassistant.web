import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import styles from '../style.module.css';

// const cardOptions = {
// 	iconStyle: 'solid',
// 	style: {
// 		base: {
// 			iconColor: '#C4F0FF',
// 			color: '#FFF',
// 			fontWeight: 500,
// 			fontFamily: 'Open Sans',
// 			":-webkit-autofill": { color: '#FCE883' },
// 			"::placeholder": { color: '#d70900' },
// 		},
// 		invalid: {
// 			iconColor: '#FFC7EE',
// 			color: '#FFC7EE'
// 		}
// 	}
// }

const Form = () => {
	const [success, setSuccess] = React.useState(false);
	const stripe = useStripe();
	const elements = useElements();

	const submit = async (e) => {
		e.preventDefault();
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement)
		});
		if(!error) {
			try {
				const { id } = paymentMethod;
				const res = await axios.post("http://localhost:4000/payment", {
					amount: 1000,
					id
				});

				if(res.data.success) {
					console.log("Payment successful");
					setSuccess(true);
				}
			} catch (error) {
				console.log({error});
			}
		} else {
			console.log({error});
		}
	}

	return (
		<React.Fragment>
			{
				!success ?
				<form onSubmit={submit}>
					<fieldset className={styles.checkout__formGroup}>
						<div className={styles.checkout__formRow}>
							<CardElement  />
						</div>
					</fieldset>
					<button>Pay</button>
				</form>
				:
				<div>
					<h2>Payment successful!</h2>
				</div>
			}
		</React.Fragment>
	)
}

export default Form;