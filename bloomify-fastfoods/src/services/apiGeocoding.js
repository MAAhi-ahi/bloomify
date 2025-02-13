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

// Function to get the address from latitude and longitude using the BigDataCloud API
export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
