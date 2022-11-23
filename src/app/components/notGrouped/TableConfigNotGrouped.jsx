import React from 'react'
import { Table } from 'antd';
import { useNotGrouped } from '../../../hooks';
import { configNotGroup } from '../../../helpers/configLocalDataSet';

export const TableConfigNotGrouped = () => {
  const { values, fi, xf, xx, x2 } = useNotGrouped();
  const data = configNotGroup(values, fi,  xf, xx, x2);

  const columns = [
      {
        title: 'Valores',
        dataIndex: 'values',
        key: 'values',
        width: '20%',
      },
      {
        title: 'f',
        dataIndex: 'fi',
        key: 'fi',
        width: '20%',
        // render: f => (Number(f).toPrecision(3))
      },
      
      {
        title: '(xi-¯𝑋)',
        dataIndex: 'xx',
        key: 'xx',
        width: '20%',
        render: xx => (Number(xx).toPrecision(3))
      },
      {
        title: '(xi-x) x f',
        dataIndex: 'x2',
        key: 'x2',
        width: '20%',
        render: x2 => (Number(x2).toPrecision(4))
      },
      {
        title: '(xi)(fi)',
        dataIndex: 'xf',
        key: 'xf',
        width: '20%',
        render: xf => (Number(xf).toPrecision(3))
      },
    ];

    return (
        <Table
            columns={columns} 
            dataSource={ data }  
            style={{ height: 'calc( 100vh - 500px )',  marginBottom: 15}}
        />
    )
}
