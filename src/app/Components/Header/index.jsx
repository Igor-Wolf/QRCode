import React from 'react'
import { Container, Image, ImageContainer } from './styles'
import Link from 'next/link'

const Header = () => {
  return (
    <Container>
      
      <Link href={"https://igor-wolf.github.io/"}>
        <ImageContainer>
            <Image src="https://github.com/Igor-Wolf/Igor-Wolf.github.io/blob/main/assets/images/lobo.png?raw=true" alt="Logo"></Image>
            
        </ImageContainer>
      </Link>
      
    </Container>
  )
}

export { Header }