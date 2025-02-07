import axios from "axios";
import { useEffect, useState } from "react"
import { apiProvider } from "../../constants/constants";
import { timeAgo } from "../../Utils";

function RateDisplay({ item, onBack }) {
    // Simulating API call to fetch rate HTML
    const [table, setTable] = useState(null);
    const [error,setError] = useState("");

    const fetchTableData = async () => {
      try {
        const response = await axios.get(`${apiProvider}/api/getTable/${item.body.type}/${item.body.code}`);
        if ((response).status === 200) {
          
          const data = JSON.parse(response.data.table_data);
  
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, 'text/html');
  
          // Access the div with class name 'title2' and append new text
          const title2Div = doc.querySelector('.title2');
          title2Div.textContent = `Last update ${timeAgo(response.data.last_update)} ` + title2Div.textContent;
          setTable(doc.body.innerHTML);
        } else {
          setError("Something went wrong");
        }
      } catch (err) {
        setError("Something went wrong");
      }
    }

    useEffect(()=>{
      fetchTableData();
    },[item]);

    if (error) {
      return(<div className="text-center">
        <button className="btn btn-secondary mb-4" onClick={onBack}>
          <i className="bi bi-arrow-left"></i> Back
        </button>
        <div className="card">
          <div className="card-body" >{error}</div>
        </div>
      </div>)
    }
    return (
      <div className="text-center">
        <button className="btn btn-secondary mb-4" onClick={onBack}>
          <i className="bi bi-arrow-left"></i> Back
        </button>
        <div className="card">
          <div className="card-body" dangerouslySetInnerHTML={{ __html: table }}></div>
        </div>
      </div>
    )
  }
  //
  
  export default RateDisplay
  
  