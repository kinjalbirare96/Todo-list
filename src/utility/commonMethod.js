import { columnMapper } from "./mapper";

export const getUserTableColumn = (userData, handleClick) => {
  let key = userData && userData.length > 0 && Object.keys(userData[0])

  let data = []
  if (key.length > 0) {
    key.forEach((column) => {
      if (column !== 'id' && column !== 'avatar') {
        data.push({
          title: columnMapper[column],
          dataIndex: column,
          key: column
        });
      }
    })
  }
  data.push({
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (_, record) =>
      userData.length >= 1 ? (
        <span onClick={() => handleClick(record.id)}>
          <a>Delete</a>
        </span>
      ) : null,
  })

  return data
}