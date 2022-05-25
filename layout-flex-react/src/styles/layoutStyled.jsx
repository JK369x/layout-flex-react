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