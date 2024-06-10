// import { useEffect, useState, useMemo } from "react";
// import { callAPIs } from "@helpers/api";
// import { IConfig } from "@interfaces/iconfig";
// import { baseUrl } from "@utils/constant";
// import { getToken } from "helpers/cookie";
// // import svgMapList from "dummies/m_peta_svg.json";

// export default function useDashboard() {
//  const [loading, setLoading] = useState(false);
//  const [dashboardList, setDashboard] = useState([]);
//  const [statistik, setStatistik] = useState({});

//  const dashboardServices = (params: any) => ({
//   additionalHeader: {
//    "Content-Type": "application/json",
//    Authorization: `Bearer ${getToken()}`,
//   },
//   baseUrl,
//   method: "get",
//   params,
//   uri: `api/dashboard/kph-per-provinsi`,
//  });

//  const getProvinceDetail = (id: string) => {
//   return svgMapList.find((item: any) => item.idProvinsi === id);
//  };

//  const fetchDashboard = async () => {
//   const params = {};

//   const payload: IConfig = dashboardServices(params);
//   setLoading(true);

//   try {
//    const response: any = await callAPIs(payload);
//    if (response.status === 200) {
//     setDashboard(response.data?.data);
//     const newStatistik = {
//      ...statistik,
//      kphk: response.data.kphk[0].jumlah,
//      kphl: response.data.kphl[0].jumlah,
//      kphp: response.data.kphp[0].jumlah,
//      provinsi: response.data.provinsi[0].jumlah,
//     };
//     setStatistik(newStatistik);
//    }

//    setLoading(false);
//   } catch (error) {
//    setLoading(false);
//   }
//  };

//  const mapingDataSource = (data: any) => {
//   const listData = svgMapList.map((item: any, index: number) => {
//    const dataMap = data.find((map: any) => map.id === item.idProvinsi);
//    return {
//     ...item,
//     class: dataMap?.jumlah_kph > 0 ? "active" : "",
//     total: dataMap?.jumlah_kph,
//    };
//   });
//   return listData;
//  };

//  useEffect(() => {
//   fetchDashboard();
//  }, []);

//  const { datasourceList } = useMemo(() => {
//   let datasourceList: any = mapingDataSource(dashboardList);

//   return {
//    datasourceList,
//   };
//  }, [dashboardList]);

//  return {
//   statistik,
//   loading,
//   dashboardList,
//   datasourceList,
//  };
// }
