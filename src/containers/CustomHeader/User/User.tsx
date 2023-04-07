import { Avatar, Box, Group, Menu, Text, UnstyledButton, rem, useMantineTheme } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import ROUTER from '../../../config/router';
import { IconTrash, IconUser } from '@tabler/icons-react';

const User = () => {
  const navigate = useNavigate();
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
      }}
    >
      <UnstyledButton
        sx={{
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        }}
      >
        <Menu offset={10} shadow="md" width={200}>
          <Menu.Target>
            <Group onClick={() => navigate(ROUTER.AUTH.PROFILE)}>
              <Avatar
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                radius="xl"
              />
              <Box sx={{ flex: 1 }}>
                <Text size="sm" weight={500}>
                  Nguyễn Văn A
                </Text>
              </Box>
            </Group>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Tài khoản</Menu.Label>
            <Menu.Item icon={<IconUser size={14} />}>Trang cá nhân</Menu.Item>
            <Menu.Item color="red" icon={<IconTrash size={14} />}>
              Đăng xuất
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </UnstyledButton>
    </Box>
  );
};

export default User;
