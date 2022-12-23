import axios from "axios";
import { useQuery } from "react-query";

export const useGetNews = (topic, isNews) => {
  let URL = `https://newsapi.org/v2/everything?q=${topic}&from=2022-12-09&to=2022-12-09&sortBy=popularity&apiKey=8a1bfd2f0ece4203809f4677f8ae4b9e`;
  if (!isNews)
    URL =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=8a1bfd2f0ece4203809f4677f8ae4b9e";

  const { data, isLoading, isError } = useQuery([topic], async () => {
    return axios.get(URL).then((res) => res.data);
  });
  return [data, !isLoading && !isError];
};
