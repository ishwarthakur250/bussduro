import Axios from "axios";
import React,{useEffect, useState} from "react";

 function Test001() {

  const [Temp, setTemp] = useState([]);
  
    useEffect(() => {
      Axios.get("http://localhost:3001/test005",)
      .then(response => {
        setTemp(response.data);
      })
    },[])

    const handleClick = event => {
      const Data = [...Temp]
      if (Data.length > 0) {
        Data.forEach(element => {
          if (event.currentTarget.checked) {
            if(element.permissionid == event.currentTarget.id){
              element[event.currentTarget.value] = 1;
              setTemp(Data)
            }
          } else {
            if(element.permissionid == event.currentTarget.id){
              element[event.currentTarget.value] = 0;
            }
          }
        });
      }
    };

    console.log(Temp);

    const onSubmit = (e) => {
      e.preventDefault();
      console.log("test");
    }
  return (
    <center>
      <form action="" onSubmit={onSubmit}>
        <table>
          <thead>
            <tr>
              <th>Permissions</th>
              <th>Can_view</th>
              <th>Can_view_own</th>
              <th>Can_edit</th>
              <th>Can_create</th>
              <th>Can_delete</th>
            </tr>
            </thead>
            <tbody>
            {
              Temp.map((obj,i) => (
              <tr key={i}>
                <td>{obj.permissionid}</td>
                <td><input type="checkbox" id={obj.permissionid} value="can_view" checked={obj.can_view == 1 ? true : false} onChange={handleClick}/></td>
                <td><input type="checkbox" id={obj.permissionid} value="can_view_own" onClick={handleClick} /></td>
                <td><input type="checkbox" id={obj.permissionid} value="can_edit" onClick={handleClick} /></td>
                <td><input type="checkbox" id={obj.permissionid} value="can_create" onClick={handleClick} /></td>
                <td><input type="checkbox" id={obj.permissionid} value="can_delete" onClick={handleClick} /></td>
              </tr>
            ))
        }
          </tbody>
        </table>
        <input type="submit" value="Submit"/>
      </form>
    </center>
  );
}
 export default Test001;