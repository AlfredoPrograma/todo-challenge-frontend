const generateId = (): string => {
  const randomNumber = Math.ceil(Math.random() * 10000)
  const id = `TODO-${randomNumber}`

  return id
}

export { generateId }
