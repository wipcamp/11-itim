import React, { Fragment } from 'react';
import Download from './../components/Download/index'
import styled from 'styled-components'
import colors from '../config/colors'
import Bg from '../components/Core/Bg'


const BgColors = styled.div`
  background: ${colors.bgcolor};
  overflow:hidden;
  @media (max-width : 768px) {
    height: 100vh;
  }
`


class downloadconfrim extends React.Component {

    render() {
        return (
            <Fragment>
                   <BgColors>
                      <Download/>
                    <Bg position="absolute"/>
                  </BgColors>
            </Fragment>
        );
    }
}

export default downloadconfrim;
