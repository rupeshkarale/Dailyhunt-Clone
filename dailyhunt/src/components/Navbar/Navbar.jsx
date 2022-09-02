import React from "react";
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
} from "@chakra-ui/react";
import { ChevronDownIcon, TriangleDownIcon } from "@chakra-ui/icons";
import "./Navbar.css";

const Navbar = () => {
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
        <div className="right">
          <a href="https://m.dailyhunt.in/assets/img/desktop/header_notify_icn.svg?mode=pwa&ver=2.0.39">
            <img
              src="https://m.dailyhunt.in/assets/img/desktop/header_notify_icn.svg?mode=pwa&ver=2.0.39"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://m.dailyhunt.in/assets/img/desktop/header_lang_icn.svg?mode=pwa&ver=2.0.39"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
