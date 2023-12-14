import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {
  MdDarkMode,
  MdExpandLess,
  MdExpandMore,
  MdLightMode,
  MdMenu,
} from "react-icons/md";
import Image from 'next/image'
// import './AppHeader.css'
import exploreRouterMenu from "../helper/data/routerMenu";
import { Link } from '@chakra-ui/next-js'
function AppHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("brand.100", "brand.900")}
        px={4}
        position={"sticky"}
        top={0}
        boxShadow={"md"}
        zIndex={2}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack alignItems={"center"} spacing={0}>
            <IconButton
              size={"lg"}
              variant={"ghost"}
              width={"40px"}
              icon={
                <MdMenu
                  style={{
                    transform: "translateX(65%)",
                    color: "white",
                  }}
                />
              }
              display={{
                md: "none",
              }}
              aria-label={"Open Menu"}
              onClick={isOpen ? onClose : onOpen}
            />
            <Link href='/'>
              <Heading as='h2' fontWeight={"500"} size={"lg"} color='white'>
                App Heading
              </Heading>
            </Link>
          </HStack>
          <HStack alignItems={"center"} spacing={2}>
            <Box display={{ base: "none", md: "block" }}>
              {exploreRouterMenu.map((menu) => (
                <Menu key={menu.sectionId}>
                  <MenuButton
                    as={Button}
                    size={"sm"}
                    ml={2}
                    rightIcon={<MdExpandMore />}>
                    {menu.sectionLabel}
                  </MenuButton>
                  <MenuList maxW={"fit-content"}>
                    {menu.sectionItems.map((menuItem) => {
                      const { label, path, filterParams, Icon } = menuItem;
                      return (
                        <MenuItem
                          key={label}
                          onClick={() =>
                            console.log("clicked")

                            // navigateToDiscover(path, filterParams)
                          }>
                          <Icon
                            size={"1.25em"}
                            style={{ marginRight: "1rem" }}
                          />
                          {label}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              ))}
            </Box>
            <IconButton
              size={"sm"}
              icon={colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
              aria-label={"Change Color Theme"}
              onClick={toggleColorMode}
            />
          </HStack>
        </Flex>
      </Box>
      <Box
        boxSize={"xs"}
        style={{ position: "relative", display:"flex", alignItems:'center', justifyContent:'center' }}
        _after={{
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: -1,
          opacity: .4,
          background: useColorModeValue("brand.100", "brand.900"),
          backgroundImage: '/images/background_large.jpg',
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        width={"100%"}
      >
        <Center>
          <Box width="200px" height="200px">
            <Text fontSize='4xl' fontWeight="500">Hero Title</Text>
            <Text fontSize='2xl'>Hero Description</Text>
          </Box>
        </Center>
      </Box >
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth={"1px"}
            display={"flex"}
            alignItems={"center"}>
            <Link href='/'>
              <Heading size={"sm"} onClick={onClose}>
                App Heading
              </Heading>
            </Link>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody p={0}>
            <Accordion allowMultiple>
              {exploreRouterMenu.map((menu) => (
                <AccordionItem key={menu.sectionId}>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}>
                        <Text m={0} fontWeight={"bold"}>
                          {menu.sectionLabel}
                        </Text>
                        {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
                      </AccordionButton>
                      <AccordionPanel p={0}>
                        <List>
                          {menu.sectionItems.map((menuItem) => {
                            const { label, path, filterParams, Icon } =
                              menuItem;
                            return (
                              <ListItem
                                as={Button}
                                variant={"ghost"}
                                w={"full"}
                                borderRadius={"0"}
                                display={"flex"}
                                justifyContent={"start"}
                                p={3}
                                key={label}
                                onClick={() =>
                                  console.log("clicked")
                                  // navigateToDiscover(path, filterParams)
                                }>
                                <ListIcon
                                  as={() =>
                                    Icon({
                                      size: "1.25em",
                                      style: { marginRight: "0.75rem" },
                                    })
                                  }
                                />
                                <Text mt={-1}>{label}</Text>
                              </ListItem>
                            );
                          })}
                        </List>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </DrawerBody>
          <DrawerFooter
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderTopWidth={"1px"}>
            <Text colorScheme={"red"} size="sm">
              Powered By: themoviedb.org
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AppHeader;