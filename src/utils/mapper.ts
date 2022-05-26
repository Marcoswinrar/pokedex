const statNameMapper = (stat: string): string => {
  switch (stat) {
    case 'special-attack':
      return 'Sp.Atk'
    case 'special-defense':
      return 'Sp.Def'
    default:
      return stat
  }
}

export default statNameMapper
