export function setupDropdown(selectElement: HTMLSelectElement, runwayLengthElement: HTMLInputElement, averageSpeedElement: HTMLInputElement) {

  interface DropdownOption {
    name: string;
    length: number;
    average_speed: number;
    speed: number;
  }

  const aircraft_list: DropdownOption[] = [
    { name: "A319", length: 4460, average_speed: 330, speed: 420},
    { name: "A320", length: 4460, average_speed: 330, speed: 420},
    { name: "A321", length: 5600, average_speed: 330, speed: 420},
    { name: "B737-600", length: 4265, average_speed: 330, speed: 420},
    { name: "B737-700", length: 4650, average_speed: 330, speed: 420},
    { name: "B777-300ER", length: 6600, average_speed: 475, speed: 420},
    { name: "Other", length: 0, average_speed: 0, speed: 0},
  ];

  if (selectElement) {
    selectElement.innerHTML = "";

    aircraft_list.forEach((aircraft) => {
      const option = document.createElement("option") as HTMLOptionElement;

      option.value = aircraft.name;
      option.text = aircraft.name;

      selectElement.appendChild(option);
    });
  }

  function handleSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedAircraft: string = target.value;

    const aircraft = aircraft_list.find(plane => plane.name === selectedAircraft);

    if (aircraft) {
      if (aircraft.name == "Other") {
        runwayLengthElement.disabled = false;
        runwayLengthElement.value = "";
        averageSpeedElement.disabled = false;
        averageSpeedElement.value = "";
      } else {
        runwayLengthElement.disabled = true;
        averageSpeedElement.disabled = true;
        runwayLengthElement.value = aircraft.length.toString();
        averageSpeedElement.value = aircraft.average_speed.toString();
      }
    }
  }

  runwayLengthElement.value = aircraft_list[0].length.toString();
  averageSpeedElement.value = aircraft_list[0].average_speed.toString();
  selectElement.addEventListener('change', handleSelectChange);
}
