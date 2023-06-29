import React from 'react'

const MenuSvg = ({ selected }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="41.015" height="35.72">
      <path
        d="M40.925 9.534 37.562 35.72H26.205L22.857 9.404h13.865L39.462 0l1.553.465-2.629 9.05 2.539.02ZM21.25 24.684s.425-3.395-5.464-3.395h-9.38c-5.88 0-5.464 3.395-5.464 3.395h20.308ZM.943 32.324S.527 35.72 6.408 35.72h9.38c5.889 0 5.464-3.395 5.464-3.395H.943Zm19.427-1.697c.964 0 1.742-.946 1.742-2.122 0-1.182-.778-2.123-1.742-2.123H1.743c-.96 0-1.743.94-1.743 2.123 0 1.176.784 2.122 1.743 2.122H20.37Z"
        fill={selected ? '#fff' : '#4f4b4b'}
        fillRule="evenodd"
        data-name="Icon map-food"
      />
    </svg>
  )
}

export default MenuSvg
