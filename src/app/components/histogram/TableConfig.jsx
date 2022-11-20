import { Table } from 'antd';
import React from 'react'
import { configLocalDataset } from '../../../helpers/configLocalDataSet';
import { useHistogram } from '../../../hooks/useHistogram';

export const TableConfig = () => {
    const { intervals, fi, fr, fac } = useHistogram();
    const data = configLocalDataset(intervals, fi, fr, fac);

    const columns = [
        {
          title: 'Interval',
          dataIndex: 'interval',
          key: 'interval',
          width: '25%',
        },
        {
          title: 'fi',
          dataIndex: 'fi',
          key: 'fi',
          width: '25%',
        },
        
        {
          title: 'fr',
          dataIndex: 'fr',
          key: 'fr',
          width: '25%',
          render: fr => (Number(fr).toPrecision(2))
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
