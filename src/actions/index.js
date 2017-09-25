export function addItem(item) {
  return {
    type: 'ITEM_ADDED',
    itemSelected: item,
  };
}

export function removeItem(item) {
  return {
    type: 'ITEM_REMOVED',
    itemSelected: item,
  };
}
