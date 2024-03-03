import React, { useContext } from "react"; 
import { create } from "./agencyContextApi"; 

export default function ArchivesBody() {
  const x = useContext(create);

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
