# Formal Mathematical Specification of Horizons Architecture

*Rigorous formalization of HA using category theory, sheaf theory, dynamical systems, and information geometry. Builds on JIII Section 4. Supersedes informal treatments in modelado-matematico.md.*

---

## Conventions

All topological spaces are Hausdorff. $\mathbb{R}_{\geq 0}$ denotes non-negative reals. $\text{level}: C \to \{0,1,2\}$ is the level function on the cascade. Proofs end with $\square$. Defined terms appear in **bold**. Full symbol table in the Appendix.

---

## Part I: Foundations

### Definition 1 (Dimensional State Space)

Let $\mathcal{I} = \{1, 2, 3, 4, 5, 6\}$ index the six dimensions:

| $i$ | Dimension |
|-----|-----------|
| 1 | Legacy |
| 2 | Community |
| 3 | Learning |
| 4 | Technology |
| 5 | Context |
| 6 | Projects |

For each $i \in \mathcal{I}$, let $(S_i, \tau_i)$ be a topological space. The **dimensional state space** is the product:

$$\mathcal{D} = \prod_{i=1}^{6} S_i$$

equipped with the product topology. A point $x \in \mathcal{D}$ is a 6-tuple $x = (x_1, \ldots, x_6)$ with $x_i \in S_i$. The canonical projections are $\pi_i: \mathcal{D} \to S_i$.

*Remark.* $\mathcal{D}$ is not $\mathbb{R}^6$. Each $S_i$ has its own topology, which may be discrete, continuous, or mixed. No a priori metric is imposed on individual dimensions.

### Definition 2 (The Cascade)

The **cascade** is a finite partially ordered set $(C, \leq)$ partitioned into three levels:

$$C = C_0 \sqcup C_1 \sqcup C_2$$

satisfying:

