import { client } from './client';

export async function getRecipes() {
  const response = await client.from('recipes').select('*');

  return response.body;
}

export async function getCats() {
  const response = await client.from('cats').select('*');

  return response.body;
}