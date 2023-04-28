import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button, Title } from "@mantine/core";
import styled from "@emotion/styled";
import Page from "@/components/page";

const inter = Inter({ subsets: ["latin"] });

export default function EnterTask() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Test app template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <Title order={1} align="center" mb={350} mt={50}>
          Enter task page!
        </Title>
      </Page>
    </>
  );
}
