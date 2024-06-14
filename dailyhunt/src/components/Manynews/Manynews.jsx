import React, { useEffect, useState } from "react";
import News from "../news/news";
import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { apikey } from "../apikey";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";

const Manynews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const newdata = useSelector((state) => state.data);

  let { news } = useParams();

  const fetchNews = (url) => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (news[0] === "@") {
      news = news.substring(1);
      fetchNews(
        `https://newsdata.io/api/1/news?apikey=${apikey}&q=${news}&language=en`,
      );
    } else if (news === "save") {
      setData(newdata);
    } else if (news === "cricket") {
      fetchNews(
        `https://newsdata.io/api/1/news?apikey=${apikey}&q=${news}&language=en`,
      );
    } else if (news === "India") {
      fetchNews(
        `https://newsdata.io/api/1/news?apikey=${apikey}&country=in&language=en`,
      );
    } else {
      fetchNews(
        `https://newsdata.io/api/1/news?apikey=${apikey}&category=${news}&language=en`,
      );
    }
  }, [news, newdata]);

  return (
    <Box
      width={["100%", "540px"]}
      height="100vh"
      ml={["0%", "35%"]}
      mt="20"
      p={"4"}
    >
      {loading ? (
        <Loading />
      ) : data.length === 0 ? (
        <Heading
          border="2px solid gray"
          p="5rem 5rem"
          color={"gray"}
          mt="5%"
          fontFamily="monospace"
          rounded={"3xl"}
        >
          No saved news yet
        </Heading>
      ) : (
        data.map((item) => <News key={item.title} {...item} />)
      )}
    </Box>
  );
};

export { Manynews };
