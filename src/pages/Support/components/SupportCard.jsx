import React from 'react'
import {Flex,Stack,Icon,Text,Card,HStack,Input, Textarea,Box,Button} from '@chakra-ui/react'
import { IoMdMail } from 'react-icons/io'
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'

const SupportCard = ({leftComponent,icon,title,text}) => {
  return (
   <Flex gap={6} flexDir={{
    base:"column",
    xl:"row"
   }}>
     <Stack maxW="24rem">
        <Icon as={icon} boxSize={6} color="p.purple"></Icon>
        <Text fontWeight="medium" as="h1" textStyle="h1">{title}</Text>
        <Text fontSize="sm" color="black.60">{text}</Text>
     </Stack>
     <Box maxW="550px" w="full">
      {leftComponent}
     </Box>    
   </Flex>
  )
}

export default SupportCard
