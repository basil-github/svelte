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
  <h5>Upcoming ({posts?.items?.length}) Events at {posts?.summary || ""}</h5>
<div class="ag-format-container">
  <div class="ag-courses_box">
      {#each posts?.items as events}

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="  {new Date() < new Date(events?.start?.date)
            ? "ag-courses-item_bg red_p"
            : "ag-courses-item_bg green_p"}"></div>
        <h3 class="ag-courses-item_title">
        <img class="avatar" src="https://xsgames.co/randomusers/avatar.php?g=pixel&key={events?.summary}" width="50" height="50"/>
<br/>
{events?.summary || ""}        </h3>


        <div class="ag-courses-item_date-box">
          <span class="ag-courses-item_date">
            {new Date(events?.start?.date).getDate()}              {month(events?.start?.date) || events?.start?.date}

          </span>
        </div>
      </a>
    </div>    {/each}





  

  </div>
</div>
  <div class="div-container">
  
  </div>
</div>

<style>
.green_p{
  background-color:#98D8AA;
}
.red_p{
    background-color:#FF6D60;

  
}
.ag-format-container {
  width: 1142px;
  margin: 0 auto;
}
.avatar{
  border-radius: 50%;
}

body {
  background-color: #000;
}
.ag-courses_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  padding: 50px 0;
}
.ag-courses_item {
  -ms-flex-preferred-size: calc(33.33333% - 30px);
  flex-basis: calc(33.33333% - 30px);

  margin: 0 15px 30px;

  overflow: hidden;

  border-radius: 28px;
}
.ag-courses-item_link {
  display: block;
  padding: 30px 20px;
  background-color: #121212;

  overflow: hidden;

  position: relative;
}
.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date {
  text-decoration: none;
  color: #FFF;
}
.ag-courses-item_link:hover .ag-courses-item_bg {
  -webkit-transform: scale(10);
  -ms-transform: scale(10);
  transform: scale(10);
}
.ag-courses-item_title {
  min-height: 87px;
  margin: 0 0 25px;

  overflow: hidden;

  font-weight: bold;
  font-size: 30px;
  color: #FFF;

  z-index: 2;
  position: relative;
}
.ag-courses-item_date-box {
  font-size: 18px;
  color: #FFF;

  z-index: 2;
  position: relative;
}
.ag-courses-item_date {
  font-weight: bold;
  color: #f9b234;

  -webkit-transition: color .5s ease;
  -o-transition: color .5s ease;
  transition: color .5s ease
}
.ag-courses-item_bg {
  height: 128px;
  width: 128px;
  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;

  border-radius: 50%;

  -webkit-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease;
}




@media only screen and (max-width: 979px) {
  .ag-courses_item {
    -ms-flex-preferred-size: calc(50% - 30px);
    flex-basis: calc(50% - 30px);
  }
  .ag-courses-item_title {
    font-size: 14px;
  }
}

@media only screen and (max-width: 767px) {
  .ag-format-container {
    width: 96%;
  }

}

  h5 {
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
