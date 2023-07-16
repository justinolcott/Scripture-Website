<script>
    export let books;
    export let onSelectBook = () => {};
  
    function handleBookSelection(event, book) {
      if (event.key === 'Enter' || event.key === 'Space' || event.type === 'click') {
        onSelectBook(book);
      }
    }
  </script>
  
  <div>
    <h2>Books</h2>
    <ul>
      {#each books as book}
        <li>
          <button
            on:click={() => handleBookSelection(event, book)}
            on:keydown={(event) => handleBookSelection(event, book)}
          >
            {book.book}
          </button>
        </li>
      {/each}
    </ul>
  </div>
  
  <style>
    ul {
      list-style-type: none;
      padding: 0;
    }
  
    button {
      cursor: pointer;
      padding: 8px;
      background-color: #f0f0f0;
      margin-bottom: 4px;
      border: none;
      text-align: left;
      width: 100%;
    }
  
    button:hover {
      background-color: #d0d0d0;
    }
  </style>
  