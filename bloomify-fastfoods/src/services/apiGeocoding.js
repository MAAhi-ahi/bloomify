/* eslint-disable no-unused-vars */

// Function to get user's current location (latitude and longitude)
export function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject("Failed to get location");
        }
      );
    } else {
      reject("Geolocation is not supported by this browser");
    }
  });
}

// Function to get the address from latitude and longitude using OpenStreetMap API
export async function getAddress({ latitude, longitude }) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    );
    
    if (!res.ok) throw Error("Failed getting address");

    const data = await res.json();
    
    // Extracting detailed address
    const { country, state, county, city, town, village, suburb } = data.address;
    
    // Building location string by skipping undefined/null values
    let location = [
      village || town || city || suburb,
      county,
      state,
      country
    ]
      .filter(part => part != null)  // Remove undefined or null parts
      .join(", ");  // Join the remaining parts with commas
    
    return location || "Location not found"; // If no valid parts, return "Location not found"
  } catch (error) {
    console.error("Error fetching address:", error);
    return "Location not found";
  }
}
