export function clearAll(departure_code_element: HTMLInputElement, departure_data: HTMLDivElement, arrival_code_element: HTMLInputElement, arrival_data: HTMLDivElement, min_hour: HTMLInputElement, min_minute: HTMLInputElement, max_hour: HTMLInputElement, max_minute: HTMLInputElement, airport_display: HTMLDivElement) {

  departure_code_element.value = "";
  arrival_code_element.value = "";
  min_hour.value = "";
  min_minute.value = "";
  max_hour.value = "";
  max_minute.value = "";

  const isAirportDisplayHidden = airport_display?.classList.contains('hidden');
  if (!isAirportDisplayHidden) {
    airport_display.classList.add("hidden");
  }

  const isDepartureDataHidden = departure_data?.classList.contains('hidden');
  if (!isDepartureDataHidden) {
    departure_data.classList.add("hidden");
  }

  const isArrivalDataHidden = arrival_data?.classList.contains('hidden');
  if (!isArrivalDataHidden) {
    arrival_data.classList.add("hidden");
  }


}
