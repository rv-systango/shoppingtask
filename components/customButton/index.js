import { useEffect, useState } from "react";
import styles from "../../styles/custombutton.module.css";
export default function ButtonC({
  text,
  onClick = () => {},
  type = 1,
  activeTag = "",
}) {
  const [isActive, setIsActive] = useState(false);
  const customClass = () => {
    let cls = styles.custombutton + " ";
    if (type === 1) return cls;
    if (type === 2) return (cls += styles.rounded_02);
    if (type === 3) return cls;
    if (type === 4) return cls;
    if (type === 5) return (cls += styles.noborder_05);
    return cls;
  };

  useEffect(() => {
    if (activeTag === text) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeTag]);
  return (
    <button onClick={onClick} className={`${customClass()} ${isActive ? styles.btcActive : ""}`}>
      {text}
    </button>
  );
}
