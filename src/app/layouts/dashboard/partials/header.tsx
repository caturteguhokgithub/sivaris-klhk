import React from "react";
import { NextPage } from "next";
import { Avatar, Dropdown, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import {
 PoweroffOutlined,
 UserOutlined,
 LockOutlined,
} from "@ant-design/icons";
import { HeaderStyled } from "../layout.styles";
import { useRouter } from "next/dist/client/router";
// import { setLogout, getFullName } from "helpers/cookie";
import Color from "@/assets/color";
import Link from "next/link";

const HeaderPartial: NextPage = () => {
 //  const router = useRouter();

 //  const handleLogout = () => {
 //   setLogout();
 //   router.push("/");
 //  };

 const accountMenu = (
  <Menu>
   <Menu.Item icon={<LockOutlined />}>
    <Link href="/change-password">
     <a title="change-password">Ubah Password</a>
    </Link>
   </Menu.Item>
   <Menu.Divider />
   {/* <Menu.Item icon={<PoweroffOutlined />} danger onClick={handleLogout}> */}
   <Menu.Item icon={<PoweroffOutlined />} danger>
    Keluar Sistem
   </Menu.Item>
  </Menu>
 );

 return (
  <HeaderStyled>
   <img
    src="https://res.cloudinary.com/caturteguh/image/upload/v1638342489/klhk/sq-ptrn_kcv8e9.png"
    alt=""
   />
   <Header>
    <div>
     <img
      src="https://res.cloudinary.com/caturteguh/image/upload/v1636599852/klhk/logo-klhk_dlexu7.svg"
      alt=""
     />
     <p>
      <span>Sistem Penyediaan Data Informasi Potensi SDH KPH</span>
      <span>
       Direktorat Inventarisasi dan Pemantauan Sumberdaya Hutan
       <br />
       Direktorat Jenderal Planologi Kehutanan dan Tata Lingkungan
      </span>
      <span>Kementerian Lingkungan Hidup dan Kehutanan</span>
     </p>
    </div>
    <div>
     <Dropdown overlay={accountMenu}>
      <span className="avatar-item">
       {/* <Badge dot> */}
       <Avatar
        style={{
         backgroundColor: Color.light,
         color: Color.primaryGreenKarbon,
        }}
        icon={<UserOutlined />}
        size={36}
       />
       {/* </Badge> */}
       {/* <span>{getFullName()}</span> */}
      </span>
     </Dropdown>
    </div>
   </Header>
  </HeaderStyled>
 );
};

export default HeaderPartial;
