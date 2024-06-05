import React, { useEffect, useState } from "react";
import News from "../news/news";
import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import { apikey } from "../apikey";

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
        <>
          {[...Array(3)].map((_, index) => (
            <Box
              key={index}
              mb="6"
              p="4"
              boxShadow="md"
              borderRadius="md"
              bg="white"
            >
              <Skeleton height="20px" mb="4" />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
              <Skeleton height="200px" mt="4" />
            </Box>
          ))}
        </>
      ) : (
        data.map((item) => {
          return <News key={item.title} {...item} />;
        })
      )}
    </Box>
  );
};

export default Foryou;
