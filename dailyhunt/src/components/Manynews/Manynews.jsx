import React, { useEffect, useState } from "react";
import News from "../news/news";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { apikey } from "../apikey";

const Manynews = () => {
  const [data, setData] = useState([]);

    const [category, setcategory] = useState();
    const { news } = useParams();
    
    

    useEffect(() => {
        if (news == "cricket") {
          fetch(
            `https://newsdata.io/api/1/news?apikey=${apikey}&q=${news}&language=en`
          )
            .then((res) => res.json())
            .then((res) => setData(res.results))
            .catch((err) => console.log(err));
        }else if(news == "India") {
          fetch(
            `https://newsdata.io/api/1/news?apikey=${apikey}&country=in&language=en`
          )
            .then((res) => res.json())
            .then((res) => setData(res.results))
            .catch((err) => console.log(err));
        } else {
          fetch(
            `https://newsdata.io/api/1/news?apikey=${apikey}&category=${news}&language=en`
          )
            .then((res) => res.json())
            .then((res) => setData(res.results))
            .catch((err) => console.log(err));
        }
  }, [news]);
  console.log(data);
  return (
    <Box width="540px" height="100vh" ml="35%" mt="5%">
      {data.map((item) => {
        return <News key={item.title} {...item} />;
      })}
    
    </Box>
  );
};

export { Manynews };
