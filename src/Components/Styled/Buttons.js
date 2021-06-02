import styled from 'styled-components';

const Button = styled.button`
    position: relative;
    font-size: inherit;
    text-decoration: none;
    color: #002878;
    border-radius: 30px;
    background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
    background-position: 90% 0;
    background-size: 200% 200%;
    box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);
    transition: .5s;
    &:hover {
        box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
        background-position: 0 0;
    }
`;
export const ButtonCheckout = styled(Button)`
    width: fit-content;
    margin: 0 auto;
    padding: 8px 30px;

    &:disabled {
        background-image: none;
        box-shadow: none;
        background-color: #bbb;
    }
`;

export const ButtonApprove = styled(ButtonCheckout)`
    color: #33d9de;
    text-shadow: 1px 1px 1px #002878;
`;

export const ButtonLogIn = styled(Button)`
    width: 60px;
    height: 60px;
`;

export const ButtonLogOut = styled(ButtonLogIn)`
    font-size: 30px;
    font-weight: 800;
`;

