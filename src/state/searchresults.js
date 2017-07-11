import makeFetchDuck from './_utils/makeFetchDuck'

const result = makeFetchDuck(
  'searchresults',
  process.env.PUBLIC_URL + '/data/music.json'
)

export const fetchSearchResults = result.fetchData
export default result.reducer