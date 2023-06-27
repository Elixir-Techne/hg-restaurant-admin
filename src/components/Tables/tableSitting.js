import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'

import { deleteTable } from '@/utils/api'

import Crawn from '../../../public/images/crawn.png'
import Delete from '../../../public/images/delete.png'
import Edit from '../../../public/images/edit.png'
import {
  StyledTableBox,
  SyledImage,
  SyledImageCrawn,
  SyledImageIcon,
  UseStyleSittingTable,
} from './styles'

function TableSitting({ TableDetails }) {
  const [tables, setTables] = useState(TableDetails)
  const route = useRouter()
  const classes = UseStyleSittingTable()
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
      className={classes.mainContainer}
    >
      {tables &&
        tables
          ?.filter((el) => el.table_clear === 'no')
          ?.map((item, index) => {
            return (
              <StyledTableBox
                display="flex"
                key={item.id}
                className={classes.tableBox}
                sx={{
                  height: item.table_sitting <= 10 ? '216px' : '475px',
                  '@media (max-width:1024px)': {
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
                    <Typography className={classes.tableTypography}>
                      Table {item.table_name}
                    </Typography>
                    <SyledImageCrawn src={Crawn} alt="CrawnIcon" />
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
                  className={classes.tableImageBox}
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
                  justifyContent="space-between"
                  sx={{
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
                      className={classes.waiter}
                      sx={{ color: TableWaiterStatus[item.status] }}
                    >
                      Saba Javed
                    </Typography>
                    <Typography
                      className={classes.time}
                      sx={{ color: TableTimeStatus[item.status] }}
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
