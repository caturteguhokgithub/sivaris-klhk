import React from "react";
import { Popover } from "antd";
import { PopoverStyled, SvgMapStyled } from "../dashboard/dashboard.styles";
import { MapData } from "../dashboard/data";
import Link from "next/link";
import Color from "@/assets/color";
import { RightCircleOutlined } from "@ant-design/icons";
// import useReport from "./hooks/useReport";

const IndonesiaMap: React.FC<any> = () => {
 //  const { datasourceList } = useReport();

 return (
  <SvgMapStyled>
   <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="100%"
    height="570px"
    viewBox="0 0 800 300"
    enableBackground="new 0 0 570 570"
    xmlSpace="preserve"
   >
    {MapData.map((item, index) => (
     <React.Fragment key={index}>
      {item.class === "active" ? (
       <Popover
        title={
         <PopoverStyled>
          <div>
           <strong>{item.provinsi_name}</strong>
           <span>
            <span>Total</span> <strong>{item?.total}</strong> KPH
           </span>
          </div>
          <Link
           href={{
            pathname: `/kph`,
            query: { id: item.idProvinsi },
           }}
          >
           <RightCircleOutlined
            style={{ color: Color.approval.active, fontSize: 20 }}
           />
          </Link>
         </PopoverStyled>
        }
       >
        <path
         d={`${item.data}`}
         xlinkTitle={`${item.provinsi_name}`}
         id={`${item.id}`}
         className={item.class}
        />
       </Popover>
      ) : (
       <path
        d={`${item.data}`}
        xlinkTitle={`${item.provinsi_name}`}
        id={`${item.id}`}
        className={item.class}
       />
      )}
     </React.Fragment>
    ))}

    {/* {datasourceList &&
     datasourceList.map((item: any, index: number) => (
      <React.Fragment key={index}>
       {item.class === "active" ? (
        <Popover
         title={
          <PopoverStyled>
           <div>
            <strong>{item.provinsi_name}</strong>
            <span>
             <span>Total</span> <strong>{item?.total}</strong> KPH
            </span>
           </div>
          </PopoverStyled>
         }
        >
         <path
          d={`${item.data}`}
          xlinkTitle={`${item.provinsi_name}`}
          id={`${item.id}`}
          className={item.class}
         />
        </Popover>
       ) : (
        <path
         d={`${item.data}`}
         xlinkTitle={`${item.provinsi_name}`}
         id={`${item.id}`}
         className={item.class}
        />
       )}
      </React.Fragment>
     ))} */}
   </svg>
  </SvgMapStyled>
 );
};

export default IndonesiaMap;
