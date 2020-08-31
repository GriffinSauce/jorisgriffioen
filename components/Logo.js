import { darken, saturate, desaturate } from 'polished';
import theme from '../theme';
// colorLogo: #93c01f; // Original
const colorLogo = theme.color1;

const Logo = ({ width = '100px' }) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 97 82"
      style={{ width }}
      aria-label="Griffin illustration"
    >
      <title>Griffin illustration</title>
      <path
        className="logo-1"
        d="M60.35000022888184,8.810000000000002 c16.32,-3.23 13.76,3 13.76,3 a23,23 0 0 1 -2.29,0.81 C69.10000022888184,9.64 60.35000022888184,8.810000000000002 60.35000022888184,8.810000000000002 z"
      />
      <path
        className="logo-1"
        d="M7.260000228881836,0 a23.52,23.52 0 0 0 3.8200000000000003,12.64 L32.260000228881836,14.689999999999998 l14.7,-2.06 l-2.35,-6.17 l-16.17,-0.5900000000000002 z"
      />
      <path
        className="logo-1"
        d="M37.71000022888184,35 l-10.58,-0.5800000000000002 a36,36 0 0 0 -8.38,11.47 l8.38,11.32 L46.97000022888183,38.8 A50.55,50.55 0 0 1 37.71000022888184,35 z"
      />
      <path
        className="logo-1"
        d="M55.590000228881834,27.479999999999997 c-0.3800000000000001,-7 4.76,-18.67 4.76,-18.67 l5.29,11 c-1.47,4.7 -2.64,18.67 -2.64,18.67 z"
      />
      <polygon
        className="logo-1"
        points="54.67000389099121,34.58000183105469 56.23000144958496,50.86000061035156 63.88000297546387,58.209999084472656 62.99999809265137,38.51000213623047 54.67000389099121,34.58000183105469 "
      />
      <path
        className="logo-1"
        d="M65.64000022888183,19.840000000000003 C78.53000022888183,14.32 81.26000022888184,19.1 81.26000022888184,19.1 c4.06,-13.23 -9.41,-6.47 -9.41,-6.47 A26.26,26.26 0 0 0 65.64000022888183,19.840000000000003 z"
      />
      <path
        className="logo-1"
        d="M2.9400002288818357,29.689999999999998 l6.91,-1.54 l3.09,-5 l-7.94,3.27 A8.91,8.91 0 0 0 2.9400002288818357,29.689999999999998 z"
      />
      <polygon
        className="logo-1"
        points="8.44999885559082,30.080001831054688 5.590002059936523,30.94000244140625 9.850000381469727,28.150001525878906 8.44999885559082,30.080001831054688 "
      />
      <path
        className="logo-2"
        d="M12.420000228881833,14.689999999999998 a38.92,38.92 0 0 0 7.35,9.12 H38.15000022888184 l12,-5.15 l-3.22,-6 L32.260000228881836,14.689999999999998 z"
      />
      <path
        className="logo-2"
        d="M35.06000022888183,33.36 A44.36,44.36 0 0 0 46.97000022888183,38.8 L56.260000228881836,28.36 L53.260000228881836,23.810000000000002 l-8.38,4.92 z"
      />
      <polygon
        className="logo-2"
        points="43.09000205993652,42.38999938964844 40.49999809265137,56.19000244140625 56.05000114440918,48.51000213623047 55.569997787475586,44.540000915527344 45.71999931335449,39.959999084472656 43.09000205993652,42.38999938964844 "
      />
      <polygon
        className="logo-2"
        points="63.88000297546387,58.209999084472656 76.67000389099121,45.790000915527344 62.99999809265137,38.51000213623047 63.88000297546387,58.209999084472656 "
      />
      <path
        className="logo-2"
        d="M71.82000022888184,12.630000000000003 c-2.6500000000000004,-2.94 -11.47,-3.8200000000000003 -11.47,-3.8200000000000003 l5.29,11 C69.02000022888184,14.32 71.82000022888184,12.630000000000003 71.82000022888184,12.630000000000003 z"
      />
      <path
        className="logo-2"
        d="M75.20000022888183,29.689999999999998 A60.55,60.55 0 0 0 71.64000022888183,17.799999999999997 a40.45,40.45 0 0 0 -6,2 a113.42,113.42 0 0 0 -2.64,18.67 z"
      />
      <path
        className="logo-2"
        d="M27.130000228881833,34.39 L3.7500002288818344,43.209999999999994 l5.66,1.33 l13.18,-5.08 A43.85,43.85 0 0 1 27.130000228881833,34.39 z"
      />
      <path
        className="logo-2"
        d="M18.750000228881838,45.86 a9.64,9.64 0 0 1 -3.31,6.06 L14.260000228881836,60.78 a50,50 0 0 0 12.870000000000001,-3.6 z"
      />
      <path
        className="logo-2"
        d="M28.010000228881836,68.13 l6.47,-1.32 c0,3 3.74,5.07 3.74,5.07 l-3.7,3.24 A63.29,63.29 0 0 1 28.010000228881836,68.13 z"
      />
      <path
        className="logo-2"
        d="M8.010000228881836,55.269999999999996 a98.32,98.32 0 0 1 -1.17,13.67 h6.25 C11.620000228881835,67.47 14.260000228881836,60.78 14.260000228881836,60.78 z"
      />
      <path
        className="logo-2"
        d="M81.26000022888184,60.19 l0.2900000000000001,-5.62 a19.39,19.39 0 0 1 -9.620000000000001,0 z"
      />
      <path
        className="logo-3"
        d="M22.130000228881833,25.28 A51.1,51.1 0 0 0 32.260000228881836,32.19 l12.64,-3.46 L53.260000228881836,23.810000000000002 l-3.1,-5.15 l-12,5.15 z"
      />
      <path
        className="logo-3"
        d="M29.940000228881836,54.56999999999999 c6.59,4.08 17,6.87 17,6.87 L56.260000228881836,50.86 l-0.18000000000000005,-2.35 L40.50000022888183,56.19 l2.59,-13.8 z"
      />
      <path
        className="logo-3"
        d="M11.760000228881836,40.19 c-5.66,0.45 -7.6400000000000015,-0.7300000000000002 -7.6400000000000015,-0.7300000000000002 l-4.12,-0.6600000000000003 c0.3700000000000001,2 3.75,4.41 3.75,4.41 z"
      />
      <polygon
        className="logo-3"
        points="6.840002059936523,68.94000244140625 13.090002059936523,68.94000244140625 10.250001907348633,73.05999755859375 6.840002059936523,68.94000244140625 "
      />
      <polygon
        className="logo-3"
        points="27.76999855041504,56.58000183105469 28.010000228881836,68.12999725341797 34.48000144958496,66.80999755859375 27.76999855041504,56.58000183105469 "
      />
      <path
        className="logo-3"
        d="M62.17000022888183,64 l3.55,9.46 l4.85,-3.89 C64.61000022888183,67.47 62.17000022888183,64 62.17000022888183,64 z"
      />
      <path
        className="logo-3"
        d="M81.59000022888183,54.56999999999999 l0.3700000000000001,-6.21 l-5.29,-2.5700000000000003 l-4.7,8.78 C76.26000022888184,55.86 81.59000022888183,54.56999999999999 81.59000022888183,54.56999999999999 z"
      />
      <path
        className="logo-3"
        d="M73.26000022888184,67.31 l3.22,2.63 c1.45,-1 4,-0.3800000000000001 4,-0.3800000000000001 c3.66,-5.76 6.54,-0.19000000000000006 6.54,-0.19000000000000006 c-0.13,1.15 -2.18,0.06000000000000002 -2.18,0.06000000000000002 c-2.42,0.5700000000000002 -1.61,1.2 -1.61,1.2 C88.26000022888184,72 85.98000022888183,75 85.98000022888183,75 a3.63,3.63 0 0 1 -2.59,-2.25 c-3.52,0 -0.8600000000000002,1.8 -0.8600000000000002,1.8 c1.55,5.38 -1.6,4.82 -1.6,4.82 a4,4 0 0 1 -0.45,-3.66 c-2.06,-2.49 -2.84,0.25 -2.84,0.25 c0.8800000000000002,4.88 -2.1,2.29 -2.1,2.29 a5.52,5.52 0 0 1 0.13,-5.25 c-1.78,-0.91 -4.6,-4.08 -4.6,-4.08 "
      />
      <path
        className="logo-3"
        d="M38.260000228881836,71.88 c10.81,-3.75 8.55,0.7000000000000002 8.55,0.7000000000000002 c-1.9300000000000002,-0.15000000000000005 -3.68,-0.11000000000000003 -3.68,-0.11000000000000003 c-3.13,1.1 2.56,3.23 2.56,3.23 c2.63,4.34 -0.8800000000000002,3 -0.8800000000000002,3 c-0.79,-1.54 -1.55,-1.54 -1.55,-1.54 c-3.5300000000000002,-1 -1.3,0.8900000000000002 -1.3,0.8900000000000002 c1.17,2.94 -2.8200000000000003,5.13 -2.42,3.34 a5.34,5.34 0 0 0 -0.7600000000000002,-3.8200000000000003 a14.81,14.81 0 0 1 -4.22,-2.42 "
      />
      <path
        className="logo-3"
        d="M13.090000228881834,68.94 c11.34,1.45 6.49,4 6.49,4 c-1.6600000000000001,-1 -3.25,-1.7400000000000002 -3.25,-1.7400000000000002 c-3.29,-0.4 0.56,4 0.56,4 c0.4200000000000001,5 -2.15,2.43 -2.15,2.43 a4.54,4.54 0 0 0 -0.3600000000000001,-2.23 c-2.7,-2.49 -2.18,-0.3400000000000002 -2.18,-0.3400000000000002 c-0.25,3.15 -4.71,3.33 -3.56,1.9100000000000001 a9,9 0 0 0 1.62,-4 "
      />
      <path
        className="logo-4"
        d="M81.85000022888184,50.34 h3.54 c0.7300000000000002,-1.53 3.25,-2.39 3.25,-2.39 c-0.07,-6.5600000000000005 5.5600000000000005,-3.58 5.5600000000000005,-3.58 c0.53,1 -1.86,1.2 -1.86,1.2 c-1.78,1.7200000000000002 -0.7200000000000002,1.8 -0.7200000000000002,1.8 c5.16,-1.54 4.9,2.1 4.9,2.1 a4,4 0 0 1 -3.51,-0.46 c-3,1.85 0.26,1.9 0.26,1.9 c4.37,3.5300000000000002 1.33,4.72 1.33,4.72 a3.8600000000000003,3.8600000000000003 0 0 1 -2.45,-2.71 c-3.18,-0.93 -2.3200000000000003,1.6900000000000004 -2.3200000000000003,1.6900000000000004 c3.51,3.47 -0.53,2.94 -0.53,2.94 a5.24,5.24 0 0 1 -2.85,-4.3 c-2,0.2 -4.78,0.19000000000000006 -4.78,0.19000000000000006 "
      />
      <polygon
        className="logo-4"
        points="51.89999961853027,33.25 45.71999931335449,39.959999084472656 55.569997787475586,44.540000915527344 54.95999717712402,34.87999725341797 51.89999961853027,33.25 "
      />
      <path
        className="logo-4"
        d="M63.00000022888183,38.510000000000005 l12.2,-8.82 a86.67,86.67 0 0 1 1.47,16.1 z"
      />
      <path
        className="logo-4"
        d="M56.260000228881836,50.86 L46.97000022888183,61.44 A57,57 0 0 0 61.260000228881836,62.91 A24.17,24.17 0 0 1 56.260000228881836,50.86 z"
      />
      <path
        className="logo-4"
        d="M60.35000022888184,8.810000000000002 c1.7200000000000002,-6.17 3.44,-0.5700000000000002 3.44,-0.5700000000000002 C61.82000022888184,8.469999999999999 60.35000022888184,8.810000000000002 60.35000022888184,8.810000000000002 z"
      />
      <path
        className="logo-4"
        d="M9.85000022888184,28.15 L6.060000228881833,30.629999999999995 l-0.4700000000000001,0.3100000000000001 a15.79,15.79 0 0 0 -1.47,8.52 l-4.12,-0.6600000000000003 l2.94,-9.11 z"
      />
      <polygon
        className="logo-4"
        points="8.010000228881836,55.269996643066406 14.260000228881836,60.779998779296875 15.440000534057617,51.91999816894531 8.010000228881836,55.269996643066406 "
      />
      <path
        className="logo-4"
        d="M27.770000228881834,56.58 l2.17,-2 C36.46000022888184,58.209999999999994 39.50000022888183,59 39.50000022888183,59 a23.23,23.23 0 0 1 -5,7.79 z"
      />
      <path
        className="logo-4"
        d="M70.57000022888184,57.18000000000001 l6.1,-11.39 L70.89000022888183,51.400000000000006 A34.66,34.66 0 0 0 70.57000022888184,57.18000000000001 z"
      />
      <path
        className="logo-4"
        d="M51.90000022888184,33.25 L56.260000228881836,28.36 l6.77,10.15 C55.450000228881834,35.18000000000001 51.90000022888184,33.25 51.90000022888184,33.25 z"
      />
      <path
        className="logo-5"
        d="M70.89000022888183,51.400000000000006 c-1.57,12.4 3.2,15 3.2,15 l-3.52,3.09 C57.78000022888183,65.56 56.260000228881836,50.86 56.260000228881836,50.86 l7.65,7.35 z"
      />
      <path
        className="logo-6"
        d="M70.04000022888184,11.32 a3.7800000000000002,3.7800000000000002 0 0 1 3.7800000000000002,0.5 l-2.09,0.81 A7.53,7.53 0 0 0 70.04000022888184,11.32 z"
      />
      <path
        className="logo-7"
        d="M62.91000022888184,38.510000000000005 C28.740000228881833,24.67 28.450000228881834,5.869999999999997 28.450000228881834,5.869999999999997 l16.13,0.5900000000000002 C45.95000022888184,14 62.91000022888184,38.510000000000005 62.91000022888184,38.510000000000005 z"
      />
    </svg>
    <style jsx>{`
      .logo-1 {
        fill: ${colorLogo};
      }
      .logo-2 {
        fill: ${darken(0.02, desaturate(0.1995, colorLogo))};
      }
      .logo-3 {
        fill: ${darken(0.2373, saturate(0.278, colorLogo))};
      }
      .logo-4 {
        fill: ${darken(0.1451, saturate(0.278, colorLogo))};
      }
      .logo-5 {
        fill: ${darken(0.1706, saturate(0.278, colorLogo))};
      }
      .logo-6 {
        fill: #fff;
      }
      .logo-7 {
        opacity: 0.11;
      }
    `}</style>
  </>
);

export default Logo;
