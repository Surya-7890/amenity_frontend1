import axios from "axios";
import { useEffect, useState } from "react"

export const useLogin = (data1) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async () => {
    setLoading(true);
    const res = await axios.post('https://long-cyan-puffer-tux.cyclic.app/admin/login', data1);
    const data = await res.data;
    if (data.error) {
      setLoading(false);
      setError(data.error);
      return;
    }
    setData(data.data);
  }

  useEffect(() => {
    if (data !== '') {
      console.log(data)
      login()
    }
  }, []);

  return [data, loading, error];
}