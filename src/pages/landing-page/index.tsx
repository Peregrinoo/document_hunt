import {Box, Button, Circle, Flex, Heading, HStack, Text, VStack} from "@chakra-ui/react";

const LandingPage = () => {
    return(
        <VStack w={'full'} h={"100vh"} bg={"doc.primary-color"}>
            <HStack w={"full"} align={"end"} justifyContent={"end"}>
                <Circle size={"256px"}
                        bgGradient={"linear(to-r,#812DE2, #423EE0)"}
                        marginY={"-128px"}
                        marginX={"-32px"}
                        filter={"auto"}
                        blur={"120px"}
                />
            </HStack>

            <HStack justifyContent={"center"} align={"center"} h={"full"}>
                <VStack as={"section"}>
                    <Heading fontSize={"64px"} bgGradient={"linear(to-r,#9130F4,#4646F9)"} bgClip={"text"}>Document Hunt</Heading>
                    <Heading fontSize={"64px"} color={"white"}>Seguro e rapido</Heading>
                    <Box width={"450px"} h={"128px"}>
                        <Text color={"white"} textAlign={"justify"}>
                            Cansado de ficar procurando documentos e/ou links de pesquisa a mão ? Nós temos a solução para você. Nossa plataforma oferece uma ferramenta de procura nunca antes vista. Clique no botão abaixo e faça sua primeira procura.
                        </Text>
                    </Box>
                    <Button alignContent={"start"} color={"#fff"} variant={"outline"}>Consultar</Button>

                </VStack>
            </HStack>

        </VStack>
    );
}

export default LandingPage;