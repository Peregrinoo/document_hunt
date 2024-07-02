import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraBaseProvider} from "@chakra-ui/react";
import MyRoutes from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraBaseProvider>
        <MyRoutes/>
    </ChakraBaseProvider>
  </React.StrictMode>,
)
