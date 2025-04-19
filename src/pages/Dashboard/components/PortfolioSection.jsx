import { HStack, Stack,Icon ,Text,  Tag , Button} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdArrowDownward } from "react-icons/md";
import { MdOutlineUpgrade } from "react-icons/md";
const PortfolioSection = () => {
  return (
    <HStack justifyContent="space-between" bg="white" borderRadius="xl" p="6"
    alignItems={{
      base:"flex-start",
      xl:"center"
    }}
    flexDir={{
      base:"column",
      xl:"row"
    }} >

    <HStack spacing={{base:0,xl:16}} alignItems={{
      base:"flex-start",
      xl:"center"
    }}
    flexDir={{
      base:"column",
      xl:"row"
    }}>
      <Stack >
        <HStack color="black.80">
           <Text fontSize="sm" >Total Portfolio Value</Text> 
           <Icon as={AiOutlineInfoCircle}></Icon>
        </HStack>
        <Text textStyle="h2" fontWeight="medium">IN: 112,312,24 </Text> 
      </Stack>

      <Stack  >
        <HStack color="black.80">
           <Text fontSize="sm" >Wallet Balance</Text> 
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
              <Text textStyle="h2" fontWeight="medium">22.39401000 </Text> < Tag colorScheme='gray'>BTC</ Tag>
            </HStack>  
            <HStack>
              <Text textStyle="h2" fontWeight="medium">1,300.00  </Text> < Tag colorScheme='gray' >INR</ Tag >
            </HStack> 
        </HStack>     
      </Stack>
      </HStack>

      <HStack spacing="3">
        <Button leftIcon={<Icon as={MdArrowDownward} />}>Deposite</Button>
        <Button leftIcon={<Icon as={MdOutlineUpgrade} />}>Withdraw</Button>
      </HStack>
    </HStack>
  )
}

export default PortfolioSection
