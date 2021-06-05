import styled from 'styled-components';

export const Banner = styled.div`
    width: 100%;
    background-position: center;
    background-size: cover;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const ModalSmall = styled.div`
    background-color: #33d9de;
    color: #002878;
    width: 400px;
    padding: 30px;
    display: flex;
    flex-direction: column;
`;

export const OrderTitle = styled.h2`
    text-align: center;
    line-height: 68px;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        margin-bottom: 10px;
        line-height: 40px;
    }
`;

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

export const SelectWrap = styled.div`
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 5px;
`;

export const SelectLabel = styled.label`
    cursor: pointer;
    display: block;
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