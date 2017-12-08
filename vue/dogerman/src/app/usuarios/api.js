import axios from 'axios';

export default class UsuarioService {
  buscarTodos () {
    return axios.get(`http://localhost:3000/api/usuarios`)
    .then(response => {
      console.log('buscarTodos');
      return response.data;
    })
    .catch(error => {
      console.log('erro');
      console.log(error);
      throw new Error('Não foi possível listar os usuários. Tenta mais tarde');
    });
  };

  buscarPorId (id) {
    return axios.get('http://localhost:3000/api/usuarios/' + id)
    .then((response) => {
      console.log('buscarPorId');
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log('error get by id');
      console.log(error);
      throw new Error('Nenhum registro encontrado!');
    });
  };

  salvar (usuario) {
    if (usuario._id) {
      return axios.put('http://localhost:3000/api/usuarios/' + usuario._id, usuario)
      .then((response) => {
        console.log('atualizando...');
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log('error atualiza');
        console.log(error);
        throw new Error('Nenhum registro encontrado!');
      });
    } else {
      return axios.post('http://localhost:3000/api/usuarios/', usuario)
      .then((response) => {
        console.log('salvando...');
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log('error salva');
        console.log(error);
        throw new Error('Nenhum registro encontrado!');
      });
    }
  }
}
