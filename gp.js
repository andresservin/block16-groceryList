const items = [
    { id: 1, name: 'foo', price: 7 },
    { id: 2, name: 'bar', price: 6 },
    { id: 3, name: 'bazz', price: 9 },
    { id: 3, name: 'quq', price: 13 }
  ];

  const name = prompt ('enter a name of an item, we will try and fins it', 'foo');

  const (found) = items.find(item => item.name === name);

  const found = items.find (item => item.name === name);
  if (found){
    console.log('we found it');
    console.log(found);
  }
  else {
    console.log('we could not find an item with the same name ${name}');
  }
  const search = prompt('enter a string, we will see the items which have that string in their name', 'ba');

  const foundItems = items.filter(item => item.name.indexOf(search)!==-1);
  console.log(foundItems);