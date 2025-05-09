import React from 'react'
import {Flex,Stack,Icon,Text,Card,HStack,Input, Textarea,Box,Button} from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1} >
      <Stack spacing={6}>
         <Text fontWeight="medium" fontSize="sm">
          You will receive response within 24 hours of time of submit
         </Text>
         <HStack flexDir={{
            base:"column",
            xl:"row"
          }}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder='Enter Your Name...' />
            </FormControl>
            <FormControl>
              <FormLabel>Surename</FormLabel>
              <Input placeholder='Enter Your Surename...' />             
            </FormControl>
         </HStack>
         <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder='Enter Your Email...' />             
         </FormControl>
         <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder='Enter Your Message...' />             
         </FormControl>
         <Checkbox defaultChecked><Text  fontSize="xs">I agree with <Box as="span" color="p.purple">term & conditions</Box></Text></Checkbox>
         <Stack>
             <Button fontSize="sm">Send a Message</Button>
             <Button fontSize="sm" colorScheme='gray' >Book a Meeting</Button>
         </Stack>
       </Stack>
    </Card>
  )
}

export default ContactCard
