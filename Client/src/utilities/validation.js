export const validation = ({ email, password }) => {
    const regexEmail = /\S+@\S+\.\S+/
    const regexPass = /.*[0-9].*/

    const errors = {}

    if(!email.length) {
        errors.email = 'El email está vacío'
    } else {
        if(!regexEmail.test(email)) {
            errors.email = 'El email es incorrecto'
        }
        if(email.length > 20) {
            errors.email = 'El email no puede contener más de 20 caracteres'
        }
    }

    if(!password.length) {
        errors.password = 'La password está vacía'
    } else {
        if(password.length < 6) {
            errors.password = 'La contraseña no puede contener menos de 6 caracteres'
        }
        if(password.length > 10) {
            errors.password = 'La contraseña no puede contener más de 10 caracteres'
        }
        if(!regexPass.test(password)) {
            errors.password = 'La contraseña debe tener al menos un número'
        }
    }

    return errors
}