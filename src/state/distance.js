/**
 * Created by piotrkasprzycki on 20.07.17.
 */
import makeFetchDuck from "./_utils/makeFetchDuck";

const result = makeFetchDuck(
  'distance',
  process.env.PUBLIC_URL + '/data/music.json'
);

export const fetchDistance = result.fetchData;
export default result.reducer