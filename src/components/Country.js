const Country = ({ country }) => {
  if (!country) return null
  if (!country.found) return <div>not found...</div>

  const { name, capital, area, languages, flags } = country.data
  return (
    <div>
      <h3>{name.common}</h3>
      <div>capital {capital}</div>
      <div>area {area}</div>
      <h4>languages:</h4>
      <ul>
        {Object.values(languages).map(l => <li key={l}>{l}</li>)}
      </ul>
      <img src={flags.png} alt={`flag of ${name.common}`} style={{ width: 150 }} />
    </div>
  )
}

export default Country
