import React from "react";
import { Box, Image, Text, Flex, Avatar, Button, GridItem } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, CheckCircleIcon } from "@chakra-ui/icons";


const News = (props) => {
    console.log(props);
  return (
    <Box padding="5">
      <Box display="flex" flexDirection="column" gap="3">
        <Text display="flex" gap="1" alignItems="center">
          {/* {source_id} */}
          <CheckCircleIcon w="3" color="#58b6f1" />
        </Text>
        <Image
          borderRadius="md"
          src="https://assets-news-bcdn.dailyhunt.in/cmd/resize/770x433_90/fetchdata16/images/d6/88/c7/d688c7f1fd41984c3d276816b0d9f075f43a7b39faaa416af033a5af48c65c03.webp"
        ></Image>
        <Text fontSize="22" lineHeight="36px" fontWeight="400">
          Adani Enterprises to enter NSE's Nifty 50 league on September 30
        </Text>

        <Flex alignItems="center" justifyContent="space-between">
          <Text>16 hr - 365 shares</Text>
          <Flex alignItems="center" justifyContent="space-between">
            <Image src="https://m.dailyhunt.in/assets/img/desktop/share_whtsapp.svg?mode=pwa&ver=2.0.39"></Image>
            <Image src="https://m.dailyhunt.in/assets/img/desktop/share_fb.svg?mode=pwa&ver=2.0.39"></Image>
            <Image src="https://m.dailyhunt.in/assets/img/desktop/share_tweet.svg?mode=pwa&ver=2.0.39"></Image>
          </Flex>
        </Flex>
        <Accordion allowMultiple>
          <AccordionItem paddingTop="3" pb="3">
            <h2>
              <AccordionButton
                textColor="whatsapp.100"
                width="28%"
                m="auto"
                bg="rgb(31, 158, 225)"
                borderRadius="full"
              >
                Read More
                {/* <Box flex="1" textAlign="left">
                  Section 1 title
                </Box> */}
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default News;
