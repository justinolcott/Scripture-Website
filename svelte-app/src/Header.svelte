<script>
  export let title;
  let selectedBook = ''; // To store the selected book from the dropdown

  // Function to handle dropdown selection change
  function handleBookSelection(event) {
    selectedBook = event.target.value;
    // You can perform any actions based on the selected book here
    console.log('Selected book:', selectedBook);
  }
</script>

<svelte:head>
  <title>My Svelte App</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Other meta tags, CSS links, etc. -->
</svelte:head>

<header>
  <div class="title">
    <h1>{title}</h1> <!-- Replace {title} with your desired title -->
  </div>

  <!-- <div class="dropdown">
    <select on:change={handleBookSelection}>
      <option value="">Select a book</option>
      <option value="book1">The Old Testament</option>
      <option value="book2">The New Testament</option>
      <option value="book3">The Book of Mormon</option>
    </select>
  </div> -->
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #f0f0f0;
    /* Add any desired styling for the header */
  }

  /* .title, .dropdown {
    margin-bottom: 10px;
  } */
</style>
