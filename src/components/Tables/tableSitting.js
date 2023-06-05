import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import styled from 'styled-components'

import Crawn from '../../../public/images/crawn.png'
import Delete from '../../../public/images/delete.png'
import Edit from '../../../public/images/edit.png'

const StyledTableBox = styled(Box)({
  flexDirection: 'column',
  background: ' #ffffff',
  borderRadius: '20px',
  filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
  padding: '1rem 0.5rem',
})
const SyledImage = styled(Image)({
  margin: '0.5rem',
})
function TableSitting({ TableDetails }) {
  const TableStatusIndicator = {
    reserved: '#DE0D65',
    occupied: '#49BF91',
    free: '#888888',
  }

  const TableWaiterStatus = {
    reserved: '#3C49FF',
    occupied: '#FFFFFF',
    free: '#C57123',
  }
  const TableTimeStatus = {
    reserved: '#077254',
    occupied: '#FFFFFF',
    free: '#C57123',
  }
  const TableImageWidth = {
    2: '86',
    4: '86',
    8: '145',
    16: '81',
  }
  const TableImageHeight = {
    2: '86',
    4: '86',
    8: '96',
    16: '284',
  }
  return (
    <Box
      display="flex"
      gap="2.5vw"
      flexWrap="wrap"
      sx={{
        width: '100%',
        marginTop: '3.5rem',
        padding: '0.5rem',
      }}
    >
      {TableDetails &&
        TableDetails?.map((item, index) => {
          return (
            <StyledTableBox
              display="flex"
              key={item.id}
              sx={{
                height: item.table_sitting <= 10 ? '216px' : '475px',
                width: item.table_sitting <= 10 ? '204px' : '234px',
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    sx={{
                      marginRight: '0.5rem',
                      fontSize: '16px',
                      color: '#077254',
                      fontWeight: 'bold',
                    }}
                  >
                    Table {item.table_name}
                  </Typography>
                  <Image src={Crawn} />
                </Box>
                <FiberManualRecordIcon
                  sx={{ color: TableStatusIndicator[item.status] }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt="1.5rem"
              >
                <SyledImage
                  src={item?.table_image}
                  width={TableImageWidth[item.table_sitting]}
                  height={TableImageHeight[item.table_sitting]}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                sx={{
                  justifyContent: 'space-between',
                  marginTop: item.table_sitting <= 10 ? '0' : 'auto',
                }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  mr="0.5rem"
                >
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: TableWaiterStatus[item.status],
                    }}
                  >
                    Saba Javed
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '11px',
                      color: TableTimeStatus[item.status],
                    }}
                  >
                    5:00 - 6:00 PM
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <SyledImage src={Edit} />
                  <SyledImage src={Delete} />
                </Box>
              </Box>
            </StyledTableBox>
          )
        })}
    </Box>
  )
}
export default TableSitting
