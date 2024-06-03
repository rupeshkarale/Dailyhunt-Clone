import React, { useRef } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Button,
  Box,
  Stack,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import { TriangleDownIcon, SearchIcon, StarIcon } from "@chakra-ui/icons";
import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  const value = useRef();
  function getInput() {
    Navigate(`/@${value.current.value}`);
  }
  return (
    <div className="fix">
      <div className="navbar">
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
          ml={["0", "15%"]}
        >
          <Image
            src="https://m.dailyhunt.in/assets/img/desktop/logo.svg?mode=pwa&ver=2.0.39"
            alt=""
            w={["24", "fit-content"]}
          />
          <Menu>
            <MenuButton
              bg="rgb(243, 243, 243)rgb(243, 243, 243)"
              fontSize={16}
              as={Button}
              rightIcon={<TriangleDownIcon p={0} ml={-1} w={3} h="3" />}
              display={["none", "inline-flex"]}
            >
              News
            </MenuButton>
            <MenuList width="14">
              <MenuItem minH="40px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://m.dailyhunt.in/assets/img/desktop/news_viral.svg?mode=pwa&ver=2.0.39"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <span>Viral</span>
              </MenuItem>
              <MenuItem minH="40px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://m.dailyhunt.in/assets/img/desktop/news_video.svg?mode=pwa&ver=2.0.39"
                  alt="viral"
                  mr="12px"
                />
                <span>Video</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Stack w={["50%", "20%"]} ml={["0px", "6"]} spacing={4}>
          <InputGroup display={"flex"} alignItems={"center"}>
            <Input
              borderColor="gray.400"
              type="search"
              placeholder={["Search"]}
              ref={value}
              h={["8", ""]}
            />
            <Button
              variant="outline"
              onClick={getInput}
              ml="2"
              borderColor="gray.400"
              size={["sm", "sm"]}
              color="gray.400"
            >
              <SearchIcon color="gray.400" h={["8", "4"]} />
            </Button>
          </InputGroup>
        </Stack>
        <Link to="/save">
          <Button
            rightIcon={<StarIcon size={["xs", "sm"]} />}
            variant="solid"
            size={["xs", "md"]}
            borderRadius={["base", "md"]}
            colorScheme="blue"
            padding={"4"}
          >
            Saved
          </Button>
        </Link>
        <Box w={["0px", "20"]} display={["none", "flex"]} className="right">
          <img
            src="https://m.dailyhunt.in/assets/img/desktop/header_notify_icn.svg?mode=pwa&ver=2.0.39"
            alt=""
          />

          <img
            src="https://m.dailyhunt.in/assets/img/desktop/header_lang_icn.svg?mode=pwa&ver=2.0.39"
            alt=""
          />
        </Box>
      </div>
    </div>
  );
};

export default Navbar;
