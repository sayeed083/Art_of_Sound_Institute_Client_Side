import useSelectClass from "../../../../hooks/useSelectClass";


const MyEnrolledClass = () => {
    const [selectedClass] = useSelectClass()
    const paymentSuccessClass = selectedClass.filter(psClass => psClass.payment);
    return (
        <div>
            <h2 className="text-center text-5xl mb-5 underline">My Enrolled Classes</h2>
            <div className="overflow-x-auto w-[720px]">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                SI No
                            </th>
                            <th>Class</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentSuccessClass.map((psClass, index) =>
                            <tr
                                key={psClass._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={psClass.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {psClass.name}

                                </td>
                                <td>
                                    {psClass.instructor}

                                </td>
                                <td className="text-end">${psClass.price}</td>
                                



                            </tr>)}


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClass;