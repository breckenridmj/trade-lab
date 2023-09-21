import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useDarkPool = () => {
    const { data, error, isLoading } = useSWR('/api/components/darkpool', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading
    }
}

export default useDarkPool;