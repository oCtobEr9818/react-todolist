import { useState, useEffect, useRef } from "react";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

const Home = () => {
  const [data, setData] = useState([]);
  const submitStatus = useRef(false)

  useEffect(() => {
    if (!submitStatus.current) {
      return
    }
  }, [data])

  return (
    <div className="app">
      <Edit add={setData} submitStatus={submitStatus} />
      <List listData={data} deleteData={setData} submitStatus={submitStatus} />
    </div>
  );
};

export default Home;
