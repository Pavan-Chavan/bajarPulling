"use client"

import { useEffect, useState } from "react"
import CategorySelector from "./TableComponent/CategorySelector"
import DistrictSelector from "./TableComponent/DistrictSelector"
import CropSelector from "./TableComponent/CropSelector"
import RateDisplay from "./TableComponent/RateDisplay"
import BottomNavigation from "./TableComponent/BottomNavigation"
import { apiProvider } from "../constants/constants"
import axios from "axios"

function Table() {
  const [view, setView] = useState("category")
  const [selectedItem, setSelectedItem] = useState(null)
	const [marketTypes, setMarketTypesDetails] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(()=>{
		fetchSectionsData();
	},[])

  const showSelector = (category) => {
    setView(category)
    setSelectedItem(null)
  }

  const showRate = (item) => {
    setSelectedItem(item)
    setView("rate")
  }

  const goBack = () => {
    if (view === "rate") {
      setView(selectedItem.type)
      setSelectedItem(null)
    } else {
      setView("category")
    }
  }

	const fetchSectionsData = async () => {
		try {
			setIsLoading(true)
			const response = await axios.get(`${apiProvider}/get-sections`);
			const data = response.data;
			if (response.status === 200) {
				setMarketTypesDetails(data);
			}
			setIsLoading(false)
		} catch (error) {
			window.alert("something went wrong with fetching constants");
			setIsLoading(false)
		}
	}

	if (isLoading) {
		return (
			<div className="container mt-5 text-center">
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
				<p className="mt-2">Loading market types...</p>
			</div>
		)
	}

	
  return (
    <div className="container py-5">
      {/* <h1 className="text-center mb-5 text-success" style={{color:"#166539 !important"}}>Crop Rate Information</h1> */}

      {view === "category" && <CategorySelector onSelect={showSelector} />}
      {view === "district" && <DistrictSelector  districts={marketTypes?.DistrictCommodityGird?.DropdownOptions || []} onSelect={showRate} />}
      {view === "crop" && <CropSelector crops={marketTypes?.CommodityGird?.DropdownOptions || []} onSelect={showRate} />}
      {view === "rate" && <RateDisplay item={selectedItem} onBack={goBack} />}

      {view != "category" && <BottomNavigation onSelect={showSelector} view={view}/>}
    </div>
  )
}

export default Table

