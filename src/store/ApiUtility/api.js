import axios from "axios";

const API_BASE_URL = "https://fakestoreapi.com";

const params = {
  headers: {
    Authorization:
      "bearer " +
      "a4aaf107b68a196a345b58ea719977bdb38c1831d13cc2e62e0f4170bc5fb0d52d6be0cbe2f0b01c4f04e33caa5540fda7b895f69327ddf292a551111c80f83dd31cecc262d9261a2bc3d32a3708ed119239a3950979c0ac2f19ff584fe0224d1d2bf82e4df61e64402b9c734c2821a3e46cadc031eba6462478986b69ff7d28",
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get("http://localhost:1337" + url, params);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

export const makePaymentRequest = axios.create({
  baseURL: "http://localhost:1337",
  headers: {
    Authorization:
      "bearer " +
      "a4aaf107b68a196a345b58ea719977bdb38c1831d13cc2e62e0f4170bc5fb0d52d6be0cbe2f0b01c4f04e33caa5540fda7b895f69327ddf292a551111c80f83dd31cecc262d9261a2bc3d32a3708ed119239a3950979c0ac2f19ff584fe0224d1d2bf82e4df61e64402b9c734c2821a3e46cadc031eba6462478986b69ff7d28",
  },
});

// here we  Use Native fetch
// const API_BASE_URL = "https://fakestoreapi.com";

// export const fetchProducts = async () => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/products`);
//     if (!response.ok) {
//       throw new Error("Failed to fetch products");
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error:", error.message);
//     throw error;
//   }
// };
