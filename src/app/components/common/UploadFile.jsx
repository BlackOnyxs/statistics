import React, { useState } from 'react';
import Papa from 'papaparse';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

import { useUiStore } from '../../../hooks';

export const UploadFile = () => {
  const { openModal, setData } = useUiStore();
  const { Dragger } = Upload;
  
  const props = {
    onDrop(e) {
      openModal();
    },
    beforeUpload: (file) => {
      Papa.parse(file, {
        header: false,
        skipEmptyLines: true,
        complete: function (results) {
          setData(results.data)
        },
      })
      const isValid = file.type === 'text/csv';
      if (!isValid) {
        message.error(`${file.name} is not a csv file`);
      }
      return isValid || Upload.LIST_IGNORE;
    },
    
  };
  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">Only CSV file</p>
    </Dragger>
  )}