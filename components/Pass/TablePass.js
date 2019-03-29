import React from 'react'
import { Table, Radio } from 'antd'
const RadioGroup = Radio.Group

class TablePass extends React.Component {
  state = {
    columns: [
      {
        title: '',
        dataIndex: 'choose',
        render: (index,data) => <Radio value={data.size}></Radio>
      },
      {
        title: 'ขนาด',
        dataIndex: 'size',
        key: 'size'
      },
      {
        title: 'ความยาวรอบอก (นิ้ว)',
        dataIndex: 'width',
        key: 'width'
      },
      {
        title: 'ความยาวเสื้อ(นิ้ว)',
        dataIndex: 'height',
        key: 'height'
      }
    ],
    dataSource : [
      {size:'S',width:'34 นิ้ว',height:'26 นิ้ว'},
      {size:'M',width:'38 นิ้ว',height:'28 นิ้ว'},
      {size:'L',width:'40 นิ้ว',height:'29 นิ้ว'},
      {size:'XL',width:'42 นิ้ว',height:'30 นิ้ว'},
      {size:'2XL',width:'44 นิ้ว',height:'32 นิ้ว'},
      {size:'3XL',width:'48 นิ้ว',height:'32 นิ้ว'},
      {size:'4XL',width:'52 นิ้ว',height:'32 นิ้ว'},
      {size:'พิเศษ',width:'56 นิ้ว',height:'32 นิ้ว'},
    ]
  }


  render() {
    return (
      <RadioGroup className="col-12" onChange={this.props.handleChange} >
        <Table columns={this.state.columns} dataSource={this.state.dataSource} pagination={false} />
      </RadioGroup>
    )
  }
}

export default TablePass
