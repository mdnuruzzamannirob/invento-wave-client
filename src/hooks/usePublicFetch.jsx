import { useQuery } from "@tanstack/react-query";
import usePublicAPI from "./usePublicAPI";

const usePublicFetch = (url, ...key) => {
  const axiosPublic = usePublicAPI();
  const {
    data = [],
    refetch,
    isPending,
    isLoading,
  } = useQuery({
    queryKey: [...key],
    queryFn: async () => {
      const res = await axiosPublic.get(url);
      return res.data;
    },
  });

  return { data, refetch, isPending, isLoading };
};

export default usePublicFetch;
