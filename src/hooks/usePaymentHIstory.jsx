import { useQuery } from "@tanstack/react-query";


const usePaymentHIstory = () => {


    const { data: paymentHistory = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['paymentsh'],
        queryFn: async () => {
            const res = await fetch('https://a-12-summer-camp-school-server.vercel.app/paymentsh');
            return res.json();
        }
    })



    return [paymentHistory, loading, refetch]
};

export default usePaymentHIstory;