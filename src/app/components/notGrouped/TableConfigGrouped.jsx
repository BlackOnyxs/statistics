import { Table } from 'antd';
import React from 'react'
import { configGroup } from '../../../helpers/configLocalDataSet';
import { useNotGrouped } from '../../../hooks/useNotGrouped';

export const TableConfigGrouped = () => {
    const { intervals, fi, classM, xf, xx, x2, final } = useNotGrouped();
    const data = configGroup(intervals, fi, classM,  xf, xx, x2, final);

    const columns = [
        {
          title: 'Intervalos',
          dataIndex: 'interval',
          key: 'interval',
          width: '15%',
        },
        {
          title: 'X',
          dataIndex: 'classM',
          key: 'classM',
          width: '15%',
          render: cm => (Number(cm).toPrecision(3))
        },
        
        {
          title: '(xi)(fi)',
          dataIndex: 'xf',
          key: 'xf',
          width: '15%',
          render: xf => (Number(xf).toPrecision(3))
        },
        {
          title: '(xi-¯𝑋)',
          dataIndex: 'xx',
          key: 'xx',
          width: '15%',
          render: xx => (Number(xx).toPrecision(3))
        },
        {
          title: '〖(xi-x)〗^2',
          dataIndex: 'x2',
          key: 'x2',
          width: '15%',
          render: x2 => (Number(x2).toPrecision(4))
        },
        {
          title: 'fi*〖(xi-x)〗^2',
          dataIndex: 'final',
          key: 'final',
          width: '15%',
          render: f => (Number(f).toPrecision(4))
        },
        
      ];

    return (
        <Table
            columns={columns} 
            dataSource={ data }  
            style={{ height: 'calc( 100vh - 500px )'}}
        />
    )
}
