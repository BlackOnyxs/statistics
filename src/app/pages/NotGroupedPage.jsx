import React from 'react'
import { Row, Col, Card, Badge } from 'antd';

import { useDatasets } from '../../hooks';
import { UploadFile } from '../components/common/UploadFile';
import { AddModal } from '../components/notGrouped/AddModal';
import { useMode } from '../../hooks/useMode';
import { modeConfig } from '../../helpers/modeConfig'

export const NotGroupedPage = () => {
  const { activeDataset } = useDatasets();
  const { mode, median, average, values  } = useMode();
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
            <Col span={24}>
            { JSON.stringify( values )}
            </Col>
            <Col span={24}>
              <Badge.Ribbon text="Media">
                <Card size="small">
                  {average}
                </Card>
              </Badge.Ribbon>
              <Badge.Ribbon text="Mediana" color="pink">
                <Card size="small">
                  {median}
                </Card>
              </Badge.Ribbon>
              <Badge.Ribbon text="Mode" color="volcano">
                <Card size="small">
                  {mode}
                </Card>
              </Badge.Ribbon>
            </Col>
          </Row>
        </>
      )
    }
    <AddModal />
    </>
    
      
  )
}