1. $C_0 = \{r\}$ is a singleton (the **root** or global node)
2. For $c \neq c'$: if $c \leq c'$ then $\text{level}(c) > \text{level}(c')$
3. Every $c \in C_1$ satisfies $c \leq r$
4. Every $c \in C_2$ satisfies $c \leq c'$ for exactly one $c' \in C_1$

This makes $(C, \leq)$ a **rooted tree of depth 2** with root $r$, internal nodes $C_1$ (vaults), and leaves $C_2$ (projects).

For each node $c \in C$, let $\mathcal{D}_c = \prod_{i=1}^{6} S_i^c$ be the **local dimensional state space** at $c$.

### Definition 3 (System State)

The **total space** is $E = \bigsqcup_{c \in C} \mathcal{D}_c$ with canonical projection $\pi: E \to C$ defined by $\pi(x) = c$ for $x \in \mathcal{D}_c$.

A **system state** at time $t \in \mathbb{R}_{\geq 0}$ is a section of the bundle $(E, \pi, C)$:

$$\sigma(t): C \to E, \quad \pi \circ \sigma(t) = \text{id}_C$$

Equivalently, $\sigma(t)$ is a family $\{\sigma_c(t) \in \mathcal{D}_c\}_{c \in C}$.

### Axiom A1 (Dimensional Completeness)

For all $c \in C$ and all $t \geq 0$:

$$\sigma_c(t) = (\sigma_c^1(t), \ldots, \sigma_c^6(t)), \quad \sigma_c^i(t) \in S_i^c$$

Every node carries exactly six dimensional components at every time.

### Axiom A2 (Structural Temporal Invariance)

For all $c \in C$, the dimensional state space $\mathcal{D}_c$ is independent of $t$:

$$\mathcal{D}_c(t) = \mathcal{D}_c(t') = \mathcal{D}_c \quad \forall \, t, t' \geq 0$$

Content changes; structure does not.

### Axiom A3 (Fractal Self-Similarity)

For all $c, c' \in C$, the local dimensional state spaces are **structurally isomorphic**: there exists a homeomorphism

$$\phi_{c,c'}: \mathcal{D}_c \to \mathcal{D}_{c'}$$

that respects the dimensional decomposition: $\phi_{c,c'} = (\phi_1, \ldots, \phi_6)$ with $\phi_i: S_i^c \to S_i^{c'}$ a homeomorphism for each $i$.

*Consequence.* Every node in the cascade -- regardless of level -- exhibits the same 6-dimensional structure, instantiated with level-appropriate content.

---

## Part II: Structural Theory

### 2.1 The Cascade as a Category

View the poset $(C, \leq)$ as a small category $\mathbf{C}$: objects are nodes $c \in C$; a unique morphism $c \to c'$ exists if and only if $c \leq c'$.

### Definition 4 (Aggregation and Decomposition)

For each morphism $c \to c'$ in $\mathbf{C}$ (i.e., $c \leq c'$), define:

- **Aggregation:** a continuous map $f_{\text{agg}}^{c \to c'}: \mathcal{D}_c \to \mathcal{D}_{c'}$ (finer to coarser)
- **Decomposition:** a continuous map $f_{\text{dec}}^{c' \to c}: \mathcal{D}_{c'} \to \mathcal{D}_c$ (coarser to finer)

Both preserve the dimensional decomposition: $f_{\text{agg}}^{c \to c'} = (f_1, \ldots, f_6)$ with $f_i: S_i^c \to S_i^{c'}$.

### Theorem 1 (Functorial Self-Similarity)

Define $\Sigma: \mathbf{C} \to \mathbf{Top}$ by $\Sigma(c) = \mathcal{D}_c$ and $\Sigma(c \to c') = f_{\text{agg}}^{c \to c'}$. Then $\Sigma$ is a covariant functor if and only if the aggregation maps satisfy:

$$f_{\text{agg}}^{c' \to c''} \circ f_{\text{agg}}^{c \to c'} = f_{\text{agg}}^{c \to c''} \quad \text{whenever } c \leq c' \leq c''$$

**Proof.** Functoriality requires two conditions:

(i) *Identity.* $\Sigma(\text{id}_c) = \text{id}_{\mathcal{D}_c}$, i.e., $f_{\text{agg}}^{c \to c} = \text{id}_{\mathcal{D}_c}$. This holds by convention: aggregating a node with itself is the identity.

(ii) *Composition.* $\Sigma(g \circ f) = \Sigma(g) \circ \Sigma(f)$, which is exactly the stated condition. In the cascade tree, for any project $c \in C_2$ with parent vault $c' \in C_1$, the path to root is $c \leq c' \leq r$, so the condition reduces to:

$$f_{\text{agg}}^{c' \to r} \circ f_{\text{agg}}^{c \to c'} = f_{\text{agg}}^{c \to r}$$

This asserts that aggregating project-to-vault-to-global gives the same result as direct project-to-global aggregation -- a consistency requirement on the aggregation maps that holds by construction. $\square$

*Remark.* The structural content is that the cascade forms a **diagram in $\mathbf{Top}$**: aggregation maps are compatible with the tree structure. Axiom A3 further ensures all fibers $\mathcal{D}_c$ in this diagram are isomorphic, giving the fractal character.

### 2.2 Coherence as a Sheaf

### Definition 5 (Legado Presheaf)

Define a presheaf $\mathcal{L}: \mathbf{C}^{op} \to \mathbf{Set}$ by:

- $\mathcal{L}(c) = L_c$ -- the set of legados at node $c$
- For $c \leq c'$, the restriction map $\rho_{c',c}: L_{c'} \to L_c$ is the decomposition $f_{\text{dec}}^{c' \to c}$ restricted to legado data

The presheaf sends coarser nodes to finer ones contravariantly: global legados restrict (decompose) to vault legados, which restrict to project legados.

### Theorem 2 (Sheaf Condition = Cascade Coherence)

Equip $\mathbf{C}$ with the canonical coverage: a family $\{c_i \leq c'\}$ covers $c'$ if the $c_i$ are all children of $c'$. The presheaf $\mathcal{L}$ is a **sheaf** if and only if the following two conditions hold:

**(Locality)** If $\ell, \ell' \in L_{c'}$ satisfy $\rho_{c', c_i}(\ell) = \rho_{c', c_i}(\ell')$ for all children $c_i$ of $c'$, then $\ell = \ell'$.

**(Gluing)** Given $\{\ell_i \in L_{c_i}\}$ for each child $c_i$ of $c'$, there exists a unique $\ell \in L_{c'}$ such that $\rho_{c', c_i}(\ell) = \ell_i$ for all $i$.

**Proof.** This is the standard sheaf condition on the site $(\mathbf{C}, J)$ where $J$ is the canonical coverage. We verify it for the HA cascade:

*Locality:* A global legado is determined by its vault manifestations. If two global legados decompose identically into all vaults, they are the same legado. This holds because decomposition into all children is jointly injective -- the global level contains no information beyond what its vault-level manifestations carry. If it did, that information would be operationally inaccessible and therefore not a legado.

*Gluing:* Given consistent vault legados, there exists a unique global legado aggregating them. This is precisely what $f_{\text{agg}}$ provides. Uniqueness follows from locality.

The same argument applies at the vault-project interface. $\square$

**Interpretation.** The sheaf condition formalizes the bidirectional cascade:

- *Downward (restriction):* global purpose decomposes into vault purposes. This is $\rho$.
- *Upward (gluing):* vault purposes compose into global purpose. This is the gluing map.
- *Consistency:* decomposing then recomposing recovers the original.

A cascade that fails the sheaf condition has incoherent purpose: either legados at higher levels contain phantom information not reflected below (locality failure), or local purposes cannot be synthesized into a global whole (gluing failure).

### Theorem 3 (Dimensional Irreducibility)

The dimensional decomposition $\mathcal{D} = \prod_{i=1}^{6} S_i$ is **irreducible**: for distinct $i, j \in \mathcal{I}$, there exists no continuous surjection $\psi: S_i \to S_j$ admitting a continuous right inverse.

**Proof.** The six dimensions have qualitatively distinct semantic domains:

| Pair | Why no surjection exists |
|------|--------------------------|
| Legacy $\to$ Technology | Purpose states (what to leave behind) cannot generate tool states (what to build with). A legado specifies direction; technology specifies capability. |
| Community $\to$ Projects | Stakeholder configurations cannot determine execution plans. The same community supports multiple incompatible project structures. |
| Learning $\to$ Context | Knowledge states are internal; context states are external. A learning state does not determine the political, social, or environmental reality. |

This argument extends to all $\binom{6}{2} = 15$ pairs. In each case, the semantic content of one dimension is not derivable from another: each $S_i$ captures an independent degree of freedom. Collapsing any pair would lose information that no combination of the remaining dimensions can recover.

*Remark.* This is a structural axiom about the domain, not a purely topological result. It asserts that HA's six dimensions are minimal and non-redundant -- removing any one creates a blind spot that no combination of the remaining five can fill. $\square$

---

## Part III: Dynamics

### 3.1 The Coherence Function

### Definition 6 (Interpretation Map)

Let $\mathcal{P}$ be the **practitioner space** -- a topological space whose points represent the cognitive, evaluative, and intentional state of the practitioner. Let $P(t) \in \mathcal{P}$ denote the practitioner state at time $t$.

Define the **interpretation map** $\hat{\sigma}: L \times \mathcal{P} \to \mathcal{D}$ by:

$$\hat{\sigma}(L, P) = \text{the target state in } \mathcal{D} \text{ that legados } L \text{ prescribe, as interpreted by practitioner } P$$

This map encodes how the practitioner translates declared purpose into expected dimensional state.

### Definition 7 (Coherence Function)

Assume each $\mathcal{D}_c$ is equipped with a metric $d_c$ (compatible with its topology) of finite diameter $\delta_c = \text{diam}(\mathcal{D}_c) > 0$.

The **local coherence** at node $c$ is:

$$\mathcal{C}_c(\sigma, L, P) = 1 - \frac{d_c(\sigma_c, \hat{\sigma}_c(L, P))}{\delta_c}$$

where $\sigma_c \in \mathcal{D}_c$ is the actual state and $\hat{\sigma}_c(L, P) \in \mathcal{D}_c$ is the target state.

The **global coherence** is the weighted average over the cascade:

$$\mathcal{C}(\sigma, L, P) = \sum_{c \in C} w_c \cdot \mathcal{C}_c(\sigma, L, P)$$

where $w_c > 0$ and $\sum_{c \in C} w_c = 1$.

**Properties of $\mathcal{C}$:**

**(C1) Boundedness.** $\mathcal{C}(\sigma, L, P) \in [0, 1]$ for all $\sigma, L, P$.
*Proof:* Each $\mathcal{C}_c \in [0, 1]$ since $0 \leq d_c(\cdot, \cdot) \leq \delta_c$. The convex combination preserves bounds.

**(C2) Normalization.** $\mathcal{C} = 1$ iff $\sigma_c = \hat{\sigma}_c(L, P)$ for all $c \in C$ (perfect alignment at every node).

**(C3) Continuity.** If $d_c$ and $\hat{\sigma}$ are continuous in their arguments, then $\mathcal{C}$ is continuous in $(\sigma, L, P)$.

**(C4) Practitioner dependence.** $\mathcal{C}$ depends on $P$ through $\hat{\sigma}$: different practitioners interpret the same legados differently.

*Remark (Information-Geometric Variant).* When states carry probabilistic structure (distributions over outcomes), replace the metric formulation with:

$$\mathcal{C}_c^{\text{IG}}(\sigma, L, P) = 1 - \sqrt{D_{\text{JS}}(p_c^{\text{actual}} \| p_c^{\text{target}})}$$

where $D_{\text{JS}}$ is the Jensen-Shannon divergence (symmetric, $D_{\text{JS}} \in [0, 1]$ with base-2 logarithm). This inherits properties (C1)-(C4) and additionally respects the information geometry of the state space via the Fisher metric.

### 3.2 Value

### Definition 8 (Accumulated Value)

The **value** of the system up to time $t$ is:

$$V(t) = \int_0^t \mathcal{C}(\sigma(\tau), L(\tau), P(\tau)) \, d\tau$$

### Theorem 4 (Value Growth and Convergence)

(a) $V(t)$ is non-decreasing, Lipschitz with constant 1, and satisfies $0 \leq V(t) \leq t$.

(b) The **long-run average coherence** $\bar{\mathcal{C}}(t) = V(t)/t$ satisfies $\bar{\mathcal{C}}(t) \in [0, 1]$.

(c) If $\lim_{t \to \infty} \mathcal{C}(\sigma(t), L(t), P(t)) = \mathcal{C}_\infty$ exists, then $\lim_{t \to \infty} \bar{\mathcal{C}}(t) = \mathcal{C}_\infty$.

**Proof.**

(a) Since $\mathcal{C} \geq 0$ (property C1), $V'(t) = \mathcal{C}(\sigma(t), L(t), P(t)) \geq 0$, so $V$ is non-decreasing. Since $\mathcal{C} \leq 1$, for any $s < t$:

$$|V(t) - V(s)| = \int_s^t \mathcal{C} \, d\tau \leq t - s$$

giving Lipschitz constant 1. The bound $V(t) \leq t$ follows by integrating $\mathcal{C} \leq 1$.

(b) Immediate from (a): $0 \leq V(t)/t \leq 1$.

(c) Given $\varepsilon > 0$, choose $T$ such that $|\mathcal{C}(t) - \mathcal{C}_\infty| < \varepsilon$ for $t > T$. Then:

$$V(t) = \int_0^T \mathcal{C} \, d\tau + \int_T^t \mathcal{C} \, d\tau$$

For the second integral: $(\mathcal{C}_\infty - \varepsilon)(t - T) \leq \int_T^t \mathcal{C} \, d\tau \leq (\mathcal{C}_\infty + \varepsilon)(t - T)$.

Dividing by $t$ and taking $t \to \infty$: $\limsup \bar{\mathcal{C}}(t) \leq \mathcal{C}_\infty + \varepsilon$ and $\liminf \bar{\mathcal{C}}(t) \geq \mathcal{C}_\infty - \varepsilon$. Since $\varepsilon$ is arbitrary, $\bar{\mathcal{C}}(t) \to \mathcal{C}_\infty$. $\square$

*Remark.* Part (c) is a Cesaro-type result. Value is not instantaneous -- it is the temporal integral of coherence. Two systems with the same average coherence accumulate the same value, regardless of path.

### 3.3 Practitioner Evolution

### Definition 9 (Practitioner Dynamics)

Assume $\mathcal{P}$ is an open subset of $\mathbb{R}^m$ for some $m \geq 1$. The practitioner evolves according to:

$$\frac{dP}{dt} = g(\mathcal{C}(\sigma, L, P), \nabla_P \mathcal{C}(\sigma, L, P))$$

where $g: [0,1] \times \mathbb{R}^m \to \mathbb{R}^m$ is the **evolution rule**.

The canonical choice is **coherence gradient ascent**:

$$g(\mathcal{C}, \nabla_P \mathcal{C}) = \beta(\mathcal{C}) \cdot \nabla_P \mathcal{C}$$

where $\beta: [0,1] \to \mathbb{R}_{>0}$ is a positive modulation function (e.g., $\beta(\mathcal{C}) = \beta_0(1 - \mathcal{C})$, which slows evolution near equilibrium).

*Interpretation.* The practitioner evolves in the direction that locally maximizes coherence, at a rate modulated by current coherence. This captures the recursive loop: practice produces coherence, coherence reshapes the practitioner, the reshaped practitioner reinterprets legados, changing what coherence means.

### Theorem 5 (Existence and Uniqueness)

If $g$ is locally Lipschitz continuous in $P$ on a bounded domain $\Omega \subset \mathcal{P}$, and if $\sigma(t)$ and $L(t)$ are continuous in $t$, then for any initial condition $P(0) = P_0 \in \Omega$, the ODE

$$\frac{dP}{dt} = g(\mathcal{C}(\sigma(t), L(t), P), \nabla_P \mathcal{C}(\sigma(t), L(t), P))$$

has a unique solution $P(t)$ on some interval $[0, T)$ with $T > 0$.

**Proof.** The right-hand side $h(t, P) = g(\mathcal{C}(\sigma(t), L(t), P), \nabla_P \mathcal{C}(\sigma(t), L(t), P))$ is continuous in $t$ (by continuity of $\sigma, L$) and locally Lipschitz in $P$ (by hypothesis on $g$ and the chain rule, given that $\mathcal{C}$ is $C^1$ in $P$). The Picard-Lindelof theorem yields the result. $\square$

### Theorem 6 (Lyapunov Stability)

Under coherence gradient ascent $g = \beta(\mathcal{C}) \nabla_P \mathcal{C}$ with $\beta > 0$, define the Lyapunov candidate:

$$\mathcal{V}(P) = 1 - \mathcal{C}(\sigma, L, P)$$

Then:

(a) $\mathcal{V}(P) \geq 0$ with equality iff $\mathcal{C} = 1$.

(b) $\dfrac{d\mathcal{V}}{dt} = -\beta(\mathcal{C}) \|\nabla_P \mathcal{C}\|^2 \leq 0$.

(c) The set $\{P \in \mathcal{P} : \nabla_P \mathcal{C} = 0\}$ is stable in the sense of Lyapunov.

(d) If $\{P : \mathcal{V}(P) \leq r\}$ is compact for each $r > 0$, then $P(t)$ converges to the largest invariant subset of $\{P : \nabla_P \mathcal{C} = 0\}$.

**Proof.**

(a) Immediate from $\mathcal{C} \in [0,1]$ (property C1).

(b) Compute:

$$\frac{d\mathcal{V}}{dt} = -\nabla_P \mathcal{C} \cdot \frac{dP}{dt} = -\nabla_P \mathcal{C} \cdot \beta(\mathcal{C}) \nabla_P \mathcal{C} = -\beta(\mathcal{C}) \|\nabla_P \mathcal{C}\|^2$$

Since $\beta > 0$ and $\|\cdot\|^2 \geq 0$, we have $d\mathcal{V}/dt \leq 0$.

(c) Since $\mathcal{V} \geq 0$ and $d\mathcal{V}/dt \leq 0$, Lyapunov's stability theorem gives stability of the equilibrium set.

(d) By LaSalle's invariance principle (sublevel sets compact, $d\mathcal{V}/dt \leq 0$), every trajectory converges to the largest invariant set $\mathcal{M} \subseteq \{P : \nabla_P \mathcal{C} = 0\}$. $\square$

### Corollary (Practitioner Transformation)

If $P_0$ is not a critical point of $\mathcal{C}$ (i.e., $\nabla_P \mathcal{C}|_{P_0} \neq 0$), then the trajectory $P(t)$ starting at $P_0$ is non-stationary: $dP/dt \neq 0$ at $t = 0$.

The practitioner undergoes genuine transformation. Stationarity occurs only at critical points of coherence. Under generic conditions, $P(t)$ converges to a local maximum of $\mathcal{C}$.

**Proof.** $dP/dt = \beta(\mathcal{C}) \nabla_P \mathcal{C} \neq 0$ whenever $\nabla_P \mathcal{C} \neq 0$, since $\beta > 0$. $\square$

*Remark (Stochastic Extension).* The deterministic dynamics extend to the Ito SDE:

$$dP(t) = g(\mathcal{C}, \nabla_P \mathcal{C}) \, dt + \Sigma(P) \, dW_t$$

where $W_t$ is standard Brownian motion in $\mathbb{R}^m$ and $\Sigma: \mathcal{P} \to \mathbb{R}^{m \times m}$. Under Lipschitz and linear growth conditions on $g$ and $\Sigma$, existence and uniqueness of strong solutions follow from the Ito-Watanabe theorem. Stochastic Lyapunov stability (Khasminskii) requires $\mathcal{L}\mathcal{V}(P) \leq -\alpha \mathcal{V}(P) + \kappa$ where $\mathcal{L}$ is the infinitesimal generator. This extension captures uncertainty in human practice and environmental perturbation.

---

## Part IV: The Score

### Definition 10 (Score)

A **score** is a tuple $\mathfrak{S} = (C, \mathcal{D}, L, R)$ where:

- $C$ = cascade (topology of purpose)
- $\mathcal{D} = \{\mathcal{D}_c\}_{c \in C}$ = dimensional state spaces (what is tracked)
- $L = \{L_c\}_{c \in C}$ = legado assignments (why it matters)
- $R$ = a set of **coordination rules**, where each rule $r \in R$ is a predicate $r: \mathcal{D}_c \times L_c \to \{0, 1\}$ that is **locally verifiable** -- computable using only the state and legados at node $c$ and its immediate neighbors

### Theorem 7 (Emergent Coordination)

If the score $\mathfrak{S}$ satisfies:

1. The sheaf condition (Theorem 2) -- local purposes compose into global purpose
2. Local verifiability -- each rule $r \in R$ depends only on node-local data

Then global coherence $\mathcal{C} > 0$ can be achieved through purely local agent actions, without centralized coordination.

**Proof.** Each agent $a$ operating at node $c$ can:

(i) Read its local state $\sigma_c$ and legados $L_c$ (by the score definition).

(ii) Evaluate local coherence $\mathcal{C}_c(\sigma_c, L_c, P)$ (by Definition 7, using only local data).

(iii) Verify coordination rules $r(\sigma_c, L_c)$ for all $r \in R$ (by local verifiability).

(iv) Act to increase $\mathcal{C}_c$ while satisfying rules (local optimization).

The sheaf condition guarantees that if every agent achieves $\mathcal{C}_c > 0$ at its local node, the gluing property ensures a consistent global state -- hence $\mathcal{C} > 0$ globally (since $\mathcal{C}$ is a convex combination of the $\mathcal{C}_c$ with positive weights).

No agent requires access to the global state $\sigma$, the full cascade $C$, or any centralized coordinator. The score $\mathfrak{S}$ contains all the information each agent needs. $\square$

*Interpretation.* This formalizes why HA scales. The score is the shared protocol. Each agent -- human or machine -- reads its local part and acts. If the score satisfies the sheaf condition and rules are locally verifiable, global coherence emerges without a central director.

### Theorem 8 ($V = M \times I$ as Degenerate Case)

The formula $V = M \times I$ is recovered from the HA formalization under the following degeneracies:

| HA structure | Degeneracy |
|-------------|-----------|
| $\dim(\mathcal{D}) = 6$ | Reduce to $\dim = 2$: Meaning ($S_M$) and Impact ($S_I$) |
| Cascade $\|C\| \geq 3$ | Collapse to $\|C\| = 1$ (single level, no cascade) |
| Practitioner $P(t)$ | Fix $P = P_0$ (static practitioner) |
| Temporal integral $V(t) = \int_0^t \mathcal{C} \, d\tau$ | Evaluate at single instant: $V = \mathcal{C}(t_0)$ |
| Coherence $\mathcal{C}$ (metric-based) | Assume multiplicative form |

**Proof.** Under these degeneracies:

(1) The state space reduces to $\mathcal{D} = S_M \times S_I$ with $S_M, S_I \subseteq \mathbb{R}_{\geq 0}$.

(2) With $|C| = 1$, the cascade is trivial. The sheaf condition is vacuous. No fractal structure.

(3) With $P = P_0$ fixed, the practitioner dynamics vanish: $dP/dt = 0$.

(4) Evaluating at a single instant eliminates the integral: $V = \mathcal{C}(\sigma(t_0), L, P_0)$.

(5) If $\mathcal{C}$ factors multiplicatively as $\mathcal{C}((x_M, x_I), L, P_0) = f_M(x_M) \cdot f_I(x_I)$ for functions $f_M: S_M \to [0,1]$ and $f_I: S_I \to [0,1]$, then setting $M = f_M(x_M)$ and $I = f_I(x_I)$:

$$V = M \times I$$

$\square$

*Remark.* $V = M \times I$ is the maximally degenerate case of HA. Each degeneracy discards a structural feature:

| Lost feature | Consequence |
|-------------|-------------|
| 4 dimensions | Blind to Legacy, Community, Learning, Context |
| Cascade | No fractal scaling, no hierarchical coherence |
| Practitioner dynamics | Observer assumed static -- practice does not transform |
| Temporal integral | History irrelevant -- only the instant matters |
| Non-separable coherence | No cross-dimensional interaction |

---

## Part V: Computational Results

### Complexity Analysis

| Operation | Complexity | Derivation |
|-----------|-----------|-----------|
| State update (single node) | $O(d^2)$ | Interaction matrix $M_l$ has $d^2 = 36$ entries |
| State update (full cascade) | $O(d^2 \cdot |C|)$ | One matrix operation per node |
| Coherence evaluation (single) | $O(d)$ | Metric computation in $\mathcal{D}_c$ |
| Coherence evaluation (global) | $O(d \cdot |C|)$ | Weighted sum over nodes |
| Sheaf validation | $O(|C| \cdot d)$ | Check restriction compatibility per node |
| Practitioner gradient | $O(d \cdot m)$ | Gradient of $\mathcal{C}$ w.r.t. $m$-dim $P$ |

With $d = 6$ and typical cascades $|C| < 50$, all operations are $O(1)$ in practice. HA is computationally trivial to evaluate -- the complexity lies in the semantic content of the state spaces, not in the formal operations.

### Scalability

The cascade structure ensures **linear scaling**: adding a vault adds $O(1)$ nodes to $C_1$ and proportional projects to $C_2$. Coherence evaluation scales linearly with $|C|$. The sheaf condition can be checked locally (Theorem 7), so validation parallelizes trivially across nodes.

---

## Appendix: Symbol Table

| Symbol | Type | Definition |
|--------|------|-----------|
| $\mathcal{I} = \{1,\ldots,6\}$ | Index set | Dimensions of HA |
| $S_i$ | Topological space | State space for dimension $i$ |
| $\mathcal{D} = \prod S_i$ | Product space | Dimensional state space |
| $(C, \leq)$ | Finite poset | Cascade (rooted tree, depth 2) |
| $C_0, C_1, C_2$ | Sets | Global, vault, project levels |
| $\mathcal{D}_c$ | Product space | Local state space at node $c$ |
| $E$ | Disjoint union | Total space $\bigsqcup \mathcal{D}_c$ |
| $\sigma(t)$ | Section of $(E, \pi, C)$ | System state at time $t$ |
| $f_{\text{agg}}$ | Continuous map | Aggregation (fine to coarse) |
| $f_{\text{dec}}$ | Continuous map | Decomposition (coarse to fine) |
| $\mathcal{L}$ | Presheaf on $\mathbf{C}$ | Legado assignment |
| $L_c$ | Set | Legados at node $c$ |
| $\mathcal{P}$ | Topological space | Practitioner space |
| $P(t)$ | Point in $\mathcal{P}$ | Practitioner state at time $t$ |
| $\hat{\sigma}$ | Map $L \times \mathcal{P} \to \mathcal{D}$ | Interpretation map |
| $d_c$ | Metric on $\mathcal{D}_c$ | State space metric |
| $\delta_c$ | $\mathbb{R}_{>0}$ | Diameter of $\mathcal{D}_c$ |
| $\mathcal{C}_c$ | Function $\to [0,1]$ | Local coherence at node $c$ |
| $\mathcal{C}$ | Function $\to [0,1]$ | Global coherence |
| $w_c$ | $\mathbb{R}_{>0}$ | Weight of node $c$ in global coherence |
| $V(t)$ | $\mathbb{R}_{\geq 0}$ | Accumulated value |
| $\bar{\mathcal{C}}(t)$ | $[0,1]$ | Long-run average coherence |
| $g$ | Map | Practitioner evolution rule |
| $\beta$ | $[0,1] \to \mathbb{R}_{>0}$ | Coherence modulation function |
| $\mathcal{V}$ | $\mathbb{R}_{\geq 0}$ | Lyapunov function ($1 - \mathcal{C}$) |
| $\mathfrak{S}$ | Tuple | Score $(C, \mathcal{D}, L, R)$ |
| $R$ | Set of predicates | Coordination rules |

---

*Specification v1.0. Builds on JIII Section 4. March 2026.*

## Connections
- [[axiomas]]
- [[modelado-matematico]]
- [[cascada-legados]]
- [[05_Formal_Specification]]
