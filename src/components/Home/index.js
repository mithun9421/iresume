import React from 'react';
import { Flex, Text, Box, Heading, Image, Tooltip } from '@chakra-ui/react';
import BackgroundBlob from '../../images/blob';

// import * as THREE from "three";
// import { Canvas } from '@react-three/fiber';
// import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import mypic from '../../images/mithun_q.jpg'
import { EmailIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { SOCIAL_MEDIA } from './social-media';

import github from '../../images/github.png';
import facebook from '../../images/facebook.png';
import linkedin from '../../images/linkedin.png';
import instagram from '../../images/instagram.png';


// const Model = (props) => {
//     const { scene } = useGLTF("/room.glb");
//     return <primitive object={scene} {...props} />
// }

const getSocialImage = (imageIdentifier) => {
    const MAP = {
        github: github,
        facebook: facebook,
        linkedin: linkedin,
        instagram: instagram
    }
    return MAP[imageIdentifier];
}

export default function Home() {
    const [quote, setQuote] = React.useState('')
    React.useEffect(() => {
        fetch('https://zenquotes.io/api/random').then(res => res.json()).then((res) => setQuote(res))
    }, [])

    const navigate = useNavigate();
    return (
        <>
            <Flex w={'100%'} h={'98%'} alignItems='center' justifyContent='center' flexDirection={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}>
                <Box position={'relative'}>
                    <Flex p={'30px'} h={'300px'} direction='column' justifyContent='center' alignItems='center' position={'relative'} className='glassmorph-card' zIndex={1}>
                        <Heading fontWeight={'700'} fontSize={'4xl'}>
                            Mithun M
                        </Heading>
                        <Heading fontWeight={'200'} fontSize={'2xl'} mt={'10px'}>
                            Frontend Engineer
                        </Heading>
                        <Text textAlign={'center'} fontWeight={'200'} fontSize={'1xl'} maxW={'80%'} mt={'3'} fontStyle={'italic'}>
                            Always Passionate towards building something out from normal
                        </Text>
                        <Box borderRadius={'50%'} w={'150px'} h={'150px'} display='flex' justifyContent='center' alignItems='center' bg={'rgb(49, 145, 231, 0.2)'} className='glassmorph-card' position={'absolute'} top={'-80px'} zIndex={1}>
                            <Image src={mypic} borderRadius={'50%'} w={'130px'} h={'130px'} />
                        </Box>
                    </Flex>
                    <Box bg={'rgb(49, 145, 231)'} boxShadow={'inset -25px -15px 40px rgba(0,0,0,.3)'} backgroundImage={'linear-gradient(-45deg, rgba(255,255,220,.3) 0%, transparent 100%)'} borderRadius={'50%'} w={'150px'} h={'150px'} position={'absolute'} top={'-16px'} left={'-35px'} zIndex={-21}>
                    </Box>
                    <Tooltip label='Contact Me'>
                        <Box onClick={() => { navigate('/contact') }} bg={'rgb(15, 98, 254)'} boxShadow={'inset -25px -15px 40px rgba(0,0,0,.3)'} backgroundImage={'linear-gradient(-45deg, rgba(15,98,220,.3) 0%, transparent 100%)'} borderRadius={'50%'} w={'100px'} h={'100px'} position={'absolute'} bottom={'-50px'} right={'55px'} zIndex={21} display='flex' justifyContent='center' alignItems='center' cursor={'pointer'}>
                            <EmailIcon w={8} h={8} color='white' ></EmailIcon>
                        </Box>
                    </Tooltip>
                </Box>

                <Flex w={'400px'} h={'400px'} >
                    {/* <Canvas dpr={[1, 2]} camera={{ fov: 45 }} height={'500px'} width={'500px'}>
                        <PresentationControls speed={.5} rotation={[0.5, 2, 0]} zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                            <Stage environment={null}>
                                <Model scale={0.1} rotate={45} />
                            </Stage>
                        </PresentationControls>
                    </Canvas> */}

                    <Box fontSize={'24px'} position='absolute' bottom={'40%'} w='200px' right={'25%'} dangerouslySetInnerHTML={{ __html: quote?.[0]?.h }}></Box>
                    <BackgroundBlob />
                </Flex>


            </Flex>


            <Flex position='absolute' bottom={10} right={10}>
                <Flex p={'30px'} className='glassmorph-card ' alignItems='center' justifyContent='center' gap={5} borderRadius={'20px'} w={'250px'} h={'75px'}>
                    {
                        SOCIAL_MEDIA?.map((social) => {
                            return (<Image _hover={{ w: '35px', h: '35px', transition: 'all' }} src={getSocialImage(social.value)} w={'30px'} h={'30px'} cursor={'pointer'} onClick={() => {
                                window.open(social.profileUrl)
                            }} />)
                        })
                    }
                </Flex>
            </Flex>
        </>
    )
}