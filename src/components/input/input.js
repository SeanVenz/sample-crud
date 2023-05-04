

export const Input = (props) => {

    const {handleSubmit, handleChange, placeHolder} = props

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="input"
                    placeholder={placeHolder}
                />
            </form>
        </div>
    )
}