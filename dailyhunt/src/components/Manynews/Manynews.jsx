import React, { useEffect, useState } from "react";
import News from "../news/news";
import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { apikey } from "../apikey";
import { useSelector, useDispatch } from "react-redux";

const Manynews = () => {
  const [data, setData] = useState([]);

  const newdata = useSelector((state) => state.data);

  let { news } = useParams();
  useEffect(() => {
    if (news[0] == "@") {
      news = news.substring(1);

      fetch(
        `https://newsdata.io/api/1/news?apikey=${apikey}&q=${news}&language=en`,
      )
        .then((res) => res.json())
        .then((res) => setData(res.results))
        .catch((err) => console.log(err));
    } else if (news == "save") {
      setData(newdata);
    } else if (news == "cricket") {
      fetch(
        `https://newsdata.io/api/1/news?apikey=${apikey}&q=${news}&language=en`,
      )
        .then((res) => res.json())
        .then((res) => setData(res.results))
        .catch((err) => console.log(err));
    } else if (news == "India") {
      fetch(
        `https://newsdata.io/api/1/news?apikey=${apikey}&country=in&language=en`,
      )
        .then((res) => res.json())
        .then((res) => setData(res.results))
        .catch((err) => console.log(err));
    } else {
      fetch(
        `https://newsdata.io/api/1/news?apikey=${apikey}&category=${news}&language=en`,
      )
        .then((res) => res.json())
        .then((res) => setData(res.results))
        .catch((err) => console.log(err));
    }
  }, [news, newdata]);

  return (
    <Box
      width={["100%", "540px"]}
      height="100vh"
      ml={["0%", "35%"]}
      mt="16"
      p={"4"}
    >
      {data.length == 0 ? (
        <Heading color="gray.500" ml="10%" mt="10%">
          Opps! No Result Found
        </Heading>
      ) : (
        data.map((item) => {
          return <News key={item.title} {...item} />;
        })
      )}
    </Box>
  );
};

export { Manynews };
