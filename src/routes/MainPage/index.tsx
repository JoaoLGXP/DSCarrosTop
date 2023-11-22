import './styles.css';
import Header from '../../components/Header';
import CardProduct from '../../components/CardProduct';

export default function MainPage() {
    return (
        <>
            <Header />
            <main>
                <section id='dsct-section' className='dsc-bg-catalog'>
                    <div className='dsct-catalog'>
                        <h3 className='dsct-mb25'>Venha nos visitar</h3>
                        <div className='dsct-products-cards'>
                            <CardProduct />
                            <CardProduct />
                        </div>
                    </div>
                </section>
                <section id='dsct-section' className='dsc-bg-comments'>
                    <div className='dsct-catalog'>
                        <h3 className='dsct-mb25'>O que estão dizendo</h3>
                    </div>
                </section>
            </main>
        </>
    );
}