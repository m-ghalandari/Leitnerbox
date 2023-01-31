import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
    const [flashcards, setFlashcards] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


  useEffect((url) => {
   
    axios
      .get(url)
      .then((response) => {     
        setFlashcards(response.data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, [url]);
  return { flashcards, isPending, error };
};
export default useFetch;

