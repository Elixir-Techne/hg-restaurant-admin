import { IconButton } from '@mui/material'

import DeleteSvg from '@/assets/icons/deleteSvg'
import EditSvg from '@/assets/icons/editSvg'

export default function ColumnActionButton({ selected }) {
  return (
    <>
      <IconButton>
        <EditSvg selected={selected} />
      </IconButton>
      <IconButton>
        <DeleteSvg selected={selected} />
      </IconButton>
    </>
  )
}
