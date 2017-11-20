import axios from 'axios';

const API_KEY = '8ccddf4rtjz5k5btqam84qak';
const ROOT_URL = `https://api.bestbuy.com/v1/products`;
const KEY = `?apiKey=${API_KEY}&pageSize=10&format=json`;

export const FETCH_DATA = 'FETCH_DATA';

export function fetchData(manufacturer){

	const url = `${ROOT_URL}(${manufacturer})${KEY}`; 
	const request = axios.get(url);

	
	

	return {
		type: FETCH_DATA,
		payload: request
	}
}  