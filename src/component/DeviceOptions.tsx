import { ReactJSXElementChildrenAttribute } from '@emotion/react/types/jsx-namespace';
import React, { ReactChild, ReactChildren } from 'react';
import { Box, Select } from 'theme-ui';

interface MediaDeviceInfo {
  deviceId?: string;
  groupId?: string;
  kind?: MediaDeviceKind;
  label?: string;
}

type propsType = {
  data: Array<MediaDeviceInfo> | undefined;
};

const DeviceOptions = ({ data }: propsType): JSX.Element => (
  <Select
    sx={{ fontSize: 10 }}
    arrow={
      <Box
        as="svg"
        xmlns={'http://www.w3.org/2000/svg'}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentcolor"
        sx={{
          ml: -28,
          alignSelf: 'center',
          pointerEvents: 'none',
        }}
      >
        <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
      </Box>
    }
  >
    {data !== undefined &&
      data.map((item: MediaDeviceInfo) => (
        <option key={item.deviceId}>{item.label}</option>
      ))}
  </Select>
);

export default DeviceOptions;
