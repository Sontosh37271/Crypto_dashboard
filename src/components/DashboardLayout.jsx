import React from 'react'
//amar si component banachi ,jate aiti amra Support ,Transaction and Dashboard sob jaygay use korte pari
import Sidenav from '../components/Sidenav'
import TopNav from '../components/TopNav'
import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import SideDrawer from './SideDrawer'
const DashboardLayout = ({title,children}) => {

  const {isOpen,onClose,onOpen}=useDisclosure(); //isOpen onOpen ar onClose ar man toggle hobe


  return (
    <Flex>
         <Box display={{base:"none",lg:"flex"}}>
            <Sidenav />
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose}/>
        <Box flexGrow={1} d="flex" flexDirection="column">
           <TopNav title={title} onOpen={onOpen} /> {/*isOpen ar man change hower sathe sathe SideDrawer a jahatu isOpen ar man change hobe tai sati tokhon dakha jabe */}
           <Container mt="6" overflowX="hidden" overflowY="auto" h="calc(100vh-64px)" maxW="70rem" >{children}</Container> {/*Dashboard theke pathano children amra use kortachi */}
        </Box>
    </Flex>
  )
}

export default DashboardLayout
