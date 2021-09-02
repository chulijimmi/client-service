import React from 'react';
import { Link, PageProps } from 'gatsby';
import { Container, Flex } from 'theme-ui';
import DiscoveryCard from '../component/DiscoveryCard';
import Typography from '../component/Typhography';

const image =
  'https://cdn.popmama.com/content-images/post/20200602/a-crash-course-in-audio-for-podcasters-headerjpg-60bc1ecaf415e82d68ecde52e6e85695.jpg';
const title = 'This is title of streamer';

export default function Discovery(props: PageProps) {
  console.log('props', props);
  return (
    <>
      <Container pl={4} pr={4}>
        <Typography theme={'light'} title={'Discovery'} variant={'h1'} />
        <Flex>
          <DiscoveryCard theme={'light'} title={title} imageUrl={image} />
          <DiscoveryCard theme={'light'} title={title} imageUrl={image} />
          <DiscoveryCard theme={'light'} title={title} imageUrl={image} />
          <DiscoveryCard theme={'light'} title={title} imageUrl={image} />
        </Flex>
        <Flex>
          <DiscoveryCard theme={'light'} title={title} imageUrl={image} />
          <DiscoveryCard theme={'light'} title={title} imageUrl={image} />
          <DiscoveryCard theme={'light'} title={title} imageUrl={image} />
          <DiscoveryCard theme={'light'} title={title} imageUrl={image} />
        </Flex>
      </Container>
    </>
  );
}
