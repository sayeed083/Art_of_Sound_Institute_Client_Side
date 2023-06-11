import { useQuery } from "@tanstack/react-query";


const usePaymentHIstory = () => {


    const { data: paymentHistory = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['paymentsh'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/paymentsh');
            return res.json();
        }
    })



    return [paymentHistory, loading, refetch]
};

export default usePaymentHIstory;