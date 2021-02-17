import React from "react";
import { TimelineLite } from "gsap";
import bitmap from "../../../assets/images/Bitmap.png";
import randomHandler from "../../../share/randomHandler";
import Shapes from "./Shapes/Shapes";
import classes from "./RightContent.module.css";

class RightContent extends React.Component {
  constructor(props) {
    super(props);
    this.rightContent = null;
    this.svg = null;
    this.gsapAnimation = null;
  }

  componentDidMount() {
    this.gsapAnimationHandler();
    this.movingOrangeShapeHandler();
    this.movingBlueShapeHandler();
    this.timerMethods();
  }

  componentWillUnmount() {
    clearInterval(this.borderTimer);
    clearInterval(this.orangeShapeTimer);
    clearInterval(this.blueShapeTimer);
    clearInterval(this.hepaticShapeTimer);
  }

  gsapAnimationHandler = () => {
    const orangeShape = this.rightContent.children[1];
    const blueShape = orangeShape.nextElementSibling;
    const hepaticShape = blueShape.nextElementSibling;
    const HepaticShapeLight = hepaticShape.nextElementSibling;
    const HepaticShapeLighter = HepaticShapeLight.nextElementSibling;
    const tl = new TimelineLite();

    this.gsapAnimation = this.props.gsapAnimation(
      [
        orangeShape,
        blueShape,
        hepaticShape,
        HepaticShapeLight,
        HepaticShapeLighter,
      ],
      this.svg,
      tl
    );
  };

  timerMethods = () => {
    this.pathTimer = setInterval(this.pathHandler, 2000);
    this.orangeShapeTimer = setInterval(this.movingOrangeShapeHandler, 6000);
    this.blueShapeTimer = setInterval(this.movingBlueShapeHandler, 5000);
    this.hepaticShapeTimer = setInterval(this.movingHepaticShapeHandler, 1200);
  };

  pathHandler = () => {
    const [randomPaths] = this.moving();
    this.props.pathStyleRightContent(randomPaths);
  };

  movingOrangeShapeHandler = () => {
    const [, randomWidth, randomHeight] = this.moving();
    this.props.orangeShapeStyleRightContent(randomWidth, randomHeight);
  };

  movingBlueShapeHandler = () => {
    const [, , randomHeight, randomWidth] = this.moving();
    this.props.blueShapeStyleRightContent(randomWidth, randomHeight);
  };

  movingHepaticShapeHandler = () => {
    const [, , , , randomWidth, randomHeight] = this.moving();
    this.props.hepaticShapeStyleRightContent(randomWidth, randomHeight);
  };

  moving = () => {
    const {
      rightContentWidth,
      height,
      showShapeOnMiddleAndRightContent,
    } = this.props;

    let allWidthAndHeight = null;

    if (showShapeOnMiddleAndRightContent) {
      const widthForOrangeShape = rightContentWidth - (rightContentWidth - 16);
      const heightForOrangeAndBlueShape = height - (height - 30);
      const widthForBlueShape = rightContentWidth - (rightContentWidth - 40);
      const widthForHepaticShape = rightContentWidth - (rightContentWidth - 30);
      const heightForHepticShape = height - (height - 20);

      allWidthAndHeight = [
        widthForOrangeShape,
        heightForOrangeAndBlueShape,
        widthForBlueShape,
        widthForHepaticShape,
        heightForHepticShape,
      ];
    } else {
      const widthR = rightContentWidth - (rightContentWidth - 90);
      const heightR = height - (height - 90);
      allWidthAndHeight = [widthR, heightR, widthR, heightR, widthR, heightR];
    }

    const paths = [
      "M358.040,36.772 C379.249,26.097 399.233,17.119 419.124,10.810 C429.060,7.649 438.955,5.146 448.860,3.358 C453.812,2.464 458.765,1.748 463.720,1.213 C468.675,0.678 473.631,0.325 478.586,0.152 C518.144,-1.360 558.130,9.472 592.746,27.711 C627.508,45.902 656.021,70.712 676.201,97.287 C696.604,124.280 708.675,153.041 715.704,188.770 C719.204,206.743 721.336,225.948 722.614,247.134 C723.248,257.719 723.658,268.789 723.861,280.361 C723.962,286.144 724.011,292.053 724.005,298.082 C723.999,304.111 723.939,310.260 723.821,316.522 C722.780,366.397 718.585,424.703 705.525,479.612 C692.649,534.567 669.601,584.332 634.291,618.391 C599.361,653.108 552.168,672.119 499.776,680.788 C473.546,685.187 447.292,687.096 421.689,687.745 C408.881,688.059 396.224,688.038 383.754,687.748 C377.519,687.601 371.330,687.386 365.190,687.105 C359.050,686.823 352.959,686.475 346.920,686.060 C298.619,682.655 253.540,675.510 212.793,660.374 C131.503,632.010 67.851,560.689 26.225,450.273 C16.160,423.270 8.511,395.961 4.385,369.755 C2.324,356.649 1.151,343.816 0.998,331.396 C0.921,325.185 1.099,319.078 1.545,313.087 C1.991,307.095 2.704,301.221 3.695,295.474 C11.235,249.248 38.571,212.527 79.617,183.338 C120.185,153.864 172.910,130.899 221.522,106.796 C270.846,83.186 316.056,58.437 358.040,36.772 L358.040,36.772 Z",
      "M697.472,284.046 C713.549,301.974 727.554,319.082 738.710,336.635 C744.292,345.401 749.169,354.260 753.290,363.271 C755.350,367.777 757.223,372.318 758.903,376.898 C760.584,381.477 762.073,386.094 763.369,390.747 C773.865,427.859 771.380,467.843 759.839,504.227 C748.383,540.740 728.509,572.664 704.891,597.060 C680.882,621.750 653.126,638.912 616.853,652.698 C598.599,659.599 578.733,665.452 556.574,670.893 C545.503,673.606 533.867,676.206 521.654,678.710 C515.549,679.961 509.301,681.187 502.912,682.386 C496.523,683.584 489.995,684.756 483.335,685.895 C430.262,694.875 367.548,702.554 306.439,701.171 C245.323,699.970 187.419,688.112 143.398,661.518 C98.764,635.416 68.013,594.577 47.050,546.756 C36.492,522.825 28.568,498.375 22.123,474.289 C18.912,462.238 16.088,450.262 13.592,438.410 C12.345,432.483 11.182,426.586 10.099,420.723 C9.017,414.859 8.016,409.029 7.098,403.234 C-0.153,356.870 -2.719,312.805 4.156,271.242 C15.929,188.690 77.178,114.238 184.796,52.811 C211.142,37.897 238.353,25.207 265.190,16.070 C278.611,11.502 291.943,7.829 305.066,5.203 C311.629,3.890 318.140,2.838 324.587,2.063 C331.034,1.288 337.418,0.789 343.729,0.578 C394.397,-1.525 439.447,16.995 479.599,49.986 C519.945,82.468 556.128,127.749 592.593,168.913 C628.696,210.848 665.080,248.665 697.472,284.046 L697.472,284.046 Z",
      "M303.951,673.730 C280.315,678.266 258.357,681.481 237.266,682.106 C226.727,682.428 216.419,682.117 206.309,681.102 C201.255,680.594 196.251,679.912 191.298,679.052 C186.346,678.192 181.444,677.154 176.597,675.939 C137.856,666.370 102.288,644.585 74.072,617.042 C45.699,589.505 25.301,557.228 13.483,525.549 C1.571,493.398 -1.760,461.843 1.815,424.867 C3.647,406.277 7.163,386.863 12.081,365.744 C14.543,355.195 17.361,344.232 20.527,332.837 C22.109,327.140 23.779,321.337 25.536,315.431 C27.294,309.525 29.139,303.516 31.072,297.413 C46.570,248.830 67.572,192.866 96.170,142.707 C124.604,92.453 161.377,50.125 205.460,26.615 C249.367,2.353 300.584,-3.093 353.829,3.048 C380.504,6.065 406.478,11.529 431.456,18.044 C443.947,21.315 456.197,24.871 468.186,28.640 C474.181,30.525 480.110,32.465 485.973,34.455 C491.836,36.447 497.632,38.489 503.359,40.583 C549.135,57.413 590.706,77.008 625.761,103.224 C696.226,153.726 737.135,241.398 745.358,361.225 C747.258,390.498 746.730,419.395 743.110,446.228 C741.298,459.646 738.705,472.550 735.245,484.763 C733.515,490.871 731.568,496.806 729.396,502.552 C727.224,508.298 724.826,513.856 722.198,519.210 C701.467,562.402 664.330,590.750 616.109,607.886 C568.266,625.435 510.545,633.209 456.475,643.249 C401.859,652.606 350.896,664.228 303.951,673.730 L303.951,673.730 Z",
      "M40.046,372.245 C28.428,352.918 18.655,334.622 11.788,316.206 C8.348,307.007 5.623,297.796 3.676,288.518 C2.704,283.880 1.924,279.227 1.342,274.558 C0.759,269.889 0.374,265.205 0.187,260.507 C-1.461,223.015 10.327,184.148 30.176,149.805 C49.974,115.327 76.974,86.271 105.898,64.999 C135.275,43.482 166.576,29.748 205.463,20.262 C225.024,15.523 245.925,11.989 268.984,9.112 C280.504,7.679 292.553,6.419 305.146,5.318 C311.441,4.768 317.872,4.259 324.434,3.791 C330.995,3.324 337.688,2.898 344.503,2.519 C398.785,-0.406 462.243,-0.992 522.005,7.116 C581.817,15.046 635.980,33.053 673.050,63.953 C710.836,94.439 731.528,137.817 740.966,186.949 C745.754,211.543 747.832,236.354 748.541,260.646 C748.882,272.798 748.860,284.834 748.544,296.713 C748.385,302.653 748.151,308.554 747.846,314.413 C747.539,320.273 747.161,326.091 746.709,331.866 C743.005,378.056 735.230,421.477 718.758,461.406 C687.891,540.919 610.269,607.035 490.099,655.276 C460.710,666.964 430.988,676.380 402.466,682.359 C388.203,685.347 374.235,687.469 360.718,688.589 C353.958,689.150 347.311,689.460 340.791,689.506 C334.270,689.552 327.877,689.335 321.622,688.844 C271.311,685.303 231.344,662.194 199.573,625.460 C167.494,589.202 142.498,540.874 116.264,496.547 C90.565,451.505 63.628,410.462 40.046,372.245 L40.046,372.245 Z",
    ];

    const randomWidthAndHeight = allWidthAndHeight.map((item) =>
      randomHandler(item)
    );

    const randomLenght = randomHandler(paths.length);
    const randomPaths = paths[randomLenght];

    if (randomWidthAndHeight && randomPaths) {
      return [randomPaths, ...randomWidthAndHeight];
    }
  };

  render() {
    const {
      orangeShape,
      blueShape,
      hepaticShape,
      paths,
      showRightContent,
      showShapeOnMiddleAndRightContent,
    } = this.props;

    const orangeShapeStyle = {
      top: `${orangeShape.top}%`,
      left: `${orangeShape.left}%`,
    };

    const blueShapeStyle = {
      bottom: `${blueShape.bottom}%`,
      left: `${blueShape.left}%`,
    };

    const hepaticShapeStyle = {
      top: `${hepaticShape.top}%`,
      right: `${hepaticShape.right}%`,
    };

    let svg = null;
    let rightContent = null;

    if (showShapeOnMiddleAndRightContent) {
      svg = (
        <svg
          ref={(svg) => (this.svg = svg)}
          className={classes.Svg}
          width="100%"
          height="100%"
          viewBox="0 0 850 690"
        >
          <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
            <path d={paths} />
          </clipPath>
          <image
            width="100%"
            height="100%"
            preserveAspectRatio="xMinYMin slice"
            href={bitmap}
            clipPath="url(#user-space)"
          />
        </svg>
      );
    }

    if (showRightContent) {
      rightContent = (
        <div
          className={classes.RightContent}
          ref={(rightContent) => (this.rightContent = rightContent)}
        >
          {svg}
          <Shapes
            orangeShapeStyle={orangeShapeStyle}
            blueShapeStyle={blueShapeStyle}
            hepaticShapeStyle={hepaticShapeStyle}
          />
        </div>
      );
    }

    return rightContent;
  }
}

export default RightContent;
