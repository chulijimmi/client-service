import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link, navigate } from 'gatsby';
import React from 'react';
import { AspectImage } from 'theme-ui';
import colors from '../config/colors';
import Typography from './Typhography';

const dynamicStyle = (props: { theme: string }) => css`
  background-color: ${props.theme === 'dark'
    ? colors.theme.dark.background
    : colors.theme.light.background};
  padding: 10px;
  border: 1px solid
    ${props.theme === 'dark'
      ? colors.theme.dark.border
      : colors.theme.light.border};
  width: 290px;
  margin-right: 10px;
  margin-bottom: 20px;
  cursor: pointer;

  :last-child {
    margin-right: 0 !important;
  }
  :hover {
    background-color: ${props.theme === 'dark'
      ? colors.theme.dark.backgroundHover
      : colors.theme.light.backgroundHover};
  }
`;

type TypeProps = {
  title: string;
  theme: string;
  imageUrl: string;
};

const Component = styled.div`
  ${dynamicStyle}
`;

const DiscoveryCard: React.FC<TypeProps> = ({ title, theme, imageUrl }) => {
  const onPressCard = React.useCallback(() => {
    navigate('/live', { state: { id: 1 } });
  }, []);

  return (
    <Component theme={theme} onClick={onPressCard}>
      <AspectImage ratio={4 / 2} src={imageUrl} />
      <Typography variant={'h5'} title={title} theme={theme} />
    </Component>
  );
};

export default DiscoveryCard;
