import { Avatar, Box, Group, Menu, Text, UnstyledButton, createStyles, rem, useMantineTheme } from '@mantine/core';
import { Navigate, useNavigate } from 'react-router-dom';
import ROUTER from '../../../config/router';
import { IconUser, IconArticle, IconPackage, IconLogout } from '@tabler/icons-react';
import { checkLogin } from '../../../utils/helpers';
import { ReactComponentElement, ReactElement } from 'react';

const useStyles = createStyles((theme) => ({
  userIcon: {
    cursor: 'pointer',
  },
}));

interface MenuItemProps {
  title: string;
  icon: ReactElement;
  link: string;
}

const User = () => {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const isLogin = checkLogin();
  const handleClickUserIcon = () => {
    if (!isLogin) {
      navigate(ROUTER.AUTH.LOGIN);
      return;
    }
    navigate(ROUTER.PROFILE.INFO);
  };

  const MenuItems: MenuItemProps[] = [
    {
      title: 'Thông tin cá nhân',
      icon: <IconUser />,
      link: ROUTER.PROFILE.INFO,
    },
    {
      title: 'Danh sách đơn hàng',
      icon: <IconPackage />,
      link: ROUTER.PROFILE.ORDERS,
    },
    {
      title: 'Ví voucher',
      icon: <IconPackage />,
      link: ROUTER.PROFILE.VOUCHER_WALLET,
    },
    {
      title: 'Đăng xuất',
      icon: <IconLogout />,
      link: ROUTER.HOME.INDEX,
    },
  ];
  return (
    <Menu trigger="hover">
      <Menu.Target>
        <IconUser className={classes.userIcon} onClick={handleClickUserIcon} />
      </Menu.Target>
      {isLogin && (
        <Menu.Dropdown>
          {MenuItems.map((item, index) => (
            <Menu.Item key={index} icon={item.icon} onClick={() => navigate(item.link)}>
              {item.title}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      )}
    </Menu>
  );
};

export default User;
