import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeHeader = styled.header`
    display: flex;
    height: 500px;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    background: url('https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625');
`
export const HomeInfo = styled.div`
    text-align: center;
    height: 250;
    color: #fff;
    width: 650px;
    /* border: 1px solid red; */

`

export const LearnMore = styled(Link)`
    background: #fff;
    color: #000;
    padding: 0.4rem 0.5rem;
    text-decoration: none;
    display: block;
    width: 90px;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
` 
export const TeamsInfo = styled.section`
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
    text-align: center;
`

export const TeamsItems = styled.div`
    padding: 2rem;
    background: #1f1f1f;
    color: white;
    border: 1px solid #000; 
`

export const TeamsBtn = styled(Link)`
    text-decoration: none;
    color: #000;
    background: #fff;
    padding: 0.5rem;
`
export const ImageItems = styled.img`
   width: 150px;
   box-shadow: 0 0 10px #333;
   border-radius: 100%;
`