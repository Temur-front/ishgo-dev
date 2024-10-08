import { SVGProps } from "react";

const Icons = {
  Eye: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={17}
      fill="none"
      {...props}
    >
      <path
        stroke={"#FA7A3B"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth || 1.33}
        className={props.className}
        d="M1.333 8.941s2-4.666 6.667-4.666 6.667 4.666 6.667 4.666-2 4.667-6.667 4.667S1.333 8.94 1.333 8.94Z"
      />
      <path
        stroke={"#FA7A3B"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth || 2}
        className={props.className}
        d="M8 10.941a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
    </svg>
  ),
  Heart: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={21}
      fill="none"
      {...props}
    >
      <path
        stroke="#E2E8F0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.33}
        d="M17.017 4.758a4.5 4.5 0 0 0-6.375 0l-.642.65-.642-.65a4.5 4.5 0 0 0-6.375 0c-1.766 1.767-1.875 4.75.35 7.016L10 18.441l6.667-6.666c2.225-2.267 2.116-5.25.35-7.017Z"
      />
    </svg>
  ),
  New_status: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={25}
      fill="none"
      {...props}
    >
      <rect width={24} height={24} y={0.941} fill="#32D74B" rx={6} />
      <g
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        clipPath="url(#a)"
      >
        <path d="M12 14.274a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="m14.318 13.534 1.015 6.074-3.333-2-3.334 2 1.016-6.074" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M4 4.941h16v16H4z" />
        </clipPath>
      </defs>
    </svg>
  ),
  Calendar: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...props}
    >
      <path
        stroke="#FA7A3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.33}
        d="M15.833 3.333H4.167C3.247 3.333 2.5 4.08 2.5 5v11.667c0 .92.746 1.666 1.667 1.666h11.666c.92 0 1.667-.746 1.667-1.666V5c0-.92-.746-1.667-1.667-1.667ZM13.334 1.667V5M6.667 1.667V5M2.5 8.333h15M6.667 11.667h.008M10 11.667h.008"
      />
      <path
        stroke="#FA7A3B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.334 11.667h.008M6.667 15h.008M10 15h.008M13.334 15h.008"
      />
    </svg>
  ),
  Print: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <rect width={24} height={24} fill="#746DD7" rx={6} />
      <g
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        clipPath="url(#a)"
      >
        <path d="M8 10V5.333h8V10" />
        <path d="M8 16H6.667a1.334 1.334 0 0 1-1.334-1.333v-3.334A1.333 1.333 0 0 1 6.667 10h10.666a1.333 1.333 0 0 1 1.334 1.333v3.334A1.333 1.333 0 0 1 17.333 16H16" />
        <path d="M16 13.333H8v5.334h8v-5.334Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M4 4h16v16H4z" />
        </clipPath>
      </defs>
    </svg>
  ),
  Complain: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <rect width={24} height={24} fill="#EF4444" rx={6} />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.667 14s.666-.667 2.666-.667 3.334 1.334 5.334 1.334c2 0 2.666-.667 2.666-.667V6s-.666.667-2.666.667-3.334-1.334-5.334-1.334c-2 0-2.666.667-2.666.667v8ZM6.667 18.667V14"
      />
    </svg>
  ),
  Users: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={21}
      fill="none"
      {...props}
    >
      <path
        stroke="#191919"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.334 17.952v-1.666A3.333 3.333 0 0 0 10 12.952H5a3.333 3.333 0 0 0-3.333 3.334v1.666M7.5 9.62a3.333 3.333 0 1 0 0-6.668 3.333 3.333 0 0 0 0 6.667ZM18.333 17.952v-1.666a3.333 3.333 0 0 0-2.5-3.225M13.333 3.06a3.334 3.334 0 0 1 0 6.459"
      />
    </svg>
  ),
  Categories: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={21}
      fill="none"
      {...props}
    >
      <path
        stroke="#191919"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.584 7.536 7.5 10.452 4.584 13.37l-2.917-2.917 2.917-2.916ZM10 2.119l2.916 2.917L10 7.952 7.083 5.036 10 2.119ZM15.417 7.536l2.916 2.916-2.916 2.917-2.917-2.917 2.917-2.916ZM10 12.952l2.916 2.917L10 18.786l-2.917-2.917L10 12.952Z"
      />
    </svg>
  ),
  Building2: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={21}
      fill="none"
      {...props}
    >
      <path
        stroke="#191919"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 2.119H5c-.92 0-1.667.746-1.667 1.667v13.333c0 .92.746 1.667 1.667 1.667h10c.92 0 1.666-.747 1.666-1.667V3.786c0-.92-.746-1.667-1.666-1.667Z"
      />
      <path
        stroke="#191919"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 18.786v-3.334h5v3.334M6.667 5.452h.008M13.333 5.452h.008M10 5.452h.008M10 8.786h.008M10 12.119h.008M13.333 8.786h.008M13.333 12.119h.008M6.667 8.786h.008M6.667 12.119h.008"
      />
    </svg>
  ),
  Building: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={21}
      fill="none"
      {...props}
    >
      <path
        stroke="#191919"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 18.786v-15c0-.225 0-.459.058-.684a1.23 1.23 0 0 1 .917-.925c.242-.058 1.3-.058 1.525-.058h5.833c.225 0 .459 0 .684.058a1.23 1.23 0 0 1 .925.917c.058.233.058.467.058.692v15H5ZM1.667 12.12v5c0 .916.75 1.666 1.667 1.666H5v-8.334H3.334c-.225 0-.459 0-.684.059a1.3 1.3 0 0 0-.6.333 1.29 1.29 0 0 0-.325.592 2.834 2.834 0 0 0-.058.683ZM17.35 8.01a2.834 2.834 0 0 0-.683-.058H15v10.834h1.667a1.667 1.667 0 0 0 1.666-1.667v-7.5c0-.233 0-.458-.058-.683a1.3 1.3 0 0 0-.333-.6 1.291 1.291 0 0 0-.592-.325ZM8.333 5.452h3.333M8.333 8.786h3.333M8.333 12.119h3.333M8.333 15.452h3.333"
      />
    </svg>
  ),
  Love: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={21}
      fill="none"
      {...props}
    >
      <path
        stroke="#191919"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.017 4.27a4.499 4.499 0 0 0-6.375 0L10 4.92l-.642-.65a4.5 4.5 0 0 0-6.375 0c-1.766 1.766-1.875 4.75.35 7.016L10 17.952l6.667-6.666c2.225-2.267 2.116-5.25.35-7.017Z"
      />
    </svg>
  ),
  Telegram: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={29}
      fill="none"
      {...props}
    >
      <rect
        width={27}
        height={27}
        x={0.5}
        y={0.952}
        fill="#27A6E5"
        stroke="#fff"
        rx={13.5}
      />
      <path
        fill="#FEFEFE"
        d="m19.6 9.273-2.103 10.983s-.294.762-1.103.396l-4.854-3.854-.022-.011c.655-.61 5.74-5.344 5.962-5.558.344-.332.13-.53-.27-.28L9.7 15.89l-2.897-1.01s-.456-.168-.5-.533c-.044-.366.515-.564.515-.564L18.63 8.984s.97-.442.97.29Z"
      />
    </svg>
  ),
};
export default Icons;
