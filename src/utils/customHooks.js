import { useState, useEffect, useReducer } from "react";
import axios from "axios";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: "",
        data: action.payload
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      throw new Error();
  }
};

export const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    error: "",
    data: initialData
  });

  useEffect(() => {
    const fetchData = async () => {
      if (url) {
        dispatch({ type: "FETCH_INIT" });
        try {
          const result = await axios(url);
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        } catch (error) {
          dispatch({ type: "FETCH_FAILURE", payload: error.message });
        }
      }
    };
    fetchData();
  }, [url]);

  const fetchData = url => {
    setUrl(url);
  };

  return { ...state, fetchData };
};
