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

const actions = {
  FETCH_INIT: "FETCH_INIT",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE"
};

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case actions.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case actions.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        data: action.payload
      };
    case actions.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: formatError(action.payload)
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
        dispatch({ type: actions.FETCH_INIT });
        try {
          const result = await axios(url);
          dispatch({ type: actions.FETCH_SUCCESS, payload: result.data });
        } catch (error) {
          dispatch({ type: actions.FETCH_FAILURE, payload: error });
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

const formatError = error => {
  let message = "";
  const status = error.response ? error.response.status : "";
  if (status === 404) {
    message = "404 Not found";
  } else if (status === 403) {
    message = "Forbidden from performing this action";
  } else {
    message = error.message;
  }
  return message;
};
