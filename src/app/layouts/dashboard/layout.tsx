"use client";

import { FooterText } from "@/utils/data";
import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import React from "react";
import LayoutContainerStyle from "./layout.styles";
import { HeaderPartial, SideMenuPartial } from "./partials";

export default function IndexPage({ children }: { children: any }) {
 return (
  <LayoutContainerStyle>
   <Layout>
    <HeaderPartial />
    <Layout>
     <SideMenuPartial />
     <Layout>
      <Content>{children}</Content>
      <Footer>{FooterText}</Footer>
     </Layout>
    </Layout>
   </Layout>
  </LayoutContainerStyle>
 );
}
