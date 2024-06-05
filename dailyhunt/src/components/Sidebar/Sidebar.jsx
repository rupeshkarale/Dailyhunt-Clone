import React, { useState } from "react";
import "./Sidebar.css";
import {
  Image,
  Box,
  Avatar,
  Text,
  Divider,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const Sidebar = () => {
  const [showSideBar, setshowSideBar] = useState(false);
  const isMobileView = useBreakpointValue({ base: true, md: false });
  const handleSideBarView = () => {
    setshowSideBar((show) => !show);
  };
  return (
    <Box
      position={["absolute", "fixed"]}
      left={["0.5", "15%"]}
      top={["16", "8%"]}
    >
      {isMobileView && (
        <Button
          colorScheme="blackAlpha"
          variant="outline"
          onClick={handleSideBarView}
          leftIcon={<HamburgerIcon />}
          size="xs"
          p="2"
          fontSize="xs"
          borderRadius="base"
          w="29"
          fontFamily="body"
          fontWeight="normal"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          iconSpacing="2"
        >
          More News
        </Button>
      )}
      <Box
        display={showSideBar || !isMobileView ? "block" : "none"}
        bg={["ButtonFace", "none"]}
        w={["100%", "260px"]}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDirection="column"
          mt={["0px", "5"]}
          gap="3"
          p={["4", "0px"]}
        >
          <Link to="/" onClick={handleSideBarView}>
            <Box
              display="flex"
              width="100%"
              justifyContent="start"
              alignItems="center"
              gap="3"
            >
              <Avatar size="sm" name="For"></Avatar>
              <Text fontSize="17">For You</Text>
            </Box>
          </Link>
          <Link to="/cricket" onClick={handleSideBarView}>
            <Box
              display="flex"
              width="100%"
              justifyContent="start"
              alignItems="center"
              gap="3"
            >
              <Avatar size="sm" name="C"></Avatar>
              <Text fontSize="17">Cricket</Text>
            </Box>
          </Link>
          <Link to="/science" onClick={handleSideBarView}>
            <Box
              display="flex"
              width="100%"
              justifyContent="start"
              alignItems="center"
              gap="3"
            >
              <Avatar
                size="sm"
                src="https://assets-news-bcdn.dailyhunt.in/cmd/RESIZE/60x60_100/fetchdata16/images/9e/0c/13/9e0c13e7f4bbbaa82e40ae00a9f73bc652191299f1c6a2ec5ab61ddfbf295ecd.webp"
              ></Avatar>
              <Text fontSize="17">Science</Text>
            </Box>
          </Link>
          <Link to="/technology" onClick={handleSideBarView}>
            <Box
              display="flex"
              width="100%"
              justifyContent="start"
              alignItems="center"
              gap="3"
            >
              <Avatar size="sm" name="D"></Avatar>
              <Text fontSize="17">Daily Share</Text>
            </Box>
          </Link>
          <Link to="/India" onClick={handleSideBarView}>
            <Box
              display="flex"
              width="100%"
              justifyContent="start"
              alignItems="center"
              gap="3"
            >
              <Avatar
                size="sm"
                src="https://assets-news-bcdn.dailyhunt.in/cmd/RESIZE/60x60_100/fetchdata16/images/36/d5/47/36d547e298b6789ebf72cd4fb1c0f82fb5a19e91de8134d8da7d7ab617c817d6.webp"
              ></Avatar>
              <Text fontSize="17">India</Text>
            </Box>
          </Link>
          <Link to="/Entertainment" onClick={handleSideBarView}>
            <Box
              display="flex"
              width="100%"
              justifyContent="start"
              alignItems="center"
              gap="3"
            >
              <Avatar
                size="sm"
                src="https://assets-news-bcdn.dailyhunt.in/cmd/RESIZE/60x60_100/fetchdata16/images/72/b5/a6/72b5a6a075519e9523085d1fcde3f8468efbbe8f15c44713f21d8c07e8dc41f2.webp"
              ></Avatar>
              <Text fontSize="17">Entertainment</Text>
            </Box>
          </Link>
          <Link to="/Health" onClick={handleSideBarView}>
            <Box
              display="flex"
              width="100%"
              justifyContent="start"
              alignItems="center"
              gap="3"
            >
              <Avatar
                size="sm"
                src="https://assets-news-bcdn.dailyhunt.in/cmd/RESIZE/60x60_100/fetchdata16/images/5c/90/21/5c90218f13dfbb6a92b4b09449ed57e41061b87de961fb4d364b3a295fa46ee0.webp"
              ></Avatar>
              <Text fontSize="17">Health Tips</Text>
            </Box>
          </Link>
          <Link to="/Business" onClick={handleSideBarView}>
            <Box
              display="flex"
              width="100%"
              justifyContent="start"
              alignItems="center"
              gap="3"
            >
              <Avatar
                size="sm"
                src="https://assets-news-bcdn.dailyhunt.in/cmd/RESIZE/60x60_100/fetchdata16/images/64/f1/90/64f190be52ccedc0166348de67b4f898b6f2c3f62ce7d7509414d675a52cc9e0.webp"
              ></Avatar>
              <Text fontSize="17">Business</Text>
            </Box>
          </Link>
        </Box>
        <Box
          display={["none", "flex"]}
          gap="3"
          mt="10"
          mb="77"
          justifyContent="start"
          alignItems="center"
        >
          <Avatar
            size="sm"
            src="https://m.dailyhunt.in/assets/img/desktop/icn_more_hashtag.svg?mode=pwa&ver=2.0.39"
          ></Avatar>
          <Text as="b" fontSize="17">
            More Hashtag
            <Text display="inline-block" color="red">
              (17)
            </Text>
          </Text>
        </Box>
        <Box>
          <Divider />
          <Box display={["none", "flex"]} gap="1" pt="20" pb="0" width="100%">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.eterno&hl=en_IN"
              width="47%"
            >
              <Image src="https://m.dailyhunt.in/assets/img/desktop/str_android.svg?mode=pwa&ver=2.0.39"></Image>
            </a>
            <a
              target="_blank"
              href="https://apps.apple.com/in/app/dailyhunt-formerly-newshunt/id338525188"
              width="47%"
            >
              <Image src="https://m.dailyhunt.in/assets/img/desktop/str_apple.svg?mode=pwa&ver=2.0.39"></Image>
            </a>
          </Box>
          <Divider />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
