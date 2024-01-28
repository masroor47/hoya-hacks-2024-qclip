import React from 'react';
import './HomePage.css';

const p_tag = "(<p>)";

const HomePage: React.FC = () => {
    return (
        <div className="centered-container">
            <h2>Data Collection</h2>
                <p>
                    The data for our AI Admissions Assistant project was gathered using a Python web scraping tool, which includes two main files: main.py and logic.py. The process starts with main.py, which sets the initial website URL and begins the scraping operation by calling functions from logic.py.
                </p>
                <p>
                    Inside logic.py, we have several important functions that handle the actual data collection. The scrape function is key here. It works by visiting web pages, one by one, starting from the initial URL. First, it checks if we've already visited a page using the load_visited_urls function. This helps us avoid collecting the same data multiple times.
                </p>
                <p>
                    Once it finds a new page, the scrape function uses a Python requests library to access the page, just like a web browser would. After getting the page, it uses BeautifulSoup, another Python library, to read and understand the HTML content of the page. The main data we collect is the text found in paragraph {p_tag} tags – these tags are commonly used for written content on websites.
                </p>
                <p>
                    After extracting the text, the save_text_to_file function steps in. It saves the gathered text into a text file, naming each file in a way that makes it easy to know where the data came from.
                </p>
                <p>
                    The tool also looks for other links on the page that lead to different parts of the same website. It makes sure these links are correct and relevant using the is_valid_url function. The scraper then follows these links and repeats the process, which lets us gather information from many different pages on the same website.
                </p>
                <p>
                    In short, our Python scraper starts from a main URL and works its way through the website, collecting text from each page and saving it. This process is done in a step-by-step, organized way, making sure we gather a wide range of information needed to train our Azure AI model effectively.
                </p>
            <h2>Data Formatting and Data Cleaning</h2>
                <p>
                In our AI Admissions Assistant project, the data processing and vectorization are executed through a specialized Python software comprising two main files: main.py and convert_to_vector.py. The process initiates with main.py, which performs the primary data cleaning. This involves reading text data from files and removing specific, predefined footer lines that are irrelevant to our analysis, like standard contact information found at the end of many web pages. This cleaning step is crucial as it ensures the purity and relevance of our data set.
                </p>
                <p>
                Once the data is cleaned, convert_to_vector.py takes over to perform the tokenization and vectorization of the text. The process begins with NLTK's word_tokenize function, which breaks down the text into individual words or 'tokens'. This tokenization is a fundamental step in text analysis, as it converts continuous text into discrete elements that can be processed by AI models.
                </p>
                <p>
                The core of the vectorization process lies in the use of the Word2Vec model from the gensim library. This model is trained on the tokens from our text data, learning to represent each word as a high-dimensional vector. These word vectors capture the semantic relationships and contexts of words in a way that is interpretable by machine learning algorithms.
                </p>
                <p>
                For each text document, an aggregate 'document vector' is created by averaging the word vectors. This represents the overall semantic footprint of the document, condensing its information into a format suitable for AI processing. The final step of the process is the compilation of these document vectors, which serve as the input for our machine learning models. Through this method, our Python software transforms raw, unstructured text data into structured, numerical data, ready to be utilized in the training and functioning of our AI Admissions Assistant.
                </p>
        </div>
    );
};

export default HomePage;
