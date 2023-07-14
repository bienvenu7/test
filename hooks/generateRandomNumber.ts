function randomNumber(): string {
  const numbers: Array<number> = [];

  while (numbers.length < 4) {
    const randomNumber = Math.floor(Math.random() * 10); // Génère un chiffre aléatoire entre 0 et 9

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers.join("");
}

export default randomNumber;
