import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import * as React from 'react'

export default function ToggleButtons({ label1, label2, variant, callback }) {
  const [selected, setselected] = React.useState(label1)

  const handleSelection = (event, newAlignment) => {
    if (newAlignment) {
      event.stopPropagation()
      setselected(newAlignment)
      if (callback) callback(newAlignment)
    }
  }

  let sx = {
    height: '35px',
    border: '1px solid #067153',
    borderRadius: '22px',
    color: '#fff',
    '& button': {
      borderRadius: '22px !important',
      border: 0,
      color: '#000',
    },
    '& > .Mui-selected': {
      backgroundColor: '#067153 !important',
      color: '#fff !important',
    },
  }
  if (variant === 'table') {
    sx = {
      height: '22px',
      border: '1px solid #888888',
      borderRadius: '22px',
      background: '#fff !important',
      '& button': {
        borderRadius: '22px !important',
        border: 0,
      },
      '& > .Mui-selected': {
        backgroundColor: `${
          selected === label1 ? '#41ADFF' : '#CC3065'
        } !important`,
        marginLeft: selected === label1 ? '-1px' : '0',
        marginTop: '-1px',
        marginRight: selected === label2 ? '-1px' : '0',
      },
    }
  }
  return (
    <ToggleButtonGroup
      value={selected}
      exclusive
      onChange={handleSelection}
      sx={sx}
    >
      <ToggleButton value={label1}>{label1}</ToggleButton>
      <ToggleButton value={label2}>{label2}</ToggleButton>
    </ToggleButtonGroup>
  )
}
