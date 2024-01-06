import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { Flex, useColorMode, useColorModeValue, Stack, Link, Tooltip } from '@chakra-ui/react'
import { MoonIcon, SunIcon, ViewIcon, PhoneIcon, SettingsIcon, CopyIcon, DownloadIcon } from '@chakra-ui/icons'

export default function SideNavigation() {
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode()

    const downloadResume = () => {
        fetch('resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'mithun_resume.pdf';
                alink.click();
            })
        })
    }

    const themeIconResolver = () => {
        return (
            <>
                <Flex bg="gray.50" _dark={{ bg: "gray.800" }} borderRadius={5} justifyContent='center' alignItems='center' w={'10'} h={'10'} _hover={{ cursor: 'pointer' }} onClick={downloadResume}>
                    <Tooltip label='Click to download Resume' placement='right'>
                        <DownloadIcon />
                    </Tooltip>
                </Flex>
                <Flex onClick={toggleColorMode} bg="gray.50" _dark={{ bg: "gray.800" }} borderRadius={5} justifyContent='center' alignItems='center' w={'10'} h={'10'} _hover={{ cursor: 'pointer' }}>
                    {colorMode == 'light' ? <MoonIcon /> : <SunIcon />}
                </Flex >
            </>
        )
    }

    const handleNavigation = (url) => {
        navigate(url)
    }

    return (
        <Flex w='70px' h='100%' py={5} className='glassmorph-bg' justifyContent={'space-between'} alignItems='center' direction={'column'}>
            <Stack>
                <Flex direction='column'>
                    <NavigationIconWrapper target='/'>
                        <ViewIcon />
                    </NavigationIconWrapper>
                    <NavigationIconWrapper target='/skills'>
                        <SettingsIcon />
                    </NavigationIconWrapper>
                    <NavigationIconWrapper target='/projects'>
                        <CopyIcon />
                    </NavigationIconWrapper>
                    <NavigationIconWrapper target='/contact'>
                        <PhoneIcon />
                    </NavigationIconWrapper>
                </Flex>
            </Stack>
            <Stack>
                {themeIconResolver()}
            </Stack>
        </Flex>
    )
}

const NavigationIconWrapper = ({
    children,
    target,
    ...rest
}) => {
    return (
        <Link as={NavLink} to={target} _activeLink={{ background: useColorModeValue('rgb(130, 170, 255)', '#1A202C') }} w={'10'} h={'10'} m={2} p={2} borderRadius={5} cursor={'pointer'} _hover={{ background: useColorModeValue('rgb(130, 170, 255)', '#1A202C') }}>
            <Flex alignItems='center' justifyContent={'center'} w={'100%'} h={'100%'}>
                {children}
            </Flex>
        </Link>
    )
}