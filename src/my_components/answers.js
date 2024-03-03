export default function Answers(props) {
    return (
      <>
        <table border="1">
          <thead>
            <tr>
              <th>Suallar</th>
              <th>Cavablar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Təyinat Növü</td>
              <td>{props.destinationType}</td>
            </tr>
            <tr>
              <td>Dil</td>
              <td>{props.language}</td>
            </tr>
            <tr>
              <td>Nəfər sayı</td>
              <td>{props.numberOfPerson}</td>
            </tr>
            <tr>
              <td>Tarix Aralığı</td>
              <td>{props.dateRange}</td>
            </tr>
            <tr>
              <td>Nələr Daxildir</td>
              <td>{props.include}</td>
            </tr>
            <tr>
              <td>Qrup</td>
              <td>{props.group}</td>
            </tr>
            <tr>
              <td>Büdcə</td>
              <td>{props.budget}</td>
            </tr>
            <tr>
              <td>Səyahət Tipi</td>
              <td>{props.travelOfType}</td>
            </tr>
            <tr>
              <td>Yola Düşdüyü Məntəqə</td>
              <td>{props.departurePoint}</td>
            </tr>
            <tr>
              <td>Təyinat</td>
              <td>{props.appointment}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
  