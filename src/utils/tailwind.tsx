// TODO: Should this be replaced with https://www.npmjs.com/package/tailwindcss-classnames ?
// Provided by tailwind, used in many places
export function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
