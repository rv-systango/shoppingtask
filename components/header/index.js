import Image from "next/image";
import styles from "../../styles/Header.module.css";
import { Badge, IconButton } from "rsuite";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Header() {
  const appLogo = <Image src="/applogo.svg" width={25} height={25} alt="" />;
  const searchIcon = (
    <Image src="/searchicon.svg" width={18} height={18} alt="" />
  );
  const userIcon = <Image src="/usericon.svg" width={18} height={18} alt="" />;
  const cartIcon = <Image src="/carticon.svg" width={18} height={18} alt="" />;
  const router = useRouter();
  const cartItems = useSelector((state) => state.cartSlice.cartItems);

  return (
    <div className={styles.headerContainer}>
      {appLogo}
      <div className={styles.mainNavigation}>
        <ul>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/about">Our Stores</Link>
          </li>
          <li>
            <Link href="/about">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className={styles.rightSideIcons}>
        <div className={styles.searchText}>Search </div>
        <IconButton circle size="sm" icon={searchIcon}></IconButton>
        <IconButton circle size="sm" icon={userIcon}></IconButton>
        <Badge content={cartItems.length}>
          <Link href={{ pathname: "/cart" }}>
            <IconButton circle size="sm" icon={cartIcon}></IconButton>
          </Link>
        </Badge>
      </div>
    </div>
  );
}
