import styled from "@emotion/styled";
import Color from "@/assets/color";
import facepaint from "facepaint";

const mq = facepaint([
 "@media(max-width: 1199.98px)",
 "@media(max-width: 991.98px)",
 "@media(max-width: 767.98px)",
 "@media(max-width: 575.98px)",
]);

export const LayoutContainerStyle = styled.div(
 mq({
  margin: 0,
  padding: 0,
  "& > .ant-layout": {
   minHeight: "100vh",
   position: "relative",
  },
  ".ant-layout-sider-zero-width-trigger": {
   //  display: ["none", undefined, "block"],
   //  right: 0,
   top: 0,
   backgroundColor: Color.greenKlhk.dark,
   borderTopRightRadius: 0,
   borderBottomRightRadius: 10,
   opacity: 0.3,
   transition: "all 500ms ease-in",
   "&:hover": {
    opacity: 1,
   },
  },
  // ".ant-dropdown-trigger.avatar-item": {
  //  marginRight: 20,
  // },
  ".logo": {
   height: 32,
   margin: 16,
   background: "rgba(255, 255, 255, 0.3)",
  },
  ".ant-menu-item": {
   marginTop: 0,
   cursor: "pointer",
  },
  ".ant-layout.ant-layout-has-sider > .ant-layout, .ant-layout.ant-layout-has-sider > .ant-layout-content":
   {
    width: "100%",
    height: "calc(100vh - 100px)",
    overflow: "hidden auto",
   },
  ".ant-layout, .ant-layout-footer": {
   backgroundColor: Color.bgContent,
  },
  ".ant-menu-item-selected": {
   color: Color.primaryGreenKLHK,
  },
  ".ant-menu-submenu-selected": {
   color: Color.primaryGreenKLHK,
   fontWeight: 700,
  },
  ".ant-menu-inline .ant-menu-item:after": {
   borderColor: Color.primaryGreenKLHK,
  },
  ".ant-menu-inline .ant-menu-item:hover": {},
  ".ant-layout-footer": {
   paddingTop: 14,
   paddingBottom: 14,
   color: "grey",
   fontSize: 12,
   textAlign: "center",
   backgroundColor: Color.white,
  },
  ".ant-layout-sider-children": {
   position: "relative",
   overflow: "hidden",
   transform: "translate3d(0,0,0)",
   "& > img": {
    position: "fixed",
    left: -50,
    bottom: -50,
    zIndex: 0,
    opacity: 0.07,
    width: 460,
   },
  },
  ".ant-layout-sider-trigger": {
   backgroundColor: Color.whiteLings,
   color: Color.black,
  },
  ".ant-layout-sider.ant-layout-sider-dark.ant-layout-sider-collapsed.ant-layout-sider-has-trigger, .ant-layout-sider.ant-layout-sider-dark.ant-layout-sider-collapsed.ant-layout-sider-has-trigger .ant-layout-sider-trigger":
   {
    flex: "0 0 80px !important",
    maxWidth: "80px !important",
    minWidth: "80px !important",
    width: "80px !important",
   },
  ".ant-menu.ant-menu-dark": {
   backgroundColor: Color.greenKlhk.dark,
  },
  ".ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub": {
   backgroundColor: Color.approval.active,
  },
  ".ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected":
   {
    backgroundColor: Color.greenKlhk.light,
    fontWeight: 700,
    margin: 0,
   },
  ".ant-menu-dark .ant-menu-item-selected .ant-menu-item-icon + span, .ant-menu-dark .ant-menu-item-selected .anticon + span, .ant-menu-dark .ant-menu-item-selected .ant-menu-item-icon, .ant-menu-dark .ant-menu-item-selected .anticon":
   {
    color: Color.primaryBlueDarken,
   },
  ".ant-layout-content": {
   margin: "24px !important",
   marginTop: [undefined, undefined, "48px !important"],
   minHeight: "unset",
   ".ant-table-cell": {
    "&.hideColumnAction": {
     display: "none",
    },
   },
  },
  ".ant-page-header": {
   marginBottom: 8,
   padding: 0,
  },
  ".ant-layout-header": {
   height: 100,
   paddingLeft: 24,
   paddingRight: 24,
   boxShadow: "1px 0 20px rgb(0 0 0 / 30%)",
   position: "relative",
   backgroundColor: Color.primaryGreenKarbon,
  },
  ".ant-table-pagination.ant-pagination": {
   padding: "0 16px",
  },
  ".ant-btn": {
   "&.ant-btn-primary": {
    backgroundColor: Color.primary.default,
    borderColor: Color.primary.default,
    "&:hover": {
     backgroundColor: Color.primary.hover,
     borderColor: Color.primary.hover,
    },
    "&.ant-btn-background-ghost": {
     backgroundColor: Color.primary.default,
     borderColor: Color.primary.default,
     color: Color.primary.default,
     "&:hover": {
      backgroundColor: Color.primary.hover,
      borderColor: Color.primary.hover,
      color: Color.primary.hover,
     },
    },
   },
  },
  ".ant-avatar.ant-avatar-circle": {
   width: "32px !important",
   height: "32px !important",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
  },
 })
);

