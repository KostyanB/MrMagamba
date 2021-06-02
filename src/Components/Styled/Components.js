import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 40px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

export const OrderTitle = styled.h2`
    text-align: center;
    font-weight: 400;
    line-height: 68px;
    margin-bottom: 30px;
`;

export const Total = styled.div`
    display: flex;
    margin: 0 35px 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;

export const TotalPrice = styled.span`
    text-align: right;
    width: 120px;
    margin-left: 5px;
`;