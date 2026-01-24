#!/usr/bin/env python3
"""
===============================================================
Horizons Architecture (HA) - "Secret Sauce" Demonstration Code
===============================================================

Features Demonstrated:
1) Two Axes:
   - Time Classification (past, present, future)
   - Six Dimensions representing "simultaneous complexity."

2) Fractal Expansions:
   - Root "User" node with 6D -> subprojects (also 6D) -> further expansions.

3) DataPoints storing dimension + time + user info.
   - Each DataPoint is automatically placed in Past/Present/Future.

4) AI synergy:
   - Simple "analysis" function that provides dimension/time stats
   - Basic "recommendations" based on missing or limited dimension data

5) Feedback Loop
   - We can add new data or refine existing data after receiving AI insights.

6) Multi-user fractal network
   - Each user has a separate fractal root but can be linked in a network.

===============================================================
"""

import datetime
import uuid
from dataclasses import dataclass, field
from enum import Enum
from typing import List, Dict, Any, Optional

# -------------------------------------------------------
# 1. ENUMS: Dimensions + Time Axis
# -------------------------------------------------------
class HADimension(Enum):
    """
    The six Horizons Architecture dimensions:
    1) Legacy
    2) Community
    3) Learning
    4) Technology
    5) Context
    6) Projects
    """
    LEGACY = "Legacy"
    COMMUNITY = "Community"
    LEARNING = "Learning"
    TECHNOLOGY = "Technology"
    CONTEXT = "Context"
    PROJECTS = "Projects"


class TimeAxis(Enum):
    """
    Non-linear timeline classification: Past, Present, Future
    """
    PAST = "Past"
    PRESENT = "Present"
    FUTURE = "Future"


# -------------------------------------------------------
# 2. DATA STRUCTURES
# -------------------------------------------------------
@dataclass
class DataPoint:
    """
    Represents a piece of data or knowledge tied to:
      - A specific dimension (Legacy, Community, etc.)
      - A timestamp (which we classify as Past/Present/Future)
      - Some content (dict)
      - A user who contributed it
    """
    id: str = field(default_factory=lambda: str(uuid.uuid4()))
    dimension: HADimension = HADimension.LEGACY
    timestamp: datetime.datetime = field(default_factory=datetime.datetime.now)
    content: Dict[str, Any] = field(default_factory=dict)
    user_id: str = "anonymous"

    def classify_time(self) -> TimeAxis:
        """Classifies this data point as Past, Present, or Future based on timestamp."""
        now = datetime.datetime.now()
        delta = (self.timestamp - now).total_seconds()
        # Simple logic:
        #   If timestamp is close to now, call it PRESENT
        #   If timestamp is after now, FUTURE
        #   Else, PAST
        if abs(delta) < 15:
            return TimeAxis.PRESENT
        elif delta > 0:
            return TimeAxis.FUTURE
        else:
            return TimeAxis.PAST


@dataclass
class FractalProject:
    """
    Represents a subproject (or fractal node) with
    the same six HA dimensions, each dimension can hold
    multiple data points.

    This is the mini-HA that can be nested fractally.
    """
    project_id: str = field(default_factory=lambda: str(uuid.uuid4()))
    name: str = "UnnamedProject"

    # dimension_data: dimension -> list of DataPoints
    dimension_data: Dict[HADimension, List[DataPoint]] = field(
        default_factory=lambda: {dim: [] for dim in HADimension}
    )

    # subprojects: fractal expansions
    subprojects: Dict[str, "FractalProject"] = field(default_factory=dict)

    def add_data_point(self, dp: DataPoint):
        """Place a data point under the correct dimension."""
        self.dimension_data[dp.dimension].append(dp)

    def create_subproject(self, sp_id: str, sp_name: str) -> "FractalProject":
        """Spawn another fractal node inside this project."""
        sp = FractalProject(project_id=sp_id, name=sp_name)
        self.subprojects[sp_id] = sp
        return sp


@dataclass
class UserRoot:
    """
    Each user is the root of their own fractal network.
    They have 6 dimensions at the root, plus any number of subprojects.
    """
    user_id: str
    user_name: str
    # The user root itself is a FractalProject (the top-level “mini-HA”)
    root_project: FractalProject = field(default_factory=FractalProject)

    def add_data_point_root(self, dp: DataPoint):
        """Add data point to user’s root project (top-level)."""
        self.root_project.add_data_point(dp)

    def create_subproject(self, project_id: str, project_name: str) -> FractalProject:
        """
        Create a subproject directly under the user's root project.
        Returns the newly created subproject.
        """
        return self.root_project.create_subproject(project_id, project_name)


# -------------------------------------------------------
# 3. MULTI-USER FRACTAL NETWORK
# -------------------------------------------------------
@dataclass
class FractalNetwork:
    """
    A global structure connecting multiple UserRoot nodes
    into a single network (like a map of all user fractal expansions).
    """
    # We store user roots by user_id
    user_roots: Dict[str, UserRoot] = field(default_factory=dict)

    # Optionally store connections among users
    connections: Dict[str, List[str]] = field(default_factory=dict)

    def add_user_root(self, user: UserRoot):
        """Register a new user root in the network."""
        self.user_roots[user.user_id] = user
        if user.user_id not in self.connections:
            self.connections[user.user_id] = []

    def connect_users(self, user1: str, user2: str):
        """Connect two users for collaboration (conceptual)."""
        if user1 in self.user_roots and user2 in self.user_roots:
            self.connections[user1].append(user2)
            self.connections[user2].append(user1)

    def debug_print(self):
        print("\n--- FRACTAL NETWORK DEBUG ---")
        for uid, conns in self.connections.items():
            print(f"User {uid} connected to {conns}")
        print("--- End of network ---\n")


# -------------------------------------------------------
# 4. SIMPLE AI / ANALYSIS SYSTEM
# -------------------------------------------------------
class AISystem:
    """
    Minimal AI or analysis module for:
     - Summarizing dimension data by Past/Present/Future
     - Recommending dimension coverage (are some dimensions empty?)
    """

    def analyze_dimension(self, dpoints: List[DataPoint]) -> Dict[str, int]:
        """
        Return count of data points in Past, Present, Future.
        """
        result = {TimeAxis.PAST: 0, TimeAxis.PRESENT: 0, TimeAxis.FUTURE: 0}
        for dp in dpoints:
            axis = dp.classify_time()
            result[axis] += 1
        # Convert to simple dict with string keys
        return {
            "past": result[TimeAxis.PAST],
            "present": result[TimeAxis.PRESENT],
            "future": result[TimeAxis.FUTURE]
        }

    def analyze_project(self, project: FractalProject) -> Dict[str, Any]:
        """
        Summarize each dimension in the project,
        plus recursively analyze subprojects.
        """
        summary = {}
        # Summarize top-level dimensions
        for dim, dp_list in project.dimension_data.items():
            summary[dim.value] = self.analyze_dimension(dp_list)

        # Check subprojects recursively
        subp_results = {}
        for sp_id, sp_obj in project.subprojects.items():
            subp_results[sp_id] = self.analyze_project(sp_obj)

        return {
            "dimensions": summary,
            "subprojects": subp_results
        }

    def generate_recommendations(self, project: FractalProject) -> List[str]:
        """
        Example: If a dimension has no data points, recommend focusing on it.
        """
        recs = []
        for dim, dp_list in project.dimension_data.items():
            if len(dp_list) == 0:
                recs.append(f"Consider adding data to dimension: {dim.value}")
        return recs


# -------------------------------------------------------
# 5. FEEDBACK / HUMAN-MACHINE LOOP
# -------------------------------------------------------
class FeedbackLoop:
    """
    Takes AI insights and allows the user (human) to respond
    by adding or modifying data points, continuing the iterative cycle.
    """
    def incorporate_feedback(self, user: UserRoot, dimension: HADimension, text: str):
        """
        Example: user adds a new data point as 'feedback' or 'next step'.
        """
        dp = DataPoint(
            dimension=dimension,
            content={"feedback": text, "timestamp_str": str(datetime.datetime.now())},
            user_id=user.user_id
        )
        user.add_data_point_root(dp)


# -------------------------------------------------------
# 6. DEMO / EXAMPLE USAGE
# -------------------------------------------------------
def main_demo():
    print("\n=== HA SECRET SAUCE DEMO START ===")

    # 1) Create a fractal network
    network = FractalNetwork()

    # 2) Create two user roots
    user1 = UserRoot(user_id="U001", user_name="Alice")
    user2 = UserRoot(user_id="U002", user_name="Bob")

    network.add_user_root(user1)
    network.add_user_root(user2)
    network.connect_users("U001", "U002")

    # 3) Add some data to user1 root
    dp1 = DataPoint(
        dimension=HADimension.LEGACY,
        timestamp=datetime.datetime.now() + datetime.timedelta(days=30),
        content={"goal": "Achieve sustainability by next quarter"},
        user_id="U001"
    )
    user1.add_data_point_root(dp1)

    # 4) Create a subproject under user1
    sp = user1.create_subproject("ProjectA", "Ocean Cleanup")
    # Add a data point in user1's subproject (past technology)
    dp2 = DataPoint(
        dimension=HADimension.TECHNOLOGY,
        timestamp=datetime.datetime.now() - datetime.timedelta(days=10),
        content={"tech": "Prototype ocean cleaning device tested"},
        user_id="U001"
    )
    sp.add_data_point(dp2)

    # 5) Add data for user2
    dp3 = DataPoint(
        dimension=HADimension.COMMUNITY,
        content={"msg": "Local volunteers formed a beach cleanup crew"},
        user_id="U002"
    )
    user2.add_data_point_root(dp3)

    # 6) Analyze data with AI
    ai = AISystem()
    # Analyze user1's root
    user1_analysis = ai.analyze_project(user1.root_project)
    print("\nUser1 Root Analysis:", user1_analysis)

    # Recommendations for user1
    recs1 = ai.generate_recommendations(user1.root_project)
    print("Recommendations for user1 root:", recs1)

    # 7) Feedback loop: user1 sees the recommendations and adds new data
    feedback_system = FeedbackLoop()
    # Suppose user1 decides to add more context dimension data
    if HADimension.CONTEXT.name in [r.split(":")[-1].strip() for r in recs1]:
        feedback_system.incorporate_feedback(user1, HADimension.CONTEXT, "Adding context about local policy changes.")
    else:
        feedback_system.incorporate_feedback(user1, HADimension.LEARNING, "New study on microplastics removal.")

    # Re-run analysis on user1
    user1_analysis_after = ai.analyze_project(user1.root_project)
    print("\nUser1 Root Analysis (After Feedback):", user1_analysis_after)

    # Show fractal network debug
    network.debug_print()

    print("\n=== HA SECRET SAUCE DEMO END ===\n")


if __name__ == "__main__":
    main_demo()
			