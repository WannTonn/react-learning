import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { Upload, Button, UploadProps, Modal, notification, Form, Input, Select } from 'antd'
import './style.scss';
import { RcFile, UploadFile } from 'antd/lib/upload/interface';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { uploadFile } from '../../api/uploader';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import localStorageUtil from '../../utils/localStorageUtil';

const { Item } = Form;
const ImageUploader = () => {
  const [fileList, setFileList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [configVisible, setConfigVisible] = useState(false);

  const [urlList, setUrlList] = useState([]);

  const [form] = Form.useForm();
  const envOptions = [{ label: 'test', value: '1' }, { label: 'prod', value: '2' }]
  const uploadReq = useRequest(uploadFile, {
    onSuccess(res: any) {
      if (res.code === 200) {
        setUrlList(Array.isArray(res.data) ? res.data: [res.data])
      }
    },
    onError(err) {
      notification.warning({ message: '可能是配置有误，请重新配置' })
      handleOpenConfig()
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
  const handleOpenConfig = () => {
    setConfigVisible(true);
    // let env = localStorageUtil.getLocalStorage('env');
    let urlPath = localStorageUtil.getLocalStorage('urlPath');
    let token = localStorageUtil.getLocalStorage('token');
    form.setFieldsValue({  token: token?.trim(), urlPath: urlPath?.trim() });
  }
  const handleSetConfig = async () => {
    const values = await form.validateFields();
    localStorageUtil.setLocalStorageMap(values);
    notification.success({ message: '保存成功' });
    setConfigVisible(false);
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
    let formData = new FormData();
    fileList.forEach((e) => {
      formData.append('file', e.originFileObj);
    });

    uploadReq.run(formData);
  }

  useEffect(() => {
    // let env = localStorageUtil.getLocalStorage('env');
    let token = localStorageUtil.getLocalStorage('token');
    let urlPath = localStorageUtil.getLocalStorage('urlPath');
    if (!token || !urlPath) {
      notification.warning({ message: '首次加载，请先配置对应环境', duration: 4 })
      setConfigVisible(true);
    }
  }, [])
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
      <Button block onClick={handleOpenConfig} type="primary" style={{ marginBottom: 20 }}>配置接口与token</Button>
      <Button danger block style={{ marginBottom: 20 }} onClick={() => (setFileList([]), setUrlList([]))}>已复制，清空所有</Button>

      {
        urlList?.length ? (
          <div className="cardWrapper">
            <div className='previewWrapper'>
              {
                urlList.map((e, index) => (
                  <div className='item' key={index}>
                    <img src={e} width="100%" onClick={() => handleResPreview(e)} alt="" onError={(d) => {
                      console.log(d);
                    }} />
                    <div className="tools">
                      <CopyToClipboard text={`![](${e})`}
                        onCopy={() => (notification.destroy(), notification.success({ message: '复制成功' }))}>
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

      <Modal
        title="配置接口与token"
        visible={configVisible}
        onCancel={() => setConfigVisible(false)}
        onOk={handleSetConfig}
      >
        <Form form={form} layout="vertical">
          {/* <Item label="提交环境" name="env" rules={[{ required: true }]} initialValue="1">
            <Select options={envOptions} />
          </Item>
 */}
          <Item label="接口路径" name="urlPath" rules={[{ required: true }]}>
            <Input placeholder='请输入完整的接口路径，eg: http://abc.com/base/upload' allowClear />
          </Item>
          <Item label="token" name="token" rules={[{ required: true }]}>
            <Input placeholder='请输入对应环境的token, 否则无法上传成功' allowClear />
          </Item>
        </Form>
      </Modal>
    </div>

  )
}

export default observer(ImageUploader);