export const HeaderStyled = styled.div(
 mq({
  position: "relative",
  overflow: "hidden",
  "& > img": {
   transform: "rotate(180deg)",
   position: "absolute",
   right: -30,
   top: -100,
   zIndex: 1,
   opacity: 0.1,
   width: 600,
  },
  header: {
   display: "flex",
   alignItems: "center",
   justifyContent: "space-between",
   "& > div": {
    display: "flex",
    alignItems: "center",
    img: {
     maxWidth: 60,
    },
    "& > p": {
     display: "flex",
     flexDirection: "column",
     margin: 0,
     "& > span": {
      color: Color.white,
      marginLeft: 16,
      fontSize: [20, undefined, undefined, undefined, 14],
      fontWeight: 700,
      letterSpacing: 1,
      lineHeight: 1.3,
      textTransform: "uppercase",
      maxWidth: [undefined, undefined, undefined, 320],
      "& + span": {
       color: Color.white,
       fontSize: 12,
       textTransform: "unset",
       fontWeight: 300,
       lineHeight: 1.3,
       display: [undefined, undefined, undefined, "none"],
      },
     },
    },
    "& + div": {
     ".avatar-item": {
      position: "relative",
      zIndex: 3,
      cursor: "pointer",
      "& > span": {
       "& + span": {
        color: "lightgrey",
        marginLeft: 8,
       },
      },
     },
    },
   },
  },
 })
);

