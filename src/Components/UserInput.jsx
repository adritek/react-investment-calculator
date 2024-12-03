export default function UserInput({ labelOf }) {
  return (
    <div id="user-input">
      <label>
        {labelOf}
        <input type="number" name={labelOf} />
      </label>
    </div>
  );
}
