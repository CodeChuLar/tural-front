import React from 'react'
import { TbRestore } from "react-icons/tb";
export default function ArchivesBody() {
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
            <tr>
                <td>Ulvi Abbaslı</td>
                <td>ulvisab@code.edu.az</td>
                <td>055-992-48-24</td>
                <td>
                    <button class="archiveButton">
                        <span>Restore</span>
                        <TbRestore />
                    </button>
                    </td>
            </tr>
        </tbody>
    </table>
</div>
    </>
  )
}
