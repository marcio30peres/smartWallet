import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {   
        api.get('transactions')
        .then(response => console.log(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className='income'>R$12000,00</td>
                        <td>Freelance</td>
                        <td>18/03/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className='outcome'> - R$1100,00</td>
                        <td>Casa</td>
                        <td>18/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}