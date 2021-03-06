const cpfValidator = (maskedCpf: string): boolean => {
  const cpf = maskedCpf.replace(/\D/g, '').split('').map(d => parseInt(d));

  const verify = (max: number): boolean => {
    let sum = 0;
    
    cpf.map((digit, i) => {
      if (i <= max - 2) {
        sum += digit * (max - i);
      }
    })

    sum = sum * 10;

    return sum % 11 == cpf[max-1] ? true : false
  }

  if (cpf.length != 11 || cpf.every(v => v == cpf[0]) || !verify(10) || !verify(11)) {
    return false;
  }

  return true;
}