import './styles.css';
import carImg from '../../assets/car.png';

export default function CardProduct() {
    return (
        <div className='dsct-product-card'>
            <img src={carImg} alt="Carro" />
            <h5>Lorem ipsum dolor</h5>
        </div>
    );
}