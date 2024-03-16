import { getProductsList } from "@/api/products";
import { TitleSection } from "@/ui/atoms/TitleSection";
import { ProductList } from "@/ui/organisms/ProductList";

const Home = async () => {
	const products = await getProductsList(8, 0);

	if (!products || products.data.length === 0)
		return <p>No products found.</p>;

	return (
		<>
			<TitleSection titleText="Polecane produkty" />
			<ProductList products={products.data} />
		</>
	);
};

export default Home;
