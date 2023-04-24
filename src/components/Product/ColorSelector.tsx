import { Box, Card, createStyles } from '@mantine/core';

interface Props {
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

export const ColorSelector = ({ color, isSelected, onClick }: Props) => {
  console.log(isSelected);
  const useStyles = createStyles((theme) => ({
    box: {
      borderRadius: theme.radius.lg,
      cursor: 'pointer',
    },
  }));
  const { classes } = useStyles();

  return (
    <Box sx={{ border: isSelected ? `2px solid black` : '', padding: '2px' }} className={classes.box}>
      <Box bg={color} className={classes.box} w={35} h={25} onClick={() => onClick()} />
    </Box>
  );
};
