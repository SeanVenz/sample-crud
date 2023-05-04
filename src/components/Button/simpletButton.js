

export const SimpleButton = (props) => {
    const {onClick, string} = props

    return (
        <button onClick={onClick}>{string}</button>
    )
}