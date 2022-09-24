
//Generics are very easy
class Logger<T> {
  log(items: Array<T>, cb: (i: T) => void) {
    items.forEach(item => cb(item));
  }
}


export default function play() {

  const names: string[] = ["Benneth", "Uzor"]

  const numbers: Array<number> = [1, 2, 3]

  const random = Math.random() > 0.5 ? 'Hello ' : [1, 2]

  function iterate(items: Array<string>) {
    debugger
    items.forEach(i => console.log(i.toUpperCase()))
    debugger
  }

  console.log(iterate(['benneth', 'uzor']));

  const logger = new Logger<string | number>();

  const cars = [1, 'toyota']

  logger.log(cars, (car) => console.log(car))

}


export const play2 = () => {
  console.log('first')
}