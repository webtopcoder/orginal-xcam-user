import moment from 'moment';

export function formatDate(date: Date, format = 'DD/MM/YYYY HH:mm:ss') {
  return moment(date).format(format);
}

export function converDuration(duration: number, format = 'HH:mm') {
  return moment
    .utc(moment.duration(duration, 'milliseconds').asMilliseconds())
    .format(format);
}

export function parseAge(date: string, format = 'MMMM DD, YYYY') {
  return moment(date).format(format);
}

export function getAge(date: Date): string {
  return moment().diff(moment(date).format('YYYY-MM-DD'), 'years').toString();
}

export function formatDuration(s: number) {
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s - hours * 3600) / 60);
  const seconds = s - hours * 3600 - minutes * 60;
  return `${hours < 10 ? '0' : ''}${hours}:${
    minutes < 10 ? '0' : ''
  }${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
