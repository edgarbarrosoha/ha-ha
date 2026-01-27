Token_Github_Repository: YOUR_GITHUB_TOKEN_HERE

```python
print("Installing required packages...")

!pip install --upgrade openai nest-asyncio

  

import openai
import asyncio
import nest_asyncio
import aiohttp

from typing import List, Dict, Optional

from datetime import datetime

import json

import time

from dataclasses import dataclass

import logging

  

# Enable nested asyncio for Jupyter/Colab environment

nest_asyncio.apply()

  

# Configure logging

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger(__name__)

  

# OpenAI API Configuration

openai.api_key = "YOUR_OPENAI_API_KEY_HERE"

  

@dataclass

class Message:

sender: str

content: str

timestamp: datetime

recipient: Optional[str] = None

  

class ConversationManager:

def __init__(self):

self.conversations: Dict[str, List[Dict]] = {}

  

def add_message(self, conversation_id: str, role: str, content: str):

if conversation_id not in self.conversations:

self.conversations[conversation_id] = []

self.conversations[conversation_id].append({

"role": role,

"content": content,

"timestamp": datetime.now().isoformat()

})

  

def get_conversation(self, conversation_id: str, max_tokens: int = 4000) -> List[Dict]:

messages = self.conversations.get(conversation_id, [])

total_tokens = sum(len(m["content"]) for m in messages)

  

if total_tokens > max_tokens:

filtered_messages = [m for m in messages if m["role"] == "system"]

remaining_tokens = max_tokens - sum(len(m["content"]) for m in filtered_messages)

  

for message in reversed(messages):

if message["role"] != "system":

msg_tokens = len(message["content"])

if remaining_tokens - msg_tokens >= 0:

filtered_messages.append(message)

remaining_tokens -= msg_tokens

  

return filtered_messages

return messages

  

class BaseAgent:

def __init__(self, name: str, role: str, expertise: str):

self.name = name

self.role = role

self.expertise = expertise

self.conversation_manager = ConversationManager()

self.conversation_id = f"{name}-{datetime.now().isoformat()}"

  

def _get_system_prompt(self) -> str:

return f"""You are {self.name}, an AI agent specializing in {self.expertise}.

Your role is {self.role}.

Your goal is to help increase the life span of a 47-year-old man by 20% through your specific domain expertise.

Maintain professional, focused responses that draw upon your specialized knowledge.

Always consider the long-term health implications of your recommendations."""

  

async def generate_response(self, prompt: str, conversation_id: Optional[str] = None) -> str:

conversation_id = conversation_id or self.conversation_id

  

try:

if conversation_id not in self.conversation_manager.conversations:

self.conversation_manager.add_message(

conversation_id,

"system",

self._get_system_prompt()

)

  

self.conversation_manager.add_message(conversation_id, "user", prompt)

  

messages = self.conversation_manager.get_conversation(conversation_id)

message_list = [{"role": m["role"], "content": m["content"]} for m in messages]

  

client = openai.AsyncClient(api_key=openai.api_key)

response = await client.chat.completions.create(

model="gpt-4o",

messages=message_list,

temperature=0.7,

max_tokens=500

)

  

response_content = response.choices[0].message.content

  

self.conversation_manager.add_message(

conversation_id,

"assistant",

response_content

)

  

return response_content

  

except Exception as e:

logger.error(f"Error generating response for {self.name}: {str(e)}")

return f"Error: Unable to generate response for {self.name}"

  

class LegacyAgent(BaseAgent):

def __init__(self):

super().__init__(

name="Legacy_Agent",

role="Strategic Health Planning Specialist",

expertise="Long-term health optimization and longevity strategy planning"

)

  

async def analyze_legacy_goal(self, goal: str) -> str:

prompt = f"""

Analyze the following life extension goal: {goal}

  

Provide a detailed analysis covering:

1. Specific health metrics we need to track and improve

2. Realistic targets for each health domain (cardiovascular, metabolic, etc.)

3. Key milestones for tracking progress

4. Long-term sustainability considerations

  

Focus on evidence-based interventions that could contribute to a 20% increase in life span.

"""

return await self.generate_response(prompt)

  

class CommunityAgent(BaseAgent):

def __init__(self):

super().__init__(

name="Community_Agent",

role="Health Network Coordinator",

expertise="Healthcare professional network and support system development"

)

  

async def map_stakeholders(self, context: str) -> str:

prompt = f"""

Based on this context: {context}

  

Identify and analyze:

1. Essential healthcare providers needed

2. Support network requirements

3. Professional services and specialists

4. Community resources and programs

  

Explain how each stakeholder contributes to our life extension goal.

"""

return await self.generate_response(prompt)

  

class LearningAgent(BaseAgent):

def __init__(self):

super().__init__(

name="Learning_Agent",

role="Health Education Specialist",

expertise="Longevity research and health optimization education"

)

  

async def identify_knowledge_needs(self, context: str) -> str:

prompt = f"""

Based on this context: {context}

  

Outline:

1. Critical health and longevity knowledge needed

2. Recommended learning resources and programs

3. Priority areas for skill development

4. Latest research and developments to monitor

  

Focus on practical, actionable learning that supports our life extension goal.

"""

return await self.generate_response(prompt)

  

class TechnologyAgent(BaseAgent):

def __init__(self):

super().__init__(

name="Technology_Agent",

role="Health Technology Specialist",

expertise="Health monitoring and optimization technologies"

)

  

async def recommend_technologies(self, context: str) -> str:

prompt = f"""

Based on this context: {context}

  

Recommend:

1. Essential health monitoring devices and systems

2. Data analysis and tracking platforms

3. Integration strategies for health technologies

4. Emerging technologies to consider

  

Focus on technologies that provide actionable insights for life extension.

"""

return await self.generate_response(prompt)

  

class ContextAgent(BaseAgent):

def __init__(self):

super().__init__(

name="Context_Agent",

role="Health Context Analyst",

expertise="Environmental and lifestyle factor analysis"

)

  

async def analyze_context(self, context: str) -> str:

prompt = f"""

Based on this context: {context}

  

Analyze:

1. Current health status and baseline metrics

2. Environmental factors affecting longevity

3. Lifestyle patterns and their impact

4. Risk factors and mitigation strategies

  

Provide insights on optimizing the environment for life extension.

"""

return await self.generate_response(prompt)

  

class ProjectsAgent(BaseAgent):

def __init__(self):

super().__init__(

name="Projects_Agent",

role="Health Implementation Specialist",

expertise="Health intervention planning and execution"

)

  

async def create_project_plan(self, context: str) -> str:

prompt = f"""

Based on this context: {context}

  

Develop:

1. Structured implementation plan

2. Key health intervention projects

3. Timeline and milestones

4. Progress tracking methods

  

Create an actionable roadmap for achieving our life extension goal.

"""

return await self.generate_response(prompt)

  

class HAAgent(BaseAgent):

def __init__(self):

super().__init__(

name="HA_Agent",

role="Chief Health Orchestrator",

expertise="Multi-agent coordination and health optimization strategy"

)

self.legacy_agent = LegacyAgent()

self.community_agent = CommunityAgent()

self.learning_agent = LearningAgent()

self.technology_agent = TechnologyAgent()

self.context_agent = ContextAgent()

self.projects_agent = ProjectsAgent()

  

async def orchestrate_discussion(self, legacy_goal: str) -> Dict[str, str]:

"""Orchestrate a real discussion between agents"""

discussion = {}

  

logger.info("Getting Legacy Agent analysis...")

legacy_analysis = await self.legacy_agent.analyze_legacy_goal(legacy_goal)

discussion["legacy"] = legacy_analysis

  

logger.info("Getting Community Agent response...")

community_prompt = f"Based on Legacy analysis: {legacy_analysis}\nHow should we build our support network?"

discussion["community"] = await self.community_agent.map_stakeholders(community_prompt)

  

logger.info("Getting Learning Agent response...")

learning_prompt = f"Considering previous inputs: {json.dumps(discussion)}\nWhat knowledge and skills are needed?"

discussion["learning"] = await self.learning_agent.identify_knowledge_needs(learning_prompt)

  

logger.info("Getting Technology Agent response...")

tech_prompt = f"Based on discussion so far: {json.dumps(discussion)}\nWhat technologies should we employ?"

discussion["technology"] = await self.technology_agent.recommend_technologies(tech_prompt)

  

logger.info("Getting Context Agent response...")

context_prompt = f"Given the full context: {json.dumps(discussion)}\nWhat environmental factors should we consider?"

discussion["context"] = await self.context_agent.analyze_context(context_prompt)

  

logger.info("Getting Projects Agent response...")

projects_prompt = f"Based on all inputs: {json.dumps(discussion)}\nHow should we structure the implementation?"

discussion["projects"] = await self.projects_agent.create_project_plan(projects_prompt)

  

return discussion

  

async def generate_consensus(self, discussion: Dict[str, str]) -> str:

prompt = f"""

Based on the full agent discussion: {json.dumps(discussion)}

  

Create a comprehensive consensus plan that:

1. Synthesizes all agent perspectives

2. Provides clear, actionable steps

3. Addresses potential challenges

4. Sets measurable objectives

  

Focus on achieving our 20% life extension goal effectively and safely.

"""

return await self.generate_response(prompt)

  

def run_ha_system():

"""Run the HA system synchronously with user input"""

async def _run():

try:

ha_agent = HAAgent()

  

# Get Legacy Input from user

print("\n=== Welcome to the Horizons Architecture System ===")

print("\nHA_Agent: Hello! I am your primary interface for the Horizons Architecture system.")

print("HA_Agent: To begin, please tell me your primary Legacy goal.")

print("\nWhat is your primary Legacy goal? (Example: Increase life span by 20% through specific interventions)")

legacy_goal = input("Your Legacy Goal: ").strip()

  

while not legacy_goal:

print("\nHA_Agent: I need a Legacy goal to proceed. Please provide one:")

legacy_goal = input("Your Legacy Goal: ").strip()

  

print(f"\nHA_Agent: Thank you. I will now coordinate with all dimension agents to help achieve: '{legacy_goal}'")

  

print("\nInitiating agent discussion...")

discussion = await ha_agent.orchestrate_discussion(legacy_goal)

  

for agent, response in discussion.items():

print(f"\n=== {agent.upper()} AGENT RESPONSE ===")

print(response)

print("="* 50)

  

print("\n=== GENERATING FINAL CONSENSUS ===")

consensus = await ha_agent.generate_consensus(discussion)

print("\nFinal Consensus Plan:")

print(consensus)

  

return discussion, consensus

  

except Exception as e:

logger.error(f"Error in execution: {str(e)}")

raise

  

loop = asyncio.get_event_loop()

return loop.run_until_complete(_run())

  

# Automatically run the system after setup

print("\nStarting Horizons Architecture System...")

discussion, consensus = run_ha_system()
```


## Connections
- [[04-technology-ha-core]]
