import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Browse from './pages/Browse';
// import RecipeDetails from './pages/RecipeDetails';
// import CategoryDetails from './pages/CategoryDetails';
// import SearchDetails from './pages/SearchDetails';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Browse />} />
           {/* <Route path="/search" element={<SearchDetails />} />
          <Route path="/recipe/:slug" element={<CategoryDetails />} />
          <Route path="/category/:slug" element={<CategoryDetails />} /> */}
        </Routes>
      </Router>
  )
}

export default App
