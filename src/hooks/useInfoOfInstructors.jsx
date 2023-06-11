import { useQuery } from "@tanstack/react-query";

const useInfoOfInstructors = () => {




    const { data: instructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch('https://a-12-summer-camp-school-server.vercel.app/instructors');
            return res.json();
        }
    })

    return [instructors, loading, refetch]
};

export default useInfoOfInstructors;