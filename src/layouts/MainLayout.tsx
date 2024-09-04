import { Box, Container, SxProps, Theme, useMediaQuery, useTheme } from '@mui/material'
import React, { ReactNode } from 'react'
import { useRouter } from "next/router";

interface MainLayoutProps {
  children: ReactNode
  containerSx?: SxProps<Theme>
  useContainer?: boolean
  withinPage?: boolean
  withBGPage?: boolean
  withFooter?: boolean
  hidFooterInMobile?: boolean
}
const Footer = (()=>{

  return (
    <div className='footer' style={{position:"fixed",background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 50%)",bottom:0,width:"100%",height:"216px",display:"flex",     justifyContent: "space-between",     alignItems: "center",  padding: "0 10%",
      color:"#ECECEC"}}>
      <div style={{display:"flex"}}>
        <img src="/layout_avatar.svg" alt="" srcSet="" style={{marginBottom:"30px"}} />
        <div style={{marginTop: "50px",marginLeft:"20px"}}>
          <div style={{color: "#C8C8C8",width: "104px", height: "32px", background: "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 100%)"}}>Zack</div>
          <div style={{lineHeight: "30px"}}>Hello, there happens to be a seat here, please take a seat</div>
        </div>
      </div>
      <div>
        <img src="/footer_bottom.svg" alt="" srcSet="" />
      </div>
    </div>
    
  )
})

export function MainLayout({
  children,
  containerSx,
  useContainer = true,
  withinPage = false,
  withBGPage = false,
  withFooter = false,
  hidFooterInMobile = false,
}: MainLayoutProps) {
  const { breakpoints } = useTheme()
  const lg = useMediaQuery(breakpoints.down('lg'))
  const router = useRouter()
  const shouldWithPage = withinPage ? !withFooter : false
  const handleTwitter = (()=>{
    router.push("/campaign")
  })
  const renderContent = () => {
    return (
      <>
        <Box
          component="main"
          sx={
            lg
              ? {
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  background: '#FAFAFA',
                }
              : shouldWithPage
              ? { flex: 1, overflow: 'hidden' }
              : {}
          }
        >
          {useContainer ? <Container sx={containerSx}>{children}</Container> : children}
        </Box>
      </>
    )
  }
  if (lg) {
    return (
      <Box sx={{ minHeight: '100vh', background: '#FAFAFA' }}>
        {withBGPage ? (
          <Box
            component={'img'}
            src="/layout_bg.png"
            alt="bg"
            sx={{
              position: 'fixed',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : null}
      </Box>
    )
  }
  return (
    <Box
      component="div"
      sx={[
        {
          display: { xs: 'none', lg: 'flex' },
          background: '#FAFAFA',
          flexDirection: 'column',
        },
        shouldWithPage
          ? {
              height: '100vh',
            }
          : {
              minHeight: '100vh',
            },
      ]}
    >
      {withBGPage ? (
       <> <img
       src="/layout_bg.png"
       alt="bg"
       style={{
         position: 'fixed',
         width: '100%',
         height: '100%',
         objectFit: 'cover',
       }}
     />
     <div onClick={handleTwitter} style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',color:"#FFFFFF",padding: "10px 20px",
    cursor: "pointer",backgroundImage:"url(/twitter_background.png)",    width: "480px",
    height: "64px",    display: "flex",
    justifyContent: "center",fontSize: "20px",
    alignItems: "center", }}>
     <img src="/twitter.svg" alt="Twitter Icon" className="twitter-icon"></img> &nbsp;&nbsp; Twitter Login
      </div>
     <Footer></Footer></>
      ) : null}
    </Box>
  )
}
