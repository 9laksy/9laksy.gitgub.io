//Button width for Interest Cal form
export const ButtonStyle = {
    width: '45%'
}

export const dateField = () => {
    return {
        style: {
            color: 'rgb(255 100 0)',
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

export const textField = (step: string, readonly: boolean = false) => {
    return {
        step: step,
        style: {
            color: 'rgb(255 100 0)',
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