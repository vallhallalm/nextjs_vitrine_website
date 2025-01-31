import Link from "next/link";
import { FaHome } from "react-icons/fa";
import styles from "../app/page.module.css";
import { FaPuzzlePiece } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa";

interface FooterComponentProps {
  currentPage: "home" | "projects" | "hobbies" | "contact" | "career";
}

const FooterComponent = (props: FooterComponentProps) => {
  const { currentPage } = props;
  return (
    <footer className={styles.footer}>
      {currentPage !== "home" && (
        <Link href="/">
          <FaHome aria-hidden width={16} height={16} />
          Home
        </Link>
      )}
      {currentPage !== "projects" && (
        <Link href="/projects">
          <FaTerminal aria-hidden width={16} height={16} />
          Projects
        </Link>
      )}
      {currentPage !== "hobbies" && (
        <Link href="/hobbies">
          <FaPuzzlePiece aria-hidden width={16} height={16} />
          Hobbies
        </Link>
      )}
      {currentPage !== "career" && (
        <Link href="/career">
          <FaFile aria-hidden width={16} height={16} />
          Career
        </Link>
      )}
      {currentPage !== "contact" && (
        <Link href="/contact">
          <FaFile aria-hidden width={16} height={16} />
          Contact
        </Link>
      )}
    </footer>
  );
};

export default FooterComponent;
