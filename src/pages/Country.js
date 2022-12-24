import { AppContext } from "../App"
import { useContext } from "react"
import { useGetCountryNews } from "../Custom-hooks/useGetCountryNews";
import { AllNews } from "../Components/Card";

export function Country() {
    const { country } = useContext(AppContext);
    const [news, isLoaded] = useGetCountryNews(country);
    return (
        <div className="hero">
           {country} 
        </div>
    )
}