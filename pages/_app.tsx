import Head from 'next/head';
import {ChakraProvider} from "@chakra-ui/react";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default MyApp;
