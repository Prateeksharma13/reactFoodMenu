const initialState = {
    allItems : [
        {
          'id' : 1,
          'name' : 'one',
          'price' : 10
        },
        {
          'id' : 2,
          'name' : 'two',
          'price' : 20
        },
        {
          'id' : 3,
          'name' : 'three',
          'price' : 30
        }
      ],
    selectedItems : [],
    count : 0
};
export default function(state = initialState, action) {
  state.allItems.push(        {
            'id' : 3,
            'name' : 'three',
            'price' : 30
          });
  console.log(state);
  // const allItems = state.allItems;
  // const selectedItems = state.selectedItems;
   switch(action.type) {
   case 'ITEM_ADDED':
   //newState += action.itemSelected;
   //return merge({}, state, action.itemSelected);
  //   let id = action.itemSelected.id;
  //   let index = allItems.findIndex(x => x.id === id);
  //   let already_there = selectedItems.findIndex(x => x.id === id);
  //   console.log(already_there);
  //   if(already_there == -1) {
  //          let newItem = allItems[index];
  //          newItem['quantity'] = 1;
  //          selectedItems.push(newItem);
  //          console.log({...state,selectedItems});
  //          return {...state,selectedItems};
  //   } else {
  //   //   this.state.selected[already_there]['quantity'] = this.state.selected[already_there]['quantity'] + 1;
  //   //   this.state.total += this.state.selected[already_there]['price'];
  //    }
  //   // console.log(this.state.selected[already_there]);
  //   // this.setState(this.state.selected);
  //
   }
   return state;

}
