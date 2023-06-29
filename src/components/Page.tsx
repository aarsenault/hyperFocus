import styled from "@emotion/styled";
import Head from "next/head";

const Page = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>HyperFocus</title>
        <meta name="description" content="HyperFocus productivity app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    
      <main  style={{ width: "100%" }}>
        <PageContent>{children}</PageContent>
      </main>
    </>
  );
};

const PageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Page;
