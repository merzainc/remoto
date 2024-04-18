import Svg, { G, Path, SvgProps } from 'react-native-svg';
const MailIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill='none' {...props}>
    <Path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='m7 8.5 2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 8.5'
    />
    <Path
      stroke='currentColor'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M2.016 13.476c.065 3.065.098 4.598 1.229 5.733 1.131 1.136 2.705 1.175 5.854 1.254 1.94.05 3.862.05 5.802 0 3.149-.079 4.723-.118 5.854-1.254 1.131-1.135 1.164-2.668 1.23-5.733.02-.986.02-1.966 0-2.952-.066-3.065-.099-4.598-1.23-5.733-1.131-1.136-2.705-1.175-5.854-1.254a115.11 115.11 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254-1.131 1.135-1.164 2.668-1.23 5.733a69.07 69.07 0 0 0 0 2.952Z'
    />
  </Svg>
);
export default MailIcon;
