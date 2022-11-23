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

  export const focus = [
    {
      key: '1',
      value: 'Población',
    },
    {
      key: '2',
      value: 'Muestra',
    },
  ];

  export const options = [
    {
      key: '2',
      value: 'Moda, Media, Mediana',
    },
    {
      key: '3',
      value: 'Varianza, Desviación, Coe. Variación',
    },
  ]
  export const some = [
    {
      key: '1',
      value: 'Agrupado',
    },
    {
      key: '2',
      value: 'No agrupado',
    },
  ];

  export const types = [
    {
      key: '1',
      value: 'Histogram',
    },
    {
      key: '2',
      value: 'Moda, Media, Mediana',
    },
    {
      key: '3',
      value: 'Varianza, Desviación, Coe. Variación',
    },
  ]