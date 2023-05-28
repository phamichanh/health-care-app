import styles from "./index.module.scss";

function BtnPeriodTime(props: { label?: string; id: string }) {
  const { label = "Button", id = "" } = props;
  return (
    <div className={styles.button}>
      <input type="radio" id={id} name="check-period-time" />
      <label className="btn btn-default" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default BtnPeriodTime;
