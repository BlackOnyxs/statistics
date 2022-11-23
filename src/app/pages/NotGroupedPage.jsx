import React, { useEffect } from 'react'
import { Row, Col, Card, Badge } from 'antd';

import { useDatasets, useNotGrouped, useMode, useUiStore } from '../../hooks';
import { UploadFile } from '../components/common/UploadFile';
import { AddModal } from '../components/notGrouped/AddModal';
import { TableConfigNotGrouped } from '../components/notGrouped/TableConfigNotGrouped';
import { TableConfigGrouped } from '../components/notGrouped/TableConfigGrouped';


export const NotGroupedPage = () => {
  const { activeDataset } = useDatasets();
  const { mode, median, average, values } = useMode();
  const { focus, media, vari, desvStdr, coefVar, data } = useNotGrouped();
  const { type } = useUiStore()
  const gridStyle = {
    width: '10%',
    textAlign: 'center'
  }
  useEffect(() => {
    
  }, [focus])
  
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
            <Col span={ 8 }>
              <UploadFile />
            </Col>
        </Row>
        
        </>

      )
      : ( type === 'Moda, Media, Mediana' ) ? (
        
        <Row 
          gutter={16} 
          style={{ 
            marginBottom: 10, 
            marginTop: 50, 
            alignContent: 'center', 
            justifyContent: 'center',
            
          }}>
            <Col span={20}
              style={{ marginBottom: 20}}
            >
              <Card title='Datos'>
                  {
                    values.map( v => (
                      <Card.Grid
                        style={ gridStyle }
                      >{v} </Card.Grid>
                    ))
                  }
              </Card>
            </Col>
            <Col span={20}>
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
    
      )
      : (
       
        <Row 
          gutter={20} 
          style={{ 
            // marginBottom: 10,
            marginTop: 50, 
            alignContent: 'center', 
            justifyContent: 'center',
            
          }}>
            <Col span={20}
              style={{ marginBottom: 20}}
            >
              <TableConfigNotGrouped />
          </Col>
          <Col span={20}>
          <Badge.Ribbon text="Media">
            <Card size="small">
              {Number(media).toPrecision(4)}
            </Card>
          </Badge.Ribbon>
          <Badge.Ribbon text="Varianza" color="pink">
            <Card size="small">
              {Number(vari).toPrecision(4)}
            </Card>
          </Badge.Ribbon>
          <Badge.Ribbon text="Desviación Estándar" color="volcano">
            <Card size="small">
              {Number(desvStdr).toPrecision(4)}
            </Card>
          </Badge.Ribbon>
          <Badge.Ribbon text="Coeficiente de Variación" color="volcano">
            <Card size="small">
              {`${Number(coefVar).toPrecision(4)}%`}
            </Card>
          </Badge.Ribbon>
        </Col>
        </Row>
           
        
      
      )
    }
    <AddModal />
    </>
    
      
  )
}
