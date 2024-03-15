// import { writable, readable, derived } from "svelte/store";

// export const count = writable(0)

// export const time = readable(new Date(), set => {
//     const interval = setInterval(()=>{
//         set(new Date())
//     })
//     return () => {
//         clearInterval(interval)
//     }
// })

// const start: Date = new Date() 

// export const elapsedTime = derived(time, ($time) => {
//    Math.round(($time.getSeconds() - start.getSeconds())/ 1000)
// })