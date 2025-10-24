import type { SVGProps } from "react";
import { Tooltip } from "./ui/tooltip";

export const FloatingBar = () => {
  return (
    // float bar to the left center of the screen
    <div className="fixed top-1/2 bottom-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-6 p-3 bg-white rounded-larger w-12 h-min shadow-[0px_6px_12px_0px_#5C738314,0px_4px_8px_0px_#5C738314]">
      <div
        className={
          "relative cursor-pointer group " +
          "[--a0:#bdbdbd] [--a1:#9e9e9e] [--b0:#bdbdbd] [--b1:#9e9e9e] [--c0:#bdbdbd] [--c1:#9e9e9e] " +
          "hover:[--a0:#870FFF] hover:[--a1:#E7CFFF] " +
          "hover:[--b0:#FFDDCD] hover:[--b1:#FF5403] " +
          "hover:[--c0:#FCFF1C] hover:[--c1:#FF9D0A] " +
          /* transitions */
          "transition-all duration-200"
        }
        aria-hidden
      >
        <AppBar1 className="w-6 h-6" />
        <Tooltip
          className="absolute left-full top-1/2 -translate-y-1/2 ml-4 hidden group-hover:block z-50"
          text="Link In Bio"
        />
      </div>
      <div
        className={
          "relative cursor-pointer group " +
          /* AppBar2 gradient vars (disabled -> color on hover) */
          "[--d0:#bdbdbd] [--d1:#9e9e9e] [--e0:#bdbdbd] [--e1:#9e9e9e] [--f0:#bdbdbd] [--f1:#9e9e9e] " +
          "hover:[--d0:#FF9868] hover:[--d1:#FF5403] " +
          "hover:[--e0:#03FFE5] hover:[--e1:#14B348] " +
          "hover:[--f0:#FCFF1C] hover:[--f1:#FF9D0A] " +
          "transition-all duration-200"
        }
        aria-hidden
      >
        <AppBar2 className="w-6 h-6" />
        <Tooltip
          className="absolute left-full top-1/2 -translate-y-1/2 ml-4 hidden group-hover:block z-50"
          text="Store"
        />
      </div>
      <div
        className={
          "relative cursor-pointer group " +
          /* default (disabled) stops */
          "[--g0:#bdbdbd] [--g1:#9e9e9e] [--h0:#bdbdbd] [--h1:#9e9e9e] [--i0:#bdbdbd] [--i1:#9e9e9e] " +
          /* on hover show full colors */
          "hover:[--g0:#FCFF1C] hover:[--g1:#FF9D0A] " +
          "hover:[--h0:#E7CFFF] hover:[--h1:#870FFF] " +
          "hover:[--i0:#03FFE5] hover:[--i1:#14B348] " +
          "transition-all duration-200"
        }
        aria-hidden
      >
        <AppBar3 className="w-6 h-6" />
        <Tooltip
          className="absolute left-full top-1/2 -translate-y-1/2 ml-4 hidden group-hover:block z-50"
          text="Media Kit"
        />
      </div>
      <div
        className={
          "relative cursor-pointer group " +
          /* default (disabled) stops for AppBar4 */
          "[--j0:#bdbdbd] [--j1:#9e9e9e] [--k0:#bdbdbd] [--k1:#9e9e9e] [--l0:#bdbdbd] [--l1:#9e9e9e] " +
          /* on hover reveal real colors */
          "hover:[--j0:#FCFF1C] hover:[--j1:#FF9D0A] " +
          "hover:[--k0:#FFDDCD] hover:[--k1:#FF5403] " +
          "hover:[--l0:#E7CFFF] hover:[--l1:#870FFF] " +
          "transition-all duration-200"
        }
        aria-hidden
      >
        <AppBar4 className="w-6 h-6" />
        <Tooltip
          className="absolute left-full top-1/2 -translate-y-1/2 ml-4 hidden group-hover:block z-50"
          text="Invoicing"
        />
      </div>
    </div>
  );
};

