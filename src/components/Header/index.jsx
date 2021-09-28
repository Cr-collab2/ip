import { Container } from "./style";
import BG from '../../images/pattern-bg.png'

export function Header(){
    return(
        <Container BG={BG}>
            <div className='content'>
                <h1>IP Address Tracker</h1>
                <input type="text" placeholder="Search any IP address or domain" /> <button>ᐅ</button>
            </div>
        </Container>
    )
}