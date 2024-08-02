import { useState, useEffect } from "react";

export function useMyLocation() {
  const [location, setLocation] = useState({ city: "", zip: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const { city, postal: zip } = data;
        setLocation({ city, zip });
      } catch (error) {
        console.error("Error fetching location:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLocation();
  }, []);

  return { location, loading };
}
