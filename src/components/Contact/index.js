import React, { useState } from 'react'
import { Flex, Box, FormControl, FormLabel, FormHelperText, Input, RadioGroup, HStack, Radio, Textarea, Text, Button, useColorModeValue } from '@chakra-ui/react';

const initialContactData = {
    email: '',
    origin: '',
    message: ''
}

export default function Contact() {
    const [contactData, setContactData] = useState({
        ...initialContactData
    })

    const handleInputChange = (val, field) => {
        console.log('val, field', val, field)
        setContactData({
            ...contactData,
            [field]: val
        })
    }

    const handleFormSubmit = () => {
        console.log('contact data', contactData)
    }

    return (
        <Box display='flex' justifyContent="center" alignItems='center' w={'100%'} h={'100vh'}>
            <Box p={20} className='glassmorph-card' bg={useColorModeValue('white', 'transparent')}>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' value={contactData?.email} onChange={(e) => {
                        handleInputChange(e?.target?.value, 'email')
                    }} />
                    <FormLabel as='legend' mt={8}>Who are you?</FormLabel>
                    <RadioGroup defaultValue='Origin' value={contactData?.origin} onChange={(e) => {
                        handleInputChange(e, 'origin')
                    }}>
                        <HStack spacing='24px'>
                            <Radio value='Recruiter'>Recruiter</Radio>
                            <Radio value='Fan'>Fan</Radio>
                            <Radio value='Just Spamming'>Just Spamming</Radio>
                        </HStack>
                    </RadioGroup>
                    <Text mb='8px' mt={8}>Any Message for me?</Text>
                    <Textarea
                        value={contactData?.message}
                        onChange={(e) => { handleInputChange(e.target?.value, 'message') }}
                        placeholder='Come on type something!'
                        size='sm'
                    />
                    <Button mt={8} type='submit' onClick={handleFormSubmit}>Contact me</Button>
                </FormControl>
            </Box>
        </Box>
    )
}
