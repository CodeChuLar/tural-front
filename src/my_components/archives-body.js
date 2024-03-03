import React, { useContext } from "react"; // Import useContext
import { TbRestore } from "react-icons/tb";
import { create } from "./agencyContextApi"; // Import the create context

export default function ArchivesBody() {
  const x = useContext(create); // Use useContext with the create context

  return (
      <>
        <div class="archivesTable">
          <table>
            <thead>
            <tr>
              <th>User</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {x.archiveList.map((arc, index) => (
                <tr key={index}>
                  <td>{arc.fullName}</td>
                  <td>{arc.phoneNumber}</td>
                  <td>{arc.status}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </>
  );
}
