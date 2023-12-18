import { useState } from 'react';

const NewItem = ({ addItem }) => {
  // performance improvement: moved the state here as its only being used here.
  const [newItemName, setNewItemName] = useState('');
  return (
    <form
      id="new-item"
      onSubmit={(e) => {
        e.preventDefault();
        addItem(newItemName); // keeping this prop from parent as we do need it at that level to update items list on submit
        setNewItemName('');
      }}
    >
      <label htmlFor="new-item-name" className="font-semibold">
        New Item Name
      </label>
      <div className="my-2 flex">
        <input
          id="new-item-name"
          className="w-full"
          type="search"
          placeholder="New Item"
          value={newItemName}
          autoFocus
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button
          id="new-item-submit"
          className="whitespace-nowrap border-l-0 bg-primary-300"
          aria-label={`Add ${newItemName}`}
          type="submit"
        >
          ➕ Add New Item
        </button>
      </div>
    </form>
  );
};

export default NewItem;
