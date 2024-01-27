# hoya-hacks-2024-qclip

This is our team's submission for the Microsoft Azure Cloudflare track.

Presenting QClip.






### Dev Team:
* Adam Jablonka              - *Front End*
* Carlos Vega                - *Infrastructure / Documentation*
* Loyd Flores                - *Fine Tuning*
* Masroor Khonkhodzhaev      - *Backend*

Data Collection 

The data for our AI Admissions Assistant project was gathered using a Python web scraping tool, which includes two main files: main.py and logic.py. The process starts with main.py, which sets the initial website URL and begins the scraping operation by calling functions from logic.py.

Inside logic.py, we have several important functions that handle the actual data collection. The scrape function is key here. It works by visiting web pages, one by one, starting from the initial URL. First, it checks if we've already visited a page using the load_visited_urls function. This helps us avoid collecting the same data multiple times.

Once it finds a new page, the scrape function uses Python’s requests library to access the page, just like a web browser would. After getting the page, it uses BeautifulSoup, another Python library, to read and understand the HTML content of the page. The main data we collect is the text found in paragraph ('<p>') tags – these tags are commonly used for written content on websites.

After extracting the text, the save_text_to_file function steps in. It saves the gathered text into a text file, naming each file in a way that makes it easy to know where the data came from.

The tool also looks for other links on the page that lead to different parts of the same website. It makes sure these links are correct and relevant using the is_valid_url function. The scraper then follows these links and repeats the process, which lets us gather information from many different pages on the same website.

In short, our Python scraper starts from a main URL and works its way through the website, collecting text from each page and saving it. This process is done in a step-by-step, organized way, making sure we gather a wide range of information needed to train our Azure AI model effectively.
