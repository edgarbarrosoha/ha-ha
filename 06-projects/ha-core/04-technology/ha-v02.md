"""
==========================================
Horizons Architecture (HA) - Simplified
==========================================

Step-by-step code illustrating:
  - Two Axes (Time and Complexity)
  - Six Dimensions
  - Basic fractal logic for multi-user or multi-project expansions
  - Minimal "AI" stubs
  - Data tracking, time stamps, feedback loop

This code is purely demonstrative and not production-ready.
"""

import datetime
import uuid
from enum import Enum
from dataclasses import dataclass, field
from typing import Dict, Any, List, Optional


# -------------------------------------------------
# 1) HA ENUMS
# -------------------------------------------------

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
    Non-linear timeline with Past, Present, and Future.
    We can classify data or events by comparing timestamps
    to 'now'.
    """
    PAST = "Past"
    PRESENT = "Present"
    FUTURE = "Future"


# -------------------------------------------------
# 2) DATA MODEL - DataPoint
# -------------------------------------------------

@dataclass
class DataPoint:
    """
    Represents a piece of information or contribution
    in a particular HA dimension, stored with:
      - an ID
      - which dimension it belongs to
      - user ID or owner
      - a time stamp
      - the raw data or content
    """
    id: str = field(default_factory=lambda: str(uuid.uuid4()))
    dimension: HADimension = HADimension.LEGACY
    user_id: str = "anonymous"
    timestamp: datetime.datetime = field(default_factory=datetime.datetime.now)
    content: Dict[str, Any] = field(default_factory=dict)

    def classify_time_axis(self) -> TimeAxis:
        """
        Compare self.timestamp to 'now' to decide if it belongs
        to Past, Present, or Future.
        - This is a naive approach: we say 'past' if time < now,
          'future' if time > now, and 'present' if time is "close."
        """
        now = datetime.datetime.now()
        delta = (self.timestamp - now).total_seconds()

        # Tweak threshold for "present" as you wish:
        if abs(delta) < 10:   # within 10 seconds => present
            return TimeAxis.PRESENT
        elif delta > 0:
            return TimeAxis.FUTURE
        else:
            return TimeAxis.PAST


# -------------------------------------------------
# 3) FRACTAL STRUCTURE FOR USERS & PROJECTS
# -------------------------------------------------

@dataclass
class HAProject:
    """
    A subproject or "mini-HA" containing data points
    across the same six dimensions.
    """
    project_id: str = field(default_factory=lambda: str(uuid.uuid4()))
    name: str = "UntitledProject"
    # We store dimension-based data in a dict: dimension => list of data points
    dimension_data: Dict[HADimension, List[DataPoint]] = field(
        default_factory=lambda: {dim: [] for dim in HADimension}
    )

    def add_data_point(self, dp: DataPoint):
        """
        Insert a data point into the correct dimension list.
        """
        self.dimension_data[dp.dimension].append(dp)


@dataclass
class HAUserRoot:
    """
    Each user has a 'root' that contains:
      - a user ID
      - zero or more subprojects
      - dimension_data (the user's personal dimension data)
    This forms a fractal pattern:
      user root (6D) -> project A (6D) -> subproject B ...
    """
    user_id: str
    username: str
    # The user's personal dimension data:
    dimension_data: Dict[HADimension, List[DataPoint]] = field(
        default_factory=lambda: {dim: [] for dim in HADimension}
    )
    # The user’s projects
    projects: Dict[str, HAProject] = field(default_factory=dict)

    def add_data_point(self, dp: DataPoint, project_id: Optional[str] = None):
        """
        If project_id is None, store in user's own dimension data,
        else store in the relevant project.
        """
        if project_id is None:
            self.dimension_data[dp.dimension].append(dp)
        else:
            # If project doesn't exist, create it
            if project_id not in self.projects:
                self.projects[project_id] = HAProject(
                    project_id=project_id,
                    name=f"Project_{project_id}"
                )
            self.projects[project_id].add_data_point(dp)


# -------------------------------------------------
# 4) SIMPLE AI/ANALYSIS LOGIC
# -------------------------------------------------

class HAAISystem:
    """
    Minimal AI system. 
    We'll do trivial 'analysis' or 'clustering' on dimension data.
    In reality, you might use scikit-learn, etc.
    """

    def analyze_dimension(self, data_points: List[DataPoint]) -> str:
        """
        Example: return a naive 'analysis summary' of the data points.
        """
        if not data_points:
            return "No data points in this dimension."
        
        # naive grouping by time axis:
        past = 0
        present = 0
        future = 0
        for dp in data_points:
            t_axis = dp.classify_time_axis()
            if t_axis == TimeAxis.PAST:
                past += 1
            elif t_axis == TimeAxis.PRESENT:
                present += 1
            else:
                future += 1

        return f"Dimension has {len(data_points)} items: Past={past}, Present={present}, Future={future}"

    def general_insights(self, user_root: HAUserRoot) -> Dict[str, Any]:
        """
        Summarize each dimension for the user's own data plus each project.
        """
        results = {}
        
        # Summarize user root data
        root_summary = {}
        for dim, dp_list in user_root.dimension_data.items():
            root_summary[dim.value] = self.analyze_dimension(dp_list)
        results["UserRoot"] = root_summary

        # Summarize each project
        project_summaries = {}
        for pid, project in user_root.projects.items():
            p_summary = {}
            for dim, dp_list in project.dimension_data.items():
                p_summary[dim.value] = self.analyze_dimension(dp_list)
            project_summaries[pid] = p_summary

        results["Projects"] = project_summaries
        return results


# -------------------------------------------------
# 5) FEEDBACK LOOP / ITERATION
# -------------------------------------------------

class FeedbackSystem:
    """
    Allows for user feedback to be integrated back into the system,
    i.e. new DataPoints or updated DataPoints.
    """

    def provide_feedback(self, user_root: HAUserRoot, feedback_dp: DataPoint, project_id: Optional[str] = None):
        """
        Store a new data point representing feedback. 
        Or you might want to refine an existing data point, etc.
        """
        user_root.add_data_point(feedback_dp, project_id=project_id)


# -------------------------------------------------
# 6) EXAMPLE DEMO
# -------------------------------------------------

def example_demo():
    """
    Step by step usage to show the logic:
     1) Create a user root
     2) Add data points to a dimension
     3) Create a subproject, add data
     4) Run AI analysis
     5) Provide feedback
     6) Re-run analysis
    """

    # Create a user root for "Alice"
    alice = HAUserRoot(user_id="U001", username="Alice")

    # Step 1: Alice adds a data point about future Legacy
    dp1 = DataPoint(
        dimension=HADimension.LEGACY,
        user_id="U001",
        timestamp=datetime.datetime.now() + datetime.timedelta(days=10),  # future
        content={"goal": "Achieve sustainability in the next decade."}
    )
    alice.add_data_point(dp1)  # no project_id => goes to root

    # Step 2: Alice creates a project "P100" about "Reducing Plastic Waste"
    project_id = "P100"

    # She adds a data point about present community involvement
    dp2 = DataPoint(
        dimension=HADimension.COMMUNITY,
        user_id="U001",
        content={"msg": "NGOs are gathering volunteer cleanup crews."}
    )
    alice.add_data_point(dp2, project_id=project_id)

    # She also adds a data point about a past technology test
    dp3 = DataPoint(
        dimension=HADimension.TECHNOLOGY,
        user_id="U001",
        timestamp=datetime.datetime.now() - datetime.timedelta(days=30),  # past
        content={"tech": "Deployed a prototype ocean-cleaning device."}
    )
    alice.add_data_point(dp3, project_id=project_id)

    # Step 3: We do a simple AI/analysis
    ai_system = HAAISystem()
    root_and_proj_insights = ai_system.general_insights(alice)
    print("=== Initial Analysis ===")
    print(root_and_proj_insights)

    # Step 4: Provide feedback
    feedback_system = FeedbackSystem()
    # Suppose we want to add a new 'Learning' dimension point in the same project
    feedback_dp = DataPoint(
        dimension=HADimension.LEARNING,
        user_id="U001",
        content={"study": "We discovered new methods to classify microplastics."}
    )
    feedback_system.provide_feedback(alice, feedback_dp, project_id=project_id)

    # Step 5: Re-run analysis
    updated_insights = ai_system.general_insights(alice)
    print("=== Analysis After Feedback ===")
    print(updated_insights)


if __name__ == "__main__":
    example_demo()


# 2. Code Explanation (Step by Step)

Below is a quick breakdown of each section:

1. **Imports and Setup**
    
    - We use `dataclasses` for simple containers (`DataPoint`, `HAUserRoot`, etc.).
    - `enum` for enumerations (`HADimension`, `TimeAxis`).
    - `datetime` for time-stamped logic.
2. **HADimension & TimeAxis**
    
    - `HADimension` enumerates the **six** HA dimensions: `LEGACY`, `COMMUNITY`, `LEARNING`, `TECHNOLOGY`, `CONTEXT`, and `PROJECTS`.
    - `TimeAxis` has three states: `PAST`, `PRESENT`, `FUTURE`.
3. **DataPoint**
    
    - Each `DataPoint` belongs to exactly one dimension (`dimension=HADimension.LEGACY`, etc.).
    - Has a `timestamp`, a `user_id`, plus the actual data in a `content` dict.
    - Includes `classify_time_axis` to see if it’s Past, Present, or Future (a naive approach comparing `timestamp` to `datetime.now()`).
4. **HAProject and HAUserRoot**
    
    - A user can keep data in their **root** (six dimensions) or in multiple subprojects (each with six dimensions).
    - This is how we mimic the fractal pattern: each subproject itself looks like a mini-HA.
    - `add_data_point` ensures the data point goes to the correct place.
5. **HAAISystem** (Minimal AI Example)
    
    - `analyze_dimension` loops over data points, counting how many are in Past, Present, Future.
    - `general_insights` loops over the user root’s dimensions and each project’s dimensions, returning a dictionary summarizing them.
    - In a real system, you might do advanced clustering, forecasting, or pattern analysis here.
6. **FeedbackSystem**
    
    - This simply demonstrates adding new data or updated data points as “feedback.”
    - In a real system, you might track a conversation or iterative improvement.
7. **`example_demo`** function
    
    - Creates a user (“Alice”).
    - Adds data points in the user’s root and in a subproject.
    - Calls the AI analysis.
    - Adds feedback data.
    - Re-runs analysis.
    - Prints to console to show the results.

**That’s it!** This minimal code captures the core **algorithmic logic** behind the Horizons Architecture approach:

- **Two axes** (Time, with the classification method, and Complexity, via the six Dimensions).
- **Fractal expansions** (User root with subprojects).
- **Time-stamped data** (DataPoint).
- **Iterative feedback**.
- **(Optional) AI** stubs for clustering, analysis, etc.

Use or adapt this approach to match your own complex endeavors, organizational contexts, or advanced AI pipelines.

o1-pro
## Connections
- [[04-technology-ha-core]]
