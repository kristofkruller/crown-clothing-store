import {loadStripe} from '@stripe/stripe-js';

export const stripeReg = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);