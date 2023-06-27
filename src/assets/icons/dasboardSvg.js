import React from 'react'

const DashBoardSvg = ({ selected }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29.368"
      height="23.305"
      viewBox="81.864 380.427 29.368 23.305"
    >
      <g data-name="dashboard">
        <path
          d="M97.232 403.731h14v-10h-14v10Zm2.316-7.405h9.368v4.81h-9.368v-4.81Z"
          fill={selected ? '#fff' : '#4f4b4b'}
          fill-rule="evenodd"
          data-name="Path 11"
        />
        <path
          d="M81.864 403.731h14v-10h-14v10Zm2.317-7.405h9.367v4.81H84.18v-4.81Z"
          fill={selected ? '#fff' : '#4f4b4b'}
          fill-rule="evenodd"
          data-name="Path 22"
        />
        <path
          d="M97.232 390.427h14v-10h-14v10Zm2.316-7.406h9.368v4.811h-9.368v-4.81Z"
          fill={selected ? '#fff' : '#4f4b4b'}
          fill-rule="evenodd"
          data-name="Path 20"
        />
        <path
          d="M81.864 390.427h14v-10h-14v10Zm2.317-7.406h9.367v4.811H84.18v-4.81Z"
          fill={selected ? '#fff' : '#4f4b4b'}
          fill-rule="evenodd"
          data-name="Path 21"
        />
      </g>
    </svg>
  )
}

export default DashBoardSvg
