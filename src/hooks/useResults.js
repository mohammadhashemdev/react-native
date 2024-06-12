import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          location: "san jose",
          term: searchTerm,
          limit: 50,
        },
      });

      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong...");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [results, errorMessage, searchApi];
};
