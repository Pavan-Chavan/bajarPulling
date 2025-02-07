function CategorySelector({ onSelect }) {
    return (
      <div className="text-center">
        {/* <h2 className="mb-4 text-green-800" style={{color:"#15803d"}}>Choose how you want to see crop rates:</h2> */}
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <div className="card h-100" style={{color:"#166539", backgroundColor: "rgb(220 252 231)", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)"}} onClick={() => onSelect("district")}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-geo-alt fs-1 mb-3"></i>
                <h3>जिल्हानिहाय निवड</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100" style={{color:"#166539", backgroundColor: "rgb(220 252 231)"}} onClick={() => onSelect("crop")}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-flower1 fs-1 mb-3"></i>
                <h3>शेतमाल निहाय निवड</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default CategorySelector
  
  