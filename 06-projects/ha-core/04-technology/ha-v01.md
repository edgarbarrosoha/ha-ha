`"""
Horizons Architecture (HA) - Implementación robusta y pedagógica
================================================================

Este módulo implementa el framework de Arquitectura de Horizontes (HA) para la 
transformación de esfuerzos complejos a través de la interacción humano-máquina.

Sigue los principios de HA:
- Dos ejes principales: Tiempo y Complejidad Simultánea
- Seis dimensiones: Legacy, Community, Learning, Technology, Context, Projects
- Tres componentes principales: Framework de Pensamiento Sistémico, Sistema de IA y Datos, y Red Fractal Multi-usuario

Autor: [Edgar Barroso]
Versión: 2.0
"""

import datetime
from typing import List, Dict, Any, Union, Optional
import numpy as np
from sklearn.cluster import KMeans
from sklearn.linear_model import LinearRegression

class HorizonsArchitecture:
    """
    Clase principal que implementa el sistema de Arquitectura de Horizontes (HA).
    
    Integra las dimensiones y las capacidades de análisis y predicción 
    para coordinar esfuerzos complejos a través de la interacción humano-máquina.
    """
    
    def __init__(self) -> None:
        """
        Constructor de HorizonsArchitecture.
        
        Inicializa la estructura interna para almacenar datos
        en las seis dimensiones definidas por HA.
        """
        self.dimensions = [
            "Legacy",
            "Community",
            "Learning",
            "Technology",
            "Context",
            "Projects"
        ]
        self.data_store: Dict[str, List[Dict[str, Any]]] = {
            dim: [] for dim in self.dimensions
        }

    def add_data(self, dimension: str, data: Dict[str, Any]) -> None:
        """
        Registra datos para una dimensión específica de HA.

        Args:
            dimension: Nombre de la dimensión (Legacy, Community, etc.)
            data: Diccionario con información relevante a esa dimensión.
        
        Raises:
            ValueError: Si la dimensión no es válida en el sistema HA.
        """
        if dimension not in self.dimensions:
            raise ValueError(f"Dimension {dimension} is not valid.")
        self.data_store[dimension].append(data)

    def organize_data_by_axes(self) -> Dict[str, Any]:
        """
        Organiza los datos según los dos ejes de HA: 
        - Eje de Complejidad Simultánea
        - Eje de Tiempo (pasado, presente y futuro)

        Returns:
            Un diccionario con la estructura de datos organizada.
        """
        now = datetime.datetime.now()

        organized_data = {
            "simultaneous_complexity": self.data_store,
            "time": {
                "past": [
                    item 
                    for dim in self.dimensions
                    for item in self.data_store[dim] 
                    if item.get("timestamp") and item["timestamp"] < now
                ],
                "present": [
                    item 
                    for dim in self.dimensions
                    for item in self.data_store[dim] 
                    if item.get("timestamp") and item["timestamp"] == now
                ],
                "future": [
                    item 
                    for dim in self.dimensions
                    for item in self.data_store[dim] 
                    if item.get("timestamp") and item["timestamp"] > now
                ],
            }
        }
        return organized_data

    def analyze_data(self, dimension: str) -> Union[str, np.ndarray]:
        """
        Realiza un análisis de datos en una dimensión específica.
        
        En este ejemplo, se utiliza K-Means para el clustering.

        Args:
            dimension: Nombre de la dimensión a analizar.
        
        Returns:
            - np.ndarray con las etiquetas de cluster asignadas a cada punto de datos,
              o 
            - str con un mensaje si no hay datos para analizar.
        
        Raises:
            ValueError: Si la dimensión no es válida.
        """
        if dimension not in self.dimensions:
            raise ValueError(f"Dimension {dimension} is not valid.")
        
        data_points = self.data_store[dimension]
        if not data_points:
            return "No data to analyze."

        # Extraer valores para clustering
        values = [
            list(d["values"]) 
            for d in data_points 
            if "values" in d and d["values"]
        ]
        if not values:
            return "No valid 'values' found for clustering."

        # Convertir a array NumPy
        values_array = np.array(values)

        # Aplicar K-Means
        kmeans = KMeans(n_clusters=3, random_state=42)
        clusters = kmeans.fit_predict(values_array)

        return clusters

    def predict_outcome(self, dimension: str, target_variable: str) -> Union[str, float]:
        """
        Realiza una predicción de un valor futuro para una variable objetivo 
        en una dimensión específica usando regresión lineal.

        Args:
            dimension: Nombre de la dimensión a analizar.
            target_variable: Variable dentro de los datos a predecir.
        
        Returns:
            - float con la predicción futura para la variable objetivo,
              o 
            - str con un mensaje si los datos son insuficientes.
        
        Raises:
            ValueError: Si la dimensión no es válida.
        """
        if dimension not in self.dimensions:
            raise ValueError(f"Dimension {dimension} is not valid.")

        # Filtrar puntos de datos que incluyan la variable objetivo
        data_points = [
            d for d in self.data_store[dimension] 
            if target_variable in d
        ]
        if len(data_points) < 2:
            return "Insufficient data for prediction."

        # Preparar datos para la regresión lineal
        X = np.array([
            d["timestamp"].timestamp() for d in data_points
        ]).reshape(-1, 1)
        y = np.array([d[target_variable] for d in data_points])

        # Entrenar el modelo
        model = LinearRegression()
        model.fit(X, y)

        # Predecir para 30 días en el futuro
        future_time = np.array([
            (datetime.datetime.now() + datetime.timedelta(days=30)).timestamp()
        ]).reshape(-1, 1)

        prediction = model.predict(future_time)
        return float(prediction[0])

    def feedback_loop(self, feedback: Dict[str, Any]) -> None:
        """
        Integra retroalimentación en el sistema, añadiendo nuevos datos 
        a las dimensiones respectivas.

        Args:
            feedback: Un diccionario donde las claves son dimensiones 
                      y los valores son datos para integrar.
        """
        for dimension, new_data in feedback.items():
            if dimension in self.dimensions:
                self.add_data(dimension, new_data)

    def export_insights(self) -> Dict[str, Dict[str, Union[str, np.ndarray]]]:
        """
        Retorna un resumen de análisis para cada dimensión.

        Returns:
            Un diccionario donde cada clave es el nombre de la dimensión y cada valor 
            es otro diccionario con el resumen del análisis (por ejemplo, 
            resultados de clustering).
        """
        insights: Dict[str, Dict[str, Union[str, np.ndarray]]] = {}
        for dim in self.dimensions:
            analysis_result = self.analyze_data(dim)
            insights[dim] = {"summary": analysis_result}
        return insights


# Ejemplo de uso
if __name__ == "__main__":
    ha_system = HorizonsArchitecture()
    
    # Agregar datos de prueba
    ha_system.add_data("Legacy", {
        "timestamp": datetime.datetime(2023, 12, 1),
        "values": [0.8, 1.2],
        "impact": 0.9
    })
    ha_system.add_data("Technology", {
        "timestamp": datetime.datetime(2023, 12, 5),
        "values": [0.5, 0.7],
        "cost": 1000
    })
    
    # Organizar datos por ejes
    organized_data = ha_system.organize_data_by_axes()
    print("Organized data:", organized_data)

    # Analizar datos de una dimensión
    legacy_clusters = ha_system.analyze_data("Legacy")
    print("Legacy clusters:", legacy_clusters)

    # Predicción basada en datos
    prediction_legacy = ha_system.predict_outcome("Legacy", "impact")
    print("Legacy impact prediction:", prediction_legacy)

    # Exportar insights
    insights = ha_system.export_insights()
    print("Insights:", insights)
`
## Connections
- [[04-technology-ha-core]]
