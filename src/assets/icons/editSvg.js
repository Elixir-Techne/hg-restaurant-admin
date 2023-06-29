import React from 'react'

const EditSvg = ({ selected }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26.95"
      height="23.951"
      viewBox="16.599 190.4 26.95 23.951"
    >
      <path
        d="m35.436 194.288 4.22 4.22a.457.457 0 0 1 0 .646l-10.218 10.219-4.342.482a.91.91 0 0 1-1.006-1.006l.482-4.342 10.218-10.219a.457.457 0 0 1 .646 0Zm7.58-1.07-2.284-2.284a1.83 1.83 0 0 0-2.583 0l-1.656 1.656a.457.457 0 0 0 0 .646l4.22 4.22a.457.457 0 0 0 .646 0l1.656-1.656a1.83 1.83 0 0 0 0-2.583Zm-8.45 13.376v4.763H19.592v-14.972h10.752c.15 0 .29-.061.398-.164l1.871-1.872a.561.561 0 0 0-.397-.959H18.845a2.246 2.246 0 0 0-2.246 2.246v16.47a2.246 2.246 0 0 0 2.246 2.245h16.469a2.246 2.246 0 0 0 2.246-2.246v-7.383c0-.5-.604-.748-.96-.398l-1.87 1.872a.575.575 0 0 0-.165.398Z"
        fill={selected ? 'white' : '#888'}
        fillRule="evenodd"
        data-name="Icon awesome-edit"
      />
    </svg>
  )
}

export default EditSvg
