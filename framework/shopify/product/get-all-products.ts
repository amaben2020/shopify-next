export const fetchApi = async () => {

  const url = 'https://jsonplaceholder.typicode.com/todos'

  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })

  const data = res.json()

  return { data }
}


export const getAllProducts = async (): Promise<any[]> => {

  const { data } = await fetchApi()

  return data
}


