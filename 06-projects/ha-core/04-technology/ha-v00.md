`"""
Horizons Architecture (HA) - Comprehensive Integrated Example
============================================================

This code is a conceptual and integrative illustration of how one might implement
the Horizons Architecture (HA) described in the text. It focuses on:

1. The System Thinking Framework (HA-TSF):
   - Two Axes: (a) Time (non-linear timeline: past, present, future),
               (b) Simultaneous Complexity.
   - Six Dimensions: Legacy, Community, Learning, Technology, Context, Projects.
   - Encourages multi-domain perspective, fractal expansions, and an approach
     enabling mission-driven, people/context-driven, productive knowledge & data,
     and action-based efforts.

2. The HA AI & Data System:
   - Multi-layer cloud architecture (User Services, Ingestion, HA Components, Data, 
     Contribution & Decision Support, AI Builder, plus Event Bus and Orchestrator).
   - Data ingestion, event handling, cryptographic store, time-series DB, embeddings DB,
     network DB, scaling, advanced AI (prediction, classification, recommendation, etc.),
     integration with external data sources.

3. The Multi-user Fractal Network:
   - Users, fractal expansions, subprojects, shared or independent dimension connections,
     time-stamped contributions, synergy with the AI & Data system, and synergy with
     the System Thinking Framework.
   - The fractal nature allows for individuals, groups, or entire organizations to connect
     fractally, sharing (or not) certain dimension data or projects.

The code references real or pseudo components: 
 - Chat-like interactions with the system
 - Collaboration patterns
 - Fractal expansions
 - Proof of contribution
 - Connection to external databases
 - APIfication
 - Basic placeholders for advanced AI
 - Many more ideas from the text

Disclaimer:
-----------
This code is primarily conceptual and not tested. Many methods
are stubs or pseudo-coded. You would refine, secure, and deploy them
in a real system, possibly using frameworks like FastAPI, Docker,
Kubernetes, Spark, PyTorch, etc.

------------------------------------------------------------
"""

import uuid
import time
import datetime
from typing import List, Dict, Any, Union, Optional, Set
from enum import Enum
from dataclasses import dataclass, field
import logging
import random

# Optional scientific libraries (comment out if not needed)
import numpy as np


# ------------------------------------------------------
#  GLOBAL LOGGING SETUP
# ------------------------------------------------------
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("HA")


# ------------------------------------------------------
#  2. CORE HA DEFINITIONS
# ------------------------------------------------------
class HADimension(Enum):
    """
    The six fundamental dimensions in Horizons Architecture:
    1. Legacy
    2. Community
    3. Learning
    4. Technology
    5. Context
    6. Projects
    """
    LEGACY = "Legacy"
    COMMUNITY = "Community"
    LEARNING = "Learning"
    TECHNOLOGY = "Technology"
    CONTEXT = "Context"
    PROJECTS = "Projects"


class TimeAxis(Enum):
    """
    Non-linear timeline for HA:
    PAST, PRESENT, FUTURE
    """
    PAST = "Past"
    PRESENT = "Present"
    FUTURE = "Future"


@dataclass
class DataPoint:
    """
    Core data unit in HA, representing a piece of information 
    associated with a dimension, with time-stamps, user, project, etc.
    """
    id: str = field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str = ""
    dimension: HADimension = HADimension.LEGACY
    timestamp: datetime.datetime = field(default_factory=datetime.datetime.now)
    data: Dict[str, Any] = field(default_factory=dict)
    # Whether it belongs to a subproject or the user root
    project_id: Optional[str] = None

    def __post_init__(self):
        if not isinstance(self.timestamp, datetime.datetime):
            raise ValueError("timestamp must be datetime object")


class HAFractalNodeType(Enum):
    """
    Node types in the fractal network:
    - USER_ROOT: user root node (UserX "root" HA)
    - PROJECT: subprojects under a user or a group
    - ORG: optionally an organization root
    - DIMENSION: dimension-level node
    - CONTRIBUTION: a record of data points or events
    """
    USER_ROOT = "UserRoot"
    PROJECT = "Project"
    ORG = "Organization"
    DIMENSION = "Dimension"
    CONTRIBUTION = "Contribution"


@dataclass
class FractalNode:
    """
    A node in the fractal network graph that represents:
    - a user root
    - a dimension node
    - a project node
    - a contribution reference
    - an organization node
    or other node types
    """
    id: str
    node_type: HAFractalNodeType
    name: str
    metadata: Dict[str, Any] = field(default_factory=dict)
    connected_to: Set[str] = field(default_factory=set)


# ------------------------------------------------------
#  3. USER / ORGANIZATION CLASSES (Multi-user fractal)
# ------------------------------------------------------
@dataclass
class HAUser:
    """
    Represents an individual or institutional user, 
    the 'author of contribution' in HA.
    They have a personal fractal root with six dimensions,
    can create subprojects, etc.
    """
    user_id: str
    name: str
    fractal_root_id: str  # references a node in the fractal network
    created_at: datetime.datetime = field(default_factory=datetime.datetime.now)
    projects_owned: Set[str] = field(default_factory=set)
    # Potentially, keep track of dimension-level data points
    data_points: List[DataPoint] = field(default_factory=list)

    def add_data_point(self, data_point: DataPoint):
        """
        Add a data point to the user’s account.
        The data point might be for the user's root or for a subproject dimension.
        """
        self.data_points.append(data_point)


@dataclass
class HAOrganization:
    """
    Represents an organization node that can also hold sub-nodes (like user roots).
    Some usage examples:
      - A company or NGO that has multiple HA users
      - A department or group
    """
    org_id: str
    name: str
    fractal_node_id: str
    created_at: datetime.datetime = field(default_factory=datetime.datetime.now)
    members: Set[str] = field(default_factory=set)  # references user_ids


# ------------------------------------------------------
#  4. NETWORK ANALYZER & FRACTAL GRAPH
# ------------------------------------------------------
class FractalNetwork:
    """
    Multi-user fractal network: a graph with nodes for:
     - user roots
     - dimension nodes
     - subprojects
     - org nodes
     - contributions
    and edges describing relationships:
     - user <-> dimension
     - dimension <-> subproject
     - user <-> user
     - user <-> org
     - subproject <-> dimension
    ...
    """

    def __init__(self):
        self.nodes: Dict[str, FractalNode] = {}  # node_id -> FractalNode
        self.adjacency: Dict[str, Set[str]] = {}  # adjacency list

    def add_node(self, node: FractalNode):
        self.nodes[node.id] = node
        if node.id not in self.adjacency:
            self.adjacency[node.id] = set()

    def connect_nodes(self, node_id_a: str, node_id_b: str):
        if node_id_a in self.nodes and node_id_b in self.nodes:
            self.adjacency[node_id_a].add(node_id_b)
            self.adjacency[node_id_b].add(node_id_a)
            # Also store in node metadata
            self.nodes[node_id_a].connected_to.add(node_id_b)
            self.nodes[node_id_b].connected_to.add(node_id_a)

    def get_neighbors(self, node_id: str) -> List[str]:
        if node_id not in self.adjacency:
            return []
        return list(self.adjacency[node_id])

    def debug_print(self):
        logger.info("---- FRACTAL NETWORK DEBUG ----")
        for node_id, node in self.nodes.items():
            logger.info(f"{node_id} [{node.node_type}] {node.name} -> {list(self.adjacency[node_id])}")


# ------------------------------------------------------
#  5. THE SYSTEM THINKING FRAMEWORK (HA-TSF) + AXES
# ------------------------------------------------------
@dataclass
class HASystemThinkingFramework:
    """
    Represents the system thinking (conceptual) side.
    Tracks data points across dimensions and organizes them
    according to time axes (past, present, future).
    This is the analog / cognitive foundation. 
    """

    user_id: str
    # Storage for dimension data
    dimension_data: Dict[HADimension, List[DataPoint]] = field(
        default_factory=lambda: {dim: [] for dim in HADimension}
    )

    def add_data_point(self, dp: DataPoint):
        self.dimension_data[dp.dimension].append(dp)

    def organize_by_time(self) -> Dict[str, List[DataPoint]]:
        """
        Organize the data across time axis: 
        past, present, future based on dp.timestamp vs now.
        """
        now = datetime.datetime.now()
        result = {
            "past": [],
            "present": [],
            "future": []
        }
        for dim, data_points in self.dimension_data.items():
            for dp in data_points:
                if dp.timestamp < now:
                    result["past"].append(dp)
                elif abs((dp.timestamp - now).total_seconds()) < 10:
                    # if dp.timestamp is 'close' to now, call it present
                    result["present"].append(dp)
                else:
                    result["future"].append(dp)
        return result


# ------------------------------------------------------
#  6. THE AI & DATA SYSTEM: MULTI-LAYER DEMO
# ------------------------------------------------------

# 6.1 Ingestion
class IngestionLayer:
    """
    Handles ingestion of raw multi-structured data from external sources.
    E.g., text, audio, images, sensors, or others.

    - Data processing (cleaning, normalizing)
    - Named Entity Recognition (NER) placeholder
    - Embedding transformation placeholder
    """

    def ingest_data(self, raw_data: List[str]) -> List[str]:
        # Minimal placeholder
        cleaned_data = [d.strip().lower() for d in raw_data if d.strip()]
        return cleaned_data

    def named_entity_recognition(self, text_batch: List[str]) -> List[Dict[str, Any]]:
        # Minimal placeholder
        results = []
        for txt in text_batch:
            # pretend we detect random "entities"
            results.append({"text": txt, "entities": [{"name": "EntityX", "type": "ORG"}]})
        return results

    def embed_transform(self, text_batch: List[str]) -> List[np.ndarray]:
        # Minimal placeholder for embedding
        embeddings = []
        for txt in text_batch:
            # random embedding
            embeddings.append(np.random.rand(300))
        return embeddings


# 6.2 Data Layer: storing info in specialized DBs
class DataLayer:
    """
    Simulates multiple specialized data stores:
      - network_db (FractalNetwork usage)
      - cryptographic_store
      - timeseries_db
      - embeddings_db
      - data_lake
    """

    def __init__(self, fractal_network: FractalNetwork):
        self.fractal_network = fractal_network

        self.cryptographic_store: Dict[str, Any] = {}
        self.timeseries_db: Dict[str, List[DataPoint]] = {}
        self.embeddings_db: Dict[str, np.ndarray] = {}
        self.data_lake: Dict[str, Any] = {}

    def store_cryptographic_event(self, event_id: str, payload: Dict[str, Any]):
        # placeholder
        self.cryptographic_store[event_id] = payload

    def store_time_series(self, dimension: HADimension, dp: DataPoint):
        if dimension.value not in self.timeseries_db:
            self.timeseries_db[dimension.value] = []
        self.timeseries_db[dimension.value].append(dp)

    def store_embedding(self, text_id: str, vector: np.ndarray):
        self.embeddings_db[text_id] = vector

    def store_to_data_lake(self, data_id: str, content: Any):
        self.data_lake[data_id] = content


# 6.3 HA Components Layer (Mind)
class HAMind:
    """
    The "cognitive core" that processes dimension-level data,
    oversees sensemaking, problem-solving, learning, etc.
    It interacts with the DataLayer, the IngestionLayer, 
    and the AIBuilder to produce synergy and insights.
    """

    def __init__(self, data_layer: DataLayer):
        self.data_layer = data_layer
        # placeholders
        self.user_strategies: Dict[str, str] = {}

    def sense_make(self, user_data: List[DataPoint]) -> Dict[str, Any]:
        """
        Example: Summarize dimension data from user
        """
        summary = {}
        for dp in user_data:
            dim_name = dp.dimension.value
            summary.setdefault(dim_name, 0)
            summary[dim_name] += 1
        return summary

    def problem_solve(self, issues: List[str]) -> Dict[str, str]:
        # Stub: trivial approach
        solutions = {}
        for issue in issues:
            solutions[issue] = f"Potential solution for {issue}"
        return solutions

    def learn_and_adapt(self, feedback: Dict[str, Any]):
        """
        Example: store feedback in data layer, or refine user strategy, etc.
        """
        logger.info("HA Mind - Learning from feedback: %s", feedback)


# 6.4 Contribution & Decision Support
class ContributionDecisionSupport:
    """
    Manages user contributions, provides decision support, 
    fosters feedback loops, etc.
    """

    def __init__(self, data_layer: DataLayer, ha_mind: HAMind):
        self.data_layer = data_layer
        self.ha_mind = ha_mind
        # storing user contributions
        self.contributions: Dict[str, Dict[str, Any]] = {}

    def record_contribution(self, user_id: str, dp: DataPoint):
        """
        Stores a data point as a user contribution. We might do more (cryptographic).
        """
        self.contributions[dp.id] = {
            "user_id": user_id,
            "dimension": dp.dimension.value,
            "timestamp": dp.timestamp.isoformat(),
            "data": dp.data
        }
        # Possibly store cryptographic event
        event_payload = {
            "dp_id": dp.id,
            "user_id": user_id,
            "ts": time.time()
        }
        self.data_layer.store_cryptographic_event(dp.id, event_payload)

    def provide_decision_support(self, user_data: List[DataPoint]) -> Dict[str, Any]:
        """
        Example: simple synergy with ha_mind
        """
        summary = self.ha_mind.sense_make(user_data)
        # Maybe do advanced analytics
        decisions = {
            "recommendation": "Keep investigating synergy across dimensions",
            "dimension_summary": summary
        }
        return decisions


# 6.5 AI Builder
class AIBuilderLayer:
    """
    Houses advanced AI modules for classification, recommendation, 
    similarity search, generative multimodal, etc.
    """

    def __init__(self, data_layer: DataLayer):
        self.data_layer = data_layer

    def classification_example(self, text_batch: List[str]) -> List[str]:
        """
        Stub classification: label texts randomly for demonstration
        """
        categories = ["Positive", "Negative", "Neutral"]
        results = []
        for txt in text_batch:
            results.append(random.choice(categories))
        return results

    def recommendation_example(self, user_id: str) -> Dict[str, Any]:
        """
        Stub. Possibly look at user's dimension data, 
        produce recommended next steps in the complex endeavor.
        """
        return {
            "recommendations": [
                "Check dimension: Technology updates",
                "Join a subproject on 'AI for plastic waste'",
            ]
        }

    def generative_multimodal(self, inputs: Dict[str, Any]) -> Dict[str, Any]:
        """
        Stub for generating new data from multiple modalities.
        """
        return {
            "generated_content": "Synthetic plan or scenario or text based on the inputs"
        }


# 6.6 Orchestrator (Data Proxy) + Event Bus (Messaging)
class EventBus:
    """
    Manages message flows between layers, e.g. user events, AI triggers, etc.
    Example only. 
    """
    def __init__(self):
        self.subscribers: Dict[str, List] = {}

    def subscribe(self, event_type: str, callback):
        self.subscribers.setdefault(event_type, []).append(callback)

    def publish(self, event_type: str, payload: Dict[str, Any]):
        if event_type in self.subscribers:
            for cb in self.subscribers[event_type]:
                cb(payload)


class Orchestrator:
    """
    Central orchestrator that coordinates tasks, bridging the 
    ingestion layer, data layer, AI builder, user services, etc.
    Also demonstrates where user actions might happen.
    """

    def __init__(
        self,
        ingestion_layer: IngestionLayer,
        data_layer: DataLayer,
        ai_builder: AIBuilderLayer,
        ha_mind: HAMind,
        cd_support: ContributionDecisionSupport,
        event_bus: EventBus
    ):
        self.ingestion = ingestion_layer
        self.data_layer = data_layer
        self.ai_builder = ai_builder
        self.ha_mind = ha_mind
        self.cd_support = cd_support
        self.event_bus = event_bus

    def process_raw_data(self, raw_data: List[str]):
        """
        Example pipeline: ingest, NER, embed, store to data lake
        """
        cleaned = self.ingestion.ingest_data(raw_data)
        ner_results = self.ingestion.named_entity_recognition(cleaned)
        embeddings = self.ingestion.embed_transform(cleaned)

        for idx, text in enumerate(cleaned):
            text_id = f"text_{uuid.uuid4()}"
            # store embedding
            self.data_layer.store_embedding(text_id, embeddings[idx])
            # store to data_lake
            self.data_layer.store_to_data_lake(text_id, {
                "original_text": text,
                "ner": ner_results[idx]
            })

    def user_add_data_point(
        self,
        user: HAUser,
        dimension: HADimension,
        content: Dict[str, Any],
        project_id: Optional[str] = None
    ) -> DataPoint:
        """
        A user adds data. We'll create a DataPoint, store it in 
        the data layer timeseries DB, record contribution, etc.
        """
        dp = DataPoint(
            user_id=user.user_id,
            dimension=dimension,
            data=content,
            project_id=project_id
        )
        # store timeseries
        self.data_layer.store_time_series(dimension, dp)
        # record contribution
        self.cd_support.record_contribution(user.user_id, dp)
        # user retains reference
        user.add_data_point(dp)
        # Publish event
        self.event_bus.publish("DATA_POINT_ADDED", {"dp_id": dp.id})
        return dp

    def run_decision_support_for_user(self, user: HAUser) -> Dict[str, Any]:
        """
        Example: gather user data, pass to cd_support
        """
        # gather all user data points
        user_data = user.data_points
        return self.cd_support.provide_decision_support(user_data)


# ------------------------------------------------------
#  7. END-TO-END EXAMPLE USAGE
# ------------------------------------------------------

def example_usage_scenario():
    """
    Illustrates how these components might be wired together to
    do "what the text says" in a conceptual way:

    - Build a fractal network
    - Add users (each user = root fractal node + 6 dimension nodes)
    - Ingest some raw data
    - User adds data point
    - Decision support
    - We observe synergy
    """

    # 1) Create fractal network
    fractal_network = FractalNetwork()

    # 2) Create data layer
    data_layer = DataLayer(fractal_network)

    # 3) Create ingestion layer
    ingestion = IngestionLayer()

    # 4) Build AI Builder
    ai_builder = AIBuilderLayer(data_layer)

    # 5) HA Mind
    ha_mind = HAMind(data_layer)

    # 6) Contribution & Decision Support
    cd_support = ContributionDecisionSupport(data_layer, ha_mind)

    # 7) EventBus
    event_bus = EventBus()

    # 8) Orchestrator
    orchestrator = Orchestrator(
        ingestion_layer=ingestion,
        data_layer=data_layer,
        ai_builder=ai_builder,
        ha_mind=ha_mind,
        cd_support=cd_support,
        event_bus=event_bus
    )

    # ---- Now we show how we might build a user fractal node
    # Create user root node
    user_01_id = "user_01"
    user_01_root_node_id = str(uuid.uuid4())
    user_root_node = FractalNode(
        id=user_01_root_node_id,
        node_type=HAFractalNodeType.USER_ROOT,
        name=f"Root for {user_01_id}"
    )
    fractal_network.add_node(user_root_node)

    # For each dimension, create dimension nodes and connect them
    for dim in HADimension:
        dim_node_id = f"{user_01_id}_{dim.value}"
        node = FractalNode(
            id=dim_node_id,
            node_type=HAFractalNodeType.DIMENSION,
            name=f"{dim.value} dimension for {user_01_id}"
        )
        fractal_network.add_node(node)
        fractal_network.connect_nodes(user_01_root_node_id, dim_node_id)

    # Create a HAUser instance
    user01 = HAUser(
        user_id=user_01_id,
        name="Alice Example",
        fractal_root_id=user_01_root_node_id
    )

    # 9) Ingest some raw data
    raw_data = [
        "Plastic pollution is affecting marine life.",
        "Sustainability is crucial for future generations."
    ]
    orchestrator.process_raw_data(raw_data)

    # 10) The user posts a data point in the 'Context' dimension
    dp_context = orchestrator.user_add_data_point(
        user01,
        HADimension.CONTEXT,
        {"text": "Observing massive ocean plastic pollution hotspots."},
        project_id=None  # Possibly a subproject
    )

    # 11) Run decision support
    result = orchestrator.run_decision_support_for_user(user01)
    logger.info("Decision support result: %s", result)

    # 12) Print fractal network debug
    fractal_network.debug_print()

    return result


# ------------------------------------------------------
#  8. MAIN CHECK
# ------------------------------------------------------
if __name__ == "__main__":
    final_result = example_usage_scenario()
    logger.info("Final result from usage scenario: %s", final_result)
`
## Connections
- [[04-technology-ha-core]]
