import { extendTheme } from "@chakra-ui/react"

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({
    config,
    colors: {
        custom: {
            'blue': '#4a05ba',
            'red': '#ff0069',
            'darkgreen': '#00879c'
        },
    },
})

const customColorScheme = {
    'blue': {
        text: '#ffffff',
        background: '#4a05ba'
    },
    'red': {
        text: '#ffffff',
        background: '#ff0069'
    },
    'darkgreen': {
        text: '#ffffff',
        background: '#00879c'
    },
}

export { theme, config, customColorScheme };