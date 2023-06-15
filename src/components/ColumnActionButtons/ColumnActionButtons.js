import { IconButton } from '@mui/material'
import { useRouter } from 'next/navigation'

import DeleteSvg from '@/assets/icons/deleteSvg'
import EditSvg from '@/assets/icons/editSvg'

export default function ColumnActionButton({ selected, title }) {
  const route = useRouter()
  const handleDelete = () => {
    console.log('========= delete')
  }
  const handleEdit = () => {
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
