import "../css/component/Footer.scss";

function LeftDescription() {
  return (
    <dl>
      <dt>email</dt>
      <dd>aaron.dykes99@gmail.com</dd>
      <br />
      <dt>phone</dt>
      <dd>613-447-7909</dd>
    </dl>
  );
}
function RightDescription() {
  return (
    <dl>
      <dt>source</dt>
      <dd>
        <a
          href="https://github.com/aaronDykes/react-portfolio/tree/reactBranch"
          target="_blank"
          rel="noreferrer"
        >
          code
        </a>
      </dd>
      <br />
      <dt>linkedin </dt>
      <dd>
        <a href="https://www.linkedin.com/in/aaron-dykes-691524216/">link</a>
      </dd>
    </dl>
  );
}
export default function Footer() {
  return (
    <div className="footer">
      <div className="f-item">
        <LeftDescription />
      </div>
      <div className="f-item">
        <RightDescription />
      </div>
    </div>
  );
}
