import { IconButton } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import React from 'react'

import DeleteSvg from '@/assets/icons/deleteSvg'
import EditSvg from '@/assets/icons/editSvg'

import { OrdersDetailContext } from '../../context/orderDetailContext'

export default function ColumnActionButton({
  selected,
  title,
  setRowData,
  id,
}) {
  const { setFormId } = useContext(OrdersDetailContext)
  const route = useRouter()
  const handleDelete = () => {
    setRowData((prev) => prev.filter((item) => item.id !== id))
  }
  const handleEdit = () => {
    setFormId(id)
    route.push(`${title}/edit`)
  }
  return (
    <>
      <IconButton onClick={handleEdit}>
        <EditSvg selected={selected} />
      </IconButton>
      <IconButton onClick={handleDelete}>
        <DeleteSvg selected={selected} />
      </IconButton>
    </>
  )
}
