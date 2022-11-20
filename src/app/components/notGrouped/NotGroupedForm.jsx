import React from 'react'
import { Input, Form, Radio } from 'antd';
import { UploadFile } from '../common/UploadFile';
import { useUiStore } from '../../../hooks';
import { FileDoneOutlined } from '@ant-design/icons';

export const NotGroupedForm = () => {
    const form = Form.useFormInstance();
    const { data } = useUiStore();
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
            onChange={ () => {} }
          >
            <Radio value={1}>Moda, Media, Mediana</Radio>
            <Radio value={2}>Varianza, Desviación, Coe. Variación</Radio>
          </Radio.Group>
      </Form.Item>
      </>
    )
}
