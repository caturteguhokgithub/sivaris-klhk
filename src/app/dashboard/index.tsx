"use client";

import React from "react";
// import useDashboard from "./_hooks/useDashboard";
import DashboardStyled from "./dashboard.styles";
import IndonesiaMap from "./indonesiaMap";
import Statistik from "./statistik";

export default function DashboardPage() {
 //  const { loading, datasourceList, statistik } = useDashboard();

 return (
  <DashboardStyled>
   <IndonesiaMap />
   <Statistik />
  </DashboardStyled>
 );
}
