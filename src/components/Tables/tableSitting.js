import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styled from 'styled-components'

import { deleteTable } from '@/utils/api'

import Crawn from '../../../public/images/crawn.png'
import Delete from '../../../public/images/delete.png'
import Edit from '../../../public/images/edit.png'

const StyledTableBox = styled(Box)({
  flexDirection: 'column',
  background: ' #ffffff',
  borderRadius: '20px',
  filter: 'drop-shadow(0px 10px 10px rgba(196,200,208,0.4 ))',
  padding: '1rem 0.5rem',
  '@media (max-width:1024px)': {
    padding: '0.1rem 0.3rem',
  },
})
const SyledImage = styled(Image)({
  margin: '0.5rem',
  cursor: 'pointer',
  '@media (max-width:1024px)': {
    margin: '0',
    height: '3rem',
    width: '3.5rem',
  },
})
const SyledImageIcon = styled(Image)({
  margin: '0.5rem',
  cursor: 'pointer',
  '@media (max-width:1024px)': {
    margin: '0.2rem',
    height: '1rem',
    width: '1rem',
  },
})
const SyledImageCrawn = styled(Image)({
  cursor: 'pointer',
  '@media (max-width:1024px)': {
    height: '0.7rem',
    width: '0.8rem',
  },
})
function TableSitting({ TableDetails }) {
  const [tables, setTables] = useState(TableDetails)
  const route = useRouter()
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

  const handleEditTable = (e) => {
    e.preventDefault()
    route.push('table-management/edit')
  }
  const handleDeleteTable = (id) => {
    setTables((prev) =>
      prev.map((table) =>
        table.id === id
          ? {
              ...table,
              table_clear: 'yes',
            }
          : table,
      ),
    )
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
        '@media (max-width:1024px)': {
          gap: '1vw',
        },
        '@media (max-width:525px)': {
          justifyContent: 'center',
          gap: '1vh',
          marginTop: '1.5rem',
        },
      }}
    >
      {tables &&
        tables
          ?.filter((el) => el.table_clear === 'no')
          ?.map((item, index) => {
            return (
              <StyledTableBox
                display="flex"
                key={item.id}
                sx={{
                  flexGrow: 1,
                  height: item.table_sitting <= 10 ? '216px' : '475px',
                  // width: item.table_sitting <= 10 ? '204px' : '268px',
                  width: 'auto',
                  '@media (max-width:1024px)': {
                    width: '116px',
                    height: item.table_sitting <= 10 ? '114px' : '238px',
                  },
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
                        fontSize: '1rem',
                        color: '#077254',
                        fontWeight: 'bold',
                        '@media (max-width:1024px)': {
                          fontSize: '0.7rem',
                        },
                      }}
                    >
                      Table {item.table_name}
                    </Typography>
                    <SyledImageCrawn
                      src={Crawn}
                      alt="CrawnIcon"
                      // style={{
                      //   '@media (max-width:1024px)': {
                      //     height: '0.4rem',
                      //     width: '0.6rem',
                      //   },
                      // }}
                    />
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
                  sx={{
                    '@media (max-width:1024px)': {
                      marginTop: '0.3rem',
                    },
                  }}
                >
                  <SyledImage
                    src={item?.table_image}
                    alt="tableImage"
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
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        color: TableWaiterStatus[item.status],
                        '@media (max-width:1024px)': {
                          fontSize: '0.6rem',
                        },
                      }}
                    >
                      Saba Javed
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.7rem',
                        color: TableTimeStatus[item.status],
                        '@media (max-width:1024px)': {
                          fontSize: '0.5rem',
                        },
                      }}
                    >
                      5:00 - 6:00 PM
                    </Typography>
                  </Box>
                  <Box display="flex" flexDirection="row" alignItems="center">
                    <SyledImageIcon
                      src={Edit}
                      onClick={handleEditTable}
                      alt="editIcon"
                    />
                    <SyledImageIcon
                      src={Delete}
                      onClick={() => handleDeleteTable(item.id)}
                      alt="deleteIcon"
                    />
                  </Box>
                </Box>
              </StyledTableBox>
            )
          })}
    </Box>
  )
}
export default TableSitting
