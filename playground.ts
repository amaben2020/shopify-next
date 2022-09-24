
//Generics are very easy
class Logger<T> {
  log(items: Array<T>, cb: (i: T) => void) {
    items.forEach(item => cb(item));
  }
}
type Person<T> = {
  name: T;
}


// extends





export default function play() {

  const names: string[] = ["Benneth", "Uzor"]

  const numbers: Array<number> = [1, 2, 3]

  const random = Math.random() > 0.5 ? 'Hello ' : [1, 2]

  function iterate(items: Array<string>) {

    items.forEach(i => console.log(i.toUpperCase()))

  }

  console.log(iterate(['benneth', 'uzor']));

  const logger = new Logger<string | number>();
  const cars = [1, 'toyota']
  logger.log(cars, (car) => console.log(car))
}

type SingleType<T> = T extends any[] ? T[number] : T

type Greeting = {
  message: string
}

export const play2 = async () => {
  const logger = new Logger<Person<string>>()

  const names = [{ name: "benneth" }, { name: "uzor" }]

  logger.log(names, (name) => console.log(name))


  const getHelloProps = async () => {
    const info: Greeting = { message: "Hello" }

    return {
      props: {

        info,
        data: ['cars', 'uzor'],
      }
    }
  }


  const data = await getHelloProps()

}