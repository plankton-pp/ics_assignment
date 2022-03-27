import styled from 'styled-components'

export const ContainerFixed = styled.div`
    background: #E5E5E5;
    min-height: calc(100vh - 0px);
    font-family: "Kanit", serif;
`

export const NavHeader = styled.div`
    background: #134B8A;
    height: 65px ;
`

export const Card = styled.div`
    background: ${({ bg }) => bg || "#fff"};
    color: ${({ color }) => color || "#000"};
    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};
    border-radius: ${({ radius }) => radius || '0px'};
    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
    transition: 0.3s;
    &:hover {
        box-shadow: ${({ dishover }) => dishover ? "0px 4px 8px 0px rgba(0,0,0,0.2);" : "0px 8px 16px 0px rgba(0,0,0,0.5)"};
    }
`

export const Sidebar = styled.div`
    position: fixed;
    background: #fff;
    height: 100%;
    width: 4%;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 0px 50px 0px 0px;
    transition: 0.3s;
    z-index: 1;
    &:hover {
        z-index: 1;
        transition: 0.3s;
        width: 15%;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`