import Image from "next/image";
import footerLogo from "../../../public/imgs/footerlogo.svg";

export default function FooterWatermark() {
  return (
    <div className="footer-large-logo" aria-hidden="true">
      <Image src={footerLogo} alt="" width={1810} height={327} />
    </div>
  );
}
