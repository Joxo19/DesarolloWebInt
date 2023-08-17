async function addUser(params) {
    const {
        auth,
        email,
        password,
        displayName
    } = params;

    const user = await auth.createUser({
        email,
        password,
        displayName
    });

    return user;

}

async function getUser(params) {
    const {auth, email} = params;

    const user = await auth.getUserByEmail(email);

    return user;
}

//lo puse en español porque si como chicken XD
//Funcion de como actualizar usuario
async function actualizarUsuario(params) {
    const { auth, email, displayName, password } = params;

    const user = await auth.updatUserByEmail(email, {
        displayName,
        password,
    });

    return user;
}

module.exports = {
    addUser,
    getUser,
    actualizarUsuario
};