import React from 'react'

import { ButtonContainer} from './styles.js'
const Button = ({title, variant="secondary", onClick}) => {
  return (
      <ButtonContainer variant={variant} onClick={onClick}> 
          {title}

    </ButtonContainer >
  )
}

export { Button }