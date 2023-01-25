import React from 'react'
import Card from './Card'
import { workExperience } from './data.js';
import { Box, Heading } from '@chakra-ui/react';

export default function Works() {
    return (
        <Box m={50}>
            <Heading >
                Work Experience
            </Heading>
            {
                workExperience.length > 0 &&
                workExperience.map((work) => {
                    return (
                        <Card
                            img={work?.img}
                            subheading={work?.range}
                            heading={work?.designation}
                            description={work?.roles}
                        />
                    )
                })
            }
        </Box>
    )
}
