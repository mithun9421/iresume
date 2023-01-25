import React from 'react';
import { Box, Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { projects } from './data';

export default function Projects() {
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
                                    <Heading fontSize={'2xl'}>{project?.label}</Heading>
                                    <Heading fontSize={'1xl'} fontWeight={400} mt={2}>{project?.sublabel}</Heading>
                                    <UnorderedList listStyleType={'none'} m={0} mt={2} fontWeight={100} fontSize={14}>
                                        {
                                            project?.description?.map((desc) => {
                                                return (
                                                    <ListItem mt={1}>{desc}</ListItem>
                                                )
                                            })
                                        }
                                    </UnorderedList>
                                    <Flex className="skillset-wrapper" mt={3} gap={3}>
                                        {
                                            project?.skillSet?.map((skill) => {
                                                return (
                                                    <Box bg={'#0F62FE'} px={2} py={1} borderRadius={5}>
                                                        <Text>{skill}</Text>
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Flex>
                                </Flex>
                                {/* <Box position={'absolute'} bg={`rgb(${getRandomInt(0, 50)}, ${getRandomInt(80, 150)}, ${getRandomInt(200, 254)})`} boxShadow={'inset -25px -15px 40px rgba(0,0,0,.3)'} backgroundImage={'linear-gradient(-45deg, rgba(15,98,220,.3) 0%, transparent 100%)'} borderRadius={'50%'} w={aspectRatio} h={aspectRatio} top={`${getRandomInt(0, 150)}px`} left={`${getRandomInt(0, 15)}px`} right={`${getRandomInt(0, 15)}px`} bottom={`${getRandomInt(0, 15)}px`} zIndex={1} />

                                <Box position={'absolute'} bg={`rgb(${getRandomInt(0, 150)}, ${getRandomInt(80, 250)}, ${getRandomInt(100, 254)})`} boxShadow={'inset -25px -15px 40px rgba(0,0,0,.3)'} backgroundImage={'linear-gradient(-45deg, rgba(15,98,220,.3) 0%, transparent 100%)'} borderRadius={'50%'} w={aspectRatio} h={aspectRatio} right={`${getRandomInt(0, 15)}px`} bottom={`${getRandomInt(0, 15)}px`} zIndex={1} /> */}
                            </Box>

                        )
                    })
                }
            </Flex>
        </Box>
    )
}
