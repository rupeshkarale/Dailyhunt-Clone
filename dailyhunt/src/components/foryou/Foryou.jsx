import React, { useEffect, useState } from "react";
import News from "../news/news";
import { Box } from "@chakra-ui/react";
import { apikey } from "../apikey";
import Loading from "../loading/Loading";

const Foryou = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://newsdata.io/api/1/news?apikey=${apikey}&country=in`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Box
      width={["100%", "540px"]}
      height="100vh"
      ml={["0%", "35%"]}
      mt={["24", "16"]}
      p={"4"}
    >
      {loading ? (
        <Loading></Loading>
      ) : (
        data.map((item) => {
          return <News key={item.title} {...item} />;
        })
      )}
    </Box>
  );
};

export default Foryou;
