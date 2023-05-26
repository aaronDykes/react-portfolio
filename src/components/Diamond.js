import HeightStore from "../stores/HeightStore";
import "../css/component/Shapes.scss";

function printDiamond(height)
{
  if (height >= 12) height = 12;
  if (height <= 0 || isNaN(height)) return;

  let count = height;
  let ast = "*";
  let result = "*<br>";

  while (--height) {
    ast += " *";
    result += ast + "<br>";
  }

  while (count--) {
    ast = ast.substring(0, count + count - 1);
    result += ast + "<br>";
  }

  const final = result.split("<br>").map((str) => <p>{str}</p>);
  return <div>{final}</div>;
}
export default function Diamond()
{
  const store = HeightStore((s) =>
  {
    return {
      diHeight: s.diHeight,
      setDiHeight: s.setDiHeight
    };
  });

  return (
    <div className="Diamond">
      <div>
        <h2>
          Print a <br />
          Diamond
        </h2>
        <br />
        <input
          className="Inp"
          name="diHeight"
          onChange={store.setDiHeight}
          value={store.diHeight}
          placeholder="Enter an integer"
        />
      </div>
      <div className="Pat">
        {store.diHeight && printDiamond(store.diHeight)}
      </div>
    </div>
  );
}
