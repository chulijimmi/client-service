import { PageProps } from 'gatsby';
import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import Typography from '../component/Typhography';

export default function Live(props: PageProps) {
  console.log('props', props);

  return (
    <>
      <Container pl={4} pr={4}>
        <Typography theme={'light'} title={'Live'} variant={'h1'} />
        <Grid gap={2} columns={[2, '2fr 1fr']}>
          <Box bg="primary" pl={2}>
            <Typography
              theme={'dark'}
              title={'Video Camera Streamer'}
              variant={'h2'}
            />
          </Box>
          <Box bg="muted" pl={2}>
            <Typography theme={'light'} title={'Live Chat'} variant={'h2'} />
          </Box>
        </Grid>
      </Container>
    </>
  );
}
