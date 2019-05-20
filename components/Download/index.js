import React, { Component } from 'react';
import ButtonPrimary from '../Core/Button'
import Headline, { Paragraph } from '../Core/Text'
import styled from 'styled-components'
import { Card, message } from 'antd'
import Link from 'next/link'
import camperservrice from './../../service/CamperService'

const CardReponsive = styled(Card)`
    @media (max-width : 768px){
    .ant-card-body{
      border:0;
      margin:0px 0px 10% 0px;
      padding:0px;
    }
      border:0;
      margin:0;
      padding:0px;
    .ant-card-bordered{
      border:0px;
    }
  }
`

const Img = styled.img`
  width: 10%;
  @media (max-width : 768px) {
    width: 20%;
  }
`

class index extends Component {

  handleClick = async () => {
    let res = await camperservrice.getdocconfirm()
    console.log(res.data)
    window.open(res.data,'_blank')
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <CardReponsive className="mt-5 mb-2 p-2">
              <div className="row text-center">
                <div className="col-12 mt-3">
                  <Headline>ดาวน์โหลดเอกสาร</Headline>
                </div>
                <div className="col-12 mt-3">
                  <Paragraph>
                    เอกสารขออนุญาติทางโรงเรียน
                  </Paragraph>
                  <Paragraph>
                    <ButtonPrimary onClick={this.handleClick}>Dowload เอกสาร</ButtonPrimary>
                  </Paragraph>
                </div>
              </div>
              <div className="row justify-content-center mt-3 p-3">
                <Link href="https://wip.camp" >
                  <a target="_blank"><ButtonPrimary >กลับไปยัง wip.camp</ButtonPrimary></a>
                </Link>
              </div>
            </CardReponsive>
          </div>
        </div>
      </div>
    );
  }
}



export default index;