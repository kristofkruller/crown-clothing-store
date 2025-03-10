import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

import { useSelector } from 'react-redux';
import { totalValSelector } from '../../assets/redux/cart/cart-selector';

import Btn from '../tools/Btn'
import { selectCurrentUser } from '../../assets/redux/user/user-selector';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;

export const PaymentButton = styled(Btn)`
  margin-left: auto;
  margin-top: 30px;
`;

const Payment = () => {

  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(totalValSelector);
  const currentUser = useSelector(selectCurrentUser);

  const [isLoading, setLoading] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!stripe || !elements) return;
  
    setLoading(true);

    const response = await fetch('/.netlify/functions/stripe-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then(res => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    const cardDetails = elements.getElement(CardElement);

    if (cardDetails === null) return;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    });

    setLoading(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }

  }
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          buttonType={"inverted"}
          isLoading={isLoading}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default Payment