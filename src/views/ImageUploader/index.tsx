import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { Upload, Button, UploadProps, Modal, notification } from 'antd'
import './style.scss';
import { RcFile, UploadFile } from 'antd/lib/upload/interface';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { uploadFile } from '../../api/uploader';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const ImageUploader = () => {
  const [fileList, setFileList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [urlList, setUrlList] = useState([]);
  const uploadReq = useRequest(uploadFile, {
    onSuccess(res: any) {
      console.log(res);
      if (res.code === 200) {
        setUrlList(res.data)
      }
    },
    manual: true
  })
  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((`${reader?.result}`));
      reader.onerror = error => reject(error);
    });
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setVisible(true);
    setPreviewTitle(file.name || file.url?.substring(file.url?.lastIndexOf('/') + 1))
  }

  const beforeUpload = async (file: UploadFile) => {
    console.log(file);

    return false;
  }

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }
  const handleResPreview = (url: string) => {
    setPreviewImage(url);
    setVisible(true);
    setPreviewTitle(url?.substring(url?.lastIndexOf('/') + 1))
  }
  const uploadProps: UploadProps = {
    name: 'file',
    multiple: true,
    listType: 'picture-card',
    fileList: fileList,
    onPreview: handlePreview,
    beforeUpload: beforeUpload,
    onChange: handleChange
  }
  const uploadButton = (
    <div>
      {uploadReq.loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>点击或拖拽图片进行上传</div>
    </div>
  );

  const handleSubmit = () => {
    console.log(fileList);

    let formData = new FormData();
    fileList.forEach((e) => {
      formData.append('file', e.originFileObj);
    });

    uploadReq.run(formData);
  }
  return (
    <div className='container'>
      <div className='cardWrapper'>
        <p className='title'>Image Uploader</p>
        <div className="uploadBox">
          <Upload
            {...uploadProps}
          >
            {uploadButton}
          </Upload>
        </div>
      </div>
      <Button block type='primary' style={{ marginBottom: 20 }} loading={uploadReq.loading} onClick={() => handleSubmit()} disabled={!fileList.length}>上传</Button>
      <Button danger block style={{ marginBottom: 20 }} onClick={() => (setFileList([]), setUrlList([]))}>已复制，清空所有</Button>

      {
        urlList?.length ? (
          <div className="cardWrapper">
            <div className='previewWrapper'>
              {
                urlList.map((e) => (
                  <div className='item'>
                    <img src={e} width="100%" onClick={() => handleResPreview(e)} alt="" onError={(d) => {
                      console.log(d);
                    }} />
                    <div className="tools">
                      <CopyToClipboard text={`![](${e})`}
                        onCopy={() => (notification.destroy(), notification.success({message: '复制成功'}))}>
                          <Button>复制地址</Button>
                      </CopyToClipboard>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        ) : null
      }



      <Modal
        title={previewTitle}
        visible={visible}
        width="80vw"
        footer={null}
        onCancel={() => setVisible(false)}
      >
        <img src={previewImage} width="100%" height="100%" alt="" />
      </Modal>

    </div>

  )
}

export default observer(ImageUploader);