import React, { useEffect, useState } from "react";
import News from "../news/news"
import { Box } from "@chakra-ui/react";
const Foryou = () => {
  const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(
//       "https://newsdata.io/api/1/news?apikey=pub_108413c299b29f4ce175d91e4fd2313976088&country=in"
//     )
//       .then((res) => res.json())
//       .then((res) => setData(res.results))
//       .catch((err) => console.log(err));
//   }, []);
    
    return (
        <Box width='540px'  height='100vh' ml='35%' mt='5%'  >
            {
                data.map((ele) => { 
                    <News { ...ele } />
                })
            }
            <News/>
      </Box>
    );
};

export default Foryou;
