import React from 'react';
import styles from './styles.module.css'


const Pay = () => {
	const pay = () => {
		fetch("http://localhost:5000/create-checkout-session", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				items: [ { id: 1, quantity: 1 } ]
			})
		}).then(async res => {
			if(res.ok) return res.json();
			const response = await res.json();
			return await Promise.reject(response);
		}).then(({ url }) => {
			console.log(url);
			window.location = url;
		}).catch(error => {
			console.error(error.error);
		})
	}

	return (
		<div className={styles.checkout__main}>
			<button onClick={pay}>Proceed to payment</button>
		</div>
	)
}

export default Pay