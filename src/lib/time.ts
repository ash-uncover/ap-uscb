import { TimeModel } from './model'

export const addTimes = (times: TimeModel[]): TimeModel => {
  const seconds = times
    .map(timeToSeconds)
    .reduce((acc, s) => acc + s, 0)
  return secondsToTime(seconds)
}

export const avgTime = (t: TimeModel, nb: number): TimeModel => {
  const seconds = timeToSeconds(t)
  const avg = seconds / nb
  return secondsToTime(avg)
}

export const timeToString = (time: TimeModel): string => {
  const m = `${time[0]}`.padStart(2, '0')
  const s = `${time[1]}`.padStart(2, '0')
  return `${m}:${s}`
}

export const timeToSeconds = (time: TimeModel): number => {
  return time[0] * 60 + time[1]
}
export const secondsToTime = (seconds: number): TimeModel => {
  const s = Math.round(seconds) % 60
  const m = Math.round((Math.round(seconds) - s) / 60)
  return [m, s]
}

export const compareTimes = (t1: TimeModel, t2: TimeModel): number => {
  return timeToSeconds(t1) - timeToSeconds(t2)
}

export const valuePerMin = (value: number, t: TimeModel): number => {
  const s = timeToSeconds(t)
  if (s === 0) {
    return 0
  }
  return value / s * 60
}