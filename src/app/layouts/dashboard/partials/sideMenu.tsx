import React, { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { Avatar, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import SubMenu from "antd/lib/menu/SubMenu";
import {
 HddOutlined,
 PieChartOutlined,
 UserOutlined,
 UploadOutlined,
 MenuOutlined,
} from "@ant-design/icons";
import { AvatarStyled, SiderStyled } from "../layout.styles";
import { useRouter } from "next/dist/client/router";
import Color from "@/assets/color";
// import { getFullName } from "@helpers/cookie";

const SideMenuPartial: NextPage = () => {
 const [collapsed, setCollapsed] = useState(false);
 //  const { asPath } = useRouter();

 const onCollapse = (collapsed: any) => {
  setCollapsed(collapsed);
 };

 //  let selectedKey = asPath;
 let openKey = "";
 //  const tmpArr = selectedKey.split("/");
 const criteriaMaster = [
  "/master/provinsi",
  "/lookup-data/tipe-iklim",
  "/lookup-data/jenis-tanah",
  "/lookup-data/tingkat-kelerengan",
 ];

 const criteriaUser = ["/user", "/user-role"];

 //  if (criteriaUser.includes(asPath)) {
 //   selectedKey = `${tmpArr[1]}`;
 //   openKey = `/user-management`;
 //  } else if (criteriaMaster.includes(asPath)) {
 //   selectedKey = `${tmpArr[2]}`;
 //   openKey = `/lookup`;
 //  } else if (tmpArr.length === 3) {
 //   selectedKey = `${tmpArr[2]}`;
 //   openKey = `/${tmpArr[1]}`;
 //  } else {
 //   selectedKey = selectedKey;
 //   openKey = "/dashboard";
 //  }

 //  const fullName = getFullName();
 //  const nameAlias = `${fullName}`.split(" ");
 //  const aliasNameText = `${nameAlias[0].charAt(0) || ""}${
 //   nameAlias[1]?.charAt(0) || ""
 //  }`.toUpperCase();

 return (
  <>
   <Sider
    breakpoint="lg"
    collapsible
    collapsed={collapsed}
    onCollapse={onCollapse}
    collapsedWidth="0"
    width={280}
   >
    <span
     className={
      "ant-layout-sider-zero-width-trigger ant-layout-sider-zero-width-trigger-left"
     }
    >
     <MenuOutlined onClick={() => setCollapsed(!collapsed)} />
    </span>
    <img
     src="https://res.cloudinary.com/caturteguh/image/upload/v1638342968/klhk/sq-ptrn-green_b6ljbe.png"
     alt=""
    />
    <AvatarStyled>
     <Avatar
      size={{ xs: 24, sm: 32, md: 40, lg: 40, xl: 40, xxl: 40 }}
      style={{ backgroundColor: Color.approval.contrast }}
     >
      {/* {aliasNameText} */}
      aliasNameText
     </Avatar>
     <div>
      <h3>Welcome</h3>
      {/* <span>{fullName}</span> */}
      <span>fullName</span>
     </div>
    </AvatarStyled>
    <SiderStyled>
     <Menu
      mode="inline"
      // defaultSelectedKeys={[`${selectedKey}`]}
      defaultOpenKeys={[`${openKey}`]}
      // defaultSelectedKeys={["1"]} buat yg dalem nya aktif
      // defaultOpenKeys={["sub1"]} buat yg gede nya
     >
      <Menu.Item key="/dashboard" icon={<HddOutlined />}>
       <Link href="/dashboard">
        {/* <a title="dashboard">KPH Provinsi</a> */}
       </Link>
      </Menu.Item>
      {/* <Menu.Item key="kph" icon={<HddOutlined />}>
      <Link href="/kph">
       <a title="kph">KPH</a>
      </Link>
     </Menu.Item> */}
      <Menu.ItemGroup title="Informasi KPH">
       <SubMenu key="/master" icon={<PieChartOutlined />} title="Informasi KPH">
        <Menu.Item key="kph">
         <Link href="/master/kph">
          {/* <a title="master-kph">KPH</a> */}
          KPH
         </Link>
        </Menu.Item>
        <Menu.Item key="kelembagaan">
         <Link href="/master/kelembagaan">
          {/* <a title="master-kelembagaan">Kelembagaan</a> */}
         </Link>
        </Menu.Item>
        <Menu.Item key="fungsi-kawasan">
         <Link href="/master/fungsi-kawasan">
          {/* <a title="master-fungsi-kawasan">Fungsi Kawasan</a> */}
         </Link>
        </Menu.Item>
        <Menu.Item key="penutupan-lahan">
         <Link href="/master/penutupan-lahan">
          {/* <a title="master-penutupan-lahan">Penutupan Lahan</a> */}
         </Link>
        </Menu.Item>
        {/* Biofisik */}
        <SubMenu key="/biofisik" title="Biofisik">
         <Menu.Item key="biofisik-iklim">
          <Link href="/master/biofisik-iklim">
           {/* <a title="master-biofisik-iklim">Biofisik Iklim</a> */}
          </Link>
         </Menu.Item>
         <Menu.Item key="biofisik-tanah">
          <Link href="/master/biofisik-tanah">
           {/* <a title="master-biofisik-tanah">Biofisik Jenis Tanah</a> */}
          </Link>
         </Menu.Item>
         {/* <Menu.Item key="/master/biofisik-bentuk-tanah">
         <Link href="/master/biofisik-bentuk-tanah">
          <a title="master-biofisik-bentuk-tanah">Biofisik Bentuk Tanah</a>
         </Link>
        </Menu.Item> */}
         <Menu.Item key="biofisik-kelerengan">
          <Link href="/master/biofisik-kelerengan">
           {/* <a title="master-biofisik-kelerengan">Biofisik Kelerengan</a> */}
          </Link>
         </Menu.Item>
        </SubMenu>
        {/* Potensi */}
        <SubMenu key="/potensi" title="Potensi">
         <Menu.Item key="potensi-tegakan">
          <Link href="/master/potensi-tegakan">
           {/* <a title="master-potensi-tegakan">Potensi Tegakan</a> */}
          </Link>
         </Menu.Item>
         <Menu.Item key="potensi-fauna">
          <Link href="/master/potensi-fauna">
           {/* <a title="master-potensi-fauna">Potensi Fauna</a> */}
          </Link>
         </Menu.Item>
         <Menu.Item key="potensi-flora">
          <Link href="/master/potensi-flora">
           {/* <a title="master-potensi-flora">Potensi Flora</a> */}
          </Link>
         </Menu.Item>
         <Menu.Item key="potensi-alam">
          <Link href="/master/potensi-alam">
           {/* <a title="master-potensi-alam">Potensi Bentang Alam</a> */}
          </Link>
         </Menu.Item>
         <Menu.Item key="potensi-sosial-budaya">
          <Link href="/master/potensi-sosial-budaya">
           {/* <a title="master-potensi-sosial-budaya">Potensi Sosial Budaya</a> */}
          </Link>
         </Menu.Item>
        </SubMenu>
       </SubMenu>
       <SubMenu key="/lookup" icon={<UploadOutlined />} title="Data Referensi">
        <Menu.Item key="provinsi">
         <Link href="/master/provinsi">
          {/* <a title="master-provinsi">Provinsi</a> */}
         </Link>
        </Menu.Item>
        <Menu.Item key="tipe-iklim">
         <Link href="/lookup-data/tipe-iklim">
          {/* <a title="lookup-data-tipe-iklim">Tipe Iklim</a> */}
         </Link>
        </Menu.Item>
        <Menu.Item key="jenis-tanah">
         <Link href="/lookup-data/jenis-tanah">
          {/* <a title="lookup-data-jenis-tanah">Jenis Tanah</a> */}
         </Link>
        </Menu.Item>
        <Menu.Item key="tingkat-kelerengan">
         <Link href="/lookup-data/tingkat-kelerengan">
          {/* <a title="lookup-data-tingkat-kelerengan">Kelas Kelerengan</a> */}
         </Link>
        </Menu.Item>
        <Menu.Item key="fungsi-kawasan">
         <Link href="/lookup-data/fungsi-kawasan">
          {/* <a title="lookup-data-fungsi-kawasan">Fungsi Kawasan</a> */}
         </Link>
        </Menu.Item>
       </SubMenu>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Setting">
       <SubMenu
        key="/user-management"
        icon={<UserOutlined />}
        title="User Management"
       >
        <Menu.Item key="user">
         <Link href="/user">{/* <a title="user">Users</a> */}</Link>
        </Menu.Item>
       </SubMenu>
      </Menu.ItemGroup>
     </Menu>
    </SiderStyled>
   </Sider>
  </>
 );
};

export default SideMenuPartial;
