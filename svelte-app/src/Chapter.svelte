<script>
    export let chapter;
    export let onSelectVerse = () => {};
  
    function handleVerseSelection(event, verse) {
      if (event.key === 'Enter' || event.key === 'Space' || event.type === 'click') {
        onSelectVerse(verse);
      }
    }

  </script>
  
  <div>
    <h3>{chapter.reference}</h3>
    <ul>
        {#each chapter.verses as verse}
          <li>
            <button
              on:click={() => handleVerseSelection(event, verse)}
              on:keydown={(event) => handleVerseSelection(event, verse)}
            >
              {verse.verse} {verse.text}
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
  
    li {
      cursor: pointer;
      padding: 4px;
      margin-bottom: 4px;
      background-color: #f0f0f0;
    }
  
    li:hover {
      background-color: #d0d0d0;
    }
    button {
        cursor: pointer;
        padding: 4px;
        margin-bottom: 4px;
        background-color: transparent;
        border: none;
        text-align: left;
        width: 100%;
    }

    /* button:hover {
        background-color: #d0d0d0;
    } */
  </style>
  