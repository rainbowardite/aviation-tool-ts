(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t,n){let r=[{name:`A319`,length:4460,average_speed:330,speed:420},{name:`A320`,length:4460,average_speed:330,speed:420},{name:`A321`,length:5600,average_speed:330,speed:420},{name:`B737-600`,length:4265,average_speed:330,speed:420},{name:`B737-700`,length:4650,average_speed:330,speed:420},{name:`B777-300ER`,length:6600,average_speed:475,speed:420},{name:`Other`,length:0,average_speed:0,speed:0}];e&&(e.innerHTML=``,r.forEach(t=>{let n=document.createElement(`option`);n.value=t.name,n.text=t.name,e.appendChild(n)}));function i(e){let i=e.target.value,a=r.find(e=>e.name===i);a&&(a.name==`Other`?(t.disabled=!1,t.value=``,n.disabled=!1,n.value=``):(t.disabled=!0,n.disabled=!0,t.value=a.length.toString(),n.value=a.average_speed.toString()))}t.value=r[0].length.toString(),n.value=r[0].average_speed.toString(),e.addEventListener(`change`,i)}function t(e,t,n,r,i,a,o,s,c){e.value=``,n.value=``,i.value=``,a.value=``,o.value=``,s.value=``,c?.classList.contains(`hidden`)||c.classList.add(`hidden`),t?.classList.contains(`hidden`)||t.classList.add(`hidden`),r?.classList.contains(`hidden`)||r.classList.add(`hidden`)}document.querySelector(`#sidebar`).innerHTML=`
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
`,document.querySelector(`#app`).innerHTML=`
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

`;var n=document.querySelector(`#clear`),r=document.querySelector(`#find`),i=document.querySelector(`#next`),a=document.querySelector(`#simbrief`),o=document.querySelector(`#get_departure_metar`),s=document.querySelector(`#departure_data`),c=document.querySelector(`#get_arrival_metar`),l=document.querySelector(`#arrival_data`);e(document.querySelector(`#airplane_select`),document.querySelector(`#runway_length`),document.querySelector(`#speed`));var u=document.querySelector(`#potential_airports_list_display`);s?.classList.contains(`hidden`),l?.classList.contains(`hidden`),u?.classList.contains(`hidden`),n.addEventListener(`click`,()=>{t(document.querySelector(`#departure_code`),document.querySelector(`#departure_data`),document.querySelector(`#arrival_code`),document.querySelector(`#arrival_data`),document.querySelector(`#min_time_hour`),document.querySelector(`#min_time_minute`),document.querySelector(`#max_time_hour`),document.querySelector(`#max_time_minute`),document.querySelector(`#potential_airports_list_display`))}),r.addEventListener(`click`,e=>{console.log(`Button was pressed!`,e)}),i.addEventListener(`click`,e=>{console.log(`Button was pressed!`,e)}),a.addEventListener(`click`,e=>{console.log(`Button was pressed!`,e)}),o.addEventListener(`click`,e=>{console.log(`Button was pressed!`,e)}),c.addEventListener(`click`,e=>{console.log(`Button was pressed!`,e)});