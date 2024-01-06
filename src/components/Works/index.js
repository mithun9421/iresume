import React from 'react'
import Card from './Card'
import { workExperience, rolesResponsilbities } from './data.js';
import { Box, Heading, Flex, Text } from '@chakra-ui/react';

export default function Works() {
    const [currentSelection, setCurrentSelection] = React.useState(null)
    const handleArrowClick = (heading) => {
        setCurrentSelection(rolesResponsilbities[heading]);
    }
    return (
        <Box m={50}>
            <Heading >
                Work Experience
            </Heading>
            <Flex>
                <Box >
                    {
                        workExperience.length > 0 &&
                        workExperience.map((work) => {
                            return (
                                <Card
                                    img={work?.img}
                                    subheading={work?.range}
                                    heading={work?.designation}
                                    description={work?.roles}
                                    handleArrowClick={handleArrowClick}
                                />
                            )
                        })
                    }
                </Box>
                <>
                    {
                        currentSelection &&
                        <Flex position='relative'
                            mx={20}
                            className='glassmorph-card' p={10} w={'700px'} borderRadius={'20'} h={'auto'} direction={'column'}>
                            <Text fontSize={'2xl'} fontWeight={'bold'}> {currentSelection.label}</Text>
                            Roles
                            <Flex>
                                {currentSelection?.roles?.map((role) => {
                                    return (
                                        <Text mr={1}
                                            fontSize={'1xl'}
                                            borderWidth={1}
                                            borderColor='gray.200'
                                            p={1}
                                            borderRadius={5}
                                            border='1px'>{role}</Text>
                                    )
                                })}
                            </Flex>
                        </Flex>
                    }
                </>
            </Flex>
        </Box>
    )
}
