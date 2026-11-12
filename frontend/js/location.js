export function requestOneTimeLocation() {
  return new Promise((resolve, reject) => {
    if (!window.isSecureContext && location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
      reject({ code: "secure" });
      return;
    }
    if (!navigator.geolocation) {
      reject({ code: "unsupported" });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => resolve({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
        capturedAt: position.timestamp,
      }),
      (error) => reject({ code: error.code === 1 ? "denied" : error.code === 3 ? "timeout" : "unavailable" }),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 },
    );
  });
}
