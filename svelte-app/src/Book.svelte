<script>
    export let chapters;
    export let onSelectChapter = () => {};
  
    function handleChapterSelection(event, chapter) {
      if (event.key === 'Enter' || event.key === 'Space' || event.type === 'click') {
        onSelectChapter(chapter);
      }
    }
  </script>
  
  <div>
    <h2>Chapters</h2>
    <ul>
      {#each chapters as chapter}
        <li>
          <button
            on:click={() => handleChapterSelection(event, chapter)}
            on:keydown={(event) => handleChapterSelection(event, chapter)}
          >
            {chapter.chapter}
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
  