import Head from "next/head";
import Link from "next/link";
import { Button, Text, Title } from "@mantine/core";
import Page from "@/components/page";
import TextGlitch from "@/components/TextGlitch/TextGlitch";
import styled from "@emotion/styled";

const BlurSpans = styled.span`
  span {
    color: transparent;
    animation: blur 10s ease-out infinite;
    -webkit-animation: blur 10s ease-out infinite;
  }

  span:nth-child(1) {
    animation-delay: 0.05s;
    -webkit-animation-delay: 0.05s;
  }
  /* span:nth-child(2) {
    animation-delay: 0.2s;
    -webkit-animation-delay: 0.2s;
  } */

  @keyframes blur {
    0% {
      text-shadow: 0 0 100px #fff;
      opacity: 0.3;
    }
    5% {
      text-shadow: 0 0 90px #fff;
    }
    15% {
      opacity: 1;
    }
    20% {
      text-shadow: 0 0 0px #fff;
    }
    80% {
      text-shadow: 0 0 0px #fff;
    }
    85% {
      opacity: 1;
    }
    95% {
      text-shadow: 0 0 0px #fff;
    }
    100% {
      text-shadow: 0 0 0px #fff;
      opacity: 0.3;
    }
  }

  @-webkit-keyframes blur {
    0% {
      text-shadow: 0 0 100px #fff;
      opacity: 0;
    }
    5% {
      text-shadow: 0 0 90px #fff;
    }
    15% {
      opacity: 1;
    }
    20% {
      text-shadow: 0 0 0px #fff;
    }
    80% {
      text-shadow: 0 0 0px #fff;
    }
    85% {
      opacity: 1;
    }
    95% {
      text-shadow: 0 0 90px #fff;
    }
    100% {
      text-shadow: 0 0 100px #fff;
      opacity: 0;
    }
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Test app template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <Title order={1} align="center" mb={"3rem"} mt={50}>
          <TextGlitch text="Hyper" as="span" />
          <BlurSpans>
            <span style={{ fontWeight: "bolder", color: "#87CEEB" }}>
              Focus
            </span>
          </BlurSpans>
        </Title>
        <Title order={3} ta="center">
          HyperFocus takes the jumble of tasks out of your brain and prioritizes
          them for you.
        </Title>

        <Text ta="center" fz="md">
          Use your brainpower on your work, rather than on trying to figure out
          what you should be working on next
        </Text>
        <Link href="/enterTask" passHref>
          <Button color="cyan" size="lg" mt={"3rem"}>
            Add a new task
          </Button>
        </Link>
      </Page>
    </>
  );
}
