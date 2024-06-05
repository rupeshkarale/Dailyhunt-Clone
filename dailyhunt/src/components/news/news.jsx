import React, { useEffect, useState } from "react";
import { add, remove } from "../../redux/action";
import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { CheckCircleIcon, StarIcon } from "@chakra-ui/icons";
import { optional } from "./content";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const News = ({
  article_id,
  source_id,
  image_url,
  title,
  description,
  content,
  pubDate,
}) => {
  const [isSaveNewsPage, setSaveNewsPage] = useState();
  const savedNews = useSelector((state) => state.data);
  const [buttonName, setButtonName] = useState("Save");
  const dispach = useDispatch();
  const { news } = useParams();

  useEffect(() => {
    if (news === "save") {
      setSaveNewsPage(true);
      setButtonName("Removed");
    } else {
      setSaveNewsPage(false);
      if (savedNews.filter((news) => news.article_id === article_id).length) {
        setButtonName("Saved");
      }
    }
  }, [news]);

  const handleButtonName = () => {
    const isActionOfSaveNews = !isSaveNewsPage && buttonName === "Save";
    const isActionOfUnsaveNews = !isSaveNewsPage && buttonName === "Saved";
    if (isActionOfSaveNews) {
      dispach(add(payload));
      setButtonName("Saved");
    } else if (isActionOfUnsaveNews) {
      setButtonName("Save");
      dispach(remove(title));
    } else if (isSaveNewsPage) {
      setButtonName("Remove");
    }
  };

  const payload = {
    source_id,
    image_url,
    title,
    description,
    content,
    pubDate,
    article_id,
  };
  const addToSave = () => {
    handleButtonName();
  };
  const removeTo = () => {
    dispach(remove(title));
  };

  return (
    <Box
      padding="5"
      mb={["10", "7"]}
      shadow={("revert-layer", "2xl")}
      rounded="base"
    >
      <Box display="flex" flexDirection="column" gap="3">
        <Box display="flex" justifyContent="space-between">
          <Text display="flex" gap="1" alignItems="center">
            {source_id || "Indian Express"}
            <CheckCircleIcon w="3" color="#58b6f1" />
          </Text>
          <Button
            onClick={news == "save" ? removeTo : addToSave}
            rightIcon={<StarIcon size="sm" />}
            colorScheme={buttonName === "Saved" ? "green" : "blue"}
            variant="solid"
            size="xs"
            borderRadius="full"
            _hover={{
              backgroundColor:
                buttonName === "Saved" ? "green.400" : "blue.400",
              transform: "scale(1.05)",
            }}
            _active={{
              backgroundColor:
                buttonName === "Saved" ? "green.600" : "blue.600",
            }}
          >
            {buttonName}
          </Button>
        </Box>
        <Image
          width="100%"
          height={["200", "290"]}
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          shadow={"md"}
          src={
            image_url ||
            "https://www.financialexpress.com/wp-content/uploads/2022/04/Dailyhunt-logo-startuptalky.jpg"
          }
        ></Image>
        <Text
          fontSize={["lg", "22"]}
          lineHeight={["short", "36px"]}
          fontWeight="500"
        >
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
        <Text
          overflow="hidden"
          height="24"
          fontSize={["md", "md"]}
          lineHeight={["base", "32px"]}
        >
          {description}...
        </Text>
        <Accordion allowMultiple>
          <AccordionItem paddingTop="3" pb="3">
            {/* <h2> */}
            <AccordionButton
              textColor="whatsapp.100"
              width={["37%", "28%"]}
              m="auto"
              bg="rgb(31, 158, 225)"
              borderRadius="full"
              fontSize={["sm", "md"]}
            >
              Read More
              <AccordionIcon />
            </AccordionButton>
            {/* </h2> */}
            <AccordionPanel pb={4}>
              <Text fontSize={["sm", "lg"]}>
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
