import React from 'react'
import { Input, Form } from 'antd';
import { UploadFile } from '../common/UploadFile';

export const HistogramForm = () => {
    const form = Form.useFormInstance();
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
          <UploadFile />
      </Form.Item>
      <Form.Item
          label="K"
          name="kvalue"
          key="kvalue"
          // rules={[
          //     {
          //       required: true,
          //       message: 'Campo reuqerido',
          //     },
          //   ]}
      >
          <Input type='number' />
      </Form.Item>
      </>
    )
}
