import React from 'react'
import { Table } from 'antd';
import { useMode } from '../../../hooks/useMode';
import { modeConfig } from '../../../helpers/modeConfig';

export const TableConfigMode = () => {
    const { values } = useMode();
    const data = modeConfig(values)

    const columns = [
        {
          title: 'Valores',
          dataIndex: 'value',
          key: 'value',
          width: '100%',
        },
      
      ];

    return (
        <Table
            columns={columns} 
            dataSource={ data }  
            style={{ height: 'calc( 100vh - 200px )', width: '100px', marginBottom: 15}}
        />
    )
}
