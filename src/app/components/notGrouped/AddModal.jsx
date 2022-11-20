import { Button, Form, Modal } from 'antd'
import React from 'react'

import { useDatasets, useUiStore } from '../../../hooks/';
import { useMode } from '../../../hooks/useMode';
import { NotGroupedForm } from './NotGroupedForm';

export const AddModal = () => {
    const [form] = Form.useForm();

   const { isModalOpen, closeModal, data } = useUiStore();
   const { startSavingDataset, setActiveDataSet } = useDatasets();
    const { create } = useMode();

    const activeHitogram = null;

    const handleOk = ({ kvalue }) => {
        startSavingDataset( data );
        //Todo: add loading
        create({ values: data, kvalue}, false)
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
              title={ activeHitogram ? activeHitogram.name : 'No agrupado'}  
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
                    form='notgrouped-form'
                    style={{ backgroundColor: '#74cc26', color: 'white' }}    
                >
                  Guardar
                </Button>,
            ]}
          >
          <Form
              id="notgrouped-form"
              form={ form }
              labelCol={{ span: 8 }}
              layout="horizontal"
              wrapperCol={{
                  span: 16,
              }}
              onFinish={ handleOk }
          >
            <NotGroupedForm />
          </Form>
          </Modal>
        </>
      )
}
