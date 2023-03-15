import axios from "axios";

export async function getAllProducts(email) {
    const reqUrl = `http://localhost:3001/discover/getAllProducts`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getFilteredProducts(name="", brand="", priceMin=0, priceMax=10000, rating="" ) {
    const reqUrl = `http://localhost:3001/discover/getFilteredProducts?name=${name}&brand=${brand}&priceMin=${priceMin}&priceMax=${priceMax}&rating=${rating}`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function toggleLike(id) {
    const reqUrl = `http://localhost:3001/discover/addToFavourites?id=${id}`;
    const result = await axios.post(reqUrl);
    return result.data;
}

export async function getTrendingProducts() {
    const reqUrl = `http://localhost:3001/discover/getTrendingProducts`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getCategories() {
    const reqUrl = `http://localhost:3001/discover/getcategories`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getBrands() {
    const reqUrl = `http://localhost:3001/discover/getBrands`;
    const result = await axios.get(reqUrl);
    return result.data;
}