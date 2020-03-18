// You're trying to create a paginator that splits up your items into pages.
// First, given a total number of items, determine how many pages you need to create
// if there's supposed to be 50 items on a page.

// examples:
// 45 --> 1
// 100 --> 2
// 101 --> 3

function paginator(items){
  return Math.ceil(items/50); // round the number upward
}
console.log(paginator(51))