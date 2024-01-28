import openai
from dotenv import load_dotenv
import os
import time

# Load env variables 
load_dotenv()

# Accessing Env variables
ASSISTANT_ID = os.getenv('ASSISTANT_ID')
API_KEY = os.getenv('API_KEY')

# Initialize Client
client = openai.Client(api_key=API_KEY)

# Create a Thread for the Conversation:
thread = client.beta.threads.create()

# Prompt as an API Request
prompt_message = client.beta.threads.messages.create(
    thread_id=thread.id,
    role="user",
    content="In detail can you tell me all the days that something occurs in queens college"
)

# Run Assistant
run = client.beta.threads.runs.create(
  thread_id=thread.id,
  assistant_id=ASSISTANT_ID  # Replace with your assistant's ID
)

# Initial wait time in seconds
wait_time = 2

while True:
    # Check Status of Assistant
    run_status = client.beta.threads.runs.retrieve(
      thread_id=thread.id,
      run_id=run.id
    )

    if run_status.status == 'completed':
        # Get Assistant Response
        response_messages = client.beta.threads.messages.list(
          thread_id=thread.id
        )

        # Display Response
        for message in response_messages:
            if message.role == "assistant":
                print(message.content)
        break  # Exit the loop after getting the response
    else:
        print("Waiting for assistant's response...")
        time.sleep(wait_time)  # Wait before checking again

# You might want to increase the wait_time or implement exponential backoff for efficiency
