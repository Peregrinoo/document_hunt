import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraBaseProvider, extendTheme} from "@chakra-ui/react";
import MyRoutes from './routes';

const theme = extendTheme({
    colors: {
        doc: {
            'primary-color': "#0E0D33",
            "gradient-one:": "#812DE2",
            "gradient-two": "#423EE0"
        },
    },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
        <MyRoutes/>
    </ChakraBaseProvider>
  </React.StrictMode>,
)
