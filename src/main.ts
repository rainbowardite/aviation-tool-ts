import { setupDropdown } from './dropdown'
import { clearAll } from './clear'
import './style.css'
//import heroImg from './assets/hero.png'

document.querySelector<HTMLDivElement>('#sidebar')!.innerHTML = `
  <button id="clear" class="bg-gray-900 border border-gray-800 hover:bg-gray-800 text-gray-300 text-xs py-2 px-4 rounded inline-flex items-center">
  Clear
  </button>
  <button id="find" class="bg-gray-900 border border-gray-800 hover:bg-gray-800 text-gray-300 text-xs py-2 px-4 rounded inline-flex items-center">
  Find Airports
  </button>
  <button id="next" class="bg-gray-900 border border-gray-800 hover:bg-gray-800 text-gray-300 text-xs py-2 px-4 rounded inline-flex items-center">
  Next Airports
  </button>
  <button id = "simbrief" disable class="bg-gray-900 border border-gray-800 hover:bg-gray-800 text-gray-600 text-xs py-2 px-4 rounded inline-flex items-center">
  Send to SimBrief
  </button>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="departure"> <!-- Departure -->
    <div class="mb-2">
      <label for="departure_code" class="block text-xl font-medium text-gray-400 mb-2">Departure</label>
      <div class="flex flex-row gap-4">
        <input
          type="text"
          id="departure_code"
          class="w-28 max-w-28 px-4 py-2 text-sm text-gray-300 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
          placeholder="KCLE"
        />
        <button id="get_departure_metar" class="bg-gray-900 border border-gray-800 hover:bg-gray-800 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
        </button>
      </div>
    </div>
    <div id="departure_data" class="">
      <p class="mb-2" id="departure_info">Airport Name, City, Country, Region</p>
      <p class="mb-1" id="departure_codes">{ident}, {icao}, {iata}, {local}, {gps}</p>
      <p class="mb-1" id="departure_elevation">Elevation: [elevation] ft.</p>
      <p class="mb-1" id="departure_time">Local Time: [hour]:[minute]</p>
      <p class="mb-4" id="departure_category">Category: [category]</p>
      <p id="departure_metar">METAR KCLE 140151Z 05004KT 10SM OVC180 23/21 A3001 RMK AO2 SLP173 T02330206 $</p>
    </div>
  </div>
  <section id="spacer"></section>
  <div id="arrival"> <!-- Arrival -->
    <div class="mb-2">
      <label for="arrival_code" class="block text-xl font-medium text-gray-400 mb-2">Arrival</label>
      <div class="flex flex-row gap-4">
        <input
          type="text"
          id="arrival_code"
          class="w-28 max-w-28 px-4 py-2 text-sm text-gray-300 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
          placeholder="SPJC"
        />
        <button id="get_arrival_metar" class="bg-gray-900 border border-gray-800 hover:bg-gray-800 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
        </button>
      </div>
    </div>
    <div id="arrival_data" class="">
      <p class="mb-2" id="arrival_info">Airport Name, City, Country, Region</p>
      <p class="mb-1" id="arrival_codes">{ident}, {icao}, {iata}, {local}, {gps}</p>
      <p class="mb-1" id="arrival_elevation">Elevation: [elevation] ft.</p>
      <p class="mb-1" id="arrival_time">Local Time: [hour]:[minute]</p>
      <p class="mb-4" id="arrival_category">Category: [category]</p>
      <p id="arrival_metar">METAR SPJC 140200Z 16011KT 9999 SCT010 BKN020 22/20 Q1014 TEMPO BKN010 RMK PP000</p>
    </div>
  </div>
  <section id="spacer"></section>
  <div> <!-- Time -->
    <div class="pl-2 flex flex-row gap-16">
      <h2 class="text-sm font-medium text-gray-400 mb-2">Minimum Time</h2>
      <h2 class="text-sm font-medium text-gray-400 mb-2">Maximum Time</h2>
    </div>
    <div class="flex flex-row gap-2">
      <div class="flex flex-row gap-2">
        <input
          type="text"
          id="min_time_hour"
          class="w-12 max-w-12 px-3 py-2 text-sm text-gray-300 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
          placeholder="00"
        />
        <p class="mt-3">:</p>
        <input
          type="text"
          id="min_time_minute"
          class="w-12 max-w-12 px-3 py-2 text-sm text-gray-300 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
          placeholder="30"
        />
        </button>
      </div>
      <div class="flex flex-row gap-2 ml-10">
        <input
          type="text"
          id="max_time_hour"
          class="w-12 max-w-12 px-3 py-2 text-sm text-gray-300 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
          placeholder="02"
        />
        <p class="mt-3">:</p>
        <input
          type="text"
          id="max_time_minute"
          class="w-12 max-w-12 px-3 py-2 text-sm text-gray-300 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
          placeholder="30"
        />
        </button>
      </div>
    </div>
  </div>
  <section id="spacer"></section>
  <div> <!-- Aircraft -->
    <h2 class="text-base font-medium text-gray-400 mb-2">Aircraft</h2>
    <select class="mb-2 text-sm" id="airplane_select">
    </select>
    <div class="pl-3 flex flex-row gap-5">
      <h2 class="text-xs font-medium text-gray-400 mb-2">Rwy. (ft)</h2>
      <h2 class="text-xs font-medium text-gray-400 mb-2">Avg. Speed</h2>
    </div>
    <div class="flex flex-row gap-2">
      <input
        disabled
        type="text"
        id="runway_length"
        class="w-20 max-w-20 px-4 py-2 text-sm text-gray-300 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
        placeholder="0"
      />
      <input
        disabled
        type="text"
        id="speed"
        class="w-14 max-w-14 px-4 py-2 text-sm text-gray-300 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
        placeholder="0"
      />
      </button>
    </div>
  </div>
  <section id="spacer"></section>
  <div> <!-- Checkboxes -->
    <div class="flex items-center space-x-3 mb-2">
      <input
        checked
        type="checkbox"
        id="scheduled-checkbox"
        class="w-5 h-5 accent-indigo-600 rounded cursor-pointer"
      />
      <label for="scheduled-checkbox" class="text-sm font-medium text-gray-300 cursor-pointer">
      Airports with scheduled routes only
      </label>
    </div>
    <div class="flex items-center space-x-3">
      <input
        type="checkbox"
        id="seaplane-checkbox"
        class="w-5 h-5 accent-indigo-600 rounded cursor-pointer"
      />
      <label for="seaplane-checkbox" class="text-sm font-medium text-gray-300 cursor-pointer">
      Include Seaplane Bases
      </label>
    </div>
  </div>
  <section id="spacer"></section>
  <section id="spacer"></section>
  <div id="potential_airports_list_display" class=""> <!-- Potential Airports List -->
    <h2 class="text-base font-medium text-gray-400 mb-2">Potential Airports</h2>
    <div id="potential_airports_list">
    </div>
  </div>

`

