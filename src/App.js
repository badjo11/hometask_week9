import Counter from "./components/Counter";
import Forma from "./components/Forma";
import Receipts from "./components/Receipts";
import MainContextProvider from "./components/contexts/MainContext";
import ContactList from "./components/ContactList";
function App() {
  return (
    <>
      <MainContextProvider>
        <Counter />
        <Receipts />
        <Forma />
        <ContactList />
      </MainContextProvider>

    </>

  );
}

export default App;
