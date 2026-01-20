import BookList from "./components/BooksList"
import { SearchFields } from "./components/Search/SearchFields"
import { Container } from "react-bootstrap"

function App() {

  return (
    <>
      <Container className="py-5">
        <h1 className="text-center mb-5">Open Library Search</h1>
        <SearchFields />
        <BookList />
      </Container>
    </>
  )
}

export default App
