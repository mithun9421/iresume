import React from 'react';
import { Flex, Box, useColorModeValue, Image, Text } from '@chakra-ui/react';
import PayPalLogo from '../../../images/paypal-logo.png'
import BnyMellon from '../../../images/bny.png';
import { ArrowRightIcon } from '@chakra-ui/icons';
import './styles.css'

const ImageMapping = {
    'paypal': PayPalLogo,
    'bny': BnyMellon
}

export default function Card({
    heading, subheading, img, description, handleArrowClick
}) {
    return (
        <Flex mt={20}>
            <Flex position='relative' className='glassmorph-card' p={10} w={'700px'} borderRadius={'20'} h={'auto'} direction={'column'}>
                <Box position={'absolute'} bg={useColorModeValue('gray.100', 'yellow.400')} p={'5'} borderRadius={'15'} right={'-20px'} top={'-30px'} color={useColorModeValue('white', 'white')}>
                    <Image src={ImageMapping[img]} h={'30px'}></Image>
                </Box>
                <Text fontWeight={'bold'} fontSize={'20px'}>{heading}</Text>
                <Text fontWeight={'regular'} fontSize={'16px'} opacity={0.7}>{subheading}</Text>
                {
                    description?.map((desc) => {
                        return (
                            <Text mt={3} fontWeight={'regular'} fontSize={'16px'} opacity={0.9}>{desc}</Text>
                        )
                    })
                }
                <Box position="absolute" right={'5'} bottom={'5'}>
                    <ArrowRightIcon onClick={() => { handleArrowClick(img) }} />
                </Box>
            </Flex>
        </Flex>
    )
}
