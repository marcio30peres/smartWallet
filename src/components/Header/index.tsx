import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <div>
                    <img src={logo} alt="Smart Wallet Logo"/>
                    <strong>Smart Wallet</strong>
                </div>
                <button type='button'>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}