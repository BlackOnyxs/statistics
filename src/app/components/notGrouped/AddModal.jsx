import { Button, Form, Modal } from 'antd'
import React from 'react'
import { types } from '../../../data/menus';

import { useDatasets, useNotGrouped, useUiStore } from '../../../hooks/';
import { useMode } from '../../../hooks/useMode';
import { NotGroupedForm } from './NotGroupedForm';

export const AddModal = () => {
    const [form] = Form.useForm();

   const { isModalOpen, closeModal, data, type } = useUiStore();
   const { startSavingDataset, setActiveDataSet } = useDatasets();
    const { createNotGrouped, type: agg, createSome } = useNotGrouped();
    const { create } = useMode();

    const activeHitogram = null;

    const handleOk = ({ option, focus, some }) => {
        startSavingDataset( data );
        //Todo: add loading
        console.log({typeModal: type})
        if ( type === 'Moda, Media, Mediana' ) {
            create({ values: data })
        }else if (type === 'Varianza, Desviación, Coe. Variación'){
          createNotGrouped({values: data, option, some })
          // if (agg === 'Agrupado') {
          //   createSome({values: data, option, some })
          // }else if (agg === 'No agrupado'){
            
          // }
        }
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
