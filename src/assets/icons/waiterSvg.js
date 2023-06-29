import React from 'react'

const WaiterSvg = ({ selected }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="31.695" height="31.695">
      <path
        d="M15.847 0C11.49 0 7.924 4.437 7.924 9.905c0 5.467 3.565 9.904 7.923 9.904 4.358 0 7.924-4.437 7.924-9.904C23.77 4.437 20.205 0 15.847 0Zm-8.28 19.81C3.367 20.006 0 23.453 0 27.732v3.962h31.695v-3.962a7.904 7.904 0 0 0-7.568-7.924c-2.139 2.417-5.07 3.962-8.28 3.962-3.209 0-6.14-1.545-8.28-3.962Z"
        fill={selected ? '#fff' : '#4f4b4b'}
        fillRule="evenodd"
        data-name="Icon open-person"
      />
    </svg>
  )
}

export default WaiterSvg
