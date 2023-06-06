const TableMangSvg = ({ selected }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42.119"
      height="23.161"
      viewBox="0 1.219 42.119 23.161"
    >
      <path
        d="M0 11.674V9.987c0-.839.96-1.555 2.878-2.15 1.92-.596 4.246-.894 6.982-.894 2.734 0 5.062.298 6.98.893 1.92.596 2.88 1.313 2.88 2.15v1.688c-.022.839-.993 1.55-2.912 2.134-1.92.584-4.235.877-6.948.877s-5.03-.292-6.948-.877C.992 13.223.022 12.513 0 11.674Zm9.496-8.04v-.893c.043-.42.75-.778 2.117-1.075 1.367-.298 3.011-.447 4.93-.447 1.919 0 3.557.149 4.913.447 1.357.297 2.057.655 2.101 1.075h.033v.893h-.033c-.044.442-.744.81-2.1 1.109-1.357.297-2.995.446-4.914.446-1.919 0-3.563-.149-4.93-.446-1.368-.298-2.074-.667-2.117-1.109Zm6.98 16.346V17.86c.089-1.234 1.38-2.277 3.872-3.125 2.493-.85 5.48-1.274 8.965-1.274 3.486 0 6.469.424 8.95 1.274 2.481.848 3.767 1.89 3.856 3.125v2.119c-.067 1.213-1.347 2.25-3.84 3.11-2.491.86-5.48 1.29-8.966 1.29-3.484 0-6.473-.425-8.965-1.273-2.492-.85-3.783-1.894-3.871-3.127ZM24.02 8.696v-1.39c.044-.638.877-1.179 2.498-1.62 1.62-.442 3.556-.662 5.806-.662s4.186.22 5.807.662c1.62.441 2.454.982 2.498 1.62v1.39c0 .64-.81 1.192-2.433 1.655-1.62.463-3.579.695-5.873.695s-4.25-.232-5.873-.695c-1.62-.463-2.43-1.015-2.43-1.655Z"
        fill={selected ? '#fff' : '#4f4b4b'}
        fill-rule="evenodd"
        data-name="Icon zocial-opentable"
      />
    </svg>
  )
}

export default TableMangSvg
