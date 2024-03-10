import { useState } from "react";
import "./App.css";
import DeleteIcon from "./assets/deleteicon.svg";
import BRTable from "./components/BRTable/BRTable";
let types = {
  owner: 1,

  admin: 2,

  user: 3,
};

let admins = [
  {
    id: 1,

    name: "Ahmed",

    type: 1,

    email: "user@email.com",

    teams: "Development team",

    access: [
      "World cup event",
      "Workshop workspace",
      "Admin Workspace",
      "Fun Event",
      "Development Workspace",
    ],

    image:
      "https://iidamidamerica.org/wp-content/uploads/2020/12/male-placeholder-image.jpeg",
  },

  {
    id: 2,

    name: "Ali",

    type: 2,

    email: "user@email.com",

    teams: "Design team",

    access: ["World cup event", "Workshop workspace"],

    image:
      "https://iidamidamerica.org/wp-content/uploads/2020/12/male-placeholder-image.jpeg",
  },

  {
    id: 3,

    name: "Mohamed",

    type: 3,

    email: "user@email.com",

    teams: "QA team",

    access: ["World cup event", "Workshop workspace", "Fun Event"],

    image:
      "https://iidamidamerica.org/wp-content/uploads/2020/12/male-placeholder-image.jpeg",
  },

  {
    id: 4,

    name: "Omar",

    type: 3,

    email: "user@email.com",

    teams: "Development team",

    access: [
      "World cup event",
      "Workshop workspace",
      "Fun Event",
      "Development Workspace",
    ],

    image:
      "https://iidamidamerica.org/wp-content/uploads/2020/12/male-placeholder-image.jpeg",
  },
];

const columns = [
  {
    title: "Name",
    width: 511,
    className: "br-table__name-header",
  },
  {
    title: "Email",
    width: 100,
  },
  {
    title: "Teams",
    width: 190,
  },
  {
    title: "Access",
    width: 190,
  },
  {
    title: "",
    width: 60,
  },
];

function App() {
  const [data, setData] = useState(admins);
  const onDelete = (id) => {
    let newData = [...data];
    newData = newData.filter((item) => item.id !== id);
    setData(newData);
  };
  return (
    <div>
      <BRTable
        admins={data}
        types={types}
        columns={columns}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
