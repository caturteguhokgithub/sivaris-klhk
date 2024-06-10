import styled from "@emotion/styled";
import Color from "@/assets/color";
import facepaint from "facepaint";

const mq = facepaint([
 "@media(max-width: 1199.98px)",
 "@media(max-width: 991.98px)",
 "@media(max-width: 767.98px)",
 "@media(max-width: 575.98px)",
]);

export const LoginStyled = styled.div(
 mq({
  margin: [100, undefined, undefined, undefined, 0],
  padding: [24, undefined, undefined, 0],
  display: "flex",
  minHeight: ["calc(100vh - 200px)", undefined, undefined, undefined, "100vh"],
  flex: "0 0 100%",
  maxWidth: "100%",
  position: "relative",
  zIndex: 1,
  boxShadow: "0px 0px 50px 0px rgba(0,0,0,0.6)",
  // backgroundColor: Color.white,
  backgroundImage:
   "url(https://res.cloudinary.com/caturteguh/image/upload/v1642576936/other/4907157_uw4yb2.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
  "& > button": {
   position: "absolute",
   bottom: 24,
   right: 24,
   zIndex: 1,
   backgroundColor: Color.approval.contrast,
   borderColor: Color.approval.contrast,
   "&:hover": {
    backgroundColor: Color.approval.hover,
    borderColor: Color.approval.hover,
   },
  },
  "& > div": {
   display: ["flex", undefined, undefined, "none"],
   alignItems: "center",
  },
 })
);

export const LeftStyled = styled.div({
 display: "flex",
 justifyContent: "flex-end",
});

export const RightStyled = styled.div({
 display: "flex",
 justifyContent: "flex-start",
});

export const LoginStyledVerseTwo = styled.div({
 padding: 0,
 display: "flex",
 justifyContent: "center",
 alignItems: "center",
 position: "relative",
 zIndex: 3,
 height: "100vh",
 "& > div": {
  margin: 30,
  textAlign: "right",
  "& + div": {
   "& > div": {
    borderRadius: 10,
    boxShadow: "0px 0px 50px 0px rgba(0,0,0,0.6)",
    flex: "0 0 360px",
    maxWidth: 360,
    "& > div": {
     "& + div": {
      minWidth: "100%",
      button: {
       width: "100%",
      },
     },
    },
   },
  },
 },
});

export const OverlayBackground = styled.div({
 position: "fixed",
 zIndex: 2,
 left: 0,
 right: 0,
 bottom: 0,
 top: 0,
 background: "rgba(19, 92, 51, 0.4)",
});

export const FormStyled = styled.div(
 mq({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // flex: ["0 0 30%", "0 0 30%", "0 0 50%", "0 0 100%"],
  // maxWidth: ["30%", "30%", "50%", "100%"],
  // padding: 32,
  backgroundColor: Color.white,
  // boxShadow: "-5px 0px 5px 0px rgba(0,0,0,0.3)",
  zIndex: 2,
  position: "relative",
  height: "100%",
  flex: "0 0 100%",
  maxWidth: "100%",
  padding: [undefined, undefined, undefined, 40],
  input: {
   "& + input": {
    marginTop: 10,
    "& + button": {
     marginTop: 10,
    },
   },
  },
  button: {
   backgroundColor: Color.primaryGreen,
   border: 0,
   "&:hover": {
    backgroundColor: Color.primaryGreenDark,
   },
  },
 })
);

export const BackgroundStyled = styled.div(
 mq({
  backgroundImage:
   "url('https://res.cloudinary.com/caturteguh/image/upload/v1638965076/klhk/banner-login-clear_uv2oht.jpg')",
  backgroundPositionX: "center",
  backgroundPositionY: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "fixed",
  zIndex: 0,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
 })
);

export const Blurred = styled.div(
 mq({
  //  background: "rgba(255, 255, 255, 0.2)",
  background: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(4px)",
  height: "100vh",
  width: "100%",
 })
);

export const ImageBackgroundStyled = styled.div(
 mq({
  display: [undefined, undefined, undefined, "none"],
  // flex: ["0 0 70%", "0 0 70%", "0 0 50%", undefined, "0 0 0"],
  // maxWidth: ["70%", "70%", "50%", undefined, "0"],
  flex: "0 0 100%",
  maxWidth: "100%",
  "@media(max-width: 1024px)": {
   flex: "0 0 50%",
   maxWidth: "50%",
  },
  backgroundImage:
   "url('https://res.cloudinary.com/caturteguh/image/upload/v1638962711/klhk/banner-login-latest_mppujt.jpg')",
  backgroundPositionX: "left",
  backgroundPositionY: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  "&:before": {
   content: '""',
   position: "absolute",
   left: 0,
   right: 0,
   top: 0,
   bottom: 0,
   zIndex: 1,
   //  background: "rgba(0, 0, 0, 0.3)",
  },
 })
);

