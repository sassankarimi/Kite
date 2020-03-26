const ADD="ADD";
const REMOVE="REMOVE";

const add = (value)=>({
  type:ADD,
  value 
});
const remove = ()=>({
  type:REMOVE,
  value:[] 
});

export {
add,
remove
}
