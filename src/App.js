import './App.css';
import Footer from './Page/Footer';
import MenuMakanan from './Page/MenuMakanan';
import Header from './Page/Header';
import MenuKontak from './Page/MenuKontak';
import MenuTentangKami from './Page/MenuTentangKami';

function App() {
  return(
    <div>
      <Header/>
      <MenuMakanan/>

      <MenuTentangKami/>
      <MenuKontak/>
      <Footer />
    </div>
  )

}

export default App;
