import "./TodoInput.scss";
export default function TodoInput(props) {
    const btnValue = props.editItem ? "edit item" : "add item"
    const classes=`btn d-block btn-${props.editItem ? "success": "primary"} w-100 mt-3`
return (
    <div className="card card-body my-3">
        <form onSubmit={props.handleSubmit}>
        <div className="input-group">
        <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white h-100">
            <i className="fas fa-book" />
            </div>
        </div>
            <input
            value={props.item}
            onChange={props.handleChange}
            type="text"
            className="form-control text-capitalize"
            placeholder="add a todo item"
        />
            </div>
            <button type="submit" className={classes}>{ btnValue}</button>
    </form>
    </div>
);
}