let clear_button = document.querySelector<HTMLButtonElement>("#clear")!;
let find_button = document.querySelector<HTMLButtonElement>("#find")!;
let next_button = document.querySelector<HTMLButtonElement>("#next")!;
let simbrief_button = document.querySelector<HTMLButtonElement>("#simbrief")!;


let departure_input_element = document.querySelector<HTMLInputElement>("#departure_code")!;
let departure_get_metar_button = document.querySelector<HTMLSelectElement>("#get_departure_metar")!;
let departure_data_element = document.querySelector<HTMLDivElement>("#departure_data")!;
let departure_info_element = document.querySelector<HTMLParagraphElement>("#departure_info")!;
let departure_codes_element = document.querySelector<HTMLParagraphElement>("#departure_codes")!;
let departure_elevation_element = document.querySelector<HTMLParagraphElement>("#departure_elevation")!;
let departure_time_element = document.querySelector<HTMLParagraphElement>("#departure_time")!;
let departure_category_element = document.querySelector<HTMLParagraphElement>("#departure_category")!;
let departure_metar_element = document.querySelector<HTMLParagraphElement>("#departure_metar")!;

let arrival_input_element = document.querySelector<HTMLInputElement>("#arrival_code")!;
let arrival_get_metar_button = document.querySelector<HTMLSelectElement>("#get_arrival_metar")!;
let arrival_data_element = document.querySelector<HTMLDivElement>("#arrival_data")!;
let arrival_info_element = document.querySelector<HTMLParagraphElement>("#arrival_info")!;
let arrival_codes_element = document.querySelector<HTMLParagraphElement>("#arrival_codes")!;
let arrival_elevation_element = document.querySelector<HTMLParagraphElement>("#arrival_elevation")!;
let arrival_time_element = document.querySelector<HTMLParagraphElement>("#arrival_time")!;
let arrival_category_element = document.querySelector<HTMLParagraphElement>("#arrival_category")!;
let arrival_metar_element = document.querySelector<HTMLParagraphElement>("#arrival_metar")!;

let min_time_hour_element = document.querySelector<HTMLInputElement>("#min_time_hour")!;
let min_time_minute_element = document.querySelector<HTMLInputElement>("#min_time_minute")!;

let max_time_hour_element = document.querySelector<HTMLInputElement>("#max_time_hour")!;
let max_time_minute_element = document.querySelector<HTMLInputElement>("#max_time_minute")!;

setupDropdown(document.querySelector<HTMLSelectElement>("#airplane_select")!, document.querySelector<HTMLInputElement>("#runway_length")!, document.querySelector<HTMLInputElement>("#speed")!);

let aircraft_select = document.querySelector<HTMLSelectElement>("#airplane_select")!;
let runway_length_element = document.querySelector<HTMLInputElement>("#runway_length")!;
let aircraft_speed_element = document.querySelector<HTMLInputElement>("#speed")!;

let scheduled_checkbox_element = document.querySelector<HTMLInputElement>("#scheduled-checkbox")!;
let seaplane_checkbox_element = document.querySelector<HTMLInputElement>("#seaplane-checkbox")!;

let potential_airports_list_display = document.querySelector<HTMLDivElement>("#potential_airports_list_display")!;
let potential_airports_list_element = document.querySelector<HTMLDivElement>("#potential_airports_list")!;
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

clear_button.addEventListener("click", (event: MouseEvent) => {
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
