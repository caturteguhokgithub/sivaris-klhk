import styled from "@emotion/styled";
import facepaint from "facepaint";
import Color from "../../assets/color";

const mq = facepaint([
 "@media(max-width: 1199.98px)",
 "@media(max-width: 991.98px)",
 "@media(max-width: 767.98px)",
 "@media(max-width: 575.98px)",
]);

export const DashboardStyled = styled.div({
 ".ant-card + .ant-card": {
  marginTop: 0,
 },
 "& > div": {
  "& + div": {
   marginTop: 16,
  },
 },
});

export const DashboardBlockStyled = styled.div(
 mq({
  display: "grid",
  gridTemplateColumns: ["repeat(4, 1fr)", undefined, "repeat(2, 1fr)"],
  gridGap: 16,
  ".ant-card-body": {
   padding: 0,
  },
 })
);

export const DashboardChartStyled = styled.div({
 //  display: "grid",
 //  gridTemplateColumns: "1fr 1fr",
 //  gridGap: 16,
 display: "flex",
 "& > div": {
  flex: "0 0 50%",
  maxWidth: "calc(50% - 8px)",
  "& + div": {
   marginLeft: 16,
  },
 },
});

export const CardTotalStyled = styled.div({
 display: "flex",
 alignItems: "center",
 "& > div": {
  padding: 24,
  display: "flex",
  alignItems: "center",

  "&.primary": {
   backgroundColor: Color.primary.hover,
  },
  "&.danger": {
   backgroundColor: Color.danger.hover,
  },
  "&.secondary": {
   backgroundColor: Color.secondary.hover,
  },
  "&.approval": {
   backgroundColor: Color.approval.hover,
  },
  svg: {
   color: Color.white,
   fontSize: 40,
  },
 },
 "& > p": {
  marginLeft: 16,
  lineHeight: 1.3,
  "& > span": {
   fontSize: 24,
   fontWeight: 500,
   "& + span": {
    fontWeight: 300,
   },
  },
  p: {
   fontWeight: 300,
  },
 },
 p: {
  marginBottom: 0,
 },
});

export const SvgMapStyled = styled.div({
 width: "100%",
 height: "100%",

 path: {
  pointerEvents: "auto",
  fill: Color.font.disabled,
  filter: `drop-shadow(1px 1px 0px ${Color.light}) drop-shadow(-1px 1px 0px ${Color.light}) drop-shadow(1px -1px 0px ${Color.light}) drop-shadow(-1px -1px 0px ${Color.light})`,

  "&.active": {
   cursor: "pointer",
   fill: Color.approval.contrast,
  },
 },
});

export const PopoverStyled = styled.div({
 display: "flex",
 justifyContent: "space-between",
 alignItems: "center",
 "& > div": {
  display: "flex",
  flexDirection: "column",
  fontSize: 12,
  "& > strong": {
   fontSize: 14,
  },
  "& > span": {
   "& > span": {
    color: Color.font.pencil,
   },
  },
 },
});

export default DashboardStyled;
