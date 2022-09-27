import MasterCardIcon from "../../../assets/Images/MasterCard.svg";
import PayPalIcon from "../../../assets/Images/PayPal.svg";
import VisaIcon from "../../../assets/Images/Visa.svg";
import { IoLogoLinkedin } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import {
  FooterSocialPayments,
  AreaSocial,
  UnListSocial,
  ListSocial,
  Anchor,
  UnListPayment,
  ListPayment,
  ImgPayment,
} from "./styles";

export function FooterSocial() {
  return (
    <FooterSocialPayments>
      <AreaSocial>
        <UnListSocial>
          <ListSocial>
            <Anchor href="https://www.instagram.com/maarcoseduardo/">
              <BsInstagram size={27} color="green" />
            </Anchor>
          </ListSocial>
          <ListSocial>
            <Anchor href="https://www.linkedin.com/in/maarcoseduardo/">
              <IoLogoLinkedin size={35} color="green" />
            </Anchor>
          </ListSocial>
        </UnListSocial>
        <UnListPayment>
          <ListPayment>
            <ImgPayment src={MasterCardIcon} alt="Icon Instagram" />
          </ListPayment>
          <ListPayment>
            <ImgPayment src={PayPalIcon} alt="Icon Instagram" />
          </ListPayment>
          <ListPayment>
            <ImgPayment src={VisaIcon} alt="Icon Instagram" />
          </ListPayment>
        </UnListPayment>
      </AreaSocial>
    </FooterSocialPayments>
  );
}
