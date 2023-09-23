import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/es'
dayjs.locale('es') 
dayjs.extend(relativeTime)

export const getRelativeTime = (date) =>  dayjs(date).fromNow()

export const formatDuration = (duration) => Math.floor(duration / 1000 / 60 / 60);

export const formatDate = (date) => dayjs(date).format('DD MMM YYYY, HH:mm');
