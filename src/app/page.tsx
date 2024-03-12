import { getProductsList } from "@/api/products";
import { TitleSection } from "@/ui/atoms/TitleSection";
import { ProductList } from "@/ui/organisms/ProductList";

const Home = async () => {
	const products = await getProductsList(8, 1);

	return (
		<>
			<TitleSection titleText="Polecane produkty" />
			<ProductList products={products} />
		</>
	);
};

export default Home;
