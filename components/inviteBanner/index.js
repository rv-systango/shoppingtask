import styles from "../../styles/Header.module.css";
import ButtonC from "../customButton";

export default function InviteBanner() {
  return (
    <div className={styles.inviteBannerContainer}>
      Invite friends to Big Fashion Festival & get up to $150 MynCash for every
      person who visits
      <span className={styles.inviteButtonContainer}><ButtonC text="Invite Now" type={5}/></span>
    </div>
  );
}
