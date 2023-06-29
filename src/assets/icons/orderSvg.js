import React from 'react'

const OrderSvg = ({ selected }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="34.963" height="33.2">
      <path
        d="m9.8 18.663 5.176-5.175L2.139.67c-2.852 2.853-2.852 7.48 0 10.35l7.662 7.643Zm12.398-3.31c2.798 1.299 6.73.385 9.637-2.523 3.492-3.492 4.169-8.502 1.48-11.19-2.669-2.67-7.679-2.012-11.19 1.48-2.907 2.908-3.821 6.84-2.523 9.637L1.755 30.604l2.579 2.578L16.932 20.62l12.58 12.58 2.579-2.578-12.58-12.58 2.687-2.688Z"
        fill={selected ? '#fff' : '#4f4b4b'}
        fillRule="evenodd"
        data-name="Icon material-restaurant-menu"
      />
    </svg>
  )
}

export default OrderSvg
