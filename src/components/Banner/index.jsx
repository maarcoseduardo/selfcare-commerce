import BannerIcon from '../../assets/Images/banner.png'
import {
    ContainerBanner,
    Img
} from './styles';

export function Banner(){

    return (
        <ContainerBanner>
            <Img src={BannerIcon} alt="Banner Icon" />
        </ContainerBanner>
        
    );
}