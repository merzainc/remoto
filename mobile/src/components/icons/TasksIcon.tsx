import Svg, { G, Path, SvgProps } from 'react-native-svg';

const TasksIcon = (props: SvgProps) => (
  <Svg
    fill='currentColor'
    viewBox='0 0 24 24'
    width={24}
    height={24}
    {...props}
  >
    <G fillRule='evenodd' clipRule='evenodd'>
      <Path d='M1 5a3 3 0 0 1 3-3h16a3 3 0 1 1 0 6H4a3 3 0 0 1-3-3ZM4 10a1 1 0 0 0-1 1v5.241c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392C7.29 22 7.954 22 8.758 22h6.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 0 0 1.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01V11a1 1 0 0 0-1-1H4Zm6 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z' />
    </G>
  </Svg>
);
export default TasksIcon;
