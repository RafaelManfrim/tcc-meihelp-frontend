import styled from 'styled-components'

export const LoginPageContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
`

export const LoginFormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    padding: 2rem;
`

export const LoginForm = styled.form`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`

export const LogoLogin = styled.div`
    width: 70%;
    display: block;
`

export const ChangeModeText = styled.span`
    margin-top: 1rem;
`

export const ChangeModeLink = styled.a`
    color: var(--blue);
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`

export const LoginPageImageContainer = styled.div`
    width: 65%;
    height: 100%;
    position: relative;
`
