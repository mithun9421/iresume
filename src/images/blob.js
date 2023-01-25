import React from 'react';
import { useColorModeValue, Box } from '@chakra-ui/react'

export default function BackgroundBlob() {
    return (
        <Box position={'absolute'} w={'500px'} zIndex={-99}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill={useColorModeValue("#0F62FE", "#0F62FE")} d="M68.1,-22.9C73.7,-4.8,53.7,20.8,29.7,37.5C5.7,54.2,-22.4,61.8,-41.9,49.6C-61.4,37.3,-72.3,5.1,-63.9,-16.8C-55.5,-38.8,-27.7,-50.5,1.7,-51.1C31.2,-51.7,62.5,-41.1,68.1,-22.9Z" transform="translate(100 100)" />
            </svg>
        </Box>

    )
}
