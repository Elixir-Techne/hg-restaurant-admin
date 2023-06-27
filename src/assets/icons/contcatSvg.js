import React from 'react'

const ContactSvg = ({ selected }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="37.605" height="28.204">
      <path
        d="M32.904 7.834V6.267l-4.7 3.134-4.701-3.134v1.567l4.7 3.134 4.701-3.134ZM34.471 0H3.134A3.133 3.133 0 0 0 0 3.134V25.07a3.133 3.133 0 0 0 3.134 3.134H34.47a3.12 3.12 0 0 0 3.118-3.134l.016-21.936A3.133 3.133 0 0 0 34.47 0ZM12.535 4.7c2.593 0 4.7 2.108 4.7 4.701a4.7 4.7 0 0 1-4.7 4.7 4.7 4.7 0 0 1-4.7-4.7c0-2.593 2.107-4.7 4.7-4.7Zm9.401 18.803H3.134v-1.567c0-3.133 6.267-4.857 9.4-4.857 3.135 0 9.402 1.723 9.402 4.857v1.567Zm12.535-9.401H21.936V4.7h12.535v9.4Z"
        fill={selected ? '#fff' : '#4f4b4b'}
        fill-rule="evenodd"
        data-name="Icon metro-contacts-mail"
      />
    </svg>
  )
}

export default ContactSvg
