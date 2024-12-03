import Header from './Components/Header/Header';
import Results from './Components/Results';
import UserInputGroup from './Components/UserInputGroup';

function App() {
  return (
    <div className="center">
      <Header />
      <UserInputGroup />
      <Results />
      <div>User inputs</div>
      <div>Derived calculations</div>
    </div>
  );
}

export default App;
