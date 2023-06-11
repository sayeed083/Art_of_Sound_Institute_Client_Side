import usePaymentHIstory from "../../../../hooks/usePaymentHIstory";

const PaymentHistory = () => {
    const [paymentHistory] = usePaymentHIstory()
    return (
        <div>
            <h2 className="text-center text-5xl mb-4 underline">Payment History </h2>

            <div className="overflow-x-auto w-[720px]">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                SI No
                            </th>
                            <th>Date</th>
                            <th>Transection id</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentHistory.map((paymentH, index) =>
                            <tr
                                key={paymentH._id}
                            >
                                <td>
                                    {index + 1}
                                </td>

                                <td>
                                    {paymentH.date}

                                </td>
                                <td>
                                    {paymentH.transactionId}

                                </td>
                                <td className="text-end">${paymentH.price}</td>




                            </tr>)}


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;