# Scripture Website
- Go to the website [here](https://justinolcott.github.io/Scripture-Website/).
- The website is deployed using Github Pages.
- The website is made in Svelte and the reference data was generated using Python.

## Embeddings
- Embeddings were found for all scriptures using HuggingFace's all-MiniLM-L6-v2 model.
- Similarity was found between all scriptures using the cosine between embeddings.
- The code for embeddings can be found in the Python folder.
- I also created a graph displaying all scriptures and their embeddings on a 2D graph to show similarity. If you download and zoom in, each dot has a label for its reference. You can see how different books cluster together.
![similarity](/images/output_15clusters_1font_bookcolored.png)

## Website
- The website was built using Svelte. It has minimum css and is mostly functional.
- The reference data was found with page requests to the Church of Jesus Christ of Latter-day Saints' library and then parsed using BeautifulSoup.
- It only references 500 random General Conference talks to limit page requests.
- It also only features the Book of Mormon to limit page requests, but it could easily be expanded to all books of scripture.
- The code for the website can be found in the Svelte folder. The code for generating the reference data can be found in the Python folder.

## Resources:
1. JSON version of scriptures from [here](https://github.com/bcbooks/scriptures-json).
2. Reference Material from [www.churchofjesuschrist.org](https://www.churchofjesuschrist.org/study/lib?lang=eng&platform=web).
3. Embeddings from HuggingFace's sentence-transformers/all-MiniLM-L6-v2 model.
