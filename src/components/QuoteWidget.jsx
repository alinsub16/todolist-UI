import React, { useEffect, useState } from "react";
import axios from "axios";

const QuoteWidget = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(true);
     const [fade, setFade] = useState(true);



    const fetchQuote = async () => {
        try{
            setLoading(true);
            const response = await axios.get(
           `https://corsproxy.io/?${encodeURIComponent("https://zenquotes.io/api/random")}`
            );
            const data = response.data;
            setQuote(data[0].q || "No quote available");
            setAuthor(data[0].a || "Unknown");

        }catch (error){
            console.error('Error fetching quote:', error);
            setQuote("Stay positive, work hard, make it happen.");
            setAuthor("Unknown");

        }finally{
            setLoading(false);

        }
        

    };

    useEffect(() => {
        fetchQuote();

        const interval = setInterval (() => {
            setFade(false);
            setTimeout(() =>{
                fetchQuote();
                setFade(true);
            }, 500);
        }, 60000);
        return() => clearInterval(interval);
    }, []);

  return (
    <>
     <div className="text-gray-800 w-full text-center ">
            {loading ? (
                <p className="text-base opacity-80">Loading...</p>
            ) : (
                <div
                    className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
                >
                    <p className="text-base italic">"{quote}"</p>
                    <p className="text-sm mt-1 opacity-70 text-right">— {author}</p>
                </div>
            )}
        </div>
    </>
  )
}

export default QuoteWidget
