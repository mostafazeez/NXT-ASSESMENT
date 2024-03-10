import DeleteIcon from "../../assets/deleteicon.svg";

import "./BRTable.css";

function BRTable({ admins, types, columns, onDelete }) {
  const showTypeTag = (type) => {
    return ["owner", "admin"].includes(
      Object.keys(types).find((key) => types[key] === type)
    );
  };

  const getTypeText = (type, uiString = false) => {
    const typeString = Object.keys(types).find((key) => types[key] === type);
    return uiString
      ? typeString.charAt(0).toUpperCase() + typeString.slice(1)
      : typeString;
  };
  return (
    <div>
      <table
        style={{
          borderCollapse: "collapse",
        }}
      >
        <tr className="br-table__header-row">
          {columns.map((column, id) => (
            <th
              width={column.width}
              key={id}
              className={column.className || ""}
            >
              {column.title}
            </th>
          ))}
        </tr>
        {admins.map((admin) => (
          <tr className="br-table__data-row-container" key={admin.id}>
            <td className="br-table__name-header">
              <div className="br-table__name-row-content">
                <img
                  src={admin.image}
                  width={34}
                  height={34}
                  alt="profile image"
                />
                <span>{admin.name}</span>
                {showTypeTag(admin.type) && (
                  <span
                    className={`br-table__name-row-tag ${getTypeText(
                      admin.type
                    )}`}
                  >
                    {getTypeText(admin.type, true)}
                  </span>
                )}
              </div>
            </td>
            <td className="br-text-align-center br-table__email-content">
              {admin.email}
            </td>
            <td className="br-text-align-center">
              <div className="br-table__teams-row-content">
                <div>{admin.teams.match(/\b(\w)/g).join("")}</div>
                <span>{admin.teams}</span>
              </div>
            </td>
            <td className="br-text-align-center">
              <div className="br-table__access-row-content">
                {admin.access.map((item, id) => {
                  if (id > 2) {
                    return;
                  }
                  if (id < 2) {
                    return <span> {item} </span>;
                  } else {
                    return <span>+{admin.access.length - 2}</span>;
                  }
                })}
              </div>
            </td>
            <td className="br-text-align-center">
              <img
                src={DeleteIcon}
                onClick={() => onDelete(admin.id)}
                className="br-table__action-icon"
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default BRTable;
