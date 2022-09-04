import React,{useRef} from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Image,
  Button,
  Box,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  TriangleDownIcon,
  SearchIcon,StarIcon
} from "@chakra-ui/icons";
import "./Navbar.css";
import { useNavigate,Link } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  const value = useRef();
  function getInput() {
 Navigate(`/@${value.current.value}`);
    
  }
  return (
    <div className="fix">
      <div className="navbar">
        <div className="left">
          <img
            src="https://m.dailyhunt.in/assets/img/desktop/logo.svg?mode=pwa&ver=2.0.39"
            alt=""
          />
          <Menu>
            <MenuButton
              bg="rgb(243, 243, 243)rgb(243, 243, 243)"
              fontSize={16}
              as={Button}
              rightIcon={<TriangleDownIcon p={0} ml={-1} w={3} h="3" />}
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
        </div>
        <Stack w="30%" ml="-15" spacing={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.400" />}
            />
            <Input
              borderColor="gray.400"
              type="search"
              placeholder="Search News"
              ref={value}
            />
            <Button
              variant="outline"
              onClick={getInput}
              ml="2"
              borderColor="gray.400"
              size="md"
              color="gray.400"
            >
              Search
            </Button>
          </InputGroup>
        </Stack>
        <Link to="/save">
          <Button
            rightIcon={<StarIcon size="sm" />}
            variant="solid"
            size="md"
            borderRadius="md"
            colorScheme="blue"
          >
            Saved News
          </Button>
        </Link>
        <div className="right">
          <img
            src="https://m.dailyhunt.in/assets/img/desktop/header_notify_icn.svg?mode=pwa&ver=2.0.39"
            alt=""
          />

          <img
            src="https://m.dailyhunt.in/assets/img/desktop/header_lang_icn.svg?mode=pwa&ver=2.0.39"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
