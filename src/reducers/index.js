import {
    combineReducers
} from 'redux';


const initialState = {
    allItems: [{
            'id': 1,
            'name': 'Item 1',
            'price': 10
        },
        {
            'id': 2,
            'name': 'Item 2',
            'price': 230
        },
        {
            'id': 3,
            'name': 'Item 3',
            'price': 30
        },
        {
            'id': 4,
            'name': 'Item 4',
            'price': 45
        },
        {
            'id': 5,
            'name': 'Item 5',
            'price': 20
        }
    ],
    selectedItems: [],
    count: 0
};
const items = (state = initialState, action) => {
    switch (action.type) {
        case 'ITEM_ADDED':
            let id = action.itemSelected['id'];
            let already_there = state.selectedItems.findIndex(x => x.id === id);
            let newItem;
            if (already_there == -1) {
                action.itemSelected['quantity'] = 1;
                newItem = state.selectedItems.concat(action.itemSelected);
            } else {
                let current = state.selectedItems;
                current[already_there]['quantity'] += 1;
                newItem = current;
            }
            let total = state.count + action.itemSelected['price'];
            return Object.assign({}, state, {
                selectedItems: newItem,
                count: total ,

            });
        case 'ITEM_REMOVED':
              let newItemRemove;
              if(action.itemSelected.quantity == 1) {
                let current = state.selectedItems;
                let id = action.itemSelected['id'];
                let already_there = current.findIndex(x => x.id === id);
                current.splice(already_there, 1);
                newItemRemove = current;
              } else {
                let current = state.selectedItems;
                let id = action.itemSelected['id'];
                let already_there = current.findIndex(x => x.id === id);
                current[already_there]['quantity'] -=1;
                newItemRemove = current;
              }
              let totalRemove = state.count - action.itemSelected['price'];
              return Object.assign({}, state, {
                  selectedItems: newItemRemove,
                  count: totalRemove
              });
        default:
            return state;
    }

}

export default items;
