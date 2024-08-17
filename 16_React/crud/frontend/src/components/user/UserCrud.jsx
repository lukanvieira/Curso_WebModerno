import React, { Component } from "react";
import Main from '../template/main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadestro de usuários: Incluir, Listar, Alterar e Excluir!'
}

class UserCrud extends Component {
     render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
     }
}

export default UserCrud