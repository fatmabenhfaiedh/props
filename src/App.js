import './App.css';
import Profile from './profile/Profile';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
    <Profile fullName= "Fatma Ben Hfaiedh" bio= "Curious and ambitious being, Into Arts, Culture, Music and Geekness" profession= "Architect, Graphic Designer, Founder of the brand Chertilla and a Djembefola" age= "28"></Profile>
    </div>
  );
}

export default App;