const AppBar1: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5073 12.9H8.50732C6.15732 12.9 4.25732 11 4.25732 8.65V8.25C4.25732 5.9 6.15732 4 8.50732 4H12.5073C14.8573 4 16.7573 5.9 16.7573 8.25V8.65C16.7573 10.99 14.8473 12.9 12.5073 12.9Z"
      stroke="url(#paint0_linear_20739_1625)"
      stroke-width="2.7"
      stroke-miterlimit="10"
    />
    <path
      d="M16.7773 16.9H12.7773C10.4273 16.9 8.52734 15 8.52734 12.65V12.25C8.52734 9.9 10.4273 8 12.7773 8H16.7773C19.1273 8 21.0273 9.9 21.0273 12.25V12.65C21.0273 15 19.1273 16.9 16.7773 16.9Z"
      stroke="url(#paint1_linear_20739_1625)"
      stroke-width="2.7"
      stroke-miterlimit="10"
    />
    <path
      d="M5.4575 18.6L5.2075 18.99C5.1475 19.09 5.0275 19.12 4.9375 19.06L3.6575 18.3C3.5575 18.24 3.5275 18.12 3.5875 18.03L3.8375 17.64C3.8975 17.54 3.8675 17.42 3.7675 17.37L3.0975 16.98C2.9675 16.9 2.9675 16.71 3.0975 16.63L6.4375 14.75C6.5775 14.67 6.7375 14.77 6.7375 14.93L6.6975 18.77C6.6975 18.92 6.5275 19.02 6.3975 18.94L5.7275 18.55C5.6475 18.47 5.5175 18.51 5.4575 18.6Z"
      fill="url(#paint2_linear_20739_1625)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_20739_1625"
        x1="2.89818"
        y1="8.44539"
        x2="18.1055"
        y2="8.44539"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--a0, #9e9e9e)" />
        <stop offset="1" stop-color="var(--a1, #bdbdbd)" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_20739_1625"
        x1="7.16915"
        y1="12.4546"
        x2="22.3765"
        y2="12.4546"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--b0, #9e9e9e)" />
        <stop offset="1" stop-color="var(--b1, #bdbdbd)" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_20739_1625"
        x1="3.66394"
        y1="15.6385"
        x2="7.30948"
        y2="17.8092"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--c0, #9e9e9e)" />
        <stop offset="1" stop-color="var(--c1, #bdbdbd)" />
      </linearGradient>
    </defs>
  </svg>
);

const AppBar2: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.9998 22.0599H4.97984C4.62984 22.0599 4.33984 21.7799 4.33984 21.4199V7.39995C4.33984 7.04995 4.61984 6.75995 4.97984 6.75995H18.9998C19.3498 6.75995 19.6398 7.03995 19.6398 7.39995V21.4199C19.6398 21.7699 19.3498 22.0599 18.9998 22.0599Z"
      fill="url(#paint0_linear_20739_1593)"
    />
    <path
      d="M20.4602 15.72L7.59017 5.22003C7.13017 4.84003 7.39017 4.09003 7.99017 4.09003H20.8602C21.2102 4.09003 21.5002 4.37003 21.5002 4.73003V15.24C21.5002 15.77 20.8802 16.06 20.4602 15.72Z"
      fill="url(#paint1_linear_20739_1593)"
    />
    <path
      d="M3.54 13.58L16.41 3.07C16.87 2.69 16.61 1.94 16.01 1.94H3.14C2.79 1.94 2.5 2.22 2.5 2.58V13.09C2.5 13.62 3.12 13.92 3.54 13.58Z"
      fill="url(#paint2_linear_20739_1593)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_20739_1593"
        x1="4.34182"
        y1="14.4112"
        x2="19.6375"
        y2="14.4112"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--d0, #FF9868)" />
        <stop offset="1" stop-color="var(--d1, #FF5403)" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_20739_1593"
        x1="7.35294"
        y1="9.97921"
        x2="21.5002"
        y2="9.97921"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--e0, #03FFE5)" />
        <stop offset="1" stop-color="var(--e1, #14B348)" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_20739_1593"
        x1="2.5"
        y1="7.8319"
        x2="16.6472"
        y2="7.8319"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--f0, #FCFF1C)" />
        <stop offset="1" stop-color="var(--f1, #FF9D0A)" />
      </linearGradient>
    </defs>
  </svg>
);

