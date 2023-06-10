import CheckoutForm from "./CheckoutForm";
// import { loadStripe, Elements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useSelectClass from "../../../../hooks/useSelectClass";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatewat_PK);
const Payment = () => {

    const location = useLocation()
    const [selectedClass] = useSelectClass()
    const singleSelectClass = selectedClass.find(item => item._id === location.state.id)
    const currentPrice = location.state.price
      const price = parseFloat(currentPrice.toFixed(2))
      console.log('price',price, singleSelectClass);





    // const {price} = selectedClass;
    console.log("Seleectessssssssssssssss",selectedClass);
    return (
        <div>
            <h2 className="text-center text-5xl mb-5">Payment Section</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm singleSelectClass={singleSelectClass} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;