import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: -7rem;

    div {
        background-color: var(--shape);
        padding: 1.5rem 2rem;

        border-radius: .5rem;

        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;

            font-size: 2rem;
            font-weight: 500;
        }

        &.highlight-background {
            background-color: var(--green);
            color: #ffffff;
        }
    }
`