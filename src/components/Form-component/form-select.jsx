const FormSelect = ({lists, todosListId}) => {
    if (!todosListId) {
        return (
          //   <select name="todosListId"
          //   className="form-input">
          //   {
          //     lists.map(l => {
          //       return (
          //         <option value={l.id} key={`todosListId${l.id}`}>{l.title}</option>
          //       )
          //     })
          //   }
          // </select>
          <div></div>
        )
    }
    else return ''
}

export default FormSelect;