import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/es'
dayjs.locale('es') 
dayjs.extend(relativeTime)

export const getRelativeTime = (date) => {
    console.log(date)
    console.log(dayjs(date).format('DD/MM/YYYY HH:mm:ss'))
    return dayjs(date).fromNow()
}

export const formatDuration = (duration) => Math.floor(duration / 1000 / 60 / 60);
