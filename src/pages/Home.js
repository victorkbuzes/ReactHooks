

import { Counter } from "../components/Counter"
import { Form } from "../components/Form"
import Popular from "../components/Popular"

export default function Home() {
  return (
    <div>
      
      <Form />
      <Counter  />

  
        <Popular name = "Prop passed to home" />

    </div>

  )
}
