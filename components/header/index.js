import Image from "next/image";
import styles from "../../styles/Header.module.css";
import { Badge, IconButton } from "rsuite";
import { FaCartPlus } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const appLogo = <Image src="/applogo.svg" width={25} height={25} />;
  const searchIcon = <Image src="/searchicon.svg" width={18} height={18} />;
  const userIcon = <Image src="/usericon.svg" width={18} height={18} />;
  const cartIcon = <Image src="/carticon.svg" width={18} height={18} />;

  return (
    <div className={styles.headerContainer}>
      {appLogo}
      <div className={styles.mainNavigation}>
        <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/about">Our Stores</Link></li>
            <li><Link href="/about">Contact Us</Link></li>
        </ul>
      </div>
      <div className={styles.rightSideIcons}>
        <div className={styles.searchText}>Search </div>
        <IconButton circle size="sm" icon={searchIcon}></IconButton>
        <IconButton circle size="sm" icon={userIcon}></IconButton>
        <Badge content="1">
          <IconButton circle size="sm" icon={cartIcon}></IconButton>
        </Badge>
      </div>
    </div>
  );
}
