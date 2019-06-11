import { useState, useReducer, useEffect } from "react";
import axios from "axios";

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};

const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  const [toserver, setToServer] = useState({});


  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData
  });

  useEffect(
    () => {
      let didCancel = false;

      const fetchData = async () => {
        dispatch({ type: "FETCH_INIT" });

        try {
          const result = await axios(url);
          console.log("sending...."+ url);
          if (!didCancel) {
            dispatch({ type: "FETCH_SUCCESS", payload: result.data });
          }
        } catch (error) {
          if (!didCancel) {
            dispatch({ type: "FETCH_FAILURE" });
          }
        }
      };

      if (url !== "") {
        fetchData();
      }

      return () => {
        didCancel = true;
      };
    },
    [url, toserver]
  );

  const doFetch = (url, toserver) => {
    setUrl(url);
   
    setToServer(toserver);
  };

  return { ...state, doFetch };
};

export default useDataApi;
