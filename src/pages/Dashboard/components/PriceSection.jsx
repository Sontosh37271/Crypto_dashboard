import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { HStack,Text,Icon,Stack, Button, Flex,Image} from '@chakra-ui/react'
import { MdArrowOutward } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const PriceSection = () => {
  const timestamps =["7:55 PM","8:55 PM","9:55 PM","10:55 PM","11:55 PM"];

  return (
<CustomCard>
 <Flex justify="space-between" align="start">
    <Stack  >
    <HStack color="black.80">
        <Text fontSize="sm" >Current Price</Text> 
    </HStack>
    
        <HStack spacing={2}
        alignItems={{
            base:"flex-start",
            xl:"center"
            }}
            flexDir={{
            base:"column",
            xl:"row"
            }} >
            <HStack>
                <Text textStyle="h2" fontWeight="medium">22.39401000 </Text>
                <HStack fontWeight="medium" color="green.500">
                    <Icon as={MdArrowOutward}></Icon>
                    <Text fontSize="sm" fontWeight="medium">22% </Text>  
                </HStack>
            </HStack>    
        </HStack> 
    </Stack>
    <HStack spacing="3">
                <Button leftIcon={<Icon as={CiCirclePlus}  fontWeight="medium"/>}>Buy</Button>
                <Button leftIcon={<Icon as={CiCircleMinus} fontWeight="medium"/>}>Sell</Button>
    </HStack>
 </Flex> 
<Tabs variant='soft-rounded' >
  <Flex justify="end">
    <TabList bg="black.5" p="3px">
        {["1H","1D","1W","1M"].map((tab)=>(
            <Tab _selected={{  bg: 'white' }} key={tab} fontSize="sm" p="6px" borderRadius="4">{tab}</Tab>
        ))}
    </TabList>
  </Flex>
  
  <TabPanels>
    <TabPanel>
        <Image w="100%" src="public/cryptoGraph.png"></Image> 
        <HStack justifyContent="space-between">
            {timestamps.map((time)=>
                <Text key={time} fontSize="sm" fontWeight="medium" color="black.80">{time}</Text>
            )}
        </HStack> 
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
 </CustomCard>
  )
}

export default PriceSection
