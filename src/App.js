import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/pages/Home'
import Seguranca from './components/pages/Seguranca'
import Gerador from './components/pages/Gerador'
import Contato from './components/pages/Contato'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
    return (
        <Router>
            <Navbar />
            <Container customClass='min-height'>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/seguranca" element={<Seguranca />} />
                    <Route path="/gerador-de-senhas" element={<Gerador />} />
                    <Route path="/contato" element={<Contato />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    )
}

export default App