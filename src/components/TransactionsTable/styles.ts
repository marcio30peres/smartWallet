import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 .5rem;

        th {
            text-align: left;
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            line-height: 1.5rem;
        }

        td {
            background-color: var(--shape);
            border-radius: .5rem;
            color: var(--text-body);
            padding: 1rem 2rem;
            line-height: 1.5rem;

            &:first-child {
                color: var(--text-title);
            }

            &.income {
                color: var(--green);
            }

            &.outcome {
                color: var(--red);
            }
        }
    }
`