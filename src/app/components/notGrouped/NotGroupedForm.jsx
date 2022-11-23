import React, { useEffect } from 'react'
import { Input, Form, Radio } from 'antd';
import { UploadFile } from '../common/UploadFile';
import { useNotGrouped, useUiStore } from '../../../hooks';
import { FileDoneOutlined } from '@ant-design/icons';
import { focus, some, types } from '../../../data/menus';

export const NotGroupedForm = () => {
    const form = Form.useFormInstance();
    const { data, setType, type } = useUiStore();
    const { setData, setFocus } = useNotGrouped()
    useEffect(() => {
     
    }, [type])
    
    return (
      <>
      <Form.Item
          label="Nombre"
          name="name"
          key="name"
          rules={[
              {
                required: true,
                message: 'Campo reuqerido',
              },
            ]}
      >
          <Input type="text"/>
      </Form.Item>
      <Form.Item
          label="Datos"
          name="dataset"
          key="dataset"
          // rules={[
          //     {
          //       required: true,
          //       message: 'Campo reuqerido',
          //     },
          //   ]}
      >
          { 
            data 
            ? <FileDoneOutlined />
            : <UploadFile />
          }
      </Form.Item>
      <Form.Item
          label="Elige una acción"
          name="option"
          key="option"
      >
          <Radio.Group
            onChange={ (e) => {
              setType(e.target.value)
            } }
          >
           {
              types.map( (f, index) => {
                if ( index !== 0)
                return (
                  <Radio key={ f.key} value={f.value}>{f.value}</Radio>
                ) 
              })
             }
          </Radio.Group>
      </Form.Item>
  
          <Form.Item
            label='Enfoque'
            name='focus'
            key='focus'
        >
          <Radio.Group onChange={ (e) => {
            setFocus(e.target.value)
          } }>
             {
              focus.map( f => (<Radio disabled={ type === 'Moda, Media, Mediana'} key={ f.key} value={f.value}>{f.value}</Radio>))
             }
          </Radio.Group>
          </Form.Item>
        )
      
      </>
    )
}
