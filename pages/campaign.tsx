import { Box, useTheme, useMediaQuery } from '@mui/material';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react'
import { CampaignLayout } from '@/layouts/CampaignLayout';



export default function Campaign() {
  const router = useRouter()
  const { breakpoints } = useTheme();
  const downLg = useMediaQuery(breakpoints.down('lg'));
  const activity = router?.asPath.indexOf("campaign")
  console.log('campaigncard+URL', router?.asPath)


  if (activity === 1) { //http://localhost:3000/campaign/?cardHash=864506BcB021E8
  } else { //链接无效 tip
    console.log('campaigncardlink+invalid', activity)
  }


  const getContent = () => {
    
  }

  if (downLg) {
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // mt: '10px',
        width: '100%',
        height: 'fit-content',
      }}>
        {/* {getContent()} */}
      </Box>
    )
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      mt: '120px',
      mr: '100px',
      width: 'fit-content',
      height: '600px',
    }}>
      {/* {getContent()} */}
    </Box>
  )
}

Campaign.getLayout = function getLayout(page: React.ReactElement) {
  return <CampaignLayout>{page}</CampaignLayout>;
};

