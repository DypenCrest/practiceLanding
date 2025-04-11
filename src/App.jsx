import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ManageLanding from "./pages/ManageLanding";

function App() {
  return (
    <>
      {/* <Header /> */}
      <header>
        <Navbar />
      </header>

      <main className="min-h-dvh">
        <ManageLanding />
      </main>

      {/* <Footer /> */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