export const TitleStyled = styled.div({
 textAlign: "center",
 // LoginVerseTwo
 // textAlign: "left",
 img: {
  maxWidth: 80,
  margin: "0 auto",
  marginBottom: 24,
 },
 p: {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  marginBottom: 24,
  "& > span": {
   color: Color.black,
   fontSize: 20,
   fontWeight: 700,
   letterSpacing: 1,
   lineHeight: 1.2,
   textTransform: "uppercase",
   "& + span": {
    marginTop: 8,
    color: "grey",
    fontSize: 12,
    textTransform: "unset",
    fontWeight: 300,
    lineHeight: 1.3,
   },
  },
 },
 h1: {
  fontSize: 40,
  fontWeight: 700,
  margin: 0,
  "& + p": {
   textAlign: "left",
   lineHeight: 1.3,
  },
 },
});

export const TitleLeftStyled = styled.div({
 "h1, h2, p": {
  color: Color.light,
 },
 h1: {
  fontSize: 80,
  margin: 0,
  lineHeight: 1,
  marginBottom: 24,
  fontWeight: 900,
 },
 h2: {
  fontSize: 30,
  lineHeight: 1.3,
  letterSpacing: 1,
 },
 img: {
  maxWidth: 80,
  margin: "0 auto",
  marginBottom: 24,
 },
});

export const CopyrightStyled = styled.div({
 marginTop: 24,
 textAlign: "center",
 color: "lightgrey",
 fontSize: 12,
 maxWidth: 300,
});

export const InputStyled = styled.div({
 minWidth: 240,
 //  width: "100%",
 "& + a": {
  marginTop: 24,
  color: Color.font.link,
 },
});

export const TotalDataStyled = styled.div(
 mq({
  position: "absolute",
  left: 24,
  bottom: 24,
  zIndex: 1,
  display: ["grid", "flex"],
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 16,
  flexWrap: [undefined, "wrap"],
  marginRight: 200,

  ".card1": {
   fontSize: 14,
   display: "block",
   position: "relative",
   maxWidth: 262,
   minWidth: [undefined, undefined, 200],
   backgroundColor: Color.light,
   borderRadius: 4,
   padding: "16px 32px",
   textDecoration: "none",
   zIndex: 0,
   overflow: "hidden",
   boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.2)",
   cursor: "default",

   p: {
    margin: 0,
    color: Color.font.ink,
    "& > span": {
     color: Color.font.pencil,
    },
    "& > strong": {
     span: {
      transition: "all 0.25s ease-in",
     },
    },
   },

   h3: {
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 0,
    color: "rgba(0,0,0,.85)",
   },

   "&:before": {
    content: "''",
    position: "absolute",
    zIndex: -1,
    top: -16,
    right: -16,
    backgroundColor: Color.approval.active,
    height: 32,
    width: 32,
    borderRadius: 32,
    transform: "scale(1)",
    transformOrigin: "50% 50%",
    transition: "transform 0.25s ease-out",
   },

   "&:hover:before": {
    transform: "scale(21)",
   },

   "&:hover": {
    p: {
     transition: "all 0.3s ease-out",
     color: "#ffffff",
     margin: 0,
     "& > span": {
      color: "#ffffff",
     },
     "& > strong": {
      "& > span": {
       fontSize: 18,
      },
     },
    },
    h3: {
     transition: "all 0.3s ease-out",
     color: "#ffffff",
    },
   },

   ".go-corner": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: 32,
    height: 32,
    overflow: "hidden",
    top: 0,
    right: 0,
    borderRadius: "0 4px 0 32px",
   },

   ".go-arrow": {
    marginTop: -8,
    marginRight: -8,
    color: "white",
   },

   "&.primary": {
    ".go-corner": {
     backgroundColor: Color.primary.hover,
    },
    "&:before": {
     backgroundColor: Color.primary.hover,
    },
   },
   "&.danger": {
    ".go-corner": {
     backgroundColor: Color.danger.hover,
    },
    "&:before": {
     backgroundColor: Color.danger.hover,
    },
   },
   "&.secondary": {
    ".go-corner": {
     backgroundColor: Color.secondary.hover,
    },
    "&:before": {
     backgroundColor: Color.secondary.hover,
    },
   },
   "&.approval": {
    ".go-corner": {
     backgroundColor: Color.approval.hover,
    },
    "&:before": {
     backgroundColor: Color.approval.hover,
    },
   },
  },
 })
);

export const TitleSystemStyled = styled.div(
 mq({
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 1,

  "& > div": {
   backgroundColor: Color.approval.contrast,
   borderBottomLeftRadius: 32,
   padding: 16,
   maxWidth: 420,
   display: ["flex", undefined, undefined, "none"],
   flexDirection: "row-reverse",
   alignItems: "center",

   "& > img": {
    margin: 0,
    padding: 0,
    width: 60,
   },
   "& > p": {
    margin: 0,
    textAlign: "right",
    marginRight: 16,
    "& > span": {
     color: Color.light,
     fontSize: 14,
     "& + span": {
      color: Color.light,
      fontSize: 10,
     },
    },
   },
  },
 })
);

export const FormLoginStyled = styled.div(
 mq({
  display: ["none !important", undefined, undefined, "block !important"],
 })
);

export default LoginStyled;
