import {
    Upload, Button, Icon, message,
  } from 'antd'
  import apiCamperService from './../../utils/apiCamperService'
 export default class Demo extends React.Component {
    state = {
      fileList: [],
      uploading: false,
    }
    handleUpload = () => {
      const filename = this.props.transcript||this.props.recipe||this.props.confrim
      const { fileList } = this.state
      const formData = new FormData()
      fileList.forEach((file) => {
        formData.append('files', file)
      })
      this.setState({
        uploading: true,
      })
      apiCamperService.post(`/camper/upload/${filename}`,formData).then(res =>{
        this.setState({
            fileList: [],
            uploading: false,
          });
          message.success('upload successfully.')
      }).catch(res =>{
        this.setState({
            uploading: false,
          });
          message.error('upload failed.');
      })
    }
    render() {
      const { uploading, fileList } = this.state;
      const props = {
        onRemove: (file) => {
          this.setState((state) => {
            const index = state.fileList.indexOf(file);
            const newFileList = state.fileList.slice();
            newFileList.splice(index, 1);
            return {
              fileList: newFileList,
            };
          });
        },
        beforeUpload: (file) => {
          this.setState(state => ({
            fileList: [...state.fileList, file],
          }));
          return false;
        },
        fileList,
      }
      return (
        <div>
          <Upload {...props}>
            <Button>
              <Icon type="upload" /> Select File
            </Button>
          </Upload>
          <Button
            type="primary"
            onClick={this.handleUpload}
            disabled={fileList.length === 0}
            loading={uploading}
            style={{ marginTop: 16 }}
          >
            {uploading ? 'Uploading' : 'Start Upload' }
          </Button>
        </div>
      )
    }
  }