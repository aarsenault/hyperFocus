import styled from "@emotion/styled";
import { AppShell, Footer, Group, Header, Text } from "@mantine/core";
import { FaBars } from "react-icons/fa";

const StyledAppShell = styled(AppShell)`
  & .mantine-AppShell-main {
    display: flex;
    align-items: center
    width: 100vw;
    height: 100vh;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
`;

const AppHeader = () => {
  return (
    <Header height={70} p="md">
      <Group position='apart' spacing='xl'
        style={{
          display: "flex",
          width: "100%",
          alignItems: "apart",
          height: "100%",
          alignSelf: "center",
        }}
      >
        <Text size="xl">
          Hyper
          <span style={{ fontWeight: "bolder", color: "#87CEEB" }}>Focus</span>
        </Text>
        <FaBars />
      </Group>
    </Header>
  );
};

const AppFooter = () => {
  return (
    <Footer height={60} p="md">
      <Group position="apart" spacing="xl">
        <Text size="sm">
          <span style={{ fontWeight: "bolder" }}> Task Time: 0h 0m </span>
        </Text>
        <Text size="sm">
          <span style={{ fontWeight: "bolder" }}>Total List Time: 3h 25m </span>
        </Text>
      </Group>
    </Footer>
  );
};

export const AppContainer = ({ children }: any) => (
  <StyledAppShell fixed footer={AppFooter()} header={AppHeader()}>
    {children}
  </StyledAppShell>
);
