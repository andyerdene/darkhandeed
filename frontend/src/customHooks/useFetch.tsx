import { async } from "@firebase/util";
import { useState, useEffect } from "react";
import { FetchHook, News } from "../types/fetch";

export default function useFetch(url: string): FetchHook {
  const [data, setData] = useState<{ data: Array<News>; meta: object } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, error, data };
}
