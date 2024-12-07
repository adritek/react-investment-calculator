import { useState } from 'react';
import Header from './Components/Header';
import Results from './Components/Results';
import UserInput from './Components/UserInput';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <div>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results user={userInput} />
    </div>
  );
}

export default App;
