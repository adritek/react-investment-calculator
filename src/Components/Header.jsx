import logo from '../../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header id="header">
      <img
        src={logo}
        alt="A bag with a dollar symbol on it surrounded by gold coins"
      />
      <h1>Investment Calculator</h1>
    </header>
  );
}
