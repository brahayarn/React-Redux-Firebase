import { useAppSelector } from "../../app/store/store"

export default function Scratch() {
    const {data} = useAppSelector(state => state.test)

  return (
    <>
    <h1>Scratch</h1>
    <h3>the date is: {data}</h3>
    </>
  )
}