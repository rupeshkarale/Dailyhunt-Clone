import React, { useEffect, useState } from "react";
import News from "../news/news";
import { Box } from "@chakra-ui/react";
import { apikey } from "../apikey";
const Foryou = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://newsdata.io/api/1/news?apikey=${apikey}&country=in`)
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box
      width={["100%", "540px"]}
      height="100vh"
      ml={["0%", "35%"]}
      mt={["20", "16"]}
      p={"4"}
    >
      {data.map((item) => {
        return <News key={item.title} {...item} />;
      })}
      <News></News>
    </Box>
  );
};

export default Foryou;
