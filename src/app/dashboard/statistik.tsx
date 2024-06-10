"use client";

import React from "react";
import { Card } from "antd";
import { CardTotalStyled, DashboardBlockStyled } from "./dashboard.styles";
import { BankOutlined, DatabaseOutlined } from "@ant-design/icons";

// export default function Statistik() {
const Statistik: React.FC<any> = ({ statistik }) => {
 return (
  <DashboardBlockStyled>
   <Card>
    <CardTotalStyled>
     <div className="danger">
      <DatabaseOutlined />
     </div>
     <p>
      {/* <span>{statistik?.provinsi}</span> */}
      <span>80</span>
      <span>Total Provinsi Terdata</span>
     </p>
    </CardTotalStyled>
   </Card>
   <Card>
    <CardTotalStyled>
     <div className="primary">
      <BankOutlined />
     </div>
     <p>
      {/* <span>{statistik?.kphp}</span> */}
      <span>80</span>
      <span>Total KPHP</span>
     </p>
    </CardTotalStyled>
   </Card>
   <Card>
    <CardTotalStyled>
     <div className="approval">
      <BankOutlined />
     </div>
     <p>
      {/* <span>{statistik.kphl}</span> */}
      <span>80</span>
      <span>Total KPHL</span>
     </p>
    </CardTotalStyled>
   </Card>
   <Card>
    <CardTotalStyled>
     <div className="secondary">
      <BankOutlined />
     </div>
     <p>
      {/* <span>{statistik.kphk}</span> */}
      <span>80</span>
      <span>Total KPHK</span>
     </p>
    </CardTotalStyled>
   </Card>
  </DashboardBlockStyled>
 );
};

export default Statistik;