export const SiderStyled = styled.div({
 ".menu-logout": {
  color: "darkred",
 },
 "& > .ant-menu": {
  maxHeight: "100vh",
  overflowY: "auto",
  overflowX: "hidden",
  paddingBottom: 140,
  height: "calc(100vh - 100px)",

  "&::-webkit-scrollbar": {
   width: 3,
  },
  "&::-webkit-scrollbar-track": {
   "-webkit-box-shadow": "inset 0 0 6px rgba(0, 0, 0, 0.1)",
  },
  "&::-webkit-scrollbar-thumb": {
   backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
 },
});

export const CardWithTableFormStyled = styled.div({
 ".ant-card-body": {
  padding: 0,

  "& > .ant-table-wrapper .ant-table.ant-table-bordered > .ant-table-container":
   {
    borderTop: 0,
   },
  ".ant-table.ant-table-bordered > .ant-table-container": {
   borderLeft: 0,
  },
  ".ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > thead > tr:last-of-type > th, .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tbody > tr > td,":
   {
    borderRight: 0,
   },
  ".ant-form.ant-form-vertical": {
   padding: 16,
   display: "grid",
   gridTemplateColumns: "auto auto auto auto auto",
   gridGap: 16,
   ".ant-form-item": {
    marginBottom: 0,
    ".ant-form-item-label, .ant-form-item-control": {
     flex: "unset",
     maxWidth: "unset",
    },
    ".ant-form-item-label": {
     paddingBottom: 4,
    },
   },
  },
 },

 "& + .ant-page-header": {
  marginTop: 24,
 },

 ".filter-button": {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",

  "> div": {
   padding: 16,

   ">button": {
    backgroundColor: "#18c23d",
    borderColor: "#18c23d",
    color: "#fff",
    border: 0,
    height: 32,
    padding: "4px 15px",
    fontSize: 14,
    cursor: "pointer",
    borderRadius: 2,
    ">span": {
     marginRight: 8,
    },
   },
  },
 },
});

export const ButtonActionModal = styled.p({
 whiteSpace: "nowrap",
 display: "flex",
 justifyContent: "flex-end",
 margin: 0,
 button: {
  "& + button": {
   marginLeft: 8,
  },
 },
});

export const ButtonAction = styled.div({
 whiteSpace: "nowrap",
 button: {
  "& + button": {
   marginLeft: 8,
  },
 },
});

export const FormAddPageStyled = styled.div({
 //  padding: 20,
 display: "flex",
 flexDirection: "column",
 //  "& > div": {
 //   "& + div": {
 //    display: "flex",
 //    justifyContent: "flex-end",
 //   },
 //  },
});

export const CollapseOnlyTableStyled = styled.div({
 margin: -16,
 "& > p": {
  margin: 16,
  display: "flex",
  justifyContent: "flex-end",
 },
 ".ant-table-wrapper.pagination-false": {
  ".ant-table": {
   "& > .ant-table-container": {
    borderLeft: 0,
    ".ant-table-content > table > thead > tr > th:last-of-type, .ant-table-content > table > tbody > tr > td:last-of-type":
     {
      borderRight: 0,
     },
    ".ant-table-content > table > tbody.ant-table-tbody > tr:last-of-type > td":
     {
      borderBottom: 0,
     },
   },
  },
 },
});

export const ButtonPageActionStyled = styled.div({
 display: "flex",
 justifyContent: "flex-end",
 marginTop: 24,
 button: {
  "& + button": {
   marginLeft: 8,
  },
 },
});

export const InputShortStyled = styled.div({
 "input, .ant-select": {
  maxWidth: 200,
 },
});

export const CardWithTabs = styled.div({
 marginTop: 20,
 ".ant-card-body": {
  padding: 0,
  ".ant-tabs": {
   ".ant-tabs-nav": {
    marginBottom: 0,
    ".ant-tabs-tab": {
     margin: "0 16px",
     "&:first-of-type": {
      marginLeft: 32,
     },
    },
   },
   ".ant-page-header": {
    ".ant-page-header-heading": {
     marginLeft: 16,
     marginRight: 16,
     ".ant-page-header-heading-title": {
      fontSize: 14,
     },
    },
   },
  },
 },
});

export const EllipsisThreeRowStyled = styled.div({
 display: "-webkit-box",
 WebkitLineClamp: 3,
 WebkitBoxOrient: "vertical",
 overflow: "hidden",
 textOverflow: "ellipsis",
});

export const AvatarStyled = styled.div({
 display: "flex",
 alignItems: "center",
 padding: 16,
 backgroundColor: Color.slate[50],
 "& > div": {
  margin: 0,
  marginLeft: 16,
  h3: {
   fontSize: 14,
   margin: 0,
   lineHeight: "16px",
  },
  "& > span": {
   fontSize: 12,
   color: Color.font.pencil,
  },
 },
});

export const CardWithFormStyled = styled.div({
 ".ant-card-body": {
  padding: 16,
 },
 ".ant-alert": {
  marginBottom: 16,
 },
 ".ant-form-item": {
  "& + .ant-form-item": {
   marginTop: 16,
  },
 },
});

export default LayoutContainerStyle;
