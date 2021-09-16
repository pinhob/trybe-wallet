// Coloque aqui suas actions
export default function makeLogin(email) {
  return {
    type: 'LOGIN',
    email,
  };
}
