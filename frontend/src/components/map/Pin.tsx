import * as React from 'react';

const ICON = `M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
C426.667,76.563,350.104,0,256,0z`;

const pinStyle = {
  fill: '#ff6629',
  stroke: 'none'
};

interface iPin {
  size?: number
}

function Pin(props: iPin) {
  const {size = 20} = props;

  return (
    <svg height={size} viewBox="0 0 512 512" style={pinStyle}>
      <path d={ICON} />
    </svg>
  );
}

export default React.memo(Pin);
