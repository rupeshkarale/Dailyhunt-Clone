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
import {optional} from './content'

const News = ({
  source_id,
  image_url,
  title,
  description,
  content,
  pubDate,
}) => {
  return (
    <Box padding="5" mb="7">
      <Box display="flex" flexDirection="column" gap="3">
        <Text display="flex" gap="1" alignItems="center">
          {source_id || "Indian Express"}
          <CheckCircleIcon w="3" color="#58b6f1" />
        </Text>
              <Image
                  width='100%'
                  height='290'
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          src={
            image_url ||
            "https://www.financialexpress.com/wp-content/uploads/2022/04/Dailyhunt-logo-startuptalky.jpg"
          }
        ></Image>
        <Text fontSize="22" lineHeight="36px" fontWeight="400">
          {title}
        </Text>

        <Flex alignItems="center" justifyContent="space-between">
          <Text>{pubDate}</Text>
          <Flex alignItems="center" justifyContent="space-between">
            <Image src="https://m.dailyhunt.in/assets/img/desktop/share_whtsapp.svg?mode=pwa&ver=2.0.39"></Image>
            <Image src="https://m.dailyhunt.in/assets/img/desktop/share_fb.svg?mode=pwa&ver=2.0.39"></Image>
            <Image src="https://m.dailyhunt.in/assets/img/desktop/share_tweet.svg?mode=pwa&ver=2.0.39"></Image>
          </Flex>
        </Flex>
        <Text lineHeight="32px">{description}...</Text>
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
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>
                {content}
                {optional}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <hr />
    </Box>
  );
};

export default News;
