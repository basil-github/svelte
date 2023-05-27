<script>
  import { onMount } from "svelte";

  const endpoint =
    "https://clients6.google.com/calendar/v3/calendars/jkok9rvr09e3h4lm4jrrh8ejro@group.calendar.google.com/events?calendarId=jkok9rvr09e3h4lm4jrrh8ejro%40group.calendar.google.com&singleEvents=true&timeZone=Asia%2FKolkata&maxAttendees=1&maxResults=1000&sanitizeHtml=true&timeMin=2023-01-01T00%3A00%3A00%2B05%3A30&timeMax=2023-12-31T00%3A00%3A00%2B05%3A30&key=AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs";
  let posts = {
    summary: undefined,
    items: [
      {
        summary: undefined,
        start: {
          date: "",
        },
      },
    ],
  };

  onMount(async function () {
    const response = await fetch(endpoint);
    const data = await response.json();
    posts = {
      ...data,
      items: data.items
        .map((/** @type {any} */ item) => ({
          ...item,
          mon: new Date(item?.start?.date).getMonth(),
          // @ts-ignore
        }))
        // @ts-ignore
        .sort((b, a) => new Date(b?.start?.date) - new Date(a?.start?.date)),
    };
    console.log(posts);
  });
  const month = (/** @type {string | number | Date} */ dateString) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = new Date(dateString).getMonth();
    return monthNames[month];
  };
</script>

<div>
  <div class="corner" />
  <h1>Upcoming ({posts?.items?.length}) Events at {posts?.summary || ""}</h1>

  <div class="div-container">
    {#each posts?.items as events}
      <div class="card-container">
        <div
          class={new Date() < new Date(events?.start?.date)
            ? "photo-container red_p"
            : "photo-container"}
        >
          <div class="date">
            <div class="day">{new Date(events?.start?.date).getDate()}</div>
            <div class="month">
              {month(events?.start?.date) || events?.start?.date}
            </div>
          </div>
        </div>
        <div class="info-container">
          <h3 class="event-name">{events?.summary || ""}</h3>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  h1 {
    font-weight: 400;
    text-align: center;
  }

  .div-container {
  }
  h1 {
    font-family: sans-serif;
    color: #555;
  }

  .photo-container {
    font-size: 1.5em;
    background-color: #c3ff99;
    color: rgb(0, 0, 0);
    padding: 20px;
    text-align: center;
    grid-area: photo;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .red_p {
    background-color: #ec7272;
  }
  .card-container {
    margin: 10px;
    display: grid;
    grid-template-areas: "photo info";
    grid-template-columns: 150px 1fr;
    background-color: #ffffff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    line-height: 1.75em;
  }
  .info-container {
    padding: 20px;
    grid-area: info;
  }
  .event-name {
    font-weight: bold;
    padding-bottom: 5px;
  }
  .event-location {
    font-weight: 300;
  }
  .day {
    font-weight: 300;
  }
  .month {
    font-weight: 600;
  }

  @media (max-width: 600px) {
    .card-container {
      width: 100%;
    }
  }
</style>
