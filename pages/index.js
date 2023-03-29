import Button from "@/components/button/Button";
import SignIn from "@/components/verifications/signin";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nene</title>
        <meta name="description" content="Nene Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello There</h1>
      </main>
    </>
  );
}
