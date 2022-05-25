import React from 'react'
import { TeamsBtn, TeamsInfo, TeamsItems,ImageItems  } from '../styles/layoutStyled'

function Teams() {
  return (
  <>
    <TeamsInfo>
      <TeamsItems>
        <h3>Person 1</h3>
        <ImageItems src='https://images.unsplash.com/photo-1555952517-2e8e729e0b44?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2364' alt='person1'></ImageItems>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, quod.</p>
        <TeamsBtn to='/'>Contact</TeamsBtn>
      </TeamsItems>      
      <TeamsItems>
        <h3>Person 2</h3>
        <ImageItems src='https://images.unsplash.com/photo-1555952517-2e8e729e0b44?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2364' alt='person1'></ImageItems>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, quod.</p>
        <TeamsBtn to='/'>Contact</TeamsBtn>
      </TeamsItems> 
      <TeamsItems>
        <h3>Person 3</h3>
        <ImageItems src='https://images.unsplash.com/photo-1555952517-2e8e729e0b44?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2364' alt='person1'></ImageItems>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, quod.</p>
        <TeamsBtn to='/'>Contact</TeamsBtn>
      </TeamsItems> 
    </TeamsInfo>
  </>
  )
}

export default Teams