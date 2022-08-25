import Head from 'next/head';
import {ChakraProvider} from "@chakra-ui/react";
import Layout from "../components/Layout";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <ChakraProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </>
    );
}

export default MyApp;
