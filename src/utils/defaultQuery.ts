import format from "pg-format";
import { client } from "../database";

export const defaultQuery = async (queryString: string, variables: any[]) => {
  const query = format(queryString, ...variables);

  const data = await client.query(query);

  return data;
};
