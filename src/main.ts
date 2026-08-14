import { setupDropdown } from './dropdown.js'
import { clearAll } from './clear.js'
import './style.css'
//import heroImg from './assets/hero.png'

let clear_button = document.querySelector<HTMLButtonElement>("#clear")!;
let find_button = document.querySelector<HTMLButtonElement>("#find")!;
let next_button = document.querySelector<HTMLButtonElement>("#next")!;
let simbrief_button = document.querySelector<HTMLButtonElement>("#simbrief")!;


let departure_get_metar_button = document.querySelector<HTMLSelectElement>("#get_departure_metar")!;
let departure_data_element = document.querySelector<HTMLDivElement>("#departure_data")!;

let arrival_get_metar_button = document.querySelector<HTMLSelectElement>("#get_arrival_metar")!;
let arrival_data_element = document.querySelector<HTMLDivElement>("#arrival_data")!;


setupDropdown(document.querySelector<HTMLSelectElement>("#airplane_select")!, document.querySelector<HTMLInputElement>("#runway_length")!, document.querySelector<HTMLInputElement>("#speed")!);


let potential_airports_list_display = document.querySelector<HTMLDivElement>("#potential_airports_list_display")!;
//<p class="font-mono pt-4">02: CYYZ, Toronto Pearson International Airport, Toronto, Canada, NA</p>
//<p class="font-mono pl-5">Longest Runway: 11120 ft. Elevation: 569 ft. 167 nm. 00:30</p>


const isDepartureDataHidden = departure_data_element?.classList.contains('hidden');
if (!isDepartureDataHidden) {
  //departure_data_element.classList.add("hidden");
}

const isArrivalDataHidden = arrival_data_element?.classList.contains('hidden');
if (!isArrivalDataHidden) {
  //arrival_data_element.classList.add("hidden");
}

const isAirportDisplayHidden = potential_airports_list_display?.classList.contains('hidden');
if (!isAirportDisplayHidden) {
  //potential_airports_list_display.classList.add("hidden");
}

clear_button.addEventListener("click", () => {
  clearAll(
    document.querySelector<HTMLInputElement>("#departure_code")!,
    document.querySelector<HTMLDivElement>("#departure_data")!,
    document.querySelector<HTMLInputElement>("#arrival_code")!,
    document.querySelector<HTMLDivElement>("#arrival_data")!,
    document.querySelector<HTMLInputElement>("#min_time_hour")!,
    document.querySelector<HTMLInputElement>("#min_time_minute")!,
    document.querySelector<HTMLInputElement>("#max_time_hour")!,
    document.querySelector<HTMLInputElement>("#max_time_minute")!,
    document.querySelector<HTMLDivElement>("#potential_airports_list_display")!
  )
});

find_button.addEventListener("click", (event: MouseEvent) => {
  console.log("Button was pressed!", event);
});

next_button.addEventListener("click", (event: MouseEvent) => {
  console.log("Button was pressed!", event);
});

simbrief_button.addEventListener("click", (event: MouseEvent) => {
  console.log("Button was pressed!", event);
});

departure_get_metar_button.addEventListener("click", (event: MouseEvent) => {
  console.log("Button was pressed!", event);
});

arrival_get_metar_button.addEventListener("click", (event: MouseEvent) => {
  console.log("Button was pressed!", event);
});
