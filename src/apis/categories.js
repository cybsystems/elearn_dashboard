import { postData } from '../helpers';
import { baseUrl } from '../global';
 
export const getCategories = async () =>
  await fetch(`${baseUrl}/getAllCategory.php`).then(res => res.json());

export const removeCategory = async cat_id =>
  await postData(`${baseUrl}/removeCategory.php`, { cat_id: cat_id });
