import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useMyClasses = () => {
    const { user, loading } = useContext(AuthContext)
    const token = localStorage.getItem('access-token')

    // TanStack Query Use

    const { refetch, data: myInstructorClass = [] } = useQuery({
        // queryKey: ['cart', user?.email],
        // enabled: !loading && user?.email,
        queryKey: ['myInstructorClass', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/myInstructorClass?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return response.json()
        },
    })

    return [myInstructorClass, refetch]
};

export default useMyClasses;