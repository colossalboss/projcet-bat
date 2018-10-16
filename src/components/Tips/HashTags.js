import React from 'react';

import {Link} from 'react-router-dom';
// import styled from 'styled-components'

// const HashTags = styled.div`
//   display: flex;
//   justify-content: space-between;
// `

export default () => {
  return  <React.Fragment>
    <Link to='/matches/ManUTDvsManCity' >#ManUTDvsManCity</Link>
    <Link to='/leagues/EPL' >#EPL</Link>
    <Link to='/bets/HomeWin' >#Home Win</Link>
  </React.Fragment>
}