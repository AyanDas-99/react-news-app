import axios from "axios";
import { useQuery } from "react-query";

export const useGetCountryNews = (country) => {
    const URL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=8a1bfd2f0ece4203809f4677f8ae4b9e`;

    const { data, isLoading, isError } = useQuery([country], async () => {
        return axios.get(URL).then((res) => res.data);
    });
    return [data, !isLoading && !isError];
};

// returns [data, isLoaded]