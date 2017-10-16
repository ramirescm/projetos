export default class FotoService {
    constructor(resource) {
        this._resource = resource('v1/fotos{/id}');
    }

    listar() {

        return this._resource
            .query()
            .then(
            res => res.json(),
            err => {
                console.log(err);
                throw new Error('Não foi possível obter as fotos. Tenta mais tarde');
            }
            );
    }

    salvar(foto) {

        if (foto._id) {
            return this._resource
                .update({ id: foto._id }, foto)
                .then(
                null,
                err => {
                    console.log(err);
                    throw new Error('Não foi possível alterar a foto!');
                }
                );
        } else {
            return this._resource
                .save(foto)
                .then(
                null,
                err => {
                    console.log(err);
                    throw new Error('Não foi possível salvar a foto!');
                }
                );
        }
    }

    excluir(id) {

        return this._resource
            .delete({ id: id })
            .then(
            null,
            err => {
                console.log(err);
                throw new Error('Não foi possível excluir a foto!');
            }
            );

    }

    buscarPorId(id) {
        return this._resource
            .get({ id: id })
            .then(
            res => res.json(),
            err => {
                console.log(err);
                throw new Error('Não foi possível obter a foto');
            }
            );
    }
}