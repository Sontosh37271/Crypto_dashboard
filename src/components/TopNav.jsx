import { Box, Button, Container, Flex, HStack, Heading, Icon } from '@chakra-ui/react'
import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
  import { FaCircleUser } from "react-icons/fa6";
  import { MdOutlineMenu } from "react-icons/md";

const TopNav = ({title,onOpen}) => {
  return (
    <Box px="4" bg="white">
    <HStack  h="16" maxW="70rem" px="2" mx="auto" justify="space-between">    
        <Icon fontSize="28px" as={MdOutlineMenu} onClick={onOpen}
        display={{base:"block",
          lg:"none"
        }}/>     
        <Heading fontWeight="medium" fontSize="28px" >{title}</Heading>
        <Menu>
            <MenuButton >
                <Icon fontSize="28px" as={FaCircleUser}/>
            </MenuButton>
            <MenuList>
                <MenuItem>LogOut</MenuItem>
                <MenuItem>Support</MenuItem>
            </MenuList>
        </Menu>
     
    </HStack>
    </Box>
  )
}

export default TopNav
