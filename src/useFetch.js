import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const abortController = new AbortController();
    setTimeout(() => {
      setLoading(true);
      fetch(url, { signal: abortController.signal })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Request failed!');
        })
        .then(data => {
            setData(data);
            setLoading(false);
            setError(null);
        })
        .catch(error => {
            if(error.name === 'AbortError') {
                console.log('Request aborted');
            } else {
                setLoading(false);
                setError(error.message);
            }
        })
    }, 10);
  }, [url]);
	
	return { data, loading, error };
}

export default useFetch;