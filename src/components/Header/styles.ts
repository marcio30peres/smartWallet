import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;

        strong {
            margin-left: 1rem;

            color: #ffffff;
            font-size: 1.5rem;
        }
    }

    button {
        height: 3rem;

        border: 0;
        border-radius: .25rem;

        padding: 0 2rem;        
        
        font-size: 1rem;
        color: #ffffff;

        background: var(--blue-light);

        transition: filter 200ms;

        &:hover {
            filter: brightness(.9);
        }
    }
`