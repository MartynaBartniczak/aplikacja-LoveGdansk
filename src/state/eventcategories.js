import makeFetchDuck from './_utils/makeFetchDuck'

const result = makeFetchDuck(
  'eventcategories',
  process.env.PUBLIC_URL + '/data/music.json'
)

export const fetchEventCategries = result.fetchData
export default result.reducer