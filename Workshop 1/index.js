// Determining Shipping Cost Based on Order Amount (if the amout is above 100 shipping is free, if not it's $10)

let orderAmount = 101;

console.log(orderAmount > 100 ? "Free shipping" : "10$ Shipping")

if (orderAmount > 100){
    console.log("Free shipping")
} else {
    console.log("10$ Shipping")
}