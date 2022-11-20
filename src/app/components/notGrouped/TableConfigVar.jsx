import { Table } from 'antd';
import React from 'react'
import { configLocalDataset } from '../../../helpers/configLocalDataSet';
import { useHistogram } from '../../../hooks/useHistogram';

export const TableConfigVar = () => {
    const { intervals, fi, fr, fac } = useHistogram();
    const data = configLocalDataset(intervals, fi, fr, fac);

    const columns = [
        {
          title: 'XI',
          dataIndex: 'interval',
          key: 'interval',
          width: '25%',
        },
        {
          title: 'P',
          dataIndex: 'p',
          key: 'p',
          width: '25%',
        },
        
        {
          title: 'X^2',
          dataIndex: 'x2',
          key: 'x2',
          width: '25%',
          render: x2 => (Number(x2).toPrecision(2))
        },
        {
          title: 'fac',
          dataIndex: 'fac',
          key: 'fac',
          width: '25%',
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
