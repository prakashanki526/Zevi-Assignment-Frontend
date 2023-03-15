import axios from "axios";

export async function getAllProducts() {
    const reqUrl = `https://zevi-assignment-backend.onrender.com/discover/getAllProducts`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getFilteredProducts({name="", brand="", priceMin=0, priceMax=10000, rating=""} ) {
    const reqUrl = `https://zevi-assignment-backend.onrender.com/discover/getFilteredProducts?name=${name}&brand=${brand}&priceMin=${priceMin}&priceMax=${priceMax}&rating=${rating}`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function toggleLike(id) {
    const reqUrl = `https://zevi-assignment-backend.onrender.com/discover/addToFavourites?id=${id}`;
    const result = await axios.post(reqUrl);
    return result.data;
}

export async function getTrendingProducts() {
    const reqUrl = `https://zevi-assignment-backend.onrender.com/discover/getTrendingProducts`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getCategories() {
    const reqUrl = `https://zevi-assignment-backend.onrender.com/discover/getcategories`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getBrands() {
    const reqUrl = `https://zevi-assignment-backend.onrender.com/discover/getBrands`;
    const result = await axios.get(reqUrl);
    return result.data;
}