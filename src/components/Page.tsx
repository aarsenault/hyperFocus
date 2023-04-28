import styled from "@emotion/styled";

const Page = ({ children }: any) => {
  return (
    <main style={{ width: "100%" }}>
      <PageContent>{children}</PageContent>
    </main>
  );
};

const PageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Page;
