const DateSelect = () => {
    const date = new Date();
    let month = date.getMonth() + 1;
    month < 10 ? month = '0' + month : month = month;

    const nowDate = date.getFullYear() + '-' + month + '-' + date.getDate()
    return (
        <input
            type="date"
            name="due_date"
            placeholder="due_date"
            className="form-input"
            defaultValue={nowDate}
        />
    );
}

export default DateSelect;