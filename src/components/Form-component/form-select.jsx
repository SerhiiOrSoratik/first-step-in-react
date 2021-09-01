const FormSelect = ({ lists, todosListId }) => {
  if (!todosListId) {
    return (
      <select name="todosListId"
        className="form-input"
        >
        <FormOptions lists={lists} />
      </select>
    )
  }
  else return (<></>)

}

const FormOptions = ({ lists }) => {
  const listOptions = lists.map(l => {
    return (
      <option value={l.id} key={`todosListId${l.id}`}>{l.title}</option>
    )
  })
  return (<>{listOptions}</>)
}


export default FormSelect;