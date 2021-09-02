import { Button } from 'theme-ui';
import colors from '../config/colors';

interface BaseButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
}
const BaseButton: React.FC<BaseButtonProps> = ({ onClick, label }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        ':hover': {
          background: colors.theme.dark.border,
        },
        cursor: 'pointer',
      }}
    >
      {label}
    </Button>
  );
};

export default BaseButton;
