import { Box, Container, SxProps, Theme, useMediaQuery, useTheme } from '@mui/material'
import React, { ReactNode } from 'react'


interface ActivityLayoutProps {
  children: ReactNode
  containerSx?: SxProps<Theme>
  useContainer?: boolean
  withinPage?: boolean
  withBGPage?: boolean
  withFooter?: boolean
  withDexPage?: boolean
  hidFooterInMobile?: boolean
}

export function ActivityLayout({
  children,
  containerSx,
  useContainer = true,
  withinPage = false,
  withBGPage = false,
  withFooter = false,
  hidFooterInMobile = false,
}: ActivityLayoutProps) {
  const { breakpoints } = useTheme()
  const lg = useMediaQuery(breakpoints.down('lg'))

  const shouldWithPage = withinPage ? !withFooter : false

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
            src="/campaign_bg.png"
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
        <img
          src="/campaign_bg.png"
          alt="bg"
          style={{
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
