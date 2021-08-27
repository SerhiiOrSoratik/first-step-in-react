const FormSelect = ({lists, listId}) => {
    if (!listId) {
        return (
            <select name="listId"
            className="form-input">
            {
              lists.map(l => {
                return (
                  <option value={l.id} key={`listId${l.id}`}>{l.title}</option>
                )
              })
            }
          </select>
        )
    }
    else return ''
}

export default FormSelect;