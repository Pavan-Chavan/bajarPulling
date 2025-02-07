function BottomNavigation({ onSelect, view}) {
    return (
      <div className="fixed-bottom bg-light">
          <div className="row">
            <div className="col-6">
              <button className={`btn-custom btn  btn-lg w-100 ${view === "district" ? "dark-green" : ""}`} onClick={() => onSelect("district")}>
                जिल्हानिहाय
              </button>
            </div>
            <div className="col-6">
              <button className={`btn-custom btn  btn-lg w-100 ${view === "crop" ? "dark-green" : ""}`} onClick={() => onSelect("crop")}>
                शेतमाल निहाय
              </button>
            </div>
        </div>
      </div>
    )
  }
  
  export default BottomNavigation
  
  