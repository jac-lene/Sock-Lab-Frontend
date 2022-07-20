import * as React from "react";

const SvgHeelshape = (props) => (
  <svg className="smallheel"
    data-name="Heel Shape"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 51.45 65.9"
    {...props}
  >
    <path
      d="M169.42 193.92s15.22-7.73 25.72 1.4c11.68 9.27 16.83 23.54 18.88 30.49s6.76 26.85 6.85 30.66c-5.6.1-27.9.3-27.9.3s-7.6-.8-12.33-9.94c-4.87-10.02-11.01-38.95-11.22-52.91Z"
      transform="translate(-169.42 -190.87)"
      style={props.fill}
    />
  </svg>
);

export default SvgHeelshape;
