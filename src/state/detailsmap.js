import makeFetchDuck from './_utils/makeFetchDuck'

const result = makeFetchDuck(
  'detailsmap',
  process.env.PUBLIC_URL + '/data/music.json'
)

export const fetchDetailsMap = result.fetchData
export default result.reducer