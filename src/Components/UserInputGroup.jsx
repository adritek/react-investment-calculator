import UserInput from './UserInput';

export default function UserInputGroup() {
  return (
    <div className="input-group">
      <UserInput labelOf="Initial Investment" />
      <UserInput labelOf="Annual Investment" />
      <UserInput labelOf="Expected Return" />
      <UserInput labelOf="Duration" />
    </div>
  );
}
