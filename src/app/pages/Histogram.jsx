import React, { useEffect } from 'react'
import { Col, Row } from 'antd';
// import { CoffeeOutlined } from '@ant-design/icons';
import { useDatasets } from '../../hooks';
import { UploadFile } from '../components/common/UploadFile'
import { AddModal } from '../components/histogram/AddModal';
import { HistogramChart } from '../components/histogram/HistogramChart';
import { TableConfig } from '../components/histogram/TableConfig';

export const HistogramPage = () => {

  const { activeDataset } = useDatasets();

  useEffect(() => {
  }, [activeDataset])
  

  return (
    <>
    {
      ( !activeDataset ) 
      ? (
        <>
        <Row 
          gutter={16} 
          style={{ 
            marginBottom: 50, 
            marginTop: 50, 
            alignContent: 'center', 
            justifyContent: 'center',
            
          }}>
            <Col span={8}>
              <UploadFile />
            </Col>
        </Row>
        
        </>

      )
      : (
        <>
        <Row 
          gutter={16} 
          style={{ 
            marginBottom: 10, 
            marginTop: 50, 
            alignContent: 'center', 
            justifyContent: 'center',
            
          }}>
            <Col span={20}>
              <TableConfig />
            </Col>
            <Col span={24}>
              <HistogramChart />
            </Col>
            
          </Row>
        </>
      )
    }
    <AddModal />
    </>
    
      
  )
}
