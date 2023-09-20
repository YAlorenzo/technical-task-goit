import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL ="https://6509a552f6553137159bcd44.mockapi.io/api/v1/autoua";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAdverts", async (page) => {
  const response = await axios.get(`/adverts?p=${page}&l=8`);
  return response.data;
});

export const fetchFilterAdverts = createAsyncThunk(
  "adverts/fetchFilterAdverts", async ({ brand, price, mileage }) => {
    const response = await axios.get(
      `/adverts?make=${brand}`
    );
    const filteredAdverts = response.data.filter((advert) => {
      const rentalPrice = parseInt(advert.rentalPrice.replace(/\$/, ""));
      const ifPrice = price === '' ? 500 : price;
      const priceCheck = rentalPrice <= ifPrice;
      const mileageCheck = mileage[0] <= advert.mileage && advert.mileage <= mileage[1];

      return priceCheck && mileageCheck;
    });
    return filteredAdverts;
  })