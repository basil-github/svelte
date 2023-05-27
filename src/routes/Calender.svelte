<script>
  import { onMount } from "svelte";

  /**
   * @type {{ items: string | any[]; summary: any; }}
   */
  export let posts;
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
