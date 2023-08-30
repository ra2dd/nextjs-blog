import { parseISO, format } from 'date-fns'

// function for parsing date string into date object
// and formatting it to specified text representation within <time> element
export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}