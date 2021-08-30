import Product from "../Components/product";
import Head from "next/head"

const  Home = ({products}) => {
  return (  
    
    <main>
      <Head> <title> Home | Our Products </title> </Head>
      <div className="row">
        
            {
              products.map(product => (
              <div className="col-md-4 col-sm-6 col-12" key={product.id}>
                <Product  product={product}/>
              </div>)  
              )
            }
        
      </div>
      
    </main>
  );
}
 
export default Home;

export async function getStaticProps() {
  const req = await fetch('https://fakestoreapi.com/products');
  const products = await req.json();
  return {
    props:{ products}
  }
}