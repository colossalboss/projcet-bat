import React from 'react';
import styled from 'styled-components'
import {Button, Glyphicon} from 'react-bootstrap'

const TipActions = styled.div`
  display: flex;
  justify-content: space-between;
`

export default () => {
  return <TipActions>
    <Button><Glyphicon glyph="heart" /> 45</Button>
    <Button><Glyphicon glyph="comment" /> 45</Button>
    <Button><Glyphicon glyph="envelope" /> 45</Button>
    <Button><Glyphicon glyph="globe" /> 45</Button>
  </TipActions>
}