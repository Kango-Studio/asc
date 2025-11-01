/**
 * Aplica máscara de telefone brasileiro
 * Formatos suportados: (00) 0000-0000 ou (00) 00000-0000
 */
export function maskPhone(value: string): string {
  // Remove todos os caracteres não numéricos
  const numbers = value.replace(/\D/g, '');

  // Limita a 11 dígitos (telefone fixo ou celular)
  const limitedNumbers = numbers.slice(0, 11);

  // Aplica a máscara baseado no tamanho
  if (limitedNumbers.length <= 2) {
    return limitedNumbers ? `(${limitedNumbers}` : '';
  } else if (limitedNumbers.length <= 6) {
    return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2)}`;
  } else if (limitedNumbers.length <= 10) {
    return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 6)}-${limitedNumbers.slice(6)}`;
  } else {
    return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 7)}-${limitedNumbers.slice(7)}`;
  }
}

/**
 * Valida formato de telefone brasileiro
 * Aceita telefone fixo (10 dígitos) ou celular (11 dígitos)
 */
export function isValidPhone(phone: string): boolean {
  const numbers = phone.replace(/\D/g, '');
  // Telefone fixo: 10 dígitos | Celular: 11 dígitos
  return numbers.length === 10 || numbers.length === 11;
}

/**
 * Valida formato de email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

