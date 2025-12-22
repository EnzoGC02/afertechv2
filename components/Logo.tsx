import React from "react";

type LogoProps = Omit<React.SVGProps<SVGSVGElement>, "color"> & {
  /** Cualquier color CSS: "#fff", "rgb(...)", "hsl(...)" */
  color?: string;
  /** Si pasás `size`, se toma como ancho y se calcula el alto manteniendo proporción 1920x1080 */
  size?: number;
  width?: number | string;
  height?: number | string;
};

const VIEWBOX_W = 1920;
const VIEWBOX_H = 1080;
const ASPECT = VIEWBOX_H / VIEWBOX_W;

const Logo: React.FC<LogoProps> = ({
  color, // opcional: si no lo pasás, podés usar Tailwind con className="text-..."
  className,
  size,
  width,
  height,
  style,
  ...svgProps
}) => {
  const resolvedWidth = width ?? size ?? 120;
  const resolvedHeight =
    height ??
    (typeof resolvedWidth === "number"
      ? Math.round(resolvedWidth * ASPECT)
      : 80);

  return (
    <LogoSVG
      width={resolvedWidth}
      height={resolvedHeight}
      className={className}
      color={color}
      style={style}
      {...svgProps}
    />
  );
};

export default Logo;

interface LogoSVGProps extends React.SVGProps<SVGSVGElement> {
  /** Controla el color real usando currentColor */
  color?: string;
}

const LogoSVG: React.FC<LogoSVGProps> = ({ color, style, ...props }) => {
  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      style={{ color, ...style }}
      {...props}
    >
      {/* Letras de la parte inferior */}
      <path d="M447.77 908.5H409.99L461.35 772.92H500.08L551.44 908.5H513.66L504.94 884.3H456.49L447.77 908.5ZM465.21 859.09H496.23L480.69 813.6L465.21 859.09Z" />
      <path d="M607.98 908.5H573.11V772.92H680.63V800.02H607.98V831.99H665.09V859.09H607.98V908.49V908.5Z" />
      <path d="M813.7 908.5H706.18V772.92H813.7V800.02H741.05V826.17H798.16V853.27H741.05V881.38H813.7V908.48V908.5Z" />
      <path d="M841.18 772.92H922.55C936.1 772.92 945.94 775.99 952.06 782.14C958.21 788.26 961.28 798.1 961.28 811.65V829.09C961.28 839.82 959.49 848.15 955.91 854.07C952.36 859.99 946.72 863.93 938.98 865.86L963.23 908.5H925.45L903.15 867.82H876.05V908.5H841.18V772.92ZM926.41 811.65C926.41 803.91 922.53 800.03 914.79 800.03H876.06V840.71H914.79C922.53 840.71 926.41 836.84 926.41 829.09V811.65Z" />
      <path d="M1058.49 908.5H1023.67V800.03H982.99V772.93H1099.18V800.03H1058.5V908.5H1058.49Z" />
      <path d="M1232.28 908.5H1124.76V772.92H1232.28V800.02H1159.63V826.17H1216.74V853.27H1159.63V881.38H1232.28V908.48V908.5Z" />
      <path d="M1364.38 906.54C1335.57 909.14 1311.68 910.45 1292.68 910.45C1280.05 910.45 1270.74 907.49 1264.79 901.56C1258.87 895.61 1255.9 886.29 1255.9 873.62V811.64C1255.9 798.09 1258.95 788.25 1265.07 782.13C1271.22 775.98 1281.07 772.91 1294.63 772.91H1364.38V800.01H1302.35C1294.64 800.01 1290.78 803.89 1290.78 811.63V873.61C1290.78 876.6 1291.63 878.96 1293.35 880.71C1295.1 882.43 1297.33 883.28 1300.06 883.28C1302.79 883.28 1305.73 883.27 1308.95 883.22C1312.19 883.15 1315.54 883.05 1319.01 882.94C1322.5 882.8 1326.02 882.66 1329.57 882.55C1333.15 882.41 1337.73 882.14 1343.32 881.77C1348.94 881.36 1355.96 880.9 1364.39 880.37V906.52L1364.38 906.54Z" />
      <path d="M1510.01 908.5H1475.14V853.29H1426.74V908.5H1391.87V772.92H1426.74V826.18H1475.14V772.92H1510.01V908.5Z" />

      {/* Definiciones de Máscaras - MANTENER fill="white" AQUÍ */}
      <defs>
        <mask
          id="mask0_3214_2"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="679"
          y="407"
          width="467"
          height="302"
        >
          <path
            d="M1145.69 407.12H679.83V708.73H1145.69V407.12Z"
            fill="white"
          />
        </mask>

        <mask
          id="mask1_3214_2"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="745"
          y="169"
          width="531"
          height="540"
        >
          <path d="M1275.34 169.55H745.1V708.73H1275.34V169.55Z" fill="white" />
        </mask>

        <mask
          id="mask2_3214_2"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="909"
          y="607"
          width="137"
          height="122"
        >
          <path
            d="M1045.54 607.41H909.63V728.07H1045.54V607.41Z"
            fill="white"
          />
        </mask>
      </defs>

      {/* Formas Geométricas Enmascaradas */}
      <g mask="url(#mask0_3214_2)">
        <path d="M1144.56 708.41L1144.66 708.55L1072.57 708.49L1037.01 645.73L976.37 538.77L918.03 645.46L883.55 708.57H704.37L704.43 708.03C696.17 707.79 687.96 707.21 679.84 706.33L713.12 645.46H846.49L880.83 582.7L976 408.63L1012.28 473.15L1109.3 645.71L1144.56 708.43V708.41Z" />
      </g>

      <g mask="url(#mask1_3214_2)">
        <path d="M1276.3 708.55H1204.64C1204.64 708.55 1204.58 708.45 1204.5 708.35H1203.82L1168.4 645.63C1122.69 566.06 1041.74 424.3 973.35 300.33L818.97 582.68H747.41L973.26 169.59L1009.74 234.5L1013.19 240.58L1030 270.51L1034.57 278.57L1240.9 645.56L1276.18 708.26L1276.32 708.55H1276.3Z" />
      </g>

      <g mask="url(#mask2_3214_2)">
        <path d="M914.94 721.19L978.02 612.57L1039.21 720.25L914.94 721.19Z" />
      </g>
    </svg>
  );
};
