import React from 'react'

const DeleteSvg = ({ selected }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19.193"
      height="23.623"
      viewBox="1780.714 292.83 19.193 23.623"
    >
      <path
        d="M1782.19 300.212v14.765a1.48 1.48 0 0 0 1.477 1.476h13.288a1.48 1.48 0 0 0 1.476-1.476v-14.765h-16.24Zm4.43 13.288h-1.477v-10.335h1.477V313.5Zm2.953 0h-1.477v-10.335h1.477V313.5Zm2.952 0h-1.476v-10.335h1.476V313.5Zm2.953 0h-1.476v-10.335h1.476V313.5Zm3.322-17.717h-4.798v-1.845a1.11 1.11 0 0 0-1.108-1.108h-5.167a1.11 1.11 0 0 0-1.107 1.108v1.845h-4.799a1.11 1.11 0 0 0-1.107 1.107v1.846h19.193v-1.846a1.11 1.11 0 0 0-1.107-1.107Zm-6.275 0h-4.429v-1.458h4.43v1.458Z"
        fill={selected ? 'white' : '#888'}
        fillRule="evenodd"
        data-name="Icon metro-bin"
      />
    </svg>
  )
}

export default DeleteSvg
