"use client";

import { FooterText } from "@/utils/data";
import { Form, Input, Button, Drawer } from "antd";
import React, { useState } from "react";
import IndonesiaMap from "./indonesiaMap";
import LoginStyled, {
 TitleSystemStyled,
 TitleStyled,
 TotalDataStyled,
 FormStyled,
 InputStyled,
 CopyrightStyled,
 BackgroundStyled,
 Blurred,
 FormLoginStyled,
} from "./login.styles";
import {
 LoginOutlined,
 BankOutlined,
 DatabaseOutlined,
} from "@ant-design/icons";

export default function LoginPage() {
 //  const { fetchLogin, loading } = useLogin();
 //  const { statistik } = useReport();

 const [visibleDrawer, setVisibleDrawer] = useState(false);

 //  const onFinish = (values: any) => {
 //   fetchLogin(values);
 //  };

 const onFinishFailed = (errorInfo: any) => {};

 const showDrawer = () => {
  setVisibleDrawer(true);
 };
 const onClose = () => {
  setVisibleDrawer(false);
 };

 const TitleSystem = (
  <TitleSystemStyled>
   <TitleStyled>
    <img
     src="https://res.cloudinary.com/caturteguh/image/upload/v1636599852/klhk/logo-klhk_dlexu7.svg"
     alt=""
    />
    <p>
     <span>Sistem Penyediaan Data Informasi Potensi SDH KPH</span>
     <span>Kementerian Lingkungan Hidup dan Kehutanan</span>
    </p>
   </TitleStyled>
  </TitleSystemStyled>
 );

 //  const statistikData: any = statistik;

 const TotalData = (
  <TotalDataStyled>
   <a className="card1 danger" href="#">
    <h3>Provinsi Terdata</h3>
    <p className="small">
     <span>Total</span>{" "}
     <strong>
      {/* <span>{(statistikData && statistikData?.provinsi) || ""}</span> Provinsi */}
      <span>38</span> Provinsi
     </strong>
    </p>
    <span className="go-corner">
     <span className="go-arrow">
      <DatabaseOutlined />
     </span>
    </span>
   </a>
   <a className="card1 primary" href="#">
    <h3>Jumlah KPHP</h3>
    <p className="small">
     <span>Total</span>{" "}
     <strong>
      {/* <span>{statistikData?.kphp}</span> KPHP */}
      <span>66</span> KPHP
     </strong>
    </p>
    <span className="go-corner">
     <span className="go-arrow">
      <BankOutlined />
     </span>
    </span>
   </a>
   <a className="card1 approval" href="#">
    <h3>Jumlah KPHL</h3>
    <p className="small">
     <span>Total</span>{" "}
     <strong>
      {/* <span>{statistikData?.kphl}</span> KPHL */}
      <span>154</span> KPHL
     </strong>
    </p>
    <span className="go-corner">
     <span className="go-arrow">
      <BankOutlined />
     </span>
    </span>
   </a>
   <a className="card1 secondary" href="#">
    <h3>Jumlah KPHK</h3>
    <p className="small">
     <span>Total</span>{" "}
     <strong>
      {/* <span>{statistikData?.kphk}</span> KPHK */}
      <span>214</span> KPHK
     </strong>
    </p>
    <span className="go-corner">
     <span className="go-arrow">
      <BankOutlined />
     </span>
    </span>
   </a>
  </TotalDataStyled>
 );

 const FormLogin = (
  <FormStyled>
   <TitleStyled>
    <img
     src="https://res.cloudinary.com/caturteguh/image/upload/v1636599852/klhk/logo-klhk_dlexu7.svg"
     alt=""
    />
    <p>
     <span>Sistem Penyediaan Data Informasi Potensi SDH KPH</span>
     <span>Kementerian Lingkungan Hidup dan Kehutanan</span>
    </p>
   </TitleStyled>
   <InputStyled>
    {/* <Form name="login-form" onFinish={onFinish} onFinishFailed={onFinishFailed}> */}
    <Form name="login-form">
     <Form.Item
      // label="email"
      name="email"
      rules={[{ required: true, message: "Please input your email!" }]}
     >
      <Input placeholder="Email" />
     </Form.Item>

     <Form.Item
      // label="Password"
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
     >
      <Input.Password placeholder="Password" />
     </Form.Item>
     <Form.Item style={{ textAlign: "center" }}>
      <Button type="primary" htmlType="submit">
       Submit
      </Button>
     </Form.Item>
    </Form>
   </InputStyled>
   <CopyrightStyled>{FooterText}</CopyrightStyled>
  </FormStyled>
 );

 return (
  <>
   <BackgroundStyled>
    <Blurred />
   </BackgroundStyled>
   <LoginStyled>
    {/* <ImageBackgroundStyled /> */}
    <IndonesiaMap />
    {TitleSystem}
    {TotalData}
    <Button
     type="primary"
     icon={<LoginOutlined />}
     onClick={showDrawer}
     size="large"
    >
     Masuk Sistem
    </Button>
    <Drawer
     placement="right"
     onClose={onClose}
     open={visibleDrawer}
     getContainer={false}
     style={{ position: "absolute" }}
     width={400}
     styles={{
      header: {
       borderBottom: 0,
      },
     }}
     rootStyle={{
      fontSize: 50,
      //   ".ant-drawer-header-title": {
      //    justifyContent: "flex-end",
      //   },
     }}
    >
     {FormLogin}
    </Drawer>
    <FormLoginStyled>{FormLogin}</FormLoginStyled>
   </LoginStyled>
  </>
 );
}
