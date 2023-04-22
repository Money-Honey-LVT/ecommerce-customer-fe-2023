import { Box, Card, createStyles } from '@mantine/core';

interface Props {
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

export const ColorSelector = ({ color, isSelected, onClick }: Props) => {
  const useStyles = createStyles((theme) => ({
    box: {
      borderRadius: theme.radius.lg,
      border: isSelected ? `1px solid ${color}` : '',
    },
  }));
  const { classes } = useStyles();

  return <Box bg={color} className={classes.box} w={35} h={20} onClick={() => onClick()} />;
};
