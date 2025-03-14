import { TimeModel } from './model'

export const addTimes = (times: TimeModel[]): TimeModel => {
  const result = times.reduce((acc: TimeModel, time: TimeModel) => {
    const [m1, s1] = acc
    const [m2, s2] = time
    if (s1 + s2 > 59) {
      acc[0]++
      acc[1] = (s1 + s2) % 60
    } else {
      acc[1] = s1 + s2
    }
    acc[0] += m2
    return acc
  }, [0, 0])
  return result
}

export const timeToString = (time: TimeModel): string => {
  const m = `${time[0]}`.padStart(2, '0')
  const s = `${time[1]}`.padStart(2, '0')
  return `${m}:${s}`
}

export const compareTimes = (t1: TimeModel, t2: TimeModel): number => {
  return t1[0] * 60 + t1[1] - t2[0] * 60 - t2[1]
}