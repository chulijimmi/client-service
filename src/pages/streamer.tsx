import { PageProps } from 'gatsby';
import React, { useCallback } from 'react';
import { Box, Button, Container, Grid } from 'theme-ui';
import BaseButton from '../component/BaseButton';
import DeviceOptions from '../component/DeviceOptions';
import Typography from '../component/Typhography';
import colors from '../config/colors';
import { useAudio, useVideo } from '../hook/DeviceListener';

export default function Streamer(props: PageProps) {
  console.log('props', props);
  const deviceVideo = useVideo();
  const deviceAudio = useAudio();
  const handleStart = useCallback(() => {
    console.log('start');
  }, []);
  return (
    <>
      <Container pl={4} pr={4}>
        <Typography theme={'light'} title={'Streamer'} variant={'h1'} />
        <Grid gap={2} columns={[2, '2fr 1fr']}>
          <Box bg="muted">
            <Grid gap={2} columns={2}>
              <Box>
                <DeviceOptions data={deviceVideo} />
              </Box>
              <Box>
                <DeviceOptions data={deviceAudio} />
              </Box>
            </Grid>
            <Grid gap={4} columns={4} mt={2} pl={2}>
              <div>
                <span style={{ fontSize: 18 }}>Actions</span>
              </div>
              <BaseButton onClick={handleStart} label="Start" />
              <BaseButton onClick={handleStart} label="Stun" />
              <BaseButton onClick={handleStart} label="Stop" />
            </Grid>
          </Box>
          <Box bg="muted" pl={2}>
            <Typography theme={'light'} title={'Live Chat'} variant={'h3'} />
          </Box>
        </Grid>
      </Container>
    </>
  );
}
