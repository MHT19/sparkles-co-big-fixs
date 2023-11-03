import React from 'react'
import './productCard.css'
import { useNavigate } from 'react-router-dom';


const ProductCard = (props) => {
    const navigate = useNavigate();
    const handleProductItemClick = (Pname) => {
        console.log(`Clicked on ${Pname}`);
        navigate(`/Products/${Pname}`);
    };
    
    // const images = Array(props.stars).fill('../../public/logo512.png');
    const ratings = Array(parseInt(props.stars)).fill('★');
    // const status = props.status;
    return (
        <div onClick={() => handleProductItemClick(props.discription)} className='prod-Card'>
            {/* <div className='img-conntent'> */}
            <div className='img-container'>
                <div className={`banner ${props.status}`}></div>
                <div className="imgPC">
                    <img className='prodIMG' src={props.img} alt='productImage' />
                </div>
            </div>
            {/* </div> */}
            <div className="detailsPC">
                <h3 className='disc'>{props.discription}</h3>
                <div className='pricePC'>
                    <span className='afterPC'>${parseInt(props.price)*0.75}</span> {/* 2% discount */}
                    <span className='beforePC text-dull'>${props.price}</span>
                </div>
                <div className='rating'>
                    <div className="image-containerPC">
                        {ratings.map((index) => (
                            Array(ratings).fill('★')
                        ))}
                    </div>
                    <span className='text-dull'>{props.NoOfReviews}</span>
                </div>
                <button className="shop-button">Shop</button>
            </div>
        </div>
    )
}

export default ProductCard