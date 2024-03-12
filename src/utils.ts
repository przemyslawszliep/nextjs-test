export const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN'
    }).format(amount);
}

export const countPagesAndConvertToArray = (countOfProducts: number, productPerPage: number) => {
	const numberOfPages = Number(Math.ceil(countOfProducts / productPerPage));

	if (!isNaN(numberOfPages)) {
		return Array.from({ length: numberOfPages }, (_, index) => index + 1);
	}
	return null;
};