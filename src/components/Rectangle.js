import HeightStore from "../stores/HeightStore";

import "../css/component/Shapes.scss";

function printRect(height)
{
  if (height >= 12) height = 12;
  if (height <= 0 || isNaN(height)) return;

  let top = "*";

  for (let i = 0; i < height - 2; i++) top += "  *";

  top += "  *\n";
  let result = top;

  for (let i = 0; i < height - 2; i++) result += top;

  result += top;
  const final = result.split("\n").map((str) => <p>{str}</p>);
  return <div>{final}</div>;
}

export default function Rectangle()
{
  const store = HeightStore((s) =>
  {
    return {
      rectHeight: s.rectHeight,
      setRectHeight: s.setRectHeight
    };
  });

  return (
    <div className="Rectangle">
      <div>
        <h2>
          Print a <br />
          Rectangle
        </h2>
        <br />
        <input
          className="Inp"
          name="rectHeight"
          onChange={store.setRectHeight}
          value={store.rectHeight}
          placeholder="Enter an integer"
        />
      </div>
      <div className="Pat">
        {store.rectHeight && printRect(store.rectHeight)}
      </div>
    </div>
  );
}
