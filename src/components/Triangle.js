import HeightStore from "../stores/HeightStore";

import "../css/component/Shapes.scss";

function printTriangle(height)
{
  if (height >= 12) height = 12;
  if (height <= 0 || isNaN(height)) return;

  let result = "*\n";
  let ast = "*";

  while (--height) {
    ast += " *";
    result += ast + "\n";
  }

  const newText = result.split("\n").map((str) => <p>{str}</p>);
  return <div>{newText}</div>;
}

export default function Triangle()
{
  const store = HeightStore((s) =>
  {
    return {
      triHeight: s.triHeight,
      setTriHeight: s.setTriHeight,
    };
  });
  return (
    <div className="Triangle">
      <div>
        <h2>
          Print a <br />
          triangle
        </h2>
        <br />
        <input
          className="Inp"
          name="height"
          onChange={store.setTriHeight}
          value={store.triHeight}
          placeholder="Enter an integer"
        />
      </div>
      <div className="Pat">
        {store.triHeight && printTriangle(store.triHeight)}
      </div>
    </div>
  );
}
