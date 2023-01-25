import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Flex, Box, useColorMode } from '@chakra-ui/react'
import SideNavigation from './components/SideNavigation'
import Home from './components/Home';
import Works from './components/Works';
import Projects from './components/Projects';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { particlesConfig } from './components/Particles/config';
import Contact from './components/Contact';
import { useCallback, useEffect, useState } from "react";

function App() {
  const { colorMode } = useColorMode()
  const [config, setConfig] = useState(particlesConfig);

  useEffect(() => {
    let tConfig = config;
    // colorMode == 'dark' ? tConfig.particles.color.value = '#ffffff' : tConfig.particles.color.value = '#0F62FE'
    // colorMode == 'dark' ? tConfig.particles.links.value = '#ffffff' : tConfig.particles.color.value = '#0F62FE'
    setConfig({
      ...config,
      ...tConfig
    })
  }, [colorMode]);

  useEffect(() => {
    console.log('config', config);
  }, [config]);

  return (
    <Flex direction={'column'} h='100%'>
      <Router>
        <Routes>
          <Route exact path="/" element={<RouteWrapper><Home /></RouteWrapper>} />
          <Route path="/skills" element={<RouteWrapper><Works /></RouteWrapper>} />
          <Route path="/projects" element={<RouteWrapper><Projects /></RouteWrapper>} />
          <Route path="/contact" element={<RouteWrapper><Contact /></RouteWrapper>} />
        </Routes>
      </Router>
    </Flex>
  );
}

const RouteWrapper = ({
  children
}) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Flex h={'100%'}>
      <SideNavigation />
      <Box w={'100%'} h={'100%'} m={4}>{children}</Box>
      <Particles id="tsparticles" options={particlesConfig} init={particlesInit} loaded={particlesLoaded} />
    </Flex>
  )
}

export default App;
