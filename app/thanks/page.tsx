import t from "../thanks/Thanks.module.scss";

const Thanks = () => {
  return (
    <div className="container">
      <div className={t.thanksWrapper}>
        <h1>Thank you!</h1>
        <p>
          Your form has been submited succesfully, and we'll get in touch soon!
        </p>
        <button className={t.contactBtn}>Our work</button>
      </div>
    </div>
  );
};

export default Thanks;
