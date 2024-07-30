import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./header";

const MainLayout = styled.div``;

export function GenericLayout() {
  return (
    <MainLayout>
      <Header />
      <Outlet />
    </MainLayout>
  );
}
