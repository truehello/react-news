// useFetch.js
import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [data, setData] = useState({ hits: [] });;
  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }
  useEffect(() => {
    getData();
  }, []);
  return data;
}