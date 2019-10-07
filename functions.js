import axios from "axios";

// export function soma(a, b) {
//   return a + b;
// }

// export function sub(a, b) {
//   return a - b;
// }

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {
  await delay();
  console.log("1 Segundo");

  await delay();
  console.log("2 Segundo");

  await delay();
  console.log("3 Segundo");
}
umPorSegundo();
/////////////////////////////////////////////////////////////////////
async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.log("Usuario não encontrado-1");
  }
}

getUserFromGithub("diego3g");
getUserFromGithub("diego3g//124123");
/////////////////////////////////////////////////////////////////////////
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${repo}/repos`
      );

      console.log(response.data);
    } catch (err) {
      console.log("Repositório não existe-1");
    }
  }
}
Github.getRepositories("Rocketseat");
Github.getRepositories("rocketseat/dslkvmskv");
/////////////////////////////////////////////////////////////////////////
const buscaUsuario = async user => {
  const response = await axios.get(`https://api.github.com/users/${user}`);
  try {
    console.log(response.data);
  } catch (error) {
    console.log("Usuário não existe-2");
  }
};

buscaUsuario("diego3g");
