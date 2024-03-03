import React from "react";
import { TbRestore } from "react-icons/tb";
export default function ArchivesBody() {
  var x = useContext(create);

  return (
    <>
      <div class="archivesTable">
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Mail</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {x.archiveList.map((arc, index) => (
              <tr>
                <td>{arc.fullName}</td>
                <td>{arc.phoneNumber}</td>
                <td>{arc.status}</td>
                <td>
                  <button class="archiveButton">
                    <span>Restore</span>
                    <TbRestore />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
