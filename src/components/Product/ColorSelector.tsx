import { Box, Card, createStyles } from '@mantine/core';

interface Props {
  color: string;
}

export const ColorSelector = ({ color }: Props) => {
  const useStyles = createStyles((theme) => ({
    box: {
      borderRadius: theme.radius.lg,
      border: `1px solid ${color}`,
    },
  }));
  const { classes } = useStyles();

  return <Box bg={color} className={classes.box} w={35} h={20} />;
};
