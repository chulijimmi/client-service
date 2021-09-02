import { css } from '@emotion/react';
import styled from '@emotion/styled';
import colors from '../config/colors';

const dynamicStyle = (props: { theme: string }) => css`
  color: ${props.theme === 'dark'
    ? colors.theme.dark.color
    : colors.theme.light.color};
`;

type TypographyProps = {
  title: string;
  theme: string;
  variant: string;
};

const ComponentH1 = styled.h1`
  ${dynamicStyle}
`;

const ComponentH2 = styled.h2`
  ${dynamicStyle}
`;

const ComponentH3 = styled.h3`
  ${dynamicStyle}
`;

const ComponentH4 = styled.h4`
  ${dynamicStyle}
`;

const ComponentH5 = styled.h5`
  ${dynamicStyle}
`;

const Typography: React.FC<TypographyProps> = ({ title, theme, variant }) => {
  switch (variant) {
    case 'h1':
      return <ComponentH1 theme={theme}>{title}</ComponentH1>;

    case 'h2':
      return <ComponentH2 theme={theme}>{title}</ComponentH2>;

    case 'h3':
      return <ComponentH3 theme={theme}>{title}</ComponentH3>;

    case 'h4':
      return <ComponentH4 theme={theme}>{title}</ComponentH4>;

    default:
      return <ComponentH5 theme={theme}>{title}</ComponentH5>;
  }
};

export default Typography;
