import React from 'react'
import { Card, Circle,Content,LogoCocacola } from '../styles/layoutStyled'
import item1 from '../myitem/cocacola_logo.png'

function About() {
  return (
    <>
    <Card>
    <Circle>
        <LogoCocacola src={item1}></LogoCocacola> 
    </Circle>
    </Card>
    <Content>
        <h2>CocaCola</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni vero placeat aperiam sunt possimus iusto inventore molestias eaque doloribus!</p>
    </Content>
    </>
  )
}

export default About