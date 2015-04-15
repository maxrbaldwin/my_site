# Import packages
from pymongo import MongoClient

# Import from python
import os
import json

# Global Data
home_page = {}

# Global Variables
client = MongoClient(os.environ['MONGO_URI'])
db = client.test
posts = db[os.environ['POSTS_COLLECTION']]
index_page = db[os.environ['INDEX_PAGE_COLLECTION']]

def scrape_for_index():
    get_about_me()

def get_about_me():
    about_me_post = posts.find_one({'title': 'About Me'})
    about_me_text = about_me_post['content']['extended']

    set_about_me(about_me_text)

def set_about_me(post_text):
    db.index_page.update({'_id': 1},{'$set':{'about_me': post_text}}, upsert=True)


if __name__ == "__main__":
    scrape_for_index()