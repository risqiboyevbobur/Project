
import axios from "axios";


const createDate = (url,obj) => {
   return axios.post(url,obj)
}
export default createDate

// const img1 = require("./Images/Image.jpg")
// const img2 = require("./Images/Image (1).jpg")
// const img3 = require("./Images/Image (2).jpg")
// const img4 = require("./Images/Image (3).jpg")
// const img5 = require("./Images/Image (4).jpg")
// const img6 = require("./Images/Image (6).jpg")

// export const dynamic = [
//   {
//     name: "Apple BYZ S852I",
//     reyting: "4.7",
//     img:img1,
//     price: "2927 ₸",
//     sale: "3527 ₸",
//   },
//   {
//     name: "Apple EarPods",
//     reyting: "4.5",
//     img:img2,
//     price: "2327  ₸",
//   },
//   {
//     name: "Apple EarPods",
//     reyting: "4.5",
//     img:img3,
//     price: "2327  ₸",
//   },
//   {
//     name: "Apple AirPods",
//     reyting: "4.7",
//     img:img4,
//     price: "9527 ₸",
//   },
//   {
//     name: "GERLAX GH-04",
//     reyting: "4.7",
//     img:img4,
//     price: "6527 KZT",
//   },
//   {
//     name: "Apple AirPods",
//     reyting: "4.8",
//     img:img5,
//     price: "6527 KZT",
//   },
//   {
//     name: "Apple AirPods",
//     reyting: "4.8",
//     img:img6,
//     price: "6527 KZT",
//   },
// ];

// export default dynamic