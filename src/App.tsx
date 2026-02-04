import Card01 from "./components/Card01"
import Card02 from "./components/Card02"
import Card03 from "./components/Card03"
import Card04 from "./components/Card04"
import Card05 from "./components/Card05"
import Card06 from "./components/Card06"

import { Toaster } from "sonner"


function App() {


  return (
    <>

      <div className="container">
        <Card06 />
        <Card01 />
        <Card04 />
        <Card02 />
        <Card03 />
        <Card05 />
      </div>
      <Toaster />
    </>
  )
}

export default App
