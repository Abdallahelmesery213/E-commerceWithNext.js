import Product from "../Components/product";
import Head from "next/head"

const  Home = ({products}) => {
  return (  
    
    <main>
      <Head> <title> Home </title> </Head>
      {
        products.map(product => <Product key={product.id} product={product}/> )
      }
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