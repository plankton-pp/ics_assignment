import Routes from './routes/Routes'
import { ContainerFixed, Sidebar } from './components/styles/globalStyles'
import MenuSidebar from './components/MenuSidebar';
//style
import './assets/css/App.css'

function App() {
  return (
    <>
      <Sidebar className='sidebar'>
        <MenuSidebar></MenuSidebar>
      </Sidebar>
      <ContainerFixed>
        <Routes />
      </ContainerFixed>
    </>
  )
}

export default App
