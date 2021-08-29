import Head from "next/head"
const singleProduct = ({product}) => {
    const {price , title , image , description , category} = product;
    return ( 
        <div className="container">
            
            <Head>
                <title>{title}</title>
            </Head>
            <div className="card d-flex align-items-center" >
                <img src={image} width="200px" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p> {description} </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><h2>{price} $</h2></li>
                    <li className="list-group-item">{category}</li>
                    
                </ul>
                
            </div>
            
        </div>
     );
}
 
export default singleProduct;

export async function getStaticPaths() {
    const req = await fetch("https://fakestoreapi.com/products");
    const products = await req.json();
    const paths = products.map((product) => {
        return {
            params:{ id : product.id.toString() },    
            
        }
    });
    return {
      paths,
      fallback: false
    };
  }

  export async function getStaticProps(context){
      const id = context.params.id;
    const req = await fetch("https://fakestoreapi.com/products/" +id);
    const product = await req.json();
    return{
        props:{product}
    }
  }