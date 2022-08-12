import { AppShell } from "@mantine/core"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import Upload from "./pages/Upload"
import UploadRisk from "./pages/UploadRisk"

function App() {
  return (
    <BrowserRouter>
      <AppShell
        padding={'xl'}
        header={<Header />}
      >
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/upload-risk" element={<UploadRisk />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}

export default App