const AppBar3: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.8403 4.92499V11.025C15.8403 11.415 15.5303 11.725 15.1403 11.725H9.98027C9.59027 11.725 9.28027 11.415 9.28027 11.025V10.055H4.98027C4.59027 10.055 4.28027 9.74499 4.28027 9.35499V3.25499C4.28027 2.86499 4.59027 2.55499 4.98027 2.55499H10.1403C10.5303 2.55499 10.8403 2.86499 10.8403 3.25499V4.22499H15.1403C15.5203 4.22499 15.8403 4.54499 15.8403 4.92499Z"
      fill="url(#paint0_linear_20739_1598)"
    />
    <path
      d="M11.59 14.1849H2.7C2.31 14.1849 2 13.8749 2 13.4849V6.55492C2 6.16492 2.31 5.85492 2.7 5.85492H11.59C11.98 5.85492 12.29 6.16492 12.29 6.55492V13.4849C12.29 13.8749 11.98 14.1849 11.59 14.1849Z"
      fill="url(#paint1_linear_20739_1598)"
    />
    <path
      d="M21.3 21.445H2.7C2.31 21.445 2 21.135 2 20.745V8.47496C2 8.08496 2.31 7.77496 2.7 7.77496H21.3C21.69 7.77496 22 8.08496 22 8.47496V20.745C22 21.135 21.69 21.445 21.3 21.445Z"
      fill="url(#paint2_linear_20739_1598)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_20739_1598"
        x1="4.27548"
        y1="7.14244"
        x2="15.8365"
        y2="7.14244"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--g0, #FCFF1C)" />
        <stop offset="1" stopColor="var(--g1, #FF9D0A)" />
      </linearGradient>

      <linearGradient
        id="paint1_linear_20739_1598"
        x1="2"
        y1="10.0223"
        x2="12.293"
        y2="10.0223"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--h0, #E7CFFF)" />
        <stop offset="1" stopColor="var(--h1, #870FFF)" />
      </linearGradient>

      <linearGradient
        id="paint2_linear_20739_1598"
        x1="2"
        y1="14.6143"
        x2="22"
        y2="14.6143"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--i0, #03FFE5)" />
        <stop offset="1" stopColor="var(--i1, #14B348)" />
      </linearGradient>
    </defs>
  </svg>
);

const AppBar4: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.5202 6.64998V21.05C20.5202 21.63 20.0502 22.1 19.4702 22.1H9.29023C8.71023 22.1 8.24023 21.63 8.24023 21.05V20.16L17.3402 16.72C17.7002 16.58 17.9402 16.24 17.9402 15.85V5.59998H19.4702C20.0502 5.59998 20.5202 6.06998 20.5202 6.64998Z"
      fill="url(#paint0_linear_20739_1603)"
    />
    <path
      d="M17.9402 5.59998V15.86C17.9402 16.25 17.7002 16.59 17.3402 16.73L8.24023 20.17V6.64998C8.24023 6.06998 8.71023 5.59998 9.29023 5.59998H17.9402Z"
      fill="url(#paint1_linear_20739_1603)"
    />
    <path
      d="M17.94 2.92999V5.59999H9.28998C8.70998 5.59999 8.23998 6.06999 8.23998 6.64999V20.17L4.73998 21.49C4.12998 21.72 3.47998 21.27 3.47998 20.62V2.91999C3.47998 2.40999 3.89998 1.98999 4.40998 1.98999H17.01C17.52 1.99999 17.94 2.41999 17.94 2.92999Z"
      fill="url(#paint2_linear_20739_1603)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_20739_1603"
        x1="8.2422"
        y1="13.8522"
        x2="20.5182"
        y2="13.8522"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--j0, #FCFF1C)" />
        <stop offset="1" stopColor="var(--j1, #FF9D0A)" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_20739_1603"
        x1="8.2422"
        y1="12.8857"
        x2="17.9372"
        y2="12.8857"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--k0, #FFDDCD)" />
        <stop offset="1" stopColor="var(--k1, #FF5403)" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_20739_1603"
        x1="3.48199"
        y1="11.7778"
        x2="17.937"
        y2="11.7778"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--l0, #E7CFFF)" />
        <stop offset="1" stopColor="var(--l1, #870FFF)" />
      </linearGradient>
    </defs>
  </svg>
);
