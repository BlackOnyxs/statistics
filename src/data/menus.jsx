import { BarChartOutlined, LoginOutlined, PushpinOutlined, UsergroupDeleteOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const accountOptions = [
    {
        label: 'Perfil',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: 'Cerrar Sesión',
        key: '2',
        icon: <LoginOutlined />,
    },
];

export const siderOptions = [
    {
      key: '1',
      icon: <BarChartOutlined />,
      label: <Link to="/">Histogram</Link>,
    },
    {
      key: '2',
      icon: <UsergroupDeleteOutlined />,
      label:  <Link to="/not-grouped">Not Grouped</Link>,
    },
    {
      key: '3',
      icon: <PushpinOutlined />,
      label: <Link to="/pearson">Pearson Asymmetry</Link>,
    },
  ]