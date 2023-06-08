import { useQuery } from "@tanstack/react-query";

const useInfoOfInstructors = () => {




    const { data: instructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/instructors');
            return res.json();
        }
    })

    return [instructors, loading, refetch]
};

export default useInfoOfInstructors;