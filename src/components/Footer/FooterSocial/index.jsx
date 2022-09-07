import FacebookIcon from '../../../assets/Images/Facebook.svg';
import InstagramIcon from '../../../assets/Images/Instagram.svg';
import MasterCardIcon from '../../../assets/Images/MasterCard.svg';
import PayPalIcon from '../../../assets/Images/PayPal.svg';
import VisaIcon from '../../../assets/Images/Visa.svg';
import {
    AreaSocial, 
    Nav, 
    UnListSocial, 
    ListSocial, 
    ImgSocial, 
    NavPayment, 
    UnListPayment, 
    ListPayment, 
    ImgPayment
} from './styles';

export function FooterSocial() {
    return (
      <AreaSocial>
        <Nav>
          <UnListSocial>
            <ListSocial><ImgSocial src={InstagramIcon} alt="Icon Instagram" /></ListSocial>
            <ListSocial><ImgSocial src={FacebookIcon} alt="Icon Facebook" /></ListSocial>
          </UnListSocial>
        </Nav>
        <NavPayment>
          <UnListPayment>
            <ListPayment><ImgPayment src={MasterCardIcon} alt="Icon Instagram" /></ListPayment>
            <ListPayment><ImgPayment src={PayPalIcon} alt="Icon Instagram" /></ListPayment>
            <ListPayment><ImgPayment src={VisaIcon} alt="Icon Instagram" /></ListPayment>
          </UnListPayment>
        </NavPayment>
      </AreaSocial>
    )
  }