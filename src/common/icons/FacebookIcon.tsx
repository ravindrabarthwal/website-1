import * as React from 'react'

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h16V4H4zm7.133 8.004H13V18h2v-5.996h1.982v-2H15V9a1 1 0 011-1h1V6h-1a3 3 0 00-3 3v1.004h-1.867v2z"
        fill="#fff"
      />
    </svg>
  )
}

export {FacebookIcon}
