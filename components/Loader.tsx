import {Flex, Spinner, Stack} from "@chakra-ui/react";

function Loader() {
    return (<Flex justify="center" align="center" minH="80vh" w="100%">
        <Stack spacing={4} p={8} borderRadius="lg">
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#673ab7"
                size="xl"
            />
        </Stack>
    </Flex>)
}
export default Loader;