export const usuarioAutenticado = () => localStorage.getItem('usuario-squareevents') !== null

export const ParseJwt = () => {
    var base64 = localStorage.getItem('usuario-squareevents').split('.')[1]

    return JSON.parse(window.atob(base64))
}