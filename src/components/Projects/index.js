import React from 'react';
import { Box, Flex, Heading, ListItem, Text, UnorderedList, useColorModeValue } from '@chakra-ui/react';
import { projects } from './data';

export default function Projects() {
    const skillsetcolor = useColorModeValue("white", "white");
    console.log('skillsetcolor', skillsetcolor)
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return (
        <Box m={50}>
            <Heading>Projects</Heading>
            <Flex className="projects-wrapper" mt={10} display={'flex'} gap={5} wrap={'wrap'}>
                {
                    projects?.map((project) => {
                        let aspectRatio = `${getRandomInt(20, 70)}px`;
                        return (
                            <Box className="project-wrapper" position={'relative'}>
                                <Flex position={'relative'} className='glassmorph-card' p={10} flexDirection='column' zIndex={2}>
                                    <Heading fontSize={'24'}>{project?.label}</Heading>
                                    <Heading fontSize={'20'} fontWeight={400} mt={2}>{project?.sublabel}</Heading>
                                    <UnorderedList listStyleType={'none'} m={0} mt={2} fontWeight={300} fontSize={14}>
                                        {
                                            project?.description?.map((desc) => {
                                                return (
                                                    <ListItem mt={2}>{desc}</ListItem>
                                                )
                                            })
                                        }
                                    </UnorderedList>
                                    <Flex className="skillset-wrapper" mt={3} gap={3} wrap='wrap'>
                                        {
                                            project?.skillSet?.map((skill) => {
                                                return (
                                                    <Box bg={'#0F62FE'} px={2} py={1} borderRadius={5}>
                                                        <Text color={skillsetcolor}>{skill}</Text>
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Flex>
                                </Flex>
                            </Box>

                        )
                    })
                }
            </Flex>
        </Box>
    )
}
