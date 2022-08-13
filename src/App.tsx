import { AppShell } from "@mantine/core"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Frame from "./components/Frame"
import Header from "./components/Header"
import Customize from "./pages/Customize"
import Done from "./pages/Done"
import Home from "./pages/Home"
import Share from "./pages/Share"
import Upload from "./pages/Upload"
import UploadRisk from "./pages/UploadRisk"

function App() {
  return (
    <BrowserRouter>
      <Frame>
        <AppShell
          padding={'xl'}
          header={<Header />}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/upload-risk" element={<UploadRisk />} />
            <Route path="/share" element={<Share />} />
            <Route path="/done" element={<Done />} />
            <Route path="/customize" element={<Customize />} />
          </Routes>
        </AppShell>
      </Frame>
    </BrowserRouter>
  )
}

export default App
