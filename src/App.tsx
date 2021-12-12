import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Header } from './components/Header'
import styled from 'styled-components'

const Container = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
`
function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Container>
  )
}

export { App }