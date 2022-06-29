
//Button width for Interest Cal form
export const ButtonStyle = {
    width: '45%'
}

export const dateField = () => {
    return {
        style: {
            color: 'rgb(25, 118, 210)',
            fontSize: 18,
            fontWeight: 'bold'
        }
    }
}

export const dateFieldLabel = () => {
    return {
        style: {
            color: '#000000',
            fontSize: 18,
            fontWeight: 'bold'
        }
    }
}

export const textField = (step: string) => {
    return {
        step: step,
        pattern: "[0-9.]*",
        style: {
            color: 'rgb(25, 118, 210)',
            fontSize: 18,
            fontWeight: 'bold'
        }
    }
}

export const textFieldLabel = () => {
    return {
        style: {
            color: '#000000',
            fontSize: 18,
            fontWeight: 'bold'
        }
    }
}

