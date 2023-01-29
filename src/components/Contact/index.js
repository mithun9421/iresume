import React, { useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    RadioGroup,
    HStack,
    Radio,
    Textarea,
    Text,
    Button,
    useColorModeValue,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react';
import { supabase } from '../../supaClient'

const initialContactData = {
    email: '',
    origin: '',
    message: '',
}

export default function Contact() {
    const [contactData, setContactData] = useState({
        data: initialContactData,
        status: {
            type: '',
            message: ''
        },
        loading: false
    })

    const handleInputChange = (val, field) => {
        setContactData({
            ...contactData,
            data: {
                ...contactData?.data,
                [field]: val
            }
        })
    }

    const handleFormSubmit = () => {
        console.log('contact data', contactData)
    }

    const addContactInfo = async () => {
        setContactData({
            ...contactData,
            loading: true
        })
        if (contactData?.data?.email != '' && contactData?.data?.origin != '' && contactData.data?.message != '') {
            const { data: result, error } = await supabase
                .from('iresume')
                .insert({ ...contactData?.data })
                .single()

            setTimeout(() => {
                setContactData({
                    ...contactData,
                    loading: false,
                    status: {
                        type: 'success',
                        message: 'Thank you for your valuable time, I will get back to you!'
                    }
                })
            }, 3000)


            if (error) {
                console.log(error.message)
                setTimeout(() => {
                    setContactData({
                        ...contactData,
                        loading: false,
                        status: {
                            type: 'error',
                            message: error.message
                        }
                    })
                }, 5000)

            }
        } else {
            setTimeout(() => {
                setContactData({
                    ...contactData,
                    loading: false,
                    status: {
                        type: 'error',
                        message: 'Please enter all the fields'
                    }
                })
            }, 3000)
        }
        setContactData({
            ...contactData,
            loading: false,
            status: {
                type: '',
                message: ''
            }
        })
    }

    return (
        <Box display='flex' justifyContent="center" alignItems='center' w={'100%'} h={'100vh'}>
            <Box p={20} className='glassmorph-card' bg={useColorModeValue('white', 'transparent')}>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' value={contactData?.data?.email} onChange={(e) => {
                        handleInputChange(e?.target?.value, 'email')
                    }} />
                    <FormLabel as='legend' mt={8}>Who are you?</FormLabel>
                    <RadioGroup defaultValue='Origin' value={contactData?.data?.origin} onChange={(e) => {
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
                        value={contactData?.data?.message}
                        onChange={(e) => { handleInputChange(e.target?.value, 'message') }}
                        placeholder='Come on type something!'
                        size='sm'
                    />
                    <Button mt={8} type='submit' onClick={addContactInfo} isLoading={contactData?.loading}
                        loadingText='Submitting'>Contact me</Button>
                </FormControl>
                {
                    contactData?.status?.type &&
                    <Box mt={5}>
                        <Alert status={contactData?.status?.type}>
                            <AlertIcon />
                            <AlertTitle>{contactData?.status?.message}</AlertTitle>
                            {/* <AlertDescription>Your Chakra experience may be degraded.</AlertDescription> */}
                        </Alert>
                    </Box>
                }

            </Box>

        </Box>
    )
}
