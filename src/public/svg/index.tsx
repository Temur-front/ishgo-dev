import { SVGProps } from "react";

const Eye = (props: SVGProps<SVGSVGElement>) => (
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
);
const Heart = (props: SVGProps<SVGSVGElement>) => (
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
);
const New_status = (props: SVGProps<SVGSVGElement>) => (
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
);
const Calendar = (props: SVGProps<SVGSVGElement>) => (
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
);
const Icons = {
  Eye,
  Heart,
  New_status,
  Calendar,
};
export default Icons;
