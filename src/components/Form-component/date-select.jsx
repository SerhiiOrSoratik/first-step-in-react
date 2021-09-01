const DateSelect = () => {
    const date = new Date();
    let month = date.getMonth() + 1;
    month < 10 ? month = '0' + month : month = month;
    let day = date.getDate();
    day < 10 ? day = '0' + day : day = day;
    const nowDate = date.getFullYear() + '-' + month + '-' + day
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