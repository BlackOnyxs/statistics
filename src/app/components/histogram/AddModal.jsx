import { Button, Form, Modal } from 'antd'
import React from 'react'

import { useDatasets, useUiStore } from '../../../hooks/';
import { useHistogram } from '../../../hooks/useHistogram';
import { HistogramForm } from './HistogramForm';

export const AddModal = () => {
    const [form] = Form.useForm();

   const { isModalOpen, closeModal, data } = useUiStore();
   const { startSavingDataset, setActiveDataSet } = useDatasets();
    const { createHistogram } = useHistogram();

    const activeHitogram = null;

    const handleOk = ({ kvalue }) => {
        startSavingDataset( data );
        //Todo: add loading
        createHistogram({ values: data, kvalue}, false)
        setActiveDataSet({ dataset: data });
        closeModal();
        
    }
    const handleCancel = () => {
        closeModal();
    }
    const handleDelete = () => {}
    return (
        <>
          <Modal 
              title={ activeHitogram ? activeHitogram.name : 'Nuevo Histograma'}  
              visible={ isModalOpen } 
              onOk={ handleOk } 
              onCancel={ handleCancel }
              footer={[
                <Button 
                    key="back" 
                    onClick={handleCancel}
                >
                  Cerrar
                </Button>,
                <Button
                    danger
                    type='primary'
                    key="delete" 
                    onClick={ handleDelete }
                    disabled={ !activeHitogram }
                >
                  Borrar
                </Button>,
                <Button
                    key="submit"
                    htmlType='submit'
                    form='histogram-form'
                    style={{ backgroundColor: '#74cc26', color: 'white' }}    
                >
                  Guardar
                </Button>,
            ]}
          >
          <Form
              id="histogram-form"
              form={ form }
              labelCol={{ span: 8 }}
              layout="horizontal"
              wrapperCol={{
                  span: 16,
              }}
              onFinish={ handleOk }
          >
            <HistogramForm />
          </Form>
          </Modal>
        </>
      )
}
