const getAge = async (name) => {
  const url = 'https://api.agify.io?name=' + name
  const response = await fetch(url, {
    method: 'GET',
  })
  const data = await response.json()
  console.log(data)
  document.getElementById('age').innerHTML = data.age
}
