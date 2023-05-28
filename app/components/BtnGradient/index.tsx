import styles from "./index.module.scss";

function BtnGradient(props: { label?: string }) {
  const { label = "Button" } = props;
  return (
    <button className={`${styles["btn-gradient"]} rounded py-4`}>
      {label}
    </button>
  );
}

export default BtnGradient;
