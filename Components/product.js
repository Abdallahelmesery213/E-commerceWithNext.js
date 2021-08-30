// import Image from 'next/image';
import Link from 'next/link';
import styles from './../styles/Product.module.css'
const Product = ({product}) => {
    const {id , title , price , image} = product;
    return ( 
        <div className="container">
                    <div className={styles.product}>
                        <div>
                            <img src={image} width="200px" height="200px" />
                        </div>
                        <div>
                            <ul className="list-unstyled">
                                <li>{title} </li>
                                <li style={{color:"red"}}><h4> {price}$ </h4></li>
                            </ul>
                            <Link href={`/products/${id}`}><a className="btn-primary" >More Details</a></Link>
                        </div>
                    </div>
            
        </div>
     );
}
 
export default Product;