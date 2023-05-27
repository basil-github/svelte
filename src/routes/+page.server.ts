// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import { error } from '@sveltejs/kit'


export async function load() {
    const endpoint =
        "https://clients6.google.com/calendar/v3/calendars/jkok9rvr09e3h4lm4jrrh8ejro@group.calendar.google.com/events?calendarId=jkok9rvr09e3h4lm4jrrh8ejro%40group.calendar.google.com&singleEvents=true&timeZone=Asia%2FKolkata&maxAttendees=1&maxResults=1000&sanitizeHtml=true&timeMin=2023-01-01T00%3A00%3A00%2B05%3A30&timeMax=2023-12-31T00%3A00%3A00%2B05%3A30&key=AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs";

    const document = await fetch(endpoint);
    const data = await document.json();
    let posts = {
        ...data,
        items: data.items
            .map((/** @type {any} */ item: any) => ({
                ...item,
                mon: new Date(item?.start?.date).getMonth(),
                // @ts-ignore
            }))
            // @ts-ignore
            .sort((b, a) => new Date(b?.start?.date) - new Date(a?.start?.date)),
    };
    if (posts) {
        console.log(posts);

        return { posts }
    }

    error(404, 'Not found')
}
export const prerender = true;
