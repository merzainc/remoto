import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

export function ActivityBoxIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill='none' {...props}>
      <Path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='m2 6 6.913 3.917c2.549 1.444 3.625 1.444 6.174 0L22 6'
      />
      <Path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M2.016 13.476c.065 3.065.098 4.598 1.229 5.733 1.131 1.136 2.705 1.175 5.854 1.254 1.94.05 3.862.05 5.802 0 3.149-.079 4.723-.118 5.854-1.254 1.131-1.135 1.164-2.668 1.23-5.733.02-.986.02-1.966 0-2.952-.066-3.065-.099-4.598-1.23-5.733-1.131-1.136-2.705-1.175-5.854-1.254a115.11 115.11 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254-1.131 1.135-1.164 2.668-1.23 5.733a69.066 69.066 0 0 0 0 2.952Z'
      />
    </Svg>
  );
}

export function BellIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill='none' {...props}>
      <Path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M5.158 11.491c-.073 1.396.011 2.882-1.236 3.817A2.305 2.305 0 0 0 3 17.153C3 18.15 3.782 19 4.8 19h14.4c1.018 0 1.8-.85 1.8-1.847 0-.726-.342-1.41-.922-1.845-1.247-.935-1.163-2.421-1.236-3.817a6.851 6.851 0 0 0-13.684 0Z'
      />
      <Path
        stroke='currentColor'
        strokeWidth={1.5}
        d='M10.5 3.125C10.5 3.953 11.172 5 12 5s1.5-1.047 1.5-1.875C13.5 2.297 12.828 2 12 2s-1.5.297-1.5 1.125Z'
      />
      <Path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M15 19a3 3 0 1 1-6 0'
      />
    </Svg>
  );
}

export function BriefCaseIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill='none' {...props}>
      <Path
        stroke='currentColor'
        strokeWidth={1.5}
        d='M13.618 21.367A2.366 2.366 0 0 1 12 22a2.366 2.366 0 0 1-1.617-.633c-3.971-3.741-9.293-7.92-6.698-13.987C5.09 4.1 8.458 2 12.001 2c3.543 0 6.912 2.1 8.315 5.38 2.592 6.06-2.717 10.259-6.698 13.987Z'
      />
      <Path
        stroke='currentColor'
        strokeWidth={1.5}
        d='M15.5 11a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
      />
    </Svg>
  );
}

export function CogIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill='none' {...props}>
      <Path
        stroke='currentColor'
        strokeWidth={1.5}
        d='M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
      />
      <Path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth={1.5}
        d='M21.011 14.097c.522-.141.783-.212.886-.346.103-.135.103-.351.103-.784v-1.934c0-.433 0-.65-.103-.784s-.364-.205-.886-.345c-1.95-.526-3.171-2.565-2.668-4.503.139-.533.208-.8.142-.956-.066-.156-.256-.264-.635-.479l-1.725-.98c-.372-.21-.558-.316-.725-.294-.167.023-.356.21-.733.587-1.459 1.455-3.873 1.455-5.333 0-.377-.376-.565-.564-.732-.587-.167-.022-.353.083-.725.295l-1.725.979c-.38.215-.57.323-.635.48-.066.155.003.422.141.955.503 1.938-.718 3.977-2.669 4.503-.522.14-.783.21-.886.345C2 10.384 2 10.6 2 11.033v1.934c0 .433 0 .65.103.784s.364.205.886.346c1.95.526 3.171 2.565 2.668 4.502-.139.533-.208.8-.142.956.066.156.256.264.635.48l1.725.978c.372.212.558.317.725.295.167-.023.356-.21.733-.587 1.46-1.457 3.876-1.457 5.336 0 .377.376.565.564.732.587.167.022.353-.083.726-.295l1.724-.979c.38-.215.57-.323.635-.48.066-.156-.003-.422-.141-.955-.504-1.937.716-3.976 2.666-4.502Z'
      />
    </Svg>
  );
}
export function HomeIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill='none' {...props}>
      <Path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth={1.5}
        d='M15 17c-.8.622-1.85 1-3 1s-2.2-.378-3-1'
      />
      <Path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M2.352 13.213c-.354-2.297-.53-3.445-.096-4.464.435-1.018 1.398-1.715 3.325-3.108L7.021 4.6C9.418 2.867 10.617 2 12.001 2c1.382 0 2.58.867 4.978 2.6l1.44 1.041c1.927 1.393 2.89 2.09 3.325 3.108.434 1.019.258 2.167-.095 4.464l-.301 1.96c-.5 3.256-.751 4.884-1.919 5.856-1.168.971-2.875.971-6.29.971H10.86c-3.415 0-5.122 0-6.29-.971-1.168-.972-1.418-2.6-1.918-5.857l-.301-1.959Z'
      />
    </Svg>
  );
}

export function FlashLightOn(props: SvgProps) {
  return (
    <Svg
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      width={24}
      height={24}
      {...props}
    >
      <Path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M9.5 22h5M10 10h4m-2 0v6m3-.674a7 7 0 1 0-6 0V16c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C10.602 19 11.068 19 12 19c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C15 17.398 15 16.932 15 16v-.674Z'
      />
    </Svg>
  );
}
