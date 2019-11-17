import { postData } from '../helpers';

export const getCategories = async () =>
  await fetch('http://localhost/getAllCategory.php').then(res => res.json());

export const removeCategory = async cat_id =>
  await postData('http://localhost/removeCategory.php', { cat_id: cat_id });
