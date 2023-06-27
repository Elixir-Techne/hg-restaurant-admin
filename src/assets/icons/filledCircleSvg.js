import React from 'react'

const FilledCircleSvg = ({ selected }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0.203 5.205 18 18"
    >
      <path
        d="M.203 14.155a9 9 0 1 1 0 .1z"
        fill={selected ? '#8CA6FB' : '#3c49ff'}
        fill-rule="evenodd"
        data-name="Ellipse 57"
      />
    </svg>
  )
}

export default FilledCircleSvg
