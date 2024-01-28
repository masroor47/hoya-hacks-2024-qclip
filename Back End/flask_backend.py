from flask import Flask, request, jsonify, make_response
from flask_cors import CORS, cross_origin
import openai, requests

app = Flask(__name__)
CORS(app)

openai.api_type = "azure"
openai.api_version = "2023-08-01-preview"
openai.api_base = "https://6j6ipkoccmygg-cog.openai.azure.com/"
openai.api_key = f"API HERE "  # Securely store and retrieve your API key
deployment_id = "chatgpt35turbo16"

search_endpoint = "ENDPOINT HERE"
search_key = "SEARCH KEY"  # Securely store and retrieve your search key
search_index_name = "INDEX"

def setup_byod(deployment_id: str):
    """Sets up the OpenAI Python SDK to use your own data for the chat endpoint."""
    class BringYourOwnDataAdapter(requests.adapters.HTTPAdapter):
        def send(self, request, **kwargs):
            request.url = f"{openai.api_base}/openai/deployments/{deployment_id}/extensions/chat/completions?api-version={openai.api_version}"
            return super().send(request, **kwargs)

    session = requests.Session()
    session.mount(prefix=f"{openai.api_base}/openai/deployments/{deployment_id}", adapter=BringYourOwnDataAdapter())
    openai.requestssession = session

@app.route('/get-completion', methods=['POST'])
def get_completion():
    """Endpoint to get completion from OpenAI using the chat extension."""
    content = request.json.get('content')
    setup_byod(deployment_id)

    message_text = [{"role": "user", "content": content}]

    completion = openai.ChatCompletion.create(
        messages=message_text,
        deployment_id=deployment_id,
        dataSources=[
            {
                "type": "AzureCognitiveSearch",
                "parameters": {
                    "endpoint": search_endpoint,
                    "key": search_key,
                    "indexName": search_index_name,
                }
            }
        ]
    )
    return jsonify(completion)

# @app.after_request
# def after_request(response):
#     """Set CORS headers for every response."""
#     response.headers.add('Access-Control-Allow-Origin', '*')
#     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
#     response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
#     return response

# def _build_cors_preflight_response():
#     response = make_response()
#     response.headers.add('Access-Control-Allow-Origin', '*')
#     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
#     response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
#     return response

# PythonAnywhere requires no app.run() for its WSGI servers, so it's omitted here.