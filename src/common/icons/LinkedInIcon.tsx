import * as React from 'react'

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h16V4H4zm9 5c-.518 0-1.065.158-1.548.452L11 9h-1v7h2v-4c0-.576.594-1 1-1h1c.406 0 1 .424 1 1v4h2v-4c0-1.853-1.606-3-3-3h-1zM8 8a1 1 0 100-2 1 1 0 000 2zM7 9v7h2V9H7z"
        fill="#fff"
      />
    </svg>
  )
}

export {LinkedInIcon}